import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import FastImage from 'react-native-fast-image'
import { connect } from 'react-redux'
import { Images } from '../../Themes'

export class NavigationHeader extends Component {

  render() {
    return (
      <View style={{
        backgroundColor:'#2CBCD4',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute', top: 0, bottom: 0, left: 0, right: 0
        }}>
      <FastImage
    style={{ height:30, width: 30, marginRight:5, borderRadius:15 }}
    source={{
      uri: 'https://unsplash.it/400/400?image=1',
      headers:{ Authorization: 'someAuthToken' },
      priority: FastImage.priority.normal,
    }}
    resizeMode={FastImage.resizeMode.contain}
  />
      </View>
    )
  }
}

const mapStateToProps = () => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationHeader)
