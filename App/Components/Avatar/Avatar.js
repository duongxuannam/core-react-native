import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Image, View, Platform, TouchableOpacity } from 'react-native'
import FastImage from 'react-native-fast-image'
import styles from './styles'

const isIOS = Platform.OS === 'ios'

export default class Avatar extends Component {

  static propTypes = {
    style: PropTypes.any,
    uri: PropTypes.string,
    resizeMode: PropTypes.oneOfType([
      FastImage.resizeMode.contain,
      FastImage.resizeMode.cover,
      FastImage.resizeMode.stretch,
      FastImage.resizeMode.center,
    ]),
    onPress: PropTypes.func,
    defaultImage: PropTypes.bool,
  }

  static defaultProps = {
    style: styles.avatar,
    defaultImage: true,
  }

  componentDidMount() {
    if (this.props.uri) {
      FastImage.preload([{ uri: this.props.uri }])
    }
  }

  renderImageIOS = () => {
    let { style, uri, resizeMode } = this.props
    return (
      <FastImage
        style={[{ backgroundColor: styles.backgroundColor }, style]}
        source={{
          uri: uri,
          priority: FastImage.priority.normal,
        }}
        resizeMode={resizeMode || FastImage.resizeMode.contain}
      />
    )
  }

  renderImageAndroid = () => {
    let { style, uri, resizeMode } = this.props
    return (
      <View style={[style, { overflow: 'hidden' }]}>
        <FastImage
          style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
          source={{
            uri,
            priority: FastImage.priority.normal,
          }}
          resizeMode={resizeMode || FastImage.resizeMode.contain}
        />
      </View>
    )
  }

  renderDefaultImage = () => {
    let { style, defaultImage } = this.props
    return (
      defaultImage ? <Image source={require('./avatar.png')} style={style} /> : null
    )
  }

  render() {
    let { uri, onPress, style } = this.props
    let avatar = !uri ? this.renderDefaultImage : isIOS ? this.renderImageIOS : this.renderImageAndroid
    return onPress ? (
      <TouchableOpacity onPress={onPress} style={style}>
        {avatar()}
      </TouchableOpacity>
    ) : avatar()
  }
}