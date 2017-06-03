// addcomment.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shopId:null,
    shopInfoId:null,
    urls: []//上传的图片路径
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.debug("跳转到评论页")
    console.log(options)
    var shopId = options.shopId
    var openId = app.globalData.openId
    var shopInfoId = options.shopInfoId
    console.debug('openid' + openId)
    if (!this.isNullOrEmpty(shopId) || !this.isNullOrEmpty(openId)){  
      //没有获取到店铺id
      this.setData({
        'shopId':shopId,
        'shopInfoId':shopInfoId
      })
    }else{
      console.debug("不存在店铺id,或者openid不能访问评价页面")
      wx.switchTab({
        url: "/pages/detail/detail?shopId=" + shopId
      })
    }
  },
  /**空则返回true,不为空则返回false */
  isNullOrEmpty:function (data){ 
    return(data == "" || data == undefined || data == null) ? true: false; 
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },
  bindFormSubmit: function (e) {
    console.log(e.detail.value)
    var that = this
    var comment = e.detail.value.comment
    var urls = that.data.urls
    //TODO 提交评论content
    //1、获取shopId shopInfoId
    var shopId = this.data.shopId
    var shopInfoId = this.data.shopInfoId
    //2、获取用户id
    var userId = app.globalData.userInfo.userId
    //3、提交评论
    var requestData = {
      'content': comment,
      'urls': urls,
      'shopId': shopId,
      'shopInfoId': shopInfoId,
      'userId': userId
    }
    console.debug(requestData)
    var requestUrl = app.globalData.domain + '/comment/add.html'
    wx.request({
      url: requestUrl,
      method: 'POST',
      header: {
        'content-type': 'application/json'
      },
      data: requestData,
      success: function (res) {
        console.debug(res)
        var returnData = res.data
        if (returnData.status == 0) {

        } else {
          wx.showToast({
            title: '后台系统异常',
            icon: 'warn'
          })
        }
      }
    })
    //4、返回成功之后跳转到店铺详情界面
    wx.redirectTo({
      url: "/pages/detail/detail?shopId=" + that.data.shopId
    })
  },
  /*删除图片 */
  delImag:function(e){
    var that = this
    var delUrl = e.currentTarget.dataset.url
    var urls = this.data.urls
    wx.showModal({
      title:"提示",
      content:"是否删除图片",
      success: function (res) {
        if (res.confirm) {
          for(var i=0;i<urls.length;i++){
            if(delUrl == urls[i]){
              urls.splice(i,1);
              break;
            }
          }
          that.setData({
            'urls':urls
          })
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  /**选择图片上传 */
  chooseImage: function () {
    var that = this
    wx.chooseImage({
      count: 10,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        var tempFilePaths = res.tempFilePaths
        for (var j = 0; j < tempFilePaths.length; j++) {
          wx.uploadFile({
            url: app.globalData.domain + '/index/uploadImg.html',
            filePath: tempFilePaths[j],
            name: "imgs",
            header: {
              'content-type': 'application/json'
            },
            success: function (res) {
              console.debug(res)
              var rep = JSON.parse(res.data)
              if (rep.status == 0) {
                for (var i = 0; i < rep.data.length; i++) {
                  rep.data[i] = app.globalData.domain + rep.data[i]
                }
                that.data.urls.push(rep.data)
                that.setData({
                  'urls': that.data.urls
                })
              } else {
                wx.showToast({
                  title: '图片上传失败',
                  icon: 'warn'
                })
              }
            }
          })
        }
      }
    })
  }
})