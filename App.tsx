import React from 'react'
import {SafeAreaView, useColorScheme} from 'react-native'
import {Colors} from 'react-native/Libraries/NewAppScreen'
import RootRouter from './src/router/root'
import {rootStore} from './src/store'
import {Provider} from 'react-redux'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark'
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  }
  return (
    <SafeAreaView style={backgroundStyle}>
      <Provider store={rootStore}>
        <RootRouter />
      </Provider>
    </SafeAreaView>
  )
}

export default App
