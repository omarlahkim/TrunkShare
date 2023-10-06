import React, { useEffect } from 'react'
import { ActivityIndicator, Image, StatusBar, View } from 'react-native'
import { useTheme } from '../../hooks'
import { Brand } from '../../components'
import { setDefaultTheme } from '../../store/theme'
import MapView from 'react-native-maps'
const HomePage = ({ navigation }) => {
  const { Layout, Gutters, Images } = useTheme()
  return (
    <View style={[Layout.fill, Layout.colCenter]}>
      <MapView
        style={[Layout.fullSize]}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        provider='default'
      />
    </View>
  )
}
export default HomePage
