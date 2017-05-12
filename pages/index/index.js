//index.js
//返回的数据
var shops = {
  shopTotalCount:3,
  shopDatas:[
  {
    id:0,
    logoUrl:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3314349138,2807880508&fm=23&gp=0.jpg",
    name:"周黑鸭",
    desc:"湖北周黑鸭管理有限公司[1]  是一家专业从事鸭类、鹅类、鸭副产品和素食产品等熟卤制品生产的品牌企业",
    type:"卤菜",
    distance:"100m",
    comment:100,
    see:110
  }
]}
var mores = {
  shopTotalCount: 3,
  shopDatas: [
    {
      id: 0,
      logoUrl: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3314349138,2807880508&fm=23&gp=0.jpg",
      name: "周黑鸭",
      desc: "湖北周黑鸭管理有限公司[1]  是一家专业从事鸭类、鹅类、鸭副产品和素食产品等熟卤制品生产的品牌企业",
      type: "卤菜",
      distance: "100m",
      comment: 100,
      see: 110
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
    },
    {
      id: 2,
      logoUrl: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3314349138,2807880508&fm=23&gp=0.jpg",
      name: "周黑鸭2",
      desc: "湖品生产的品牌企业",
      type: "卤菜",
      distance: "100m",
      comment: 100,
      see: 110
    }
  ]
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shopPageInfo:{//首页数据分页信息
      shopCount: 0,//数据库中店铺的数量
      currentPage: 0,//当前页
      shopPageSize:1//当前页面展示数量
    },
    shops:[]    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getShop(1, this.data.shopPageInfo.shopPageSize);//初始化的时候获取第一页的店铺数据
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.debug("下拉刷新-开始")
    this.setData({//下拉重置第一页数据
      shops:[]
    })
    this.getShop(1, this.data.shopPageInfo.shopPageSize)
    wx.stopPullDownRefresh()
    console.debug("下拉刷新-完成")
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 获取店铺信息数据
   */
  getShop:function(pageIndex,pageSize){
    console.debug("获取第" + pageIndex + "页，每页" + pageSize+"条数据")
    //调用后台接口获取数据
    var shopDataSize = shops.shopDatas.length
    if (shopDataSize != 0){//返回数据不为空
      this.data.shops = this.data.shops.concat(shops.shopDatas)
      this.setData({
        'shopPageInfo.shopCount': shops.shopTotalCount,//重置数据库总的数量
        'shopPageInfo.currentPage': pageIndex,//重置当前的页面
        'shops': this.data.shops
      })
    }else{
      //请求返回数据为空
      wx.showToast({
        title: '亲，没有更多小吃店',
        icon: 'warn',
        duration: 2000
      })
    }
  },
  /**
   * 点击店铺列表
   */
  shopDetail: function (event){
    console.debug(event)
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
    this.getShop(this.data.shopPageInfo.currentPage+1, this.data.shopPageInfo.shopPageSize)
    console.debug("总的页数："+totalShopPage)
    console.debug("当前的页码：" + this.data.shopPageInfo.currentPage)
  },
  showLoad:function(){
    wx.showLoading({
      title:'加载中',
      mask:true,
    })
  },
  hideLoad:function(){
    wx.hideLoading()
  }
})
