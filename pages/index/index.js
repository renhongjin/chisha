//index.js
//返回的数据
var shops = {
  shopTotalCount:3,
  shopDatas:[
  {
      id: 0, logoUrl:"https://renhongjin.org/zhy.jpg",
    name:"周黑鸭",
    desc:"湖北周黑鸭食品工业园有限公司成立于湖北武汉，“会娱乐更快乐”是周黑鸭的品牌理念。努力成为年轻、有活力兼具文化底蕴、生活品味的品牌是周黑鸭的品牌目标。周黑鸭相信，可口、卫生、方便的产品，能够为消费者带来更大的乐趣和更好的体验。",
    type:"卤菜",
    distance:"100m",
    comment:0,
    see:10
  },
  {
    id: 1,
    logoUrl: "https://renhongjin.org/zxjp.jpg",
    name: "正新鸡排",
    desc: "海正新食品有限公司成立于2006年，是专业从事休闲餐饮连锁店的开发、投资与营运的综合性管理企业。自2000年，公司联合创始人陈传武董事长在浙江温州开设第一家正新食品店。历经16年的飞速发展，我们已建立起完善的新品研发、仓储配送和终端销售体系。",
    type: "炸鸡排",
    distance: "100m",
    comment: 1,
    see: 9
  },
  {
    id: 2,
    logoUrl: "https://renhongjin.org/xjgcc.jpg",
    name: "小郡肝串串",
    desc: "适宜家庭聚会、朋友聚餐、休闲小憩、随便吃吃",
    type: "串串香",
    distance: "100m",
    comment: 1,
    see: 9
  }
]}
var mores = {
  shopTotalCount: 3,
  shopDatas: [
    {
      id: 0,
      logoUrl: "https://renhongjin.org/zxjp.jpg",
      name: "正新鸡排",
      desc: "海正新食品有限公司成立于2006年，是专业从事休闲餐饮连锁店的开发、投资与营运的综合性管理企业。自2000年，公司联合创始人陈传武董事长在浙江温州开设第一家正新食品店。历经16年的飞速发展，我们已建立起完善的新品研发、仓储配送和终端销售体系。",
      type: "炸鸡排",
      distance: "100m",
      comment: 1,
      see: 9
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
