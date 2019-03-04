// import { loginByUsername, logout, getUserInfo } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'

const user = {
  state: {
    userinfo:'',
    status: '',
    code: '',
    // token: getToken(),
    token:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhZG1pbiIsInN1YiI6IjI2MTQ4IiwiYXVkIjoidXNlciIsImV4cCI6MTU1MjI3MjQ4MCwibmJmIjoxNTUxNjY3NjgwLCJpYXQiOjE1NTE2Njc2ODAsImp0aSI6IjEzMWM0MzgyLTM4ZTItNDI3Zi04OGFjLWQ1OTU1ODY5MjFjNCJ9.xe4mmHs34GLC3CCUjegk_kZL29egq4xj5hwn5iHEhLw',
    baseurl:'',
    name: '',
    avatar: '',
    introduction: '',
    roles: [],
    setting: {
      articlePlatform: []
    }
  },

  mutations: {
    SET_CODE: (state, code) => {
      state.code = code
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_INTRODUCTION: (state, introduction) => {
      state.introduction = introduction
    },
    SET_SETTING: (state, setting) => {
      state.setting = setting
    },
    SET_STATUS: (state, status) => {
      state.status = status
    },
    SET_USERINFO: (state, userinfo) => { //基本信息
      state.userinfo = userinfo
    },
    SET_NAME: (state, name) => { //用户名
      state.name = name
    },
    SET_AVATAR: (state, avatar) => { //用户头像
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    }
  },


  actions: {
    // 用户名登录
    // LoginByUsername({ commit }, userInfo) {
    //   const username = userInfo.username.trim()
    //   return new Promise((resolve, reject) => {
    //     loginByUsername(username, userInfo.password).then(response => {
    //       const data = response.data
    //       commit('SET_TOKEN', data.token)
    //       setToken(response.data.token)
    //       resolve()
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // },

    // 获取用户信息
    GetUserInfo({ commit,state},e) {
      // debugger;
      console.log('存取用户信息')
      commit('SET_USERINFO', e)
      commit('SET_NAME', e.nickName)
      commit('SET_AVATAR', e.avatarUrl)
      //假设的token
      commit('SET_TOKEN', state.token)
      console.log(state.avatar)
      setToken(state.token)
      // return new Promise((resolve, reject) => {
      //   getUserInfo(state.token).then(response => {
      //     // 由于mockjs 不支持自定义状态码只能这样hack
      //     if (!response.data) {
      //       reject('Verification failed, please login again.')
      //     }
      //     const data = response.data

      //     if (data.roles && data.roles.length > 0) { // 验证返回的roles是否是一个非空数组
      //       commit('SET_ROLES', data.roles)
      //     } else {
      //       reject('getInfo: roles must be a non-null array!')
      //     }

         
      //     commit('SET_INTRODUCTION', data.introduction)
      //     resolve(response)
      //   }).catch(error => {
      //     reject(error)
      //   })
      // })
    },

    // 第三方验证登录
    LoginByThirdparty({ commit, state }, code) {
      return new Promise((resolve, reject) => {
        commit('SET_CODE', code)
        loginByThirdparty(state.status, state.email, state.code).then(response => {
          commit('SET_TOKEN', response.data.token)
          setToken(response.data.token)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // // 登出
    // LogOut({ commit, state }) {
    //   return new Promise((resolve, reject) => {
    //     logout(state.token).then(() => {
    //       commit('SET_TOKEN', '')
    //       commit('SET_ROLES', [])
    //       removeToken()
    //       resolve()
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // },

    // 前端 登出
    // FedLogOut({ commit }) {
    //   return new Promise(resolve => {
    //     commit('SET_TOKEN', '')
    //     removeToken()
    //     resolve()
    //   })
    // },

    // 动态修改权限
    // ChangeRoles({ commit, dispatch }, role) {
    //   return new Promise(resolve => {
    //     commit('SET_TOKEN', role)
    //     setToken(role)
    //     getUserInfo(role).then(response => {
    //       const data = response.data
    //       commit('SET_ROLES', data.roles)
    //       commit('SET_NAME', data.name)
    //       commit('SET_AVATAR', data.avatar)
    //       commit('SET_INTRODUCTION', data.introduction)
    //       dispatch('GenerateRoutes', data) // 动态修改权限后 重绘侧边菜单
    //       resolve()
    //     })
    //   })
    // }
  }
}

export default user
