// pages/fighting/fighting.js
const app = getApp();
const imgHost = app.globalData.imgHost;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    musicIcon: `${imgHost}/images/music.png`,
    clockIcon: `${imgHost}/images/clock_icon.png`,
    numberList: [{
      num: 1, checked: false
    },
    {
      num: 2, checked: false
    },
    {
      num: 3, checked: false
    },
    {
      num: 4, checked: false
    }, {
      num: 5, checked: false
    }, {
      num: 6, checked: false
    }, {
      num: 7, checked: false
    }, {
      num: 8, checked: false
    }, {
      num: 9, checked: false
    }, {
      num: 10, checked: false
    }, {
      num: 11, checked: false
    }, {
      num: 12, checked: false
    }, {
      num: 13, checked: false
    }, {
      num: 14, checked: false
    }, {
      num: 15, checked: false
    }, {
      num: 16, checked: false
    }, {
      num: 17, checked: false
    }, {
      num: 18, checked: false
    }, {
      num: 19, checked: false
    }, {
      num: 20, checked: false
    }, {
      num: 21, checked: false
    }, {
      num: 22, checked: false
    }, {
      num: 23, checked: false
    }, {
      num: 24, checked: false
    }, {
      num: 25, checked: false
    }],
    resultImg:`${imgHost}/images/success_icon.png`,
    userPic:`${imgHost}/images/head_pic.png`,
    showModal:false,//是否显示挑战结果弹窗
    fightTime:'00′23″0',//挑战用时
    fightResult: false,//挑战结果
  },
  // 点击事件
  itemChecked:function(e){
    const {numberList} = this.data;
    const currentKey = e.currentTarget.dataset.key;
    numberList.forEach((item,index)=>{
      if(currentKey == index){
        item.checked=true;
      }
    })
    this.setData({
      numberList
    })
  },
  getPrize:function(){
    wx.navigateTo({
      url: '../prize/prize',
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
    const {fightResult} = this.data;
    if (fightResult){
      this.setData({
        resultImg:`${imgHost}/images/success_icon.png`
      })
    }else{
      this.setData({
        resultImg: `${imgHost}/images/fail_icon.png`
      })
    }
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