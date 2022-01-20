import {getStorageData, setStorageData} from './utils'

// app 相关信息
export interface AppInfo {
  // app名字
  name?: string
  // app 版本
  version?: string
}

// 蓝牙ssID相关信息 设备列表
export interface BluetoothDevice {
  // 唯一标识
  ssID?: string
  name?: string
  uuid?: string
  serviceId?: string
  characteristicId?: string
}

// 某设备下的 一页的所有信息 key: ssID-page_num value: DataInfo
// 页数 * 设备数
export interface DataInfo {
  // 轨迹列表 轨迹 + 图片
  trackLists: any[]
  // 当前ssID对应的page
  page: number
  // 当前ssID
  key: string
}

// 全局的数据有 currentSsID + currentPage

class OperateStorageDataInfo {
  // 获取app 相关信息
  getAppInfoApi = () => {
    return getStorageData('app_info')
  }
  // 储存app 相关信息
  saveAppInfoApi = (info: AppInfo) => {
    setStorageData('app_info', info)
  }

  // 储存指定ssID 某页面的 轨迹相关信息
  saveDrawPageInfos = (params: DataInfo) => {
    setStorageData(`${params.key}_${params.page}`, params.trackLists)
  }

  // 获取指定ssID 某页面下的 所有轨迹信息
  getDrawPageInfos = (params: Omit<DataInfo, 'trackLists'>) => {
    return getStorageData(`${params.key}_${params.page}`)
  }
}

export default new OperateStorageDataInfo()
