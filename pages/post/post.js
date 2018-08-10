// pages/posts/post.js
const app = getApp()
const globalData = app.globalData
const category = []
const myRequest = require('../../lib/api/request');

Page({
  /**
   * 页面的初始数据
   */
  data: {
    category: ["CHOOSE A CATEGORY", "Vehicle", "Clothing", "Construction", "Electronics", "Jewelry"],
    catChoice: null,
    showWarning: false,
    name: false,
    price: false,
    description: false,
  }, 

  bindChange: function (e) {
    const val = e.detail.value
    console.log(76767,val)
    this.setData({
      catChoice: this.data.category[val]
    })
    console.log(11111, this.data.catChoice)
  },
// Bind Submit

  bindSubmit: function (e) {
    if (globalData.userThiefId === null) {
      console.log(101, "")
      wx.reLaunch({
        url: '/pages/login/login',
      })
    } else {

    let page = this
    if (e.detail.value.name.replace(/\s/g, '').length == 0) {
      this.warning("name")
      return
    }
    if (e.detail.value.price.replace(/\s/g, '').length == 0) {
      this.warning("price")
      return
    } 
    if (e.detail.value.description.length <= 40) {
      this.warning("description")
      return
    }

    wx.showToast({ title: 'Sending...', icon: 'loading', duration: 1000 })
    console.log(999,page.data)
    console.log(3434, globalData.userId)

    myRequest.post({ 
      path: 'items',
      data: { 
        item: {
          name: e.detail.value.name,
          price: e.detail.value.price,
          quantity: e.detail.value.quantity,
          description: e.detail.value.description,
          category: page.data.catChoice,
          seller_id: globalData.userId
        }
      },
      success(res) {
        console.log(res)
      }
    })

    setTimeout(function () {
      wx.reLaunch({
        url: '/pages/index/index'
      })
    }, 1000)
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  
  },

  warning: function (message) {
    this.setData({showWarning: true})
    if (message == "name") {
      this.setData({name: true})
    }
    if (message == "price") {
      this.setData({price: true})
    }
    if (message == "description") {
      this.setData({description: true})
    }
  },

  closeWarning: function () {
    this.setData({showWarning: false})
    this.setData({ name: false })
    this.setData({ price: false })
    this.setData({ description: false })
  }

    // var animation = wx.createAnimation({
    //  transformOrigin: "50% 50%",
    //  duration: 500,
    //  timingFunction: "ease",
    //  delay: 0
    // })
    // this.animation = animation
    // animation.opacity(0).step()
    // this.setData({
    //   animation: animation.export(),
    // })

})