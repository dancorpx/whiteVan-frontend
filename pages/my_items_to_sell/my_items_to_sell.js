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
      }
    })
  },

  bindDestroy: function (e) {
    let page = this
    console.log(e.target.dataset.hi)
    wx.showToast({ title: 'Deleting...', icon: 'loading', duration: 1000 })

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