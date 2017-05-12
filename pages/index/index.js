//index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shopPageInfo:{//首页数据分页信息
      shopCount: 0,//数据库中店铺的数量
      currentPage: 1,//当前页
      shopPageSize:10//当前页面展示数量
    },    
    shops:[
      {
        id:0,
        logoUrl:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3314349138,2807880508&fm=23&gp=0.jpg",
        name:"周黑鸭",
        desc:"湖北周黑鸭管理有限公司[1]  是一家专业从事鸭类、鹅类、鸭副产品和素食产品等熟卤制品生产的品牌企业",
        type:"卤菜",
        distance:"100m",
        comment:100,
        see:110
      },
      {
        id: 1,
        logoUrl: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3314349138,2807880508&fm=23&gp=0.jpg",
        name: "周黑鸭1",
        desc: "湖品生产的品牌企业",
        type: "卤菜",
        distance: "100m",
        comment: 100,
        see: 110
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getShop();
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
  /**
   * 获取店铺信息数据
   */
  getShop:function(){
    var currentPage = this.data.shopPageInfo.currentPage + 1
    //调用后台接口获取数据
    var data = {
      shopCount:100,
    }
    var that = this
    this.setData({
      'shopPageInfo.shopCount':100,
      'shopPageInfo.currentPage': currentPage
    })
    console.log(this.data.shopPageInfo)
  },
  /**
   * 点击店铺列表
   */
  shopDetail: function (event){
    console.log(event)
    var shopId = event.currentTarget.id
    wx.navigateTo({
      url: "/pages/detail/detail?shopId=" + shopId
    })
  },
  /**
   * 点击查看更多
   */
  moreShopInfo:function(){
    var totalShopPage = this.data.shopPageInfo.shopCount / this.data.shopPageInfo.shopPageSize
    console.log("总的页数："+totalShopPage)
    console.log("当前的页码：" + this.data.shopPageInfo.currentPage)
  }
})
