// const BASE_URL = this will store how URL which will change,
const BASE_URL = 'https://white-van-market.herokuapp.com/api/v1/';

const myRequest = {
  request(options, httpMethod) { 

    // get token from storage
    // var user = wx.getStorageSync('userInfo')

    wx.request({
      url: BASE_URL + options.path,
      header: {
        'Content-Type': 'application/json',
        'X-YOURAPP-Token': 'YOUR TOKEN'
      },
      data: options.data,
      method: httpMethod,
      success: options.success
    })
  },
  post(options) {
    this.request(options, 'POST')
  },
  get(options) {
    this.request(options, 'GET')
  },
  put(options) {
    this.request(options, 'PUT')
  },
  delete(options) {
    this.request(options, 'DELETE')
  }
}
module.exports = myRequest;