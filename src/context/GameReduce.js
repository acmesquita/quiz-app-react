import Game from '../models/Game';

const initialState = new Game();

const reducer = (state, action) => {
  return actions[action.type](state, action);
}

const actions = {
  add_user: (state, action) => {
    return { ...state, user_name: action.user_name }
  }
}

export { reducer, initialState }