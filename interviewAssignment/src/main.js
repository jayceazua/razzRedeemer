import Vue from 'vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

import App from './App.vue';
import CreatePrize from './components/CreatePrize.vue';
import DisplayPrize from './components/DisplayPrize.vue';
import EditPrize from './components/EditPrize.vue';
import DetailPrize from './components/DetailPrize.vue';
// import Header from './components/statics/Header.vue';
// import Footer from './components/statics/Footer.vue';
// import ModalRedeem from './components/modal/ModalRedeem.vue';



const routes = [
  {
        name: 'CreatePrize',
        path: '/create/prize',
        component: CreatePrize
    },
    {
          name: 'DisplayPrize',
          path: '/',
          component: DisplayPrize
      },
      {
            name: 'EditPrize',
            path: '/edit/:id',
            component: EditPrize
        },
        {
          name: 'DetailPrize',
          path: '/detail/:id',
          component: DetailPrize
        }
];

const router = new VueRouter({ mode: 'history', routes: routes });
new Vue(Vue.util.extend({ router }, App)).$mount('#app');
