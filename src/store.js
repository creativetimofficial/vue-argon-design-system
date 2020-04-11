import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      loggingIn: false,
      isLoggedIn: false,
      loggedInUser: {},
  },
  mutations: {
      SET_LOGGED_IN(state, user) {
        state.loggedInUser = user;
        state.isLoggedIn = true;
      },
      SET_LOGGED_OUT(state) {
        state.loggedInUser = {};
        state.isLoggedIn = false;
      },
      SET_LOGGING_IN_STATUS(state, loggingIn) {
        state.loggingIn = loggingIn;
      }
  },
  actions: {
      triggerUserGAPI(context) {
        context.commit('SET_LOGGING_IN_STATUS', true);
        this._vm.$gapi.isSignedIn()
          .then(result => {              
              if(result) {
                  this._vm.$gapi.currentUser()
                  .then(user => {
                      context.commit('SET_LOGGED_IN', user);
                      context.commit('SET_LOGGING_IN_STATUS', false);
                  })
              } else {
                context.commit('SET_LOGGED_OUT');
                context.commit('SET_LOGGING_IN_STATUS', false);
              }              
          })
          .catch(err => {
             context.commit('SET_LOGGED_OUT');
             context.commit('SET_LOGGING_IN_STATUS', false);
             console.error('Not signed in: %s', err.error)
          })
      },
      triggerLogin(context) {
         context.commit('SET_LOGGING_IN_STATUS', true);
         this._vm.$gapi.signIn()
            .then(user => {
                context.commit('SET_LOGGED_IN', user);
                context.commit('SET_LOGGING_IN_STATUS', false);
                console.log(user);
                console.log('Signed in as %s', user.name)
            })
            .catch(err => {
                context.commit('SET_LOGGED_OUT');
                context.commit('SET_LOGGING_IN_STATUS', false);
                console.error('Not signed in: %s', err.error)
            })
      },
      triggerLogout(context) {
          this._vm.$gapi.signOut()
              .then(user => {
                  context.commit('SET_LOGGED_OUT', user);
                  console.log('Signed out as %s', user.name)
              })
              .catch(err => {
                  console.error('Sign out error: %s', err.error)
              })
      }
  },
  getters: {
    initials: function (state) {
      if(state.loggedInUser.firstname == undefined) return "";
      return state.loggedInUser.firstname;
    },
  }
})
