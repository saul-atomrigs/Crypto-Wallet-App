import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SIZES, COLORS, FONTS, icons } from "../constants"

export default function BalanceInfo({ title, displayAmount, changePct, containerStyle }) {
  return (

    <View>
      <Text style={{ color: COLORS.white }}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

// 1.09.15