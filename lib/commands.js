// get basic info
import { run } from 'uebersicht'

import { transformInfoToJSON } from "./data";

export const fetchNetworkInfo = (target) => {
  return run(`networksetup -getinfo "${target}"`)
    .then(out => transformInfoToJSON(out))
    .catch(console.error)
}

export const refreshNetworkInfo = (dispatch) => {
  fetchNetworkInfo('Wi-Fi').then(data => {
    dispatch({ type: 'REFRESH_INFO', payload: data, ready: true })
  })
}
