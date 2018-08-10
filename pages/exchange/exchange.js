// pages/exchange/exchange.js
const app = getApp()
const globalData = app.globalData
const myRequest = require('../../lib/api/request')
// const mock = require('../../mock/mock.js')
Page({

  data: {},

  onLoad: function () {
    let page = this
    // Fetch Items from API
    console.log(111, globalData.userId)
    

  

    myRequest.get({
      path: `exchanges?buyer_id=${globalData.userId}`,
      // path: 'exchanges?buyer_id=1',
      success(res) {
        console.log(7171,res)
        let itemArray = []
        res.data.exchanges.forEach(function(exchange){
          console.log(444, exchange)
          itemArray.push(exchange.item)
        })
        console.log(4343,itemArray)
        page.setData({ items: itemArray })
      }
    })
  },

  goNext: function (e) {
    console.log(12121, e)
    globalData.currentExchange = e.currentTarget.dataset.hi
    wx.navigateTo({
      url: '/pages/messages/messages',
    })
  },



  /**
   * 生命周期函数--监听页面加载
   */
  // onLoad: function (options) {
  //   console.log(mock)
  //   this.setData({ items: mock.items })
  // },

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