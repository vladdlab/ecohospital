<template>
  <div class="welcome"></div>
  <LoginForm />

  <section class="pros">
    <h4 class="pros__header">ПОЧЕМУ "ЭКО-ГОСПИТАЛЬ"?</h4>
    <div class="pros__items">
      <p>
        Возможности нашего сервиса соответствуют значению латинского слова
        "Hospitium" - ГОСТЕПРИИМСТВО.
      </p>
      <p>
        Мы создаем максимально комфортные условия обслуживания для наших
        клиентов, упрощая и ускоряя процессы взаимодействия. Вам больше не нужно
        стоять в очередях и тратить свое время на поездки за результатами
        обследований!
      </p>
      <p>
        Исключая бумажный документооборот и лишние передвижения по городу, мы
        вместе с нашими клиентами экономим бумагу, углеводород, сохраняем лес,
        снижаем загрязнённость воздуха.
      </p>
      <p>
        Мы предоставляем возможность пользоваться личным кабинетом,
        консультироваться со специалистами по имеющейся в личном кабинете
        информации, получать подписку на медицинскую литературу.
      </p>
    </div>
  </section>

  <section class="features">
    <div class="feature">
      <img
        class="feature__logo"
        src="../assets/account.svg"
        alt="Иллюстрация аккаунта"
      />
      <h5>Личный кабинет</h5>
      <p>
        Позволяет хранить, пересылать или скачивать в электронном виде анализы,
        медицинские заключения, справки и другие медицинские данные
      </p>
    </div>
    <div class="feature">
      <img
        class="feature__logo"
        src="../assets/worldwide.svg"
        alt="Иллюстрация планеты"
      />
      <h5>Доступ в любой точке мира</h5>
      <p>
        С помощью приложения «MedSafe.connect» Вы можете пользоваться личным
        кабинетом всегда и везде. <br />«MedSafe.connect» осуществляет связь
        владельца мобильного устройства со своим личным кабинетом. Все данные
        хранятся на защищенном сервере медицинской организации и доступны только
        их владельцу.
      </p>
    </div>
    <div class="feature">
      <img
        class="feature__logo"
        src="../assets/ecology.svg"
        alt="Иллюстрация экологии"
      />
      <h5>Забота об экологии</h5>
      <p>
        Благодаря нашим программным продуктам каждый год экономится столько
        бумаги, сколько можно получить от переработки древесины с лесного
        участка, равного площади Летнего сада Санкт-Петербурга.
      </p>
    </div>
  </section>
</template>

<script>
import LoginForm from "@/components/Welcome/LoginForm";
export default {
  name: "Welcome",
  components: {
    LoginForm,
  },
};
</script>

<style scoped>
.pros {
  padding: 5em 0;
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pros__header {
  font-size: 3.25rem;
  font-weight: normal;
  color: var(--gray-blue);
  margin: 0.385em 0 0.577em;
  text-align: center;
}

.pros__items {
  color: var(--gray);
  font-size: 1.25rem;
  padding: 0.5em;
  border-top: 1px solid var(--light-gray);
  border-bottom: 1px solid var(--light-gray);
  max-width: 57em;
  text-align: center;
}

.pros__items > p {
  margin: 0.5em;
}

.features {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;

  margin-top: 3.75em;
}
.feature {
  max-width: 21.875em;
  text-align: center;
  color: var(--gray);
}
.feature h5 {
  font-size: 1.125rem;
  margin: 0.55em 0;
}
.feature p {
  font-size: 0.875rem;
  margin: 0;
  line-height: 1.5;
}
</style>
