//index.js
var app = getApp()
//返回的数据
Page({
  /**
   * 页面的初始数据
   */
  data: {
    shopPageInfo:{//首页数据分页信息
      shopCount: 0,//数据库中店铺的数量
      currentPage: 1,//当前页
      shopPageSize:15//当前页面展示数量
    },
    shops:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getShop(this.data.shopPageInfo.currentPage, this.data.shopPageInfo.shopPageSize);//初始化的时候获取第一页的店铺数据
  },
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
   * 获取店铺信息数据
   */
  getShop:function(pageIndex,pageSize){
    var that = this
    console.debug("获取第" + pageIndex + "页，每页" + pageSize+"条数据")
    //调用后台接口获取数据
    var requestData = {
      'page': pageIndex,
      'pageNum': pageSize
    }
    var requestUrl = app.globalData.domain +'/shop/shoplist.html'
    wx.request({
      url: requestUrl, 
      data: requestData,
      method:'POST',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        var returnData = res.data
        if (returnData.status == 0){
          var shopData = returnData.data
          if (shopData != null && shopData.length != 0) {//返回数据不为空
            that.data.shops = that.data.shops.concat(shopData)
            that.setData({
              'shopPageInfo.shopCount': returnData.pageCount,//重置数据库总的数量
              'shopPageInfo.currentPage': returnData.currrentPage,//重置当前的页面
              'shops': that.data.shops
            })
          } else {
            //请求返回数据为空
            wx.showToast({
              title: '亲，没有更多小吃店',
              icon: 'warn',
              duration: 2000
            })
          }
        }else{
          wx.showToast({
            title: '后台系统异常',
            icon: 'warn'
          })
        }
      },
      fail:function(res){
        wx.showToast({
          title: '店铺加载失败',
          icon: 'warn'
        })
      }
    })  
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
    var totalShopPage = Math.ceil(this.data.shopPageInfo.shopCount / this.data.shopPageInfo.shopPageSize)
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
