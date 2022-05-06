import React from 'react';
import {
    View,
    Text
} from 'react-native';

import { connect } from 'react-redux';
import { getHoldings, getCoinMarket } from '../stores/market/marketActions';

import { MainLayout } from './'

const Home = () => {
    return (
        <MainLayout>
            <View>
                <Text>Home</Text>
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

// 1.00.54