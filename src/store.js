import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      loggingIn: false,
      isLoggedIn: false,
      detailsLoaded: false,
      eventsLoaded: false,
      loggedInUser: {},
      userDetails: {},
      calendarList: [],
      eventList: [],
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
      },
      SET_USER_DETAILS_FROM_API(state, details) {
        state.detailsLoaded = true;
        state.userDetails = details;
      },
      SET_CAL_LIST_FROM_API(state, list) {
        state.calendarList = list;
      },
      SET_EVENT_LIST_FROM_API(state, list) {
        state.eventList = list;
        state.eventsLoaded = true;
      },
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
                      context.dispatch('triggerUserDetailsUpdate');
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
      triggerUserDetailsUpdate(context) {
        //Profile info
        this._vm.$gapi.request({
          path: 'https://www.googleapis.com/admin/directory/v1/users/'+this.state.loggedInUser.id+'?projection=full&viewType=domain_public',
          method: 'GET',          
        }).then(response => {
            context.commit('SET_USER_DETAILS_FROM_API', response.result)
            console.log(response);             
        }).catch(function (error) {
            console.log(error);
        })

        //Calendar list
        this._vm.$gapi.request({
          path: 'https://www.googleapis.com/calendar/v3/users/me/calendarList',
          method: 'GET',          
        }).then(response => {
            context.commit('SET_CAL_LIST_FROM_API', response.result.items)
            console.log(response);             
        }).catch(function (error) {
            console.log(error);
        })

        //Primary calendar events
        this._vm.$gapi.request({
          path: 'https://www.googleapis.com/calendar/v3/calendars/'+this.state.loggedInUser.email+'/events?maxResults=10&singleEvents=true',
          method: 'GET',          
        }).then(response => {
            context.commit('SET_EVENT_LIST_FROM_API', response.result.items)
            console.log(response);             
        }).catch(function (error) {
            console.log(error);
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
                context.dispatch('triggerUserDetailsUpdate');
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
