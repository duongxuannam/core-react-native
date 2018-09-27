import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'

import VideoNavigation from '../Containers/Video'
import NewsFeedNavigation from '../Containers/NewsFeed'
import CommunityNavigation from '../Containers/Community'
import UserNavigation from '../Containers/User'

const TabBarNavigation = createBottomTabNavigator({
  CommunityNavigation: { screen: CommunityNavigation },
  NewsFeedNavigation: { screen: NewsFeedNavigation },
  VideoNavigation: { screen: VideoNavigation },
  UserNavigation: { screen: UserNavigation },
}, {
  initialRouteName: 'CommunityNavigation',
  swipeEnabled: false,
  tabBarOptions: {
    activeTintColor: '#2CBCD4',
    showLabel: false,
    showIcon: true,
    inactiveTintColor: '#7B7B7B',
    style: {
      backgroundColor: '#fff',
    },
  },
})

export default TabBarNavigation