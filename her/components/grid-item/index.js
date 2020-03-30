// her-components/grid-item/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    icon: {
      type: String,
      value: ""
    },
    img: {
      type: String,
      value: ""
    },
    text: {
      type: String,
      value: ""
    },
    link: {
      type: String,
      value: ""
    }
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
    /*
          点击某一项九宫格的跳转方法
          返回值：空
        */
    jumpPage: function () {
      if (!this.data.link) {
        console.error("当前点击九宫格单位未挂载link链接")
        return
      }
      wx.navigateTo({
        url: this.data.link
      })
    }
  }
})
