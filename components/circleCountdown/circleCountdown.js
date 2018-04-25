/* 组件说明 */
/* cvsWidth,cvsHeight 分别为画布的宽度和高度，
limitTime：为规定的游戏倒计时共计时间;
currTime:为倒计时开始的时候的秒数，表示从哪一秒开始倒计时，
stopCount:是否立即停止倒计时

limitTime和currTime必须为相同的时间数字，否则效果会有差异,
timeOVer事件是暴露给外部判断倒计时是否结束的事件 */





Component({
  /**
   * 组件的属性列表
   */
  properties: {
    cvsWidth: {
      type: String,
    },
    cvsHeight: {
      type: String,
    },
    limitTime: {
      type: String
    },
    currTime: {
      type: String
    },
    showCount: {
      type: Boolean
    },
    stopCount:{
      type:Boolean
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    limitTime: 10,
    currTime: 10,
    stopCount:false,
  },
  ready: function () {
    let { currTime, limitTime, } = this.data;
    const countdown = setInterval(() => {
      const {stopCount} = this.data;
      const currAngle = (limitTime - currTime) / limitTime * 2 * Math.PI;
      this.setData({
        currTime,
      })
      this.drawRange(currAngle, currTime);
      currTime = currTime - 1;
      if (stopCount==true) {
        this.drawRange(currAngle, currTime);
        clearInterval(countdown);
      }
      if (currTime < 0) {
        this.setData({
          currTime: 0,
        })
        this.drawRange(currAngle, currTime);
        clearInterval(countdown);
        this.timeOver();
      }
      
    }, 1000)
  },
  /**
   * 组件的方法列表
   */
  methods: {
    //画布方法
    drawRange: function (currAngle, time) {
      const { cvsWidth, cvsHeight, } = this.data;
      const radius = cvsWidth / 2, positionX = cvsWidth / 2, positionY = cvsHeight / 2;
      const startAngle = -1 / 2 * Math.PI;
      const maxAngle = 1.5 * Math.PI;
      const ctx = wx.createCanvasContext('myCanvas', this)
      ctx.setFillStyle('#f0f0f0')
      ctx.arc(positionX, positionY, radius, 0, 2 * Math.PI);
      ctx.fill();
      ctx.save();
      ctx.beginPath();
      ctx.setFillStyle('#ff8a00');
      ctx.arc(positionX, positionY, radius, startAngle, maxAngle - currAngle, false);
      ctx.lineTo(cvsHeight / 2, cvsWidth / 2);
      ctx.fill();
      ctx.beginPath();
      ctx.setFillStyle('#fff')
      ctx.arc(positionX, positionY, 0.8 * radius, 0, 2 * Math.PI);
      ctx.fill();
      ctx.save();
      ctx.draw();
    },
    //倒计时结束触发事件
    timeOver:function(){
      console.log('倒计时结束');
      this.triggerEvent('timeOver');
    }
  }
})
