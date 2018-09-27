import React, {PureComponent} from 'react';
import {  Text, View, Image} from 'react-native';
import { Images } from '../../Themes'


export default class NewsFeed extends PureComponent {

    static navigationOptions = ({ navigation }) => {
        return {
          tabBarIcon: ({ tintColor }) => (
            <Image
              resizeMode='contain'
              source={Images.newsfeed}
              style={ {height:26,width:26, tintColor }}
            />
          ),
        }
      }
  render() {
    return (
      <View >
        <Text >New</Text>
      </View>
    );
  }
}

