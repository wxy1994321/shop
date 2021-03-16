import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartlist: []
  },
  mutations: {
    addnumber(state, payload) {
      payload.count++;
    },
    addnewlist(state, payload) {
      payload.count = 1;
      state.cartlist.push(payload)
    },
    selectall(state, value) {
      state.cartlist.forEach(item => {
        item.checked = value
      })
    },
    item_checked(state, payload) {
      state.cartlist[payload.index].value = payload.value
    }

  },
  actions: {
    addcart(context, payload) {
      return new Promise((res) => {
        let obj = null;
        context.state.cartlist.forEach(item => {
          if (item.iid == payload.iid) {
            obj = item
          }
        })
        if (obj) {
          context.commit('addnumber', obj)
          res('当前商品数量+1')
        } else {
          context.commit('addnewlist', payload)
          res('添加了新的商品')
        }
      })
    }
  },
  getters: {
    cartlist_length(state) {
      return state.cartlist.length
    },
    checkall(state, getters) {
      if (getters.cartlist_length == 0) {
        return false
      } else {
        let res = state.cartlist.every(item => {
          return item.checked == true
        })
        return res ? true : false
      }
    },
    total(state) {
      let arr = state.cartlist.filter(item => {
        return item.checked == true
      })
      return arr.reduce((a, b) => {
        return a + parseFloat(b.realprice * b.count)
      }, 0).toFixed(2)
    },
  }

})