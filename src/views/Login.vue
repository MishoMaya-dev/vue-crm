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
    </div>
    <div class="card-action">
      <div>
        <button
          class="btn waves-effect waves-light auth-submit"
          type="submit"
        >
          Войти
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Нет аккаунта?
        <router-link to="/register">Зарегистрироваться</router-link>
      </p>
    </div>
  </form>
</template>


<script>
  import { email, required, minLength } from 'vuelidate/lib/validators'
  import messages from '@/utils/messages'

  export default {
    name: 'login',
    metaInfo() {
      return {
        title: this.$title('LoginTitle')
      }
    },
    data: () => ({
      email: '',
      password: '',
    }),
    validations: {
      email: { required, email },
      password: { required, minLength: minLength(6) },
    },
    mounted() {
      if (messages[this.$route.query.message]) {
        this.$message(messages[this.$route.query.message])
      }
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
        };
        try {
          await this.$store.dispatch('login', formData);
          this.$router.push('/');
        } catch (e) {}
      }
    }
  }
</script>
