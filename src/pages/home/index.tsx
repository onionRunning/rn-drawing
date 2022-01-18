import React from 'react'
import {Button, View} from 'react-native'
import EXCanvas from '@src/components/canvas'
import {styles} from './utils'
import {useDispatch, useSelector} from 'react-redux'
import {RootStore} from '@src/store'
import {getEllipticSetPoints, getStraightLinePoints} from '@src/tools/utils'

const Home = () => {
  const dispatch = useDispatch()
  const {isDrawing, isInitDrawing} = useSelector((state: RootStore) => state.commonReducer)

  // 开始画画
  const drawPage = () => {
    dispatch({type: 'START_DRAWING', payload: {isDrawing: true}})
  }
  // 清除画布
  const clearDraw = () => {
    dispatch({type: 'INIT_DRAWING'})
  }

  // 点集合
  const points = [
    getEllipticSetPoints({
      startPoints: {x1: 1, y1: 1},
      endPoints: {x2: 30, y2: 30},
      color: '#ff0',
    }),
    getStraightLinePoints({
      startPoints: {x1: 0, y1: 0},
      endPoints: {x2: 32, y2: 32},
      color: '#f0f',
    }),
    getStraightLinePoints({
      startPoints: {x1: 32, y1: -1},
      endPoints: {x2: -1, y2: 32},
      color: '#00f',
    }),
  ]
  return (
    <View style={styles.container}>
      <EXCanvas isInit={isInitDrawing} isStart={isDrawing} points={points} />
      <View style={styles.btn}>
        <Button color="#f0f" onPress={drawPage} title="开始画画" />
      </View>
      <View style={styles.btn}>
        <Button color="#00f" onPress={clearDraw} title="清除画布" />
      </View>
    </View>
  )
}

export default Home
