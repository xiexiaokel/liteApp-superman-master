// components/circleCountDown/circleCountDown.js
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
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    startTime:4,
  },
  ready: function () {
    this.drawRange();
  },
  /**
   * 组件的方法列表
   */
  methods: {
    drawRange: function (e) {
      const { cvsWidth, cvsHeight } = this.data;
      const radius = cvsWidth / 2, positionX = cvsWidth / 2, positionY = cvsHeight / 2;
      const startAngle = -1 / 2 * Math.PI;
      const maxAngle = 1.5 * Math.PI;
      const ctx = wx.createCanvasContext('myCanvas', this)
      ctx.setFillStyle('#f0f0f0')
      ctx.arc(positionX, positionY, radius, 0, 2 * Math.PI);
      ctx.fill();
      if(1<e<=4){
      ctx.beginPath();
      ctx.setFillStyle('#ffa800');
      ctx.arc(positionX, positionY, radius, startAngle, e/4 * maxAngle, false);
      ctx.lineTo(cvsHeight / 2, cvsWidth / 2);
      ctx.fill();
      }
      else{
        ctx.beginPath();
        ctx.setFillStyle('#ffa800');
        ctx.arc(positionX, positionY, radius, startAngle, -e / 4 * maxAngle, false);
        ctx.lineTo(cvsHeight / 2, cvsWidth / 2);
        ctx.fill();
      }

      ctx.beginPath();
      ctx.setFillStyle('#fff')
      ctx.arc(positionX, positionY, 0.9 * radius, 0, 2 * Math.PI);
      ctx.fill();
      ctx.beginPath();
      ctx.setFontSize(100)
      ctx.setFillStyle('#ffa800');
      ctx.setTextAlign('center')
      ctx.fillText(9, cvsWidth / 2, cvsHeight / 1.3);
      ctx.draw();
    }
  }
})
