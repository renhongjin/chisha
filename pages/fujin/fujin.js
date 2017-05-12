// fujin.js
//店铺logo的大小
var logoSize = 30

Page({
  /**
   * 页面的初始数据
   */
  data: {
    name:'rhj',
    //地图数据
    centerLatitude: 0.0,
    centerLongitude: 0.0,
    markers: [
      {
        id:0,
        latitude: 30.5672495341,
        longitude: 104.0641307831,
        title:"廖记帮帮鸡",
        iconPath:"/images/toolbar/fujin-click.png",
        width: logoSize,
        height: logoSize
      },
      {
        id: 1,
        latitude: 30.5690601418,
        longitude: 104.0730571747,
        title: "帮鸡",
        iconPath: "/images/toolbar/lj.png",
        width: logoSize,
        height: logoSize
      }
    ]
  },
  /**
   * 视野发生变化时触发
   */
  regionchange(e) {
    var size = this.data.markers.length;
    console.log("size："+size)
  },
  /**
   * 点击标识地点图标点时触发
   */
  markertap(e) {
    //跳转到指定页面
    wx.navigateTo({
      url:"/pages/detail/detail?shopId="
    })
  },
  /**
   * 点击控件时触发
   */
  controltap(e) {
    console.log(e.controlId)
  },
  /**
   * 获取当前位置
   */
  getCurrentLocation: function() {
    var that = this
    wx.getLocation({
      type: 'gcj02',
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy

        //设置当前位置
        that.setData({
          centerLatitude: latitude,
          centerLongitude: longitude
        })
        
      }
    })
  },
  open:function(){
    var that = this
    wx.openLocation({
      latitude: that.data.centerLatitude,
      longitude: that.data.centerLongitude,
      scale: 28
    })
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCurrentLocation();
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
  
  }
})