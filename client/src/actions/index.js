import * as types from '../types'

export function get_blocks () {
  return {
    type: types.GET_BLOCKS
  }
}

export function add_block (block) {
  return {
    type: types.ADD_BLOCK,
    block
  }
}
