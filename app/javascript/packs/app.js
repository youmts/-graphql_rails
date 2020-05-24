import Vue from 'vue/dist/vue.esm'
import VueRouter from 'vue-router'
import VueApollo from 'vue-apollo'
import ApolloClient from 'apollo-client'
import { InMemoryCache, HttpLink } from 'apollo-boost'

import Index from './components/index'

const apolloClient = new ApolloClient({
  link: new HttpLink({ uri: "http://localhost:3000/graphql" }),
  cache: new InMemoryCache()
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})

Vue.use(VueApollo)
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Index },
  ],
})

const app = new Vue({
  router,
  apolloProvider,
  el: '#app',
})
