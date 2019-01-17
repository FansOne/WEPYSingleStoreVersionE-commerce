import { apiSso } from './app';
const login = (iv, encryptedData,app_id) => {
    return new Promise( (resolve, reject) => {
        wx.login({
            success: (loginRet) => {
                wx.request({
                    url: apiSso + '/api/mini_login',
                    method: 'POST',
                    dataType:'json',
                    header:{
                        Accept : 'application/vnd.sso.v1+json',
                        // SandBox : true
                    },
                    data: {
                        iv : iv,
                        encryptData : encryptedData,
                        code : loginRet.code,
                        app_id : app_id,
                        grant_type : 'client_shop_credentials'
                    },
                    success: (res) => {
                        resolve(res)
                    },
                    fail: (err) => {
                        reject(err)
                    }
                })
            }
        })
    })
}
const setStorage = (keyValueArray)=>{
    return keyValueArray.map((item)=>{
        return new Promise( (resolve, reject) => {  
            wx.setStorage({
                key: item.key,
                data: item.value,
                success: ()=>{
                    resolve(true)
                },
                fail: () => {
                    reject(false)
                }
            });
        })
    })
}
module.exports = {
    login,
    setStorage
}