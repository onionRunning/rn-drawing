import {StyleSheet} from 'react-native'
import {clientWidth} from '@src/global/const'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btn: {
    width: '50%',
    marginTop: 20,
    marginLeft: clientWidth / 4,
  },
})
