import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import { Provider } from './src/context/RecipeContext'

import HomeScreen from './src/screens/HomeScreen'
import DetailsScreen from './src/screens/DetailsScreen'


const switchNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'All Recipie'
    }
  })

const App = createAppContainer(switchNavigator)

export default () => {
  return <Provider>
    <App />
  </Provider>

}

