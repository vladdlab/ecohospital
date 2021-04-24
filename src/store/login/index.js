import API from "../../api";

const state = {};

const getters = {};

const mutations = {};

const actions = {
  async loginUser() {
    try {
      const {
        data: [data],
      } = await API.get("/client_login", {
        params: {
          json: {
            login: "803286",
            password: "NH2Pepn",
            IMEI: "4d82a47a3c6649bca7fca3582d441734",
          },
        },
      });
      if (data.id_login) {
        const response = await API.get("/test", {
          params: {
            json: {
              id_people: data.id_people,
              id_login: data.id_login,
              TK: data.TK,
              Name_event: "list_load",
              IMEI: "4d82a47a3c6649bca7fca3582d441734",
              Name_app: "connect",
            },
          },
        });
        console.log(response);
      }
      return data;
    } catch (error) {
      console.error(error);
      return error;
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
