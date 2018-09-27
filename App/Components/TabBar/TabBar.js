import React, { Component } from 'react'
import { TouchableWithoutFeedback, View, Dimensions } from 'react-native'
import PropTypes from 'prop-types'
import _ from 'lodash'

class TabBar extends Component {

    static propTypes = {
        configTabBar: PropTypes.object,
        token: PropTypes.bool,
    }

    renderTabBar = () => {
        const {
            navigationState,
            navigation,
            activeTintColor,
            inactiveTintColor,
            renderIcon } = this.props.configTabBar
        const currentIndex = _.get(navigationState, ['index'])
        return _.get(navigationState, ['routes']).map((route, index) => {
            return (
                <TouchableWithoutFeedback
                    key={index}
                    onPress={() => navigation.navigate(_.get(navigation, ['state', 'routes', index]))

                    }
                >
                    <View
                        style={{
                            alignItems: 'center', flex: 1, justifyContent: 'center'

                        }}
                    >
                        {renderIcon({
                            route,
                            index,
                            tintColor: currentIndex === index ? activeTintColor : inactiveTintColor,
                            focused: currentIndex === index,
                        })}
                    </View>
                </TouchableWithoutFeedback>
            )
        })
    }

    render() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    height: Dimensions.get('window').height / 13,
                }}
            >
                {this.renderTabBar()}
            </View>
        )
    }
}
export default TabBar

