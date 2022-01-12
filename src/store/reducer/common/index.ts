import {START_DRAWING} from '../../actionType'

const initState = {
  isDrawing: false,
}

type State = typeof initState

type Action = {
  type: string
  payload: State
}

const commonReducer = (state = initState, action: Action): State => {
  switch (action.type) {
    case START_DRAWING: {
      return {
        ...state,
        isDrawing: action.payload?.isDrawing,
      }
    }
    default: {
      return state
    }
  }
}

export default commonReducer
