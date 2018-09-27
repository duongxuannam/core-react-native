import { createStackNavigator } from 'react-navigation'
import TabNavigation from './TabNavigation'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  TabNavigation: { screen: TabNavigation },
}, {
  // Default config for all screens
  headerMode: 'float',
  initialRouteName: 'TabNavigation',
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#fff',
      elevation: 0,
      borderBottomWidth: 1,
      borderBottomColor: 'grey',
    },
    headerTitleStyle: {
      color: '#fff',
    },
  },
})

export default PrimaryNav
