import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import {
  axiosGet,
  axiosPost,
  axiosDelete
} from "@/api/request.js"
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    token: '2318710e88ea4e9db3114e160b900aaf',
    list: [],
    inputvalue: 'aaa',
  },
  mutations: {
    intList(content, list) {
      console.log(content)
      content.list = list
    },
    setInputValue(state, value) {
      console.log(state)
      state.inputvalue = value
    },
    axiosAdd(state, value) {
      console.log(state)
      const obj = {
        reportId: state.reportId++,
        reportName: state.inputvalue
      }
      state.list.push(obj)
      state.inputvalue = ''
    },
    btn(state, key) {
      console.log(state.key)
      state.key = key
      if (state.key == 0) {
        state.inputvalue = '我是a按钮'
        state.list = state.list.filter(i => i.reportId)
      } else if (state.key == 1) {
        state.inputvalue = '我是b按钮'
        state.list = state.list.filter(i => i.reportId)
      } else if (state.key == 2) {
        state.list = state.list.filter(i => i.reportId > 123)
      }

    }
  },
  actions: {
    pro(content) {
      axiosGet().then((response) => {
        console.log(response)
        content.commit("intList", response.datas)
      })
    }
  }
})
