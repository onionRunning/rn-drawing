import React from 'react'
import {Button, View} from 'react-native'
import EXCanvas from '@src/components/canvas'
import {styles} from './utils'
import {useDispatch, useSelector} from 'react-redux'
import {RootStore} from '~/src/store'

const Home = () => {
  const dispatch = useDispatch()
  const {isDrawing} = useSelector((state: RootStore) => state.commonReducer)

  const drawPage = () => {
    dispatch({type: 'START_DRAWING', payload: {isDrawing: true}})
  }
  return (
    <View style={styles.container}>
      <EXCanvas isStart={isDrawing} />
      <View style={styles.btn}>
        <Button color="#f0f" onPress={drawPage} title="开始画画" />
      </View>
    </View>
  )
}

export default Home
