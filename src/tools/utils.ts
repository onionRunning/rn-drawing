import {DRAWING_TYPE} from '../global/const'

export interface EllipticPoints {
  startPoints: {
    x1: number
    y1: number
  }
  endPoints: {
    x2: number
    y2: number
  }
  color: string
}
// 获取椭圆集合点
export const getEllipticSetPoints = (info: EllipticPoints) => {
  const points = []
  const {startPoints, endPoints, color} = info
  const {x1, y1} = startPoints
  const {x2, y2} = endPoints

  const aa = (x2 - x1) / 2
  const bb = (y2 - y1) / 2

  const xc = x1 + aa
  const yc = y1 + bb

  let ix = 0
  let iy = bb
  let px = 0
  let py = aa * aa * iy
  let pp = Math.round(bb * bb - aa * aa * bb + 0.25 * aa * aa)

  points.push({x: xc + ix, y: yc + iy, color})
  points.push({x: xc + ix, y: yc - iy, color})

  while (px < py) {
    if (pp > 0) {
      pp += 2 * bb * bb * ix - 2 * aa * aa * iy + 3 * bb * bb + 2 * aa * aa
      iy--
    } else {
      pp += 2 * bb * bb * ix + 3 * bb * bb
    }
    ix++
    px = bb * bb * ix
    py = aa * aa * iy

    const temp = [
      {x: xc + ix, y: yc + iy, color},
      {x: xc + ix, y: yc - iy, color},
      {x: xc - ix, y: yc + iy, color},
      {x: xc - ix, y: yc - iy, color},
    ]
    points.push(...temp)
  }

  while (iy > 0) {
    if (pp < 0) {
      pp += bb * bb * (2 * ix + 2) - aa * aa * (2 * iy - 3)
      ix++
    } else {
      pp += 3 * aa * aa - 2 * aa * aa * iy
    }
    iy--

    const temp = [
      {x: xc + ix, y: yc + iy, color},
      {x: xc + ix, y: yc - iy, color},
      {x: xc - ix, y: yc + iy, color},
      {x: xc - ix, y: yc - iy, color},
    ]
    points.push(...temp)
  }
  return {type: DRAWING_TYPE.circle, data: points}
}
