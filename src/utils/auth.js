const TokenKey = 'Admin-Token'

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
