Component({
  properties: {
    /*
      九宫格主数据来源
      接受类型：数组
      默认值：[]
      示例：[{
        icon: '',   // 可为空
        text: '',  // 可为空
        link: ''   // 可为空
      }]
    */
    list: {
      type: Array,
      value: []
    },
    /*
      九宫格主数据中，如图片链接的变量名不为icon，则需要给此字段传入正确的保存图片链接的变量名
      接受类型：字符串
      默认值：'icon'
    */
    iconKey: {
      type: String,
      value: "icon"
    },
    /*
      九宫格主数据中，如文字的变量名不为text，则需要给此字段传入正确的保存文字的变量名
      接受类型：字符串
      默认值：'text'
    */
    textKey: {
      type: String,
      value: "text"
    },
    /*
      九宫格主数据中，如跳转路径的变量名不为link，则需要给此字段传入正确的保存跳转路径的变量名
      接受类型：字符串
      默认值：'link'
    */
    linkKey: {
      type: String,
      value: "link"
    },
  },

  data: {},

  methods: {
    /*
      点击某一项九宫格的跳转方法
      返回值：空
    */
    jumpPage: function (e) {
      if (!e.currentTarget.dataset.link) {
        console.error("当前点击九宫格单位未挂载link链接")
        return
      }
      wx.navigateTo({
        url: e.currentTarget.dataset.link
      })
    }
  }
})
