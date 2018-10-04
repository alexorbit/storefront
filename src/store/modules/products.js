// abstractions for making API requests
import { get } from '@/api'

// initial state
// array of products objects
// https://ecomstore.docs.apiary.io/#reference/products
const state = {
  all: []
}

const mutations = {
  // add product object to array
  addProduct (state, payload) {
    // arbitrary initial properties
    state.all.push({
      _id: payload.id,
      sku: null,
      commodity_type: null,
      name: null,
      i18n: {},
      slug: null,
      available: true,
      visible: true
    })
  },

  // reset entire product body
  initProduct (state, payload) {
    // find product
    let id = payload.id
    let body = {}
    for (let i = 0; i < state.all.length; i++) {
      let product = state.all[i]
      if (product._id === id) {
        // found
        body = product
        break
      }
    }
    if (body) {
      let Body = payload.body
      // ensure to not write new (unused) properties
      Object.keys(Body).forEach((key) => {
        if (key in body) {
          body[key] = Body[key]
        }
      })
    }
  }
}

const getters = {
  products: state => state.all,

  // find product by ID from stored list
  productById: (state) => (id) => {
    let product = state.all.find(product => product._id === id)
    if (product.length) {
      // returns product body from array
      return product[0]
    } else {
      return {}
    }
  }
}

const actions = {
  // init specific product object
  initProduct ({ commit }, payload) {
    // check if product is already loaded
    let id = payload.id
    commit('addProduct', payload)
    // API request
    let callback = (body) => {
      commit('initProduct', { id, body })
    }
    get.product(callback, id)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
