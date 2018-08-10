// pages/messages/messages.js
const app = getApp()
const globalData = app.globalData
const myRequest = require('../../lib/api/request')

Page({

  data: {},

  onLoad: function (options) {
    let page = this
    // Fetch Items from API
    myRequest.get({
      path: `/exchanges/${globalData.currentExchange}/chat_records`,
      success(res) {
        console.log(3333, res)
        page.setData({items: res.data.messages})
      }
    })
  },

  bindMessage: function (e) {
    let page = this

    wx.showToast({ title: 'Sending...', icon: 'loading', duration: 1000 })
    console.log(999, e)
    console.log(3434, globalData.currentExchange)

    myRequest.post({
      path: `/exchanges/${globalData.currentExchange}/chat_records`,
      data: {
        message: e.detail.value.content,
        user_id: globalData.userId,
        exchange_id: globalData.currentExchange
      },
      success(res) {
        console.log(res)
      }
    })

    setTimeout(function () {
      wx.reLaunch({
        url: '/pages/messages/messages'
      })
    }, 1000)
  },

  
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})