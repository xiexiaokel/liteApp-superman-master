// components/mainNav/mainNav.js
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    page: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    tabList: [
      { key: 'rank', id: '1', text: '排行榜', imgUrl: `${app.globalData.imgHost}/images/rank_default.png`, imgSelected: `${app.globalData.imgHost}/images/rank_active.png`, isChecked: true },
      { key: 'prize', id: '2', text: '奖品列表', imgUrl: `${app.globalData.imgHost}/images/prize_default.png`, imgSelected: `${app.globalData.imgHost}/images/prize_active.png`, isChecked: false },
      { key: 'mine', id: '3', text: '个人中心', imgUrl: `${app.globalData.imgHost}/images/mine_default.png`, imgSelected: `${app.globalData.imgHost}/images/mine_active.png`, isChecked: false }
    ]
  },

  /**
   * 组件的方法列表
   */
  ready: function (e) {
    const { page, tabList } = this.data;
    tabList.forEach(item => {
      item.key == page ? item.isChecked = true : item.isChecked = false;

    })
    this.setData({
      tabList: tabList
    })
  },
  methods: {
    selectItem: function (e) {
      console.log(e);
      const newTabList = this.data.tabList;
      const currId = e.currentTarget.dataset.id;
      newTabList.forEach(function (item, index) {
        if (item.id == currId) {
          item.isChecked = true;
        } else {
          item.isChecked = false;
        }
      })
      this.setData({
        tabList: newTabList
      }, () => {
        switch (currId) {
          case '1':
            wx.navigateTo({
              url: '../rank/rank',
            })
            break;
          case '2':
            wx.navigateTo({
              url: '../prize/prize',
            })
            break;
          case '3':
            wx.navigateTo({
              url: '../mine/mine',
            })
            break;
        }
      })
    }
  }
})
