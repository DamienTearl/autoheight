<template>
  <el-row>
    <table>
      <tr>
        <td class='searchDes'>请选择机构：</td>
        <td>
          <el-cascader
            :options="options"
            :show-all-levels="false"
            :filterable="true"
            v-model="selectOption"
          ></el-cascader>
        </td>
        <td class='searchDes'>
          请选择日期：
        </td>
        <td>
          <el-date-picker
            v-model="chooseDate"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
        </td>
      </tr>
    </table>
    <!-- 请选择机构：<el-cascader
      :options="options"
      :show-all-levels="false"
      :filterable="true"
      v-model="selectOption"
    ></el-cascader>
    请选择日期：<el-date-picker
      v-model="chooseDate"
      type="date"
      placeholder="选择日期">
    </el-date-picker> -->
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      options: [],
      // [{
      //   value: 'zhinan',
      //   label: '指南',
      //   children: [{
      //     value: 'shejiyuanze',
      //     label: '设计原则',
      //     children: [{
      //       value: 'yizhi',
      //       label: '一致'
      //     }, {
      //       value: 'fankui',
      //       label: '反馈'
      //     }, {
      //       value: 'xiaolv',
      //       label: '效率'
      //     }, {
      //       value: 'kekong',
      //       label: '可控'
      //     }]
      //   }, {
      //     value: 'daohang',
      //     label: '导航',
      //     children: [{
      //       value: 'cexiangdaohang',
      //       label: '侧向导航'
      //     }, {
      //       value: 'dingbudaohang',
      //       label: '顶部导航'
      //     }]
      //   }]
      // }, {
      //   value: 'zujian',
      //   label: '组件',
      //   children: [{
      //     value: 'basic',
      //     label: 'Basic',
      //     children: [{
      //       value: 'layout',
      //       label: 'Layout 布局'
      //     }, {
      //       value: 'color',
      //       label: 'Color 色彩'
      //     }, {
      //       value: 'typography',
      //       label: 'Typography 字体'
      //     }, {
      //       value: 'icon',
      //       label: 'Icon 图标'
      //     }, {
      //       value: 'button',
      //       label: 'Button 按钮'
      //     }]
      //   }, {
      //     value: 'form',
      //     label: 'Form',
      //     children: [{
      //       value: 'radio',
      //       label: 'Radio 单选框'
      //     }, {
      //       value: 'checkbox',
      //       label: 'Checkbox 多选框'
      //     }, {
      //       value: 'input',
      //       label: 'Input 输入框'
      //     }, {
      //       value: 'input-number',
      //       label: 'InputNumber 计数器'
      //     }, {
      //       value: 'select',
      //       label: 'Select 选择器'
      //     }, {
      //       value: 'cascader',
      //       label: 'Cascader 级联选择器'
      //     }, {
      //       value: 'switch',
      //       label: 'Switch 开关'
      //     }, {
      //       value: 'slider',
      //       label: 'Slider 滑块'
      //     }, {
      //       value: 'time-picker',
      //       label: 'TimePicker 时间选择器'
      //     }, {
      //       value: 'date-picker',
      //       label: 'DatePicker 日期选择器'
      //     }, {
      //       value: 'datetime-picker',
      //       label: 'DateTimePicker 日期时间选择器'
      //     }, {
      //       value: 'upload',
      //       label: 'Upload 上传'
      //     }, {
      //       value: 'rate',
      //       label: 'Rate 评分'
      //     }, {
      //       value: 'form',
      //       label: 'Form 表单'
      //     }]
      //   }, {
      //     value: 'data',
      //     label: 'Data',
      //     children: [{
      //       value: 'table',
      //       label: 'Table 表格'
      //     }, {
      //       value: 'tag',
      //       label: 'Tag 标签'
      //     }, {
      //       value: 'progress',
      //       label: 'Progress 进度条'
      //     }, {
      //       value: 'tree',
      //       label: 'Tree 树形控件'
      //     }, {
      //       value: 'pagination',
      //       label: 'Pagination 分页'
      //     }, {
      //       value: 'badge',
      //       label: 'Badge 标记'
      //     }]
      //   }, {
      //     value: 'notice',
      //     label: 'Notice',
      //     children: [{
      //       value: 'alert',
      //       label: 'Alert 警告'
      //     }, {
      //       value: 'loading',
      //       label: 'Loading 加载'
      //     }, {
      //       value: 'message',
      //       label: 'Message 消息提示'
      //     }, {
      //       value: 'message-box',
      //       label: 'MessageBox 弹框'
      //     }, {
      //       value: 'notification',
      //       label: 'Notification 通知'
      //     }]
      //   }, {
      //     value: 'navigation',
      //     label: 'Navigation',
      //     children: [{
      //       value: 'menu',
      //       label: 'NavMenu 导航菜单'
      //     }, {
      //       value: 'tabs',
      //       label: 'Tabs 标签页'
      //     }, {
      //       value: 'breadcrumb',
      //       label: 'Breadcrumb 面包屑'
      //     }, {
      //       value: 'dropdown',
      //       label: 'Dropdown 下拉菜单'
      //     }, {
      //       value: 'steps',
      //       label: 'Steps 步骤条'
      //     }]
      //   }, {
      //     value: 'others',
      //     label: 'Others',
      //     children: [{
      //       value: 'dialog',
      //       label: 'Dialog 对话框'
      //     }, {
      //       value: 'tooltip',
      //       label: 'Tooltip 文字提示'
      //     }, {
      //       value: 'popover',
      //       label: 'Popover 弹出框'
      //     }, {
      //       value: 'card',
      //       label: 'Card 卡片'
      //     }, {
      //       value: 'carousel',
      //       label: 'Carousel 走马灯'
      //     }, {
      //       value: 'collapse',
      //       label: 'Collapse 折叠面板'
      //     }]
      //   }]
      // }, {
      //   value: 'ziyuan',
      //   label: '资源',
      //   children: [{
      //     value: 'axure',
      //     label: 'Axure Components'
      //   }, {
      //     value: 'sketch',
      //     label: 'Sketch Templates'
      //   }, {
      //     value: 'jiaohu',
      //     label: '组件交互文档'
      //   }]
      // }],
      chooseDate: '2018-02-02',
      selectOption: []
    }
  },
  methods: {
    getAgencyData () {
      this.$axios('/agencyData/index')
        .then(res => {
          this.options = this.getOrganData(res.data)
          this.selectedDefault(this.options)
        })
    },
    getOrganData (data) {
      var organData1 = []
      var organData = []
      var arr = []
      for (let i = 0; i < data.length; i++) {
        organData1.push({ label: data[i].prov_name, value: data[i].prov_no, children: [] })
      }
      for (let i = 0; i < organData1.length; i++) {
        let id = organData1[i].value
        for (var j = 0; j < organData1.length; j++) {
          if (id === organData1[j].value) {
            arr.push(j)
            break
          }
        }
      }
      // console.log(arr)
      var newArr = Array.from(new Set(arr))
      for (let i = 0; i < newArr.length; i++) {
        let j = newArr[i]
        organData.push(organData1[j])
      }
      for (let i = 0; i < data.length; i++) {
        var parentId = data[i].prov_no
        for (let j = 0; j < organData.length; j++) {
          if (organData[j].value === parentId) {
            organData[j].children.push({ value: data[i].brn_org_no, label: data[i].brn_org_name })
          }
        }
      }
      return organData
    },
    selectedDefault (val) {
      if (val.length) {
        this.selectOption.push(val[0].value)
        if (val[0].children) {
          this.selectedDefault(val[0].children)
        }
      }
    }
  },
  created () {
    this.getAgencyData()
  }
}
</script>

<style lang="scss">
.searchDes {
  font-size: 0.14rem;
}
.searchDes:nth-child(3) {
  padding-left: 0.3rem
}
.el-row {
  text-align: left
}
.el-cascader-menu__item {
  color: $fontC;
}
.el-cascader-menu__item.is-active {
  color: $tabC;
}
.el-date-table td.current:not(.disabled) span {
  background-color: $tabC;
}
.el-cascader__label {
  color: $fontC!important;
}
.el-input--suffix .el-input__inner,.el-input--prefix .el-input__inner {
  background-color: $moduleBgc;
  color: $fontC;
  border: 1px solid $dateC;
}
.el-popper[x-placement^=bottom] .popper__arrow::after {
  // border: 0;
  border-bottom-color: $moduleBgc;
}
.el-cascader-menu {
  background-color: $moduleBgc;
  color: $fontC;
}
.el-cascader-menu__item:focus:not(:active), .el-cascader-menu__item:hover {
  background-color: $tabBgc;
}

.el-picker-panel.el-date-picker.el-popper {
  background-color: $moduleBgc;
  .el-date-picker__header button, .el-date-picker__header-label {
    color: $fontC;
  }
  th {
    color: $fontC;
  }
  .prev-month, .next-month {
    color: $dateC;
  }
  .available {
    color: $fontC;
  }
  .prev-month:hover, .next-month:hover, .available:hover {
    color: $tabC
  }
  .el-month-table td .cell:hover, .el-month-table td.current:not(.disabled) .cell,
  .el-year-table td .cell:hover, .el-year-table td.current:not(.disabled) .cell {
    color: $tabC
  }
}
.el-date-table td.today span {
  color: $tabC;
}
</style>
