import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SIZES, COLORS, FONTS, icons } from "../constants"

export default function BalanceInfo({ title, displayAmount, changePct, containerStyle }) {
  return (

    <View style={{ ...containerStyle }}>
      {/* TITLE */}
      <Text style={{ ...FONTS.h3, color: COLORS.white }}>{title}</Text>

      {/* FIGURES */}
      <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
        <Text style={{ ...FONTS.h3, color: COLORS.lightGray3 }}>$</Text>
        <Text style={{ marginLeft: SIZES.base, ...FONTS.h3, color: COLORS.white }}>{displayAmount.toLocalString()}</Text>
        <Text style={{ color: COLORS.lightGray3, ...FONTS.h3 }}>USD</Text>
      </View>

      {/* CHANGE PERCENTAGE */}
      <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>

        {changePct != 0 &&
          <Image
            source={icons.upArrow}
            style={{ width: 10, height: 10, alignSelf: 'center', tintColor: (changePct > 0) ? COLORS.green : COLORS.red, transform: (changePct > 0) ? [{ rotate: '45deg' }] : [{ rotate: '125deg' }] }}
          />}
        <Text style={{ marginLeft: SIEZ.base, alignSelf: 'flex-end', color: (changePct == 0) ? COLORS.lightGray3 : COLORS.red, ...FONTS.h4 }}>
          {changePct.toFixed(2)}%
        </Text>
      </View>
    </View >
  )
}

const styles = StyleSheet.create({})
