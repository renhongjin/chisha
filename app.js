//app.js
App({
  onLaunch: function (options) {
    //获取场景值与打开小程序的路径
    var scene = options.scene;
    var path = options.path;

    console.log("场景值：" + scene)
    console.log(options)

    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  onError: function (msg) {
    console.log(msg)
  },
  globalData:{
    userInfo:null
  }
})