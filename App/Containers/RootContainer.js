import React, { PureComponent } from 'react'
import { View, StatusBar, } from 'react-native'
import ReduxNavigation from '../Navigation/ReduxNavigation'


class RootContainer extends PureComponent {
 

  render () {
    return (
      <View style={{flex:1}}>
        <StatusBar barStyle='dark-content' />
        <ReduxNavigation />
      </View>
    )
  }
}



export default RootContainer
