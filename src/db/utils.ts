import AsyncStorage from '@react-native-async-storage/async-storage'
import {getJsonString} from '../global/utils'

// 设置数据
export const setStorageData = (key: string, value: unknown) => {
  AsyncStorage.setItem(key, JSON.stringify(value))
}

// 数据读取
export const getStorageData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key)
    return getJsonString(value ?? '')
  } catch (e) {
    //
  }
}

// 清除数据
export const removeStorageData = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key)
  } catch (e) {
    //
  }
}

// 获取所有建～
export const getAllKeys = async () => {
  let keys = []
  try {
    keys = await AsyncStorage.getAllKeys()
    return keys
  } catch (e) {
    //
  }
}

interface Temp {
  [p: string]: any
}
// 批量获取键值对
export const getMultipleData = async (keys: string[]) => {
  try {
    const value = await AsyncStorage.multiGet(keys)
    const temp = {} as Temp
    value.forEach(item => {
      temp[item[0]] = getJsonString(item[1]!)
    })
    return temp
  } catch (e) {
    //
  }
}
