//index.js
//获取应用实例
const app = getApp()
const globalData = app.globalData
const animationShowHeight = 130;
//extra height after expanding
const fadedOpacity = 0.05;

const myRequest = require('../../lib/api/request')
// const mock = require('../../mock/mock.js')

Page({
  data: {
    // animation: '',
    expand: false,
    showPopup: false
  },
  onLoad: function () {
    let page = this 
    // Fetch Items from API
    myRequest.get({
      path: 'items',
      success(res) {
        console.log(3333,res)
        let itemArray = []
        res.data.items.forEach(function(item){
          item.sellerName = item.seller.username
           itemArray.push(item)
        })
        console.log(343434,itemArray)
        page.setData({items : itemArray})
        console.log(44444, page.data)
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
    console.log(565656, e)
    this.setData({ id: e.currentTarget.dataset.id })
    this.setData({ category: e.currentTarget.dataset.category})
    this.setData({ name: e.currentTarget.dataset.name })
    this.setData({ description: e.currentTarget.dataset.description })
    this.setData({ price: e.currentTarget.dataset.price })
    this.setData({ quantity: e.currentTarget.dataset.quantity })
    this.setData({ seller_id: e.currentTarget.dataset.sellername })
  },

  purchase: function (e) {

    if (globalData.userThiefId === null) {
        console.log(101,"")
        wx.reLaunch({
          url: '/pages/login/login',
        })
      } else {
      
    let page = this
    console.log(666, e)
    myRequest.post({
      path: 'exchanges',
      data: {
        exchange: {
         buyer_id: globalData.userId,
         sold: false,
         item_id: e.currentTarget.dataset.hi
        }
      },
      success(res) {
        console.log(7777, res)
        wx.showModal({
          content: "successfully added to cart",
          showCancel: false,
          success: function (res) {
            if (res.confirm) {
              console.log('Confirm')
            }
          }
        })
      }
    })
    }
    }
})



