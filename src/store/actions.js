/*
通过mutation间接更新state的多个方法的对象
 */
import {
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  RECEIVE_INFO,
  INREMENT_GOODS_COUNT,
  DEREMENT_GOODS_COUNT,
  CLEAR_CART
} from './mutation-types'
import {
  reqShopInfo,
  reqShopRatings,
  reqShopGoods
} from '../api'

export default {
  async getShopInfo ({commit}) {
    const result = await reqShopInfo()
    if (result.code === 0) {
      const info = result.data
      commit(RECEIVE_INFO, {info})

    }
  },
  async getShopRatings ({commit}) {
    const result = await reqShopRatings()
    if (result.code === 0) {
      const ratings = result.data
      commit(RECEIVE_RATINGS, {ratings})

    }
  },
  async getShopGoods ({commit}, callBack) {
    const result = await reqShopGoods()
    if (result.code === 0) {
      const goods = result.data
      commit(RECEIVE_GOODS, {goods})
      callBack && callBack()
    }
  },
  updateGoodsCount ({commit}, {isAdd, food}) {
    if (!isAdd) {
      commit(DEREMENT_GOODS_COUNT, {food})
    } else {
      commit(INREMENT_GOODS_COUNT, {food})
    }
  },
  clearCart ({commit}) {
    commit(CLEAR_CART)
  }

}
