const app = getApp()
const globalData = app.globalData
const myRequest = require('../../lib/api/request');

Page({
  /**
   * 页面的初始数据
   */
  data: {
    area: ["CHOOSE AN AREA", "north chengdu", "south chengdu", "east chengdu", "west chengdu"],
    areaChoice: null
  },

  bindChange: function (e) {
    const val = e.detail.value
    console.log(76767, val)
    this.setData({
     areaChoice: this.data.area[val]
    })
    console.log(11111, this.data.areaChoice)
  },

  bindSubmit: function (e) {
    let page = this
    wx.showToast({ title: 'Logging In....', icon: 'loading', duration: 1000 })
    console.log(444, e.detail.value.thief_id)
    console.log(999, page.data)
    console.log(3434, globalData.userId)
    const tiD = parseInt(e.detail.value.thief_id, 10)
    console.log(tiD)
    myRequest.put({
      path: `users/${globalData.userId}`,
      data: {
          username: e.detail.value.username,
          thief_id: tiD ,
          area: page.data.areaChoice,
      },
      success(res) {
        console.log(98989,res)
        globalData.userName = res.data.username
        globalData.userArea = res.data.area
        globalData.userThiefId = res.data.thief_id 
      } 
    })
    setTimeout(function () {
      wx.reLaunch({
        url: '/pages/index/index'
      })
    }, 1000)
  },  
}) // page end