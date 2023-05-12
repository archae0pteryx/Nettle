import { fetchNetworkInfo } from './commands.js'

const READY_STATE = {
  loading: false,
  ready: true,
  error: null,
}

export const TYPES = {
  REFRESH_INFO: 'REFRESH_INFO',
  READY: 'READY',
  ERROR: 'ERROR'
}

export const updateHandler = (event, previousState) => {
  switch (event.type) {
    case TYPES.READY:
      return { ...previousState, ...READY_STATE, ...event.payload }
    case TYPES.REFRESH_INFO:
      return { ...previousState, data: event.payload, ready: event.ready, error: event.error }
    case TYPES.ERROR || event.error:
      return { ...previousState, ...READY_STATE, error: event.error }
    default:
      return previousState
  }
}
