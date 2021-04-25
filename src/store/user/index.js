import API from "../../api";
import platform from "platform";
import md5 from "md5";

const state = {
  IMEI: md5(platform.description),
  documents: JSON.parse(localStorage.getItem("documents")),
  user: JSON.parse(localStorage.getItem("user")),
};

const getters = {
  IMEI: (state) => state.IMEI,
  user: (state) => state.user,
  documents: (state) => state.documents,
};

const mutations = {
  SET_DOCUMENTS(state, payload) {
    state.documents = payload;
  },
  SET_USER(state, payload) {
    state.user = payload;
  },
  LOGOUT(state) {
    state.user = null;
    state.documents = [];
    localStorage.removeItem("user");
    localStorage.removeItem("documents");
  },
};

const actions = {
  loginUser({ getters, commit }, credentials) {
    return new Promise((resolve, reject) => {
      API.get("/client_login", {
        params: {
          json: {
            login: credentials.login,
            password: credentials.password,
            IMEI: getters.IMEI,
          },
        },
      })
        .then((response) => {
          localStorage.setItem("user", JSON.stringify(response.data[0]));
          commit("SET_USER", response.data[0]);
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  getTestData({ getters, commit }, user) {
    return new Promise((resolve, reject) => {
      API.get("/test", {
        params: {
          json: {
            id_people: user.id_people,
            id_login: user.id_login,
            TK: user.TK,
            Name_event: "list_load",
            IMEI: getters.IMEI,
            Name_app: "connect",
          },
        },
      })
        .then((response) => {
          if (
            response.data.errorType === 1 &&
            response.data.errorText === "Incorrect token"
          ) {
            commit("LOGOUT");
            resolve();
          }

          localStorage.setItem("documents", JSON.stringify(response.data.body));
          commit("SET_DOCUMENTS", response.data.body);
          resolve(response.data.body);
        })
        .catch((error) => {
          console.error(error);
          reject(error);
        });
    });
  },
  loadDocument({ getters }, doc) {
    return new Promise((resolve, reject) => {
      API.get("/test", {
        params: {
          json: {
            id_people: getters.user.id_people,
            id_login: getters.user.id_login,
            TK: getters.user.TK,
            Name_event: "get_pic_path",
            IMEI: getters.IMEI,
            Name_app: "connect",
            id_document: doc.id_document,
            doc_type: doc.doc_type,
          },
        },
      })
        .then((response) => {
          window.open(
            "https://host1.medsafe.tech:40443/" + response.data.body[0].hash,
            "_blank"
          );
          resolve(response.data.body);
        })
        .catch((error) => {
          console.error(error);
          reject(error);
        });
    });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
