'use strict'
import apiList from './api'
//在vue原型链上自定义插件
const install=function (vue) {
    if(install.installed) return
    install.installed=true;

    Object.defineProperties(vue.prototype,{
        $api:{
            get(){
                console.log('定义到原型上的$api')
                return apiList;
            }
        }
    })
}

export default{
    install
}