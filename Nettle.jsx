import { css } from "uebersicht"

import { Widget } from "./lib/Widget.jsx"
import { updateHandler, NOT_READY_STATE } from "./lib/state"
import { refreshNetworkInfo } from "./lib/commands"

export const updateState = updateHandler
export const command = refreshNetworkInfo

export const initialState = { ready: false, data: null }
export const refreshFrequency = false

export const className = css({
  fontFamily: 'sans-serif',
  position: 'fixed',
  top: '0',
  left: '0',
})

export const render = Widget
