import Game from '../models/Game';

const initialState = new Game();

const reducer = (state, action) => {
  switch (action.type) {
    case 'add_user':
      return { ...state, user_name: action.user_name }
    default:
      return state
  }
}

export { reducer, initialState }