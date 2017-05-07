import { pre, content, post } from '../fixtures'

import * as types from '../types'

export default function (state = [], action) {
  switch (action.type) {
    case types.GET_BLOCKS:
      return [{ pre, content, post }]
    case types.ADD_BLOCK:
      return state.concat(action.block)
    default:
      return state
  }
}
