//app.js
App({
  onLaunch: function (options) {
    var that = this
    //获取场景值与打开小程序的路径
    var scene = options.scene;
    var path = options.path;

    console.log("场景值：" + scene)
    console.log(options)

    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    //获取微信用户信息
    wx.login({
      success: function (res) {
        if (res.code) {
          //发起网络请求
          console.debug("登录成功")
          console.debug(res)
          that.globalData.openId = res.code
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
        console.debug("获取用户信息")
        wx.getUserInfo({
          success: function (res) {
            that.globalData.userInfo = res.userInfo
            typeof cb == "function" && cb(that.globalData.userInfo)
          }
        })
      }
    })

  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function (data) {
          if (res.code) {
            //发起网络请求
            console.debug("登录成功")
            console.debug(res)
          } else {
            console.log('获取用户登录态失败！' + res.errMsg)
          }

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
    userInfo:null,
    openId:null
  }
})