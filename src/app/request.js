import wepy from 'wepy';

// 单条数据请求
const requestData = (url,method = 'GET',data = {})=>{
    let token = wx.getStorageSync('token');
    return wepy.request({
        url: `${url}`,
        method: method,
        data: data,
        header: {
            Accept : 'application/vnd.lingmo.v1+json',
            Authorization : `Bearer ${token}`,
            // SandBox : true
        }
    });
}

module.exports = {
    requestData
}