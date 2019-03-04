import fetch from '@/utils/fetch.js'

//获取用户详细信息
const getuserinfo= params=>{
    return fetch({
        url:`${store.state.baseurl}wechatuser/queryUserInfo`,
        method:'post',
        // data:params,
         headers: {
            'content-type': 'application/json;charset=UTF-8',
            'Authorization':store.state.Authorization
         }
    })
}




const user={
    getuserinfo//存取用户信息
}
export default user;