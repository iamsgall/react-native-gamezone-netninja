import 'react-native-gesture-handler'
import { StyleSheet } from 'react-native'
import AppLoading from 'expo-app-loading'
import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold,
} from '@expo-google-fonts/nunito'
import { NavigationContainer } from '@react-navigation/native'
import Root from './screens/Root'
import ReviewDetails from './screens/ReviewDetails'
import Header from './shared/Header'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

export default function App() {
  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
  })

  const Stack = createNativeStackNavigator()

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='Root'
            component={Root}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='ReviewDetails'
            component={ReviewDetails}
            options={{
              title: 'Review Details',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 20,
                color: '#333',
                letterSpacing: 1,
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({})
