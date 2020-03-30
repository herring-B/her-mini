// her/components/input/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindfocus: function (e) {
      console.log(e)
    },
    /*
      修改左侧线动画
    */
    setBorderBottomAnimationView_rightAnimation: function (index) {
      const self = this
      wx.createSelectorQuery().in(self).select('.borderBottomAnimationView_left').boundingClientRect(function (rect) {
        let animation = wx.createAnimation({
          duration: 200,
          timingFunction: 'ease',
          delay: 0
        })
        animation.left('-50%').step()
        self.setData({
          borderBottomAnimationView_leftAnimation: animation.export()
        })
      }).exec()
    }
  }
})
