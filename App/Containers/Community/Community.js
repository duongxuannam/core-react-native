import React, {PureComponent} from 'react';
import {  Text, View, Image} from 'react-native';
import { connect } from 'react-redux'
import { Images } from '../../Themes'


 class Community extends PureComponent {

    static navigationOptions = ({ navigation }) => {
        return {
          tabBarIcon: ({ tintColor }) => (
            <Image
              resizeMode='contain'
              source={Images.community}
              style={ {height:26,width:26, tintColor }}
            />
          ),
        }
      }
  render() {
    console.log('this.props ', this.props)
    return (
      <View >
        <Text >Commutnitty</Text>
      </View>
    );
  }
}


const mapStateToProps = state => {
  return {
    app: state.app,
  }
}
 


export default connect(mapStateToProps, null)(Community)
