import React, { useCallback } from 'react';
import { View, Text } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { connect } from 'react-redux';
import { getHoldings, getCoinMarket } from '../stores/market/marketActions';
import { MainLayout } from './'
import { BalanceInfo } from '../components'
import { SIZES, COLORS, FONTS, dummyData, icons } from '../constants'

const Home = ({ getHoldings, getCoinMarket, myHoldings, coins }) => {

    useFocusEffect(() => {
        useCallback(() => {
            getHoldings(holdings = dummyData.holdings)
        }, [])
    })

    function renderWalletInfoSection() {
        return (
            <View style={{ paddingHorizontal: SIZES.padding, borderBottomLeftRadius: 25, borderBottomRightRadius: 25, backgroundColor: COLORS.gray }}>
                {/* Balance Info */}
                <BalanceInfo title="Your wallet" displayAmount="45,000" changePct={2.30} containerStyle={{ marginTop: 50 }} />
                {/* Buttons */}
            </View>
        )
    }
    return (
        <MainLayout>
            <View style={{ flex: 1, backgroundColor: COLORS.black }}>
                {/* Header - wallet info */}
                {renderWalletInfoSection()}
            </View>
        </MainLayout>
    )
}

function mapStateToProps(state) {
    return {
        myHoldings: state.tabReducer.myHoldings,
        coins: state.marketReducer.coins,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getHoldings: (holdings, currency, coinList, orderBy, sparkline, priceChangePerc, perPage, page) => { return dispatch(getHoldings(holdings, currency, coinList, orderBy, sparkline, priceChangePerc, perPage, page)) }
        , getCoinMarket: (currency, orderBy, sparkline, priceChangePerc, perPage, page) => { return dispatch(getCoinMarket(currency, orderBy, sparkline, priceChangePerc, perPage, page)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)


// 1.14.17