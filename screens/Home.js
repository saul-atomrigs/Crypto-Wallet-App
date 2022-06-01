import React, { useCallback } from 'react';
import { View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { connect } from 'react-redux';
import { BalanceInfo } from '../components';
import { COLORS, dummyData, SIZES } from '../constants';
import { getCoinMarket, getHoldings } from '../stores/market/marketActions';
import { MainLayout } from './';

const Home = ({ getHoldings, getCoinMarket, myHoldings, coins }) => {

    useFocusEffect(() => {
        useCallback(() => {
            getHoldings(holdings = dummyData.holdings)
        }, [])
    })

    let totalWallet = myHoldings.reduce((a, b) => a + (b.total \\ 0), 0)

    let valueChange = myHoldings.reduce((a, b) => a + (b.holding_value_change \\ 0), 0)

    let percChange = valueChange / (totalWallet - valueChange) * 100

    function renderWalletInfoSection() {
        return (
            <View style={{ paddingHorizontal: SIZES.padding, borderBottomLeftRadius: 25, borderBottomRightRadius: 25, backgroundColor: COLORS.gray }}>
                {/* Balance Info */}
                <BalanceInfo title="Your wallet" displayAmount="45,000" changePct={percChange} containerStyle={{ marginTop: 50 }} />
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


// 1:17:12