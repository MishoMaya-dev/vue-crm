import './registerServiceWorker';
import Vue from 'vue';
import router from './router';
import store from './store';
import Vuelidate from 'vuelidate/src';
import Paginate from 'vuejs-paginate';
import VueMeta from 'vue-meta';
import App from './App.vue';
import Loader from '@/components/app/Loader';
import dateFilter from '@/filters/date.filter';
import currencyFilter from '@/filters/currency.filter';
import localizeFilter from '@/filters/localize.filter';
import messagePlugin from '@/utils/message.plugin';
import titlePlugin from '@/utils/title.plugin';
import tooltipDirective from '@/directives/tooltip.directive'
import 'materialize-css/dist/js/materialize.min';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

Vue.config.productionTip = false;

Vue.use(messagePlugin);
Vue.use(titlePlugin);
Vue.use(Vuelidate);
Vue.use(VueMeta);
Vue.filter('date', dateFilter);
Vue.filter('currency', currencyFilter);
Vue.filter('localize', localizeFilter);
Vue.directive('tooltip', tooltipDirective);
Vue.component('Loader', Loader);
Vue.component('Paginate', Paginate);

firebase.initializeApp({
  apiKey: "AIzaSyDAgfDSMcBf0nRWqndRAX44iAXdkweBus0",
  authDomain: "vue-crm-dd3c1.firebaseapp.com",
  databaseURL: "https://vue-crm-dd3c1.firebaseio.com",
  projectId: "vue-crm-dd3c1",
  storageBucket: "vue-crm-dd3c1.appspot.com",
  messagingSenderId: "416471519022",
  appId: "1:416471519022:web:6190db00e2476c95c4f4bf",
  measurementId: "G-2QEWNDNBVL"
});

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount('#app');
  }
});


