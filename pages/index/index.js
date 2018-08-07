//index.js
//获取应用实例
const app = getApp()

// const myRequest = require('../../lib/api/request')
const mock = require('../../mock/mock.js')

Page({
  data: {},
  onLoad: function () {
    // let page = this 
    console.log(mock)
    this.setData({ items: mock.items })
    // Fetch Items from GlobalData

    // myRequest.get({
    //   path: 'stories',
    //   success(res) {
    //     console.log(res)
    //     page.setData({items : res.data.stories})
    //   }
    // })
  }
})
