import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const tosId = "1vyRnemezQCPbRLmJLyDCieKZNyE_GJrT";

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
      tosVersion: "notset",
      userTosVersion: "notset",
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
      SET_TOS_VERSION(state, version) {
        state.tosVersion = version;
      },
      SET_USER_TOS_VERSION(state, version) {
        state.userTosVersion = version;
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
                      context.dispatch('triggerGetTosStatus');
                      context.dispatch('triggerTosRetrieval');
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
          path: 'https://www.googleapis.com/calendar/v3/calendars/'+this.state.loggedInUser.email+'/events?singleEvents=true&orderBy=startTime',
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
                context.dispatch('triggerGetTosStatus');
                context.dispatch('triggerTosRetrieval');
                context.dispatch('triggerUserDetailsUpdate');
            })
            .catch(err => {
                context.commit('SET_LOGGED_OUT');
                context.commit('SET_LOGGING_IN_STATUS', false);
                console.error('Not signed in: %s', err)
            })
      },
      triggerLogout(context) {
          this._vm.$gapi.signOut()
              .then(user => {
                  context.commit('SET_LOGGED_OUT', user);
                  console.log('Signed out as %s', user.name)
              })
              .catch(err => {
                  console.error('Sign out error: %s', err)
              })
      },
      triggerTosRetrieval(context) {
          this._vm.$gapi.request({
              path: 'https://www.googleapis.com/drive/v3/files/'+tosId,
              method: 'GET',
              params: {
                fields: "md5Checksum"
              },
          }).then(response => {
              context.commit('SET_TOS_VERSION', response.result.md5Checksum);
              console.log("LOADED TOS! Current hash: "+response.result.md5Checksum);
          }).catch(function (error) {
              // handle error
              console.log(error);
          })
      },
      triggerTosOnetimeAccept(context) {
          context.commit('SET_USER_TOS_VERSION', "accepted");
          context.commit('SET_TOS_VERSION', "accepted");
      },
      triggerGetTosStatus(context) {
          this._vm.$http.get("https://76i3an3137.execute-api.eu-central-1.amazonaws.com/prod/accept-tos?uid="+this.state.loggedInUser.id).then(response => {
              //
              console.log("USERTOS RESPONSE for id "+this.state.loggedInUser.id);
              console.log(response);
              if(response.data != "") {
                context.commit('SET_USER_TOS_VERSION', response.data.toshash);
              } else {
                context.commit('SET_USER_TOS_VERSION', "invalid");
              }
              console.log(response);
          }).catch(function (error) {
              console.log(error);
          })
      }

  },
  getters: {
    initials: function (state) {
      if(state.loggedInUser.firstname == undefined) return "";
      return state.loggedInUser.firstname;
    },
    appRechte: function(state) {
      try {
        return state.userDetails.customSchemas['App-Rechte'];
      } catch (error) {
        return { 
          //Default app rights          
          ZoomLicense: false 
        }
      }
    },
    eventListAsVueCal: function(state) {
      let tempList = [];
      state.eventList.forEach(element => {
        tempList.push({
          start:new Date(element.start.dateTime),
          end:new Date(element.end.dateTime),
          title:element.summary,
          content:element.organizer.displayName,
          link:element.htmlLink,
          location:element.location,
          class:element.attendees != undefined ? 'cal_group' : 'cal_solo' ,
        });
      });
      console.log(tempList);
      return tempList;
    },
    currentTosAccepted: function(state) {
      console.log("Acc check: "+state.userTosVersion+" vs "+state.tosVersion);
      if(state.tosVersion !== "notset" && state.userTosVersion !== "notset" && (state.tosVersion != state.userTosVersion)) {
        console.log("Acc check false");
        return false;
      }
      return true;
    },    
  }
})
