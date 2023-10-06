import React, { useEffect } from 'react'
import { ActivityIndicator, Image, StatusBar, View } from 'react-native'
import { useTheme } from '../../hooks'
import { Brand } from '../../components'
import { setDefaultTheme } from '../../store/theme'
const Startup = ({ navigation }) => {
  const { Layout, Gutters, Images } = useTheme()
  const init = async () => {
    await new Promise(resolve =>
      setTimeout(() => {
        resolve(true)
      }, 2000),
    )
    await setDefaultTheme({ theme: 'default', darkMode: null })
    navigation.reset({
      index: 0,
      routes: [{ name: 'HomePage' }],
    })
  }
  useEffect(() => {
    init()
  }, [])
  return (
    <View
      style={[Layout.fill, Layout.colCenter, { backgroundColor: '#177B57' }]}
    >
      <Brand />
    </View>
  )
}
export default Startup
