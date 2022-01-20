import {DRAWING_LAST_STEP, DRAWING_NEXT_STEP, INIT_DRAWING, START_DRAWING} from '../../actionType'

const initState = {
  isDrawing: false,
  isInitDrawing: false,
  lastStepCount: 0,
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
        lastStepCount: 0,
      }
    }
    case INIT_DRAWING: {
      return {
        ...state,
        isDrawing: false,
        isInitDrawing: true,
      }
    }
    case DRAWING_LAST_STEP: {
      return {
        ...state,
        lastStepCount: state.lastStepCount + 1,
      }
    }
    case DRAWING_NEXT_STEP: {
      return {
        ...state,
        lastStepCount: state.lastStepCount - 1,
      }
    }
    default: {
      return state
    }
  }
}

export default commonReducer
