// pages/mine/mine.js
const app = getApp();
const imgHost = app.globalData.imgHost;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    headPic:`${imgHost}/images/head_pic.png`,
    complanitIcon:`${imgHost}/images/complaint.png`,
    wxIcon:`${imgHost}/images/wx_pink.png`,
    fightIcon:`${imgHost}/images/fighting_pink.png`,
    onlineIcon:`${imgHost}/images/online.png`,
    nickName:'Ruby',
    prizeNum:'55',
    onlineNum:'yoyoyo'
  },
  complanitClick:function(){
    wx.navigateTo({
      url: '../complanit/complanit',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  
  }
})