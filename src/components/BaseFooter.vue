<template>
  <footer class="footer">
    <img class="footer-img" src="../assets/footer.svg" alt="St. Petersburg" />

    <section class="contacts">
      <h4 class="contacts__header">НАШИ КОНТАКТЫ</h4>

      <ul class="contacts__items">
        <li class="contacts__item">
          <span>191119, Санкт-Петербург, ул. Достоевского, 40-44</span>
        </li>
        <li class="contacts__item">
          <a href="tel:+78123250305">(812) 325-03-05</a>
        </li>
        <li class="contacts__item">
          Email:
          <a href="mailto:info@ecosafety.ru">info@ecosafety.ru</a>
        </li>
      </ul>
    </section>

    <section class="poweredby">
      <span class="poweredby__text"
        >© Группа компаний Эко-безопасность 2010-2021</span
      >
    </section>
  </footer>
</template>

<script>
export default {};
</script>

<style>
.footer {
  margin-top: 3em;
}

.footer-img {
  width: 100%;
  height: auto;
  display: block;
}

.contacts {
  background: var(--dark-blue);
  color: var(--white);
  display: flex;
  flex-direction: column;
  padding: 3.125em 0;
}

@media (max-width: 1200px) {
  .contacts {
    padding: 3.125em 3em;
  }
}

.contacts__header {
  width: min(100%, 58.5em);
  margin: 0 auto 1em;
  font-size: 1.25rem;
  font-weight: normal;
}

.contacts__items {
  width: min(100%, 73.125em);
  margin: 0 auto;

  list-style: none;
  padding: 0;
}

.contacts__items li + li {
  margin-top: 0.714em;
}

.contacts__items li {
  font-size: 0.875rem;
}

.contacts__items a {
  color: var(--green);
}

.poweredby {
  display: flex;
  padding: 1.42em 0;
  font-size: 0.875rem;
  color: var(--white);
  background: var(--black-blue);
}
@media (max-width: 1200px) {
  .poweredby {
    padding: 1.42em 3em;
  }
}
.poweredby__text {
  width: min(100%, 83.57em);
  margin: 0 auto;
}
</style>
