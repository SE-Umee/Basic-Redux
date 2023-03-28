import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from './src/screens/profile-screen';
import EductionScreen from './src/screens/eduction-screen';
import RelativeScreen from './src/screens/relative-screen';
import FullDetailScreen from './src/screens/full-detail-screen';
import { Provider } from 'react-redux'
import store from './src/redux/store/store';
import EditProfileScreen from './src/screens/edit-profile-screen';
import EditEductionScreen from './src/screens/edit-eduction-screen';
import EditRelativeScreen from './src/screens/edit-relative-screen';
const App = () => {

  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Profile' component={ProfileScreen} />
          <Stack.Screen name='Eduction' component={EductionScreen} />
          <Stack.Screen name='Relative' component={RelativeScreen} />
          <Stack.Screen name='Detail' component={FullDetailScreen} />
          <Stack.Screen name='EditProfile' component={EditProfileScreen} />
          <Stack.Screen name='EditEduction' component={EditEductionScreen} />
          <Stack.Screen name='EditRelative' component={EditRelativeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App