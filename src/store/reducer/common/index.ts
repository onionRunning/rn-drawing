import {INIT_DRAWING, START_DRAWING} from '../../actionType'

const initState = {
  isDrawing: false,
  isInitDrawing: false,
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
        isInitDrawing: false,
      }
    }
    case INIT_DRAWING: {
      return {
        ...state,
        isDrawing: false,
        isInitDrawing: true,
      }
    }
    default: {
      return state
    }
  }
}

export default commonReducer
