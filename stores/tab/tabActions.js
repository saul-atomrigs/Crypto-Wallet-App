export const SET_TRADE_MODAL = 'SET_TRADE_MODAL_VISIBILITY';

export const setTradeModalVisibilitySuccess = (visible) => ({
  type: SET_TRADE_MODAL_VISIBILITY,
  payload: { isVisible }
})

export function SET_TRADE_MODAL_VISIBILITY(isVisible) {
  return dispatch => {
    dispatch(setTradeModalVisibilitySuccess(isVisible));
  }
}