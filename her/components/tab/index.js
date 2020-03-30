Component({
  lifetimes: {
    ready: function () {
      this.setLineCss(0)
    }
  },
  properties: {
    /*
      tab主数据来源
      接受类型：数组
      默认值：[]
      示例：['新闻', '动态'] 或 [{title: '新闻'}, {title: '动态'}] // 需要注意的是，如果是第二种方式传值，必须要传入itemKey
    */
    list: {
      type: Array,
      value: []
    },
    /*
      当tab接收到对象数组类型的list时，则需要给此字段传入保存有tab字面量的变量名
      接受类型：字符串
      默认值：''
      示例：'title'
    */
    itemKey: {
      type: String,
      value: ''
    },
    /*
      tab背景颜色（可接受十六进制、色值名等值，同css的color接受值保持一致）
      接受类型：字符串
      默认值：'#fff'
    */
    bgColor: {
      type: String,
      value: '#fff'
    },
    /*
      tab文字颜色（可接受十六进制、色值名等值，同css的color接受值保持一致）
      接受类型：字符串
      默认值：'#333'
    */
    textColor: {
      type: String,
      value: '#333'
    },
    /*
      tab底线颜色（可接受十六进制、色值名等值，同css的color接受值保持一致）
      接受类型：字符串
      默认值：'#333'
    */
    lineColor: {
      type: String,
      value: '#333'
    }
  },

  data: {
    selIndex: 0,
    scrollLeft: 0
  },

  methods: {
    /*
      点击tab的方法，为父类页面提供changeTab方法供使用，并携带点击的tabIndex与item给父类页面
      返回值：空
    */
    changeTab: function (e) {
      if (this.data.selIndex === e.currentTarget.dataset.index) {
        return
      }
      this.setLineCss(e.currentTarget.dataset.index)
      this.setData({
        selIndex: e.currentTarget.dataset.index
      })
      let obj = {
        index: e.currentTarget.dataset.index,
        item: e.currentTarget.dataset.item
      }
      this.triggerEvent('changeTab', obj, {})
    },
    /*
      切换tab的方法，为父类页面提供setTab方法供使用，接受到索引值改变tab
      接收值：选项卡下标
      返回值：空
    */
    setTab: function (e) {
      this.setData({
        selIndex: Number(e)
      })
      this.setLineCss(Number(e))
    },
    /*
      tab超过一屏后滑动事件
    */
    scroll: function (e) {
      this.setData({
        scrollLeft: e.detail.scrollLeft
      })
    },
    /*
      修改线x值
    */
    setLineCss: function (index) {
      const self = this
      wx.createSelectorQuery().in(self).select('.tabItem' + (index + 1)).boundingClientRect(function (rect) {
        let animation = wx.createAnimation({
          duration: 200,
          timingFunction: 'ease',
          delay: 100
        })
        animation.translate(rect.left + self.data.scrollLeft).width(rect.width - 20).step()
        self.setData({
          lineAnimation: animation.export()
        })
      }).exec()
    }
  }
})
