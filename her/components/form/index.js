Component({
  properties: {
    /*
      form表单结构来源
      接受类型：数组
      默认值：[]
      示例：[{
        keyVal: '', // 对应表单组件的绑定key，用于接收返回参数时做处理
        type: '', // 可选值：input, textarea, radio, checkbox, switch
      }]
    */
    list: {
      type: Array,
      value: [{
        keyVal: 'aaa',
        type: 'input',
        label: '123',
        placeholder: '提示',
        hint: '提示文字',
        rules: []
      }]
    },
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

  }
})
