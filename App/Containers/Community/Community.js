import React, { PureComponent } from 'react';
import { Text, View, Image } from 'react-native';
import I18n from 'react-native-i18n'
import { connect } from 'react-redux'
import FastImage from 'react-native-fast-image'
import NavigationHeader from '../NavigationHeader'

class Community extends PureComponent {

  static navigationOptions = ({ navigation }) => 
  {
    return {
      headerTitle: <NavigationHeader/>,
      headerLeft:null,
      headerRight: null,
  

    }
  }
  
  render() {
    return (
      <View >
        <Text >{I18n.t('hello')} </Text>
        <FastImage
          style={{ height: 200, width: 200 }}
          source={{
            uri: 'https://unsplash.it/400/400?image=1',
            headers: { Authorization: 'someAuthToken' },
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>
    );
  }
}


const mapStateToProps = state => {
  return {
    app: state,
  }
}



export default connect(mapStateToProps, null)(Community)
