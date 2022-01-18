/**
 *
 * @param str 序列化字段字符串类型
 * @returns string | object
 */
export const getJsonString = (str: string) => {
  let isObject = true
  try {
    JSON.parse(str)
  } catch {
    isObject = false
  }
  return isObject ? JSON.parse(str) : str
}
