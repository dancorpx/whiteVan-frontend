//index.js
//获取应用实例
const app = getApp()
const animationShowHeight = 130;
//extra height after expanding
const fadedOpacity = 0.05;

const myRequest = require('../../lib/api/request')
// const mock = require('../../mock/mock.js')

Page({
  data: {
    animation: '',
    expand: false,
    showPopup: false
  },
  onLoad: function () {
    let page = this 
    // Fetch Items from API
    myRequest.get({
      path: 'items',
      success(res) {
        console.log(res)
        page.setData({items : res.data.items})
      }
    })
    
    // console.log(mock)
    // this.setData({ items: mock.items })
    
    // Fetch Items from GlobalData

 
  },
  closePopup: function() {
    this.setData({showPopup:false})
  },

  onclick: function () {
    this.setData({showPopup:true})

    // if(this.data.expand == false) {
    //   var animation = wx.createAnimation({
    //     transformOrigin: "50% 50%",
    //     duration: 500,
    //     timingFunction: "ease",
    //     delay: 0
    //   })
    //   this.animation = animation
    //   // animation.translateY(animationShowHeight).step()
    //   animation.opacity(1).step()
    //   this.setData({
    //     animation: animation.export(),
    //   })
    //   this.setData({ expand: true})
    // }

    // else {
    //   var animation = wx.createAnimation({
    //     transformOrigin: "50% 50%",
    //     duration: 500,
    //     timingFunction: "ease",
    //     delay: 0
    //   })
    //   this.animation = animation
    //   animation.opacity(fadedOpacity).step()
    //   this.setData({
    //     animation: animation.export(),
    //   })
    //   this.setData({ expand: false })
    // }
  },

  expandCard: function (e) {
    // console.log(e.currentTarget.dataset.category)
    this.setData({ category: e.currentTarget.dataset.category})
    this.setData({ name: e.currentTarget.dataset.name })
    this.setData({ description: e.currentTarget.dataset.description })
    this.setData({ price: e.currentTarget.dataset.price })
    this.setData({ quantity: e.currentTarget.dataset.quantity })
    this.setData({ seller_id: e.currentTarget.dataset.seller_id })
  },
})



