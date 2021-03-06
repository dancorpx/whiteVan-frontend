//app.js
App({
  onLaunch: function () {
    const host = 'http://localhost:3000/api/v1/'
    console.log(111,'processing to login')
    wx.login({
      success: (res) => { 
        console.log(222,res)
      wx.request({ 
        url: host + 'login',
        method: 'post', 
        data: { 
          code: res.code
        },
        success: (res) => { 
          console.log(333,res)
          this.globalData.userId = res.data.userId
          this.globalData.userName = res.data.userName
          this.globalData.userArea = res.data.userArea 
          this.globalData.userThiefId = res.data.userThiefId 
        }
      })
      }
    })
  }, 
  globalData: {
    userArea: null,
    userName:null,
    userThiefId :null
  }  
}) 
