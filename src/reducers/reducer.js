import { 
  SAVE_ARTICLE, 
  EDIT_ARTICLE_LIST, 
  DELETE_ARTICLE 
} from "../actions/actions";

const initalState = {
  initalFormValues: {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    termsOfService: false,
    username: ''
  },
  initalLoginValues: {
    username: '',
    password: ''
  }
}

export const appReducer = (state = initalState, action) => {
  switch (action.type) {
    case SAVE_ARTICLE:
      return {
        ...state,
        save: action.payload
      }
    case EDIT_ARTICLE_LIST: 
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