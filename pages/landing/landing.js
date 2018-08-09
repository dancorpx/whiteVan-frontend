// pages/landing/landing.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    expanded:false
  },

  goNext: function () {
    wx.reLaunch({
      url: '/pages/index/index',
    })

    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  change_state: function() {
    if (this.data.expanded == true) {
      this.setData({ expanded: false});
      console.log(this.data.expanded)
    }
    else {
      this.setData({expanded: true });
      console.log(this.data.expanded)
    }
   
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