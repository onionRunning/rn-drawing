import {Dimensions} from 'react-native'
const {width, height} = Dimensions.get('window')

// 屏幕的宽度/高度
export const clientWidth = width
export const clientHeight = height

// 定义绘画类型
export enum DRAWING_TYPE {
  // 绘画直线
  line = 'DRAWING_LINE',
  // 绘画圆
  circle = 'DRAWING_CIRCLE',
  // 绘画曲线
  curve = 'DRAWING_CURVE',
  // 替代颜色
  replace = 'REPLACE_COLOR',
  // 擦除
  erase = 'DRAWING_ERASE',
  // 清除
  clear = 'DRAWING_CLEAR',
}

// 定义色板颜色集合 100个
export const COLOR_BOARD = [
  0xffffff, 0x9cc2ea, 0xa5d5f2, 0xa9def5, 0xade6f9, 0xb0effc, 0xb4f7ff, 0xb3f3f7, 0xb2eae5,
  0xb1e5dc, 0xb0e0d3, 0xa5dbc9, 0xaed7bf, 0xd1d6b4, 0xf2d9b3, 0xe8cbaf, 0xddbcab, 0xd2ada6,
  0xc8a2b4, 0xcaa8c4, 0xccaed4, 0xdbc8ea, 0xd8daf2, 0xcdc7ea, 0xcdb4e3, 0xc5c5c5, 0x4c6acf,
  0x5996dc, 0x63bdea, 0x68cff1, 0x6be0f9, 0x6ff1ff, 0x70e8ee, 0x70dfdd, 0x70ccb6, 0x70b78b,
  0x6fad74, 0x94b172, 0xb7b570, 0xe7b96b, 0xdeae6a, 0xca9567, 0xb37964, 0xa76a63, 0x9b5a62,
  0x9c6085, 0x9e69b4, 0x956bc2, 0x8b6dd0, 0xa06dcf, 0x72706f, 0x1f00c1, 0x1e52ca, 0x1c7ed5,
  0x15a7e3, 0x00cbf1, 0x00ecff, 0x16dadd, 0x2ac7b7, 0x34b38d, 0x3ba05e, 0x368f00, 0x6e9200,
  0x9f9700, 0xdd9c00, 0xcc8a00, 0xb97500, 0xa45e00, 0x904618, 0x802d22, 0x6e2a4e, 0x5b266f,
  0x481e8d, 0x6100a8, 0x7600c1, 0x000000, 0x1a1577, 0x1a377c, 0x195082, 0x18688a, 0x177d92,
  0x188b90, 0x1f817b, 0x247764, 0x286b49, 0x2b6128, 0x2a5800, 0x475e00, 0x6f6100, 0x8a6200,
  0x805700, 0x754a00, 0x693b00, 0x5d2c0f, 0x541c17, 0x481b33, 0x3b1947, 0x301859, 0x3f0269,
  0x4c0078,
]
