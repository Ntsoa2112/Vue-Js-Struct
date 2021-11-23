import axios from 'axios'

const state = () => ({
    //baseUrl: "https://api.iteam-s.mg/api",
    baseUrl: "http://localhost:5000/api",
    token: localStorage.getItem('user-token') || '',
    status: '',
    appelation:'',
    this_id: parseInt(localStorage.getItem('user-this_id')) || '',
})

// getters
const getters = {
    isAuthenticated: state => !!state.token,
    authStatus: state => state.status,
}

// actions
const actions = {
    auth_request: ({commit, state}, user) => {
        return new Promise((resolve, reject) => {
          axios.post(state.baseUrl+user.route, user)
          .then(reponse => {
            if(reponse.data.token){
              localStorage.setItem('user-token', 'Basic ' + reponse.data.token)
              localStorage.setItem('user-this_id', reponse.data.id)
              axios.defaults.headers.common['Authorization'] = 'Basic ' + reponse.data.token
              commit('AUTH_SUCCESS', { token: reponse.data.token, appelation: reponse.data.appelation, id:reponse.data.id});
              resolve({connecter:true});
            }
            else{
              resolve({connecter:false});
            }
          })
          .catch(err => {
            commit('AUTH_ERROR', err)
            localStorage.removeItem('user-token') // if the request fails, remove any possible user token if possible
            reject(err)
          })
        })
      },
  /**
      auth_register: ({commit}, user) => {
        return new Promise((resolve, reject) => {
          commit('AUTH_REQUEST')
  
        })
      },
  */
      auth_logout: ({commit}) => {
        commit('AUTH_LOGOUT')
        localStorage.removeItem('user-token') // clear your user's token from localstorage
        localStorage.removeItem('user-this_id') 
        delete axios.defaults.headers.common['Authorization']
        return true
      }
}

// mutations
const mutations = {
    AUTH_SUCCESS: (state, user ) => {
        state.status = 'success',
        state.token = user.token,
        state.appelation = user.appelation,
        state.this_id = user.id
    },

    AUTH_ERROR: (state) => {
        state.status = 'error'
    },

    AUTH_LOGOUT: (state) => {
        state.status = ''
        state.token = ''
        state.appelation = ''
    }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
