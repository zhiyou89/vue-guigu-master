/*
直接更新state的多个方法的对象
 */
import Vue from 'vue'
import {
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  RECEIVE_INFO,
  INREMENT_GOODS_COUNT,
  DEREMENT_GOODS_COUNT,
  CLEAR_CART
} from './mutation-types'

export default {
  [RECEIVE_GOODS] (state, {goods}) {
    state.goods = goods
  },
  [RECEIVE_RATINGS] (state, {ratings}) {
    state.ratings = ratings
  },
  [RECEIVE_INFO] (state, {info}) {
    state.info = info
  },
  [INREMENT_GOODS_COUNT] (state, {food}) {
    if (food.count) {
      food.count++
    } else {
      Vue.set(food, 'count', 1)
      state.cartFoods.push(food)
    }
  },
  [DEREMENT_GOODS_COUNT] (state, {food}) {
    if (food.count) {
      food.count--
      if (food.count === 0) {
        state.cartFoods.splice(state.cartFoods.indexOf(food), 1)
      }
    }
  },
  [CLEAR_CART] (state) {
    console.log(state.cartFoods)
    state.cartFoods.forEach(food => food.count = 0)
    state.cartFoods = []
  }
}
