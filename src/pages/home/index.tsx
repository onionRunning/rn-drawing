import React from 'react'
import {Button, View} from 'react-native'
import EXCanvas from '@src/components/canvas'
import {styles} from './utils'
import {useDispatch, useSelector} from 'react-redux'
import {RootStore} from '@src/store'
import {getEllipticSetPoints} from '@src/tools/utils'

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
    getEllipticSetPoints({startPoints: {x1: 2, y1: 4}, endPoints: {x2: 8, y2: 16}, color: '#f0f'}),
    getEllipticSetPoints({
      startPoints: {x1: 12, y1: 14},
      endPoints: {x2: 18, y2: 26},
      color: '#f0f',
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
