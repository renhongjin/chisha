// detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shop :{
      id: 0, 
      latitude: 30.5672495341,
      longitude: 104.0641307831,
      logoUrl: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3314349138,2807880508&fm=23&gp=0.jpg",
      name: "周黑鸭",
      desc: "湖北周黑鸭管理有限公司[1]  是一家专业从事鸭类、鹅类、鸭副产品和素食产品等熟卤制品生产的品牌企业",
      type: "卤菜",
      distance: "100m",
      comment: 100,
      see: 110,
      address: "成都市金牛区金房苑东路29号",
      recommend: [1, 2, 3],
      phone:"028-88886666",
      imgs: ['/images/1.jpg', '/images/2.jpg', '/images/3.jpg', '/images/4.jpg', '/images/5.jpg'],
      shopDetaiDesc: "吃了瓜串串，其它串串瞬间成了浮云。这家瓜串串总店做的是老成都的味道，常常没营业就开始排队，油",
      commentList: [
        {
          id: "0", headUrl: "http://wx.qlogo.cn/mmopen/vi_32/GsXrrl7yhjg8vjapNyEZmuiaNcfZPacMSVgibqMcsq6A0xCOd9icfHBeSPaia4d838ElZ8QEoNkiczyib2ESzUdJzNBw/0",
          nickName: "wait",
          commentContent: "吃了瓜串串，其它串串瞬间成了浮云。这家瓜串串总店做的是老成都的味道，常常没营业就开始排队.",
          imgs: [
            "http://p1.meituan.net/deal/000dada02e909c63e115c9060869006037358.jpg@460w_280h_1e_1c",
            "http://p1.meituan.net/deal/000dada02e909c63e115c9060869006037358.jpg@460w_280h_1e_1c",
            "http://p1.meituan.net/deal/000dada02e909c63e115c9060869006037358.jpg@460w_280h_1e_1c"
          ],
          commentTime: "2017-05-06 23:23:00",
          goodNum: 100,
          badNum: 10,
          status: 1
        },
        {
          id: "1", headUrl: "http://wx.qlogo.cn/mmopen/vi_32/GsXrrl7yhjg8vjapNyEZmuiaNcfZPacMSVgibqMcsq6A0xCOd9icfHBeSPaia4d838ElZ8QEoNkiczyib2ESzUdJzNBw/0",
          nickName: "wait",
          commentContent: "吃了瓜串串，其它串串瞬间成了浮云。这家瓜串串总店做的是老成都的味道，常常没营业就开始排队.",
          imgs: [
            "http://p1.meituan.net/deal/000dada02e909c63e115c9060869006037358.jpg@460w_280h_1e_1c",
            "http://p1.meituan.net/deal/000dada02e909c63e115c9060869006037358.jpg@460w_280h_1e_1c",
            "http://p1.meituan.net/deal/000dada02e909c63e115c9060869006037358.jpg@460w_280h_1e_1c"
          ],
          commentTime: "2017-05-06 23:23:00",
          goodNum: 100,
          badNum: 10,
          status: 0
        },
        {
          id: "2", headUrl: "http://wx.qlogo.cn/mmopen/vi_32/GsXrrl7yhjg8vjapNyEZmuiaNcfZPacMSVgibqMcsq6A0xCOd9icfHBeSPaia4d838ElZ8QEoNkiczyib2ESzUdJzNBw/0",
          nickName: "wait",
          commentContent: "吃了瓜串串，其它串串瞬间成了浮云。这家瓜串串总店做的是老成都的味道，常常没营业就开始排队.",
          imgs: [
            "http://p1.meituan.net/deal/000dada02e909c63e115c9060869006037358.jpg@460w_280h_1e_1c",
            "http://p1.meituan.net/deal/000dada02e909c63e115c9060869006037358.jpg@460w_280h_1e_1c",
            "http://p1.meituan.net/deal/000dada02e909c63e115c9060869006037358.jpg@460w_280h_1e_1c"
          ],
          commentTime: "2017-05-06 23:23:00",
          goodNum: 100,
          badNum: 10,
          status: 1
        }
      ]
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.debug("跳转到详情页")
    console.log(options)
    var shopId = options.shopId
    //获取
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

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
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
    var commentList = this.data.shop.commentList
    var commentSize = commentList.length
    //当前状态
    var currentStatus = event.currentTarget.dataset.status
    for (var i = 0; i < commentSize ;i++){
      if (commentList[i].id == commentId){
        if (currentStatus == 1){//取消点赞
        //TODO 请求后台
          this.data.shop.commentList[i].status = -1
          this.setData({
            shop: this.data.shop
          })
        } else{
          //TODO 请求后台
          //点赞
          this.data.shop.commentList[i].status = 1
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
    var commentList = this.data.shop.commentList
    var commentSize = commentList.length
    //当前状态
    var currentStatus = event.currentTarget.dataset.status
    for (var i = 0; i < commentSize; i++) {
      if (commentList[i].id == commentId) {
        if (currentStatus == 0) {//点击取消坏
          //TODO 请求后台
          this.data.shop.commentList[i].status = -1
          this.setData({
            shop: this.data.shop
          })
        } else {
          //TODO 请求后台
          //点坏
          this.data.shop.commentList[i].status = 0
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
  }
})