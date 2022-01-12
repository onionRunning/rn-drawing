import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
// 栈路由控制器
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from '../pages/home'

// 栈路由用法
const StackRouter = createNativeStackNavigator()

const RootRouter = () => {
  return (
    <NavigationContainer>
      <StackRouter.Navigator>
        <StackRouter.Screen component={Home} name="首页" />
      </StackRouter.Navigator>
    </NavigationContainer>
  )
}

export default RootRouter
