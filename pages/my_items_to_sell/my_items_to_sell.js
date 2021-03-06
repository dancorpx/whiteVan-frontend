// pages/my_items_to_sell/my_items_to_sell.js
const app = getApp()
const globalData = app.globalData
const myRequest = require('../../lib/api/request');
// const mock = require('../../mock/mock.js')
Page({

  data: {},

  onLoad: function () {
    let page = this
    // Fetch Items from API
    console.log(111, globalData.userId)
    myRequest.get({
      
      path: `items?seller_id=${globalData.userId}`,
      success(res) {
        page.setData({ items: res.data.items })
        console.log(77777777, page.data.items)
      }
    })
  },

  bindDestroy: function (e) {
    let page = this
    console.log(555,e)
    wx.showToast({ title: 'Deleting...', icon: 'loading', duration: 1000 })
    console.log(e.target)
    // Update story to API
    myRequest.delete({
      path: `items/${e.target.dataset.hi}`,
      data: {},
      success(res) {
        console.log(res)
      }
    })

    setTimeout(function () {
      wx.reLaunch({
        url: '/pages/my_items_to_sell/my_items_to_sell'
      })
    }, 1000)
  },

  goNext: function (e) {
    console.log(12121, e)
    
    let page = this
    console.log(1221211222, page.data)

    myRequest.get({
      path: `items/${e.currentTarget.dataset.hi}`,
      success(res) {
        console.log(3333, res)
        globalData.currentExchange = res.data.exchange.exchange.id
      }
    })
        wx.navigateTo({
        url: '/pages/messages/messages',
      })
   
  },




  /**
   * 生命周期函数--监听页面初次渲染完成
   */
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