import { Platform } from 'react-native'

const isIOS = Platform.OS === 'ios'

export default {
  backgroundColor: 'rgb(240, 240, 240)',
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: isIOS ? '#F0F0F0' : null,
  },
}