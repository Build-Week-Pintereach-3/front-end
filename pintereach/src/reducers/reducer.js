import { 
  SAVE_ARTICLE, 
  EDIT_ARTICLE, 
  DELETE_ARTICLE 
} from "../actions/actions";

const initalState = {
  null: null
}

export const appReducer = (state = initalState, action) => {
  switch (action.type) {
    case SAVE_ARTICLE:
      return {
        ...state,
        save: action.payload
      }
    case EDIT_ARTICLE: 
      return {
        ...state,
        edit: false //change later
      }
    case DELETE_ARTICLE:
      return {
        ...state
      }
    default: {
      return state
    }
  }
}