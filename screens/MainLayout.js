import React, { useEffect, useRef } from 'react'
import { View } from 'react-native'
import { COLORS, SIZES, icons } from '../constants'
import { connect } from 'react-redux'

const MainLayout = ({ children, isTradeModalVisible }) => {

  // Constant variable that carries the animated value: 
  const modalAnimatedValue = useRef(new Animated.Value(0)).current

  useEffect(() => {
    if (isTradeModalVisible) {
      Animated.timing(modalAnimatedValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false
      }).start()
    } else {
      Animated.timing(modalAnimatedValue, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false
      }).start()
    }
  }, [isTradeModalVisible])

  const modalY = modalAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [SIZES.height, SIZES.height - 280]
  })


  return (
    <View
      style={{ flex: 1 }}
    >
      {children}

      {/* Modal  */}
      <Animated.View
        style={{
          position: 'absolute',
          left: 0,
          width: '100%',
          padding: SIZES.padding,
          backgroundColor: COLORS.primary,
        }}
      >
        <IconTextButton
          label="Transfer"
          icon={icons.send}
          onPress={() => console.log('transfer')}
        />
        <IconTextButton
          label='Widthdraw'
          icon={icons.withdraw}
          containerStyle={{ marginTop: SIZES.base }}
          onPress={() => console.log('withdraw')}
        />
      </Animated.View>
    </View>
  )
}

function mapStateToProps(state) {
  return {
    isTradeModalVisible: state.tabReducer.isTradeModalVisible
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setTradeModalVisibility: (isVisible) => { return dispatch(setTradeModalVisibility(isVisible)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout)

// 37.59
