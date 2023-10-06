import React from 'react'
import { View, StatusBar } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native'
import { HomePage, Startup } from '../screens'
import { useTheme } from '../hooks'
import MainNavigator from './Main'
import { useFlipper } from '@react-navigation/devtools'
const Stack = createStackNavigator()
// @refresh reset
const ApplicationNavigator = () => {
  const { Layout, darkMode, NavigationTheme } = useTheme()
  const { colors } = NavigationTheme
  const navigationRef = useNavigationContainerRef()
  useFlipper(navigationRef)
  return (
    <View style={[Layout.fill, { backgroundColor: colors.card }]}>
      <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
        <StatusBar backgroundColor='transparent' translucent={true} />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Startup' component={Startup} />
          <Stack.Screen name='HomePage' component={HomePage} />
          <Stack.Screen name='Main' component={MainNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  )
}
export default ApplicationNavigator
