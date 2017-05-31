// detail.js
var app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    shop :{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    that.setData({
      shop: []
    })
    console.debug("跳转到详情页")
    console.log(options)
    var shopId = options.shopId
    //根据店铺id获取店铺详细信息
    var requestData = {
      'shopId': shopId,
      'openId': app.globalData.openId
    }
    console.debug(requestData)
    var requestUrl = app.globalData.domain + '/shop/shopinfo.html'
    wx.request({
      url: requestUrl,
      data: requestData,
      success: function (res) {
        var returnData = res.data
        if (returnData.status == 0) {
          var shopData = returnData.data
          //把推荐指数转为数组
          var recommend = []
          for (var i = 0; i < shopData.shopInfo.recommend;i++){
            recommend.push(i)
          }
          shopData.shopInfo.recommend = recommend
          that.setData({
            shop:shopData
          })
        } else {
          wx.showToast({
            title: '后台系统异常',
            icon: 'warn'
          })
        }
      },
      fail: function (res) {
        wx.showToast({
          title: '店铺加载失败',
          icon: 'warn'
        })
      }
    })
  },
  
  /**跳转到打电话 */
  tel:function(event){
    var phoneNum = event.currentTarget.dataset.phoneNum
    wx.makePhoneCall({
      phoneNumber: phoneNum,
    })
  },
  /**预览图片 */
  previewImags:function(event){
    console.debug("点击图片预览")
    var imgs = event.currentTarget.dataset.imgs
    console.debug(imgs)
    wx.previewImage({
      urls:imgs
    })
  },
  /**点击店铺地址 */
  address:function(event){
    var that = this
    var name = event.currentTarget.dataset.shopName
    var address = event.currentTarget.dataset.address
    wx.openLocation({
      latitude: that.data.shop.latitude,
      longitude: that.data.shop.longitude,
      scale: 28,
      name: name,
      address: address
    })
  },
  /**点击赞 */
  good: function (event){
    //点击评论的id
    var commentId = event.currentTarget.dataset.commentId
    var commentList = this.data.shop.shopInfo.commentList
    var commentSize = commentList.length
    //当前状态
    var currentStatus = event.currentTarget.dataset.status
    for (var i = 0; i < commentSize ;i++){
      if (commentList[i].id == commentId){
        var oldGoodNum = this.data.shop.shopInfo.commentList[i].goodNum
        if (currentStatus == 1){//取消点赞
          this.updateStatus(app.globalData.openId, commentId,-1)
          this.data.shop.shopInfo.commentList[i].status = -1
          this.data.shop.shopInfo.commentList[i].goodNum = oldGoodNum - 1
          this.setData({
             shop: this.data.shop
          })
        } else{
        this.updateStatus(app.globalData.openId, commentId, 1)
          //点赞
        if (this.data.shop.shopInfo.commentList[i].status == 0){
          this.data.shop.shopInfo.commentList[i].badNum = this.data.shop.shopInfo.commentList[i].badNum - 1
        }
        this.data.shop.shopInfo.commentList[i].status = 1
        this.data.shop.shopInfo.commentList[i].goodNum = oldGoodNum + 1
          this.setData({
            shop: this.data.shop
          })
        }
        break;
      }
    }
  },
  /**点击不赞 */
  bad: function (event){
    //点击评论的id
    var commentId = event.currentTarget.dataset.commentId
    var commentList = this.data.shop.shopInfo.commentList
    var commentSize = commentList.length
    //当前状态
    var currentStatus = event.currentTarget.dataset.status
    for (var i = 0; i < commentSize; i++) {
      if (commentList[i].id == commentId) {
        var oldBadNum = this.data.shop.shopInfo.commentList[i].badNum
        if (currentStatus == 0) {//点击取消坏
          //请求后台
          this.updateStatus(app.globalData.openId, commentId, -1)
          this.data.shop.shopInfo.commentList[i].status = -1
          this.data.shop.shopInfo.commentList[i].badNum = oldBadNum - 1
          this.setData({
            shop: this.data.shop
          })
        } else {
          //请求后台
          this.updateStatus(app.globalData.openId, commentId, 0)
          //点坏
          if (this.data.shop.shopInfo.commentList[i].status == 1) {
            this.data.shop.shopInfo.commentList[i].goodNum = this.data.shop.shopInfo.commentList[i].goodNum - 1
          }
          this.data.shop.shopInfo.commentList[i].status = 0
          this.data.shop.shopInfo.commentList[i].badNum = oldBadNum + 1
          this.setData({
            shop: this.data.shop
          })
        }
        break;
      }
    }
  },
  /*点击新增评论 */
  addComment:function(event){
    console.debug("新增评论")
    console.debug(event)
    var shopId = event.currentTarget.dataset.shopId
    wx.navigateTo({
      url: "/pages/addcomment/addcomment?shopId=" + shopId
    })
  },
  updateStatus: function (openId, commentId,status){
    var requestData = {
      'commentId': commentId,
      'openId': openId,
      'status': status
    }
    console.debug(requestData)
    var requestUrl = app.globalData.domain + '/comment/updateCommentStatus.html'
    wx.request({
      url: requestUrl,
      data: requestData,
      success: function (res) {
        //不做任何处理
        console.debug(res)
      },
      fail: function (res) {
        wx.showToast({
          title: '操作失败',
          icon: 'warn'
        })
      }
    })
  }
})