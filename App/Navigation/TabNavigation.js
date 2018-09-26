import { createBottomTabNavigator } from 'react-navigation'

import VideoNavigation from '../Containers/Video'
import NewsFeedNavigation from '../Containers/NewsFeed'
import CommunityNavigation from '../Containers/Community'
import UserNavigation from '../Containers/User'

// import {createBottomTabNavigator} from '../Components'
// import { isIOS } from '../Helpers'

// Manifest of possible screens
const TabBar = createBottomTabNavigator({
  NewsFeedNavigation: { screen: NewsFeedNavigation },
  CommunityNavigation: { screen: CommunityNavigation },
  VideoNavigation: { screen: VideoNavigation },
  UserNavigation: { screen: UserNavigation },
}, {
  initialRouteName: 'NewsFeedNavigation',
  // tabBarComponent: TabBarBottom,
  swipeEnabled: false,
  tabBarOptions: {
    activeTintColor: 'red',
    showLabel: true,
    // showIcon: true,
    inactiveTintColor: 'yellow',
    style: {
      backgroundColor: '#fff',
    },
  },
})

export default TabBar