// addcomment.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    uploadImagUrl:"",
    urls: ["/images/1.jpg", "/images/2.jpg", "/images/3.jpg"]//上传的图片路径
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.debug("跳转到评论页")
    console.log(options)
    var shopId = options.shopId
    var openId = app.globalData.openId
    console.debug('openid' + openId)
    if (!this.isNullOrEmpty(shopId) || !this.isNullOrEmpty(openId)){  
      //没有获取到店铺id
      this.setData({
        'shopId':shopId
      })
    }else{
      console.debug("不存在店铺id,或者openid不能访问评价页面")
      wx.switchTab({
        url: "/pages/index/index"
      })
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
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
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
    var comment = e.detail.value.comment
    var urls = this.data.urls
    //TODO 提交评论
    //1、获取shopid
    //2、获取用户id
    //3、提交评论
    //4、返回成功之后跳转到店铺详情界面

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
  chooseImage:function(){
    var that = this
    wx.chooseImage({
      count:10,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'], 
      success: function (res) {
        var tempFilePaths = res.tempFilePaths
        wx.uploadFile({
          url:this.data.uploadImagUrl,
          filePath: tempFilePaths,
          name:"imgs",
          success: function (res) {
            var data = res.data
            //TODO 根据上传返回的图片链接设置到urls中并判断是否达到最大图片限制
          }
        })
      }
    })
  }
})