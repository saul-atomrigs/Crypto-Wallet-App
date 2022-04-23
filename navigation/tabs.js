import React from "react";
import {
  TouchableOpacity,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { connect } from 'react-redux';
import { setTradeModalVisibility } from "../stores/tab/tabActions";

import { Home, Portfolio, Market, Profile } from "../screens"
import { TabIcon } from '../components'
import { COLORS, icons } from "../constants"

const Tab = createBottomTabNavigator()

const TabBarCustomButton = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  )
}

const Tabs = ({ setTradeModalVisibility, isTradeModalVisible }) => {

  function tradeTabButtonOnClickHandler() {
    setTradeModalVisibility(!isTradeModalVisible)
  }

  return (
    <Tab.Navigator
      tabBarOptions={{
        // showLabel: false,
        style: {
          height: 140,
          backgroundColor: COLORS.primary,
          borderTopColor: "transparent",
        }
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          TabBarIcon: ({ focused }) => {
            return (
              <TabIcon
                focused={focused}
                icon={icons.home}
                label="Home"
              />
            )
          }
        }}
      />
      <Tab.Screen
        name="Portfolio"
        component={Portfolio}
        options={{
          TabBarIcon: ({ focused }) => {
            return (
              <TabIcon
                focused={focused}
                icon={icons.portfolio}
                label="Porfolio"
              />
            )
          }
        }}
      />
      <Tab.Screen
        name="Trade"
        component={Home}
        options={{
          TabBarIcon: ({ focused }) => {
            return (
              <TabIcon
                focused={focused}
                icon={icons.trade}
                label="Trade"
                isTrade={true}
              />
            )
          },
          tabBarButton: (props) => (
            <TabBarCustomButton
              {...props}
              onPress={() => {
                console.log("trade button")
              }}
            />
          )
        }}
      />
      <Tab.Screen
        name="Market"
        component={Market}
        options={{
          TabBarIcon: ({ focused }) => {
            return (
              <TabIcon
                focused={focused}
                icon={icons.market}
                label="Market"
              />
            )
          }
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          TabBarIcon: ({ focused }) => {
            return (
              <TabIcon
                focused={focused}
                icon={icons.profile}
                label="Profile"
              />
            )
          }
        }}
      />
    </Tab.Navigator>
  )
}

// export default Tabs;

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

export default connect(mapStateToProps, mapDispatchToProps)(Tabs)