<template>
  <form class="card auth-card" @submit.prevent="submitHandler">
    <div class="card-content">
      <span class="card-title">Домашняя бухгалтерия</span>
      <div class="input-field">
        <input
          id="email"
          type="text"
          v-model.trim="email"
          :class="{invalid: $v.email.$invalid && $v.email.$dirty}"
        >
        <label for="email">Email</label>
        <small
          v-if="!$v.email.required && $v.email.$dirty"
          class="helper-text invalid"
        >
          Обязательное поле
        </small>
        <small
          v-else-if="!$v.email.email && $v.email.$dirty"
          class="helper-text invalid"
        >
          Email неверный
        </small>

      </div>
      <div class="input-field">
        <input
          id="password"
          type="password"
          v-model.trim="password"
          :class="{invalid: $v.password.$invalid && $v.password.$dirty}"
        >
        <label for="password">Пароль</label>
        <small
          v-if="!$v.password.required && $v.password.$dirty"
          class="helper-text invalid"
        >
          Обязательное поле
        </small>
        <small
          v-else-if="!$v.password.minLength && $v.password.$dirty"
          class="helper-text invalid"
        >
          Пароль должен быть более 6 знаков
        </small>
      </div>
      <div class="input-field">
        <input
          id="name"
          type="text"
          v-model.trim="name"
          :class="{invalid: $v.name.$invalid && $v.name.$dirty}"
        >
        <label for="name">Имя</label>
        <small
          class="helper-text invalid"
          v-if="$v.name.$invalid && $v.name.$dirty"
        >
          Введите имя
        </small>
      </div>
      <p>
        <label>
          <input type="checkbox" v-model="agree"/>
          <span>С правилами согласен</span>
        </label>
      </p>
    </div>
    <div class="card-action">
      <div>
        <button
          class="btn waves-effect waves-light auth-submit"
          type="submit"
        >
          Зарегистрироваться
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Уже есть аккаунт?
        <router-link to="/login">Войти!</router-link>
      </p>
    </div>
  </form>
</template>


<script>
  import { email, required, minLength } from 'vuelidate/lib/validators'

  export default {
    name: 'login',
    metaInfo() {
      return {
        title: this.$title('RegisterTitle')
      }
    },
    data: () => ({
      email: '',
      password: '',
      name: '',
      agree: false,
    }),
    validations: {
      email: { required, email },
      password: { required, minLength: minLength(6) },
      name: {required},
      agree: {checked: v => v},
    },
    methods: {
      async submitHandler() {
        if (this.$v.$invalid) {
          this.$v.$touch();
          return
        }
        const formData = {
          email: this.email,
          password: this.password,
          name: this.name,
        };
        try {
          await this.$store.dispatch('register', formData);
          this.$router.push('/')
        } catch (e) {}
      }
    }
  }
</script>
