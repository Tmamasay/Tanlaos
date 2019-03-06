const TokenKey = 'Admin-Token'
const Userinfo='user_info'

export function getToken() {
//   return Cookies.get(TokenKey)
  return wx.getStorageSync(TokenKey)
}

export function setToken(token) {
//   return Cookies.set(TokenKey, token)
 try {
    return wx.setStorageSync(TokenKey,token)
  } catch (e) {
    return this.setstorage(TokenKey,token)
  }
}

export function removeToken() {
//   return Cookies.remove(TokenKey)
  return wx.removeStorageSync(TokenKey)
}

//存取用户信息
export function getUserinfo() {
  //   return Cookies.get(TokenKey)
    return wx.getStorageSync(Userinfo)
  }
  
  export function setUserinfo(info) {
  //   return Cookies.set(TokenKey, token)
   try {
      return wx.setStorageSync(Userinfo,info)
    } catch (e) {
      return this.setstorage(Userinfo,info)
    }
  }
  
  export function removeUserinfo() {
  //   return Cookies.remove(TokenKey)
    return wx.removeStorageSync(Userinfo)
  }