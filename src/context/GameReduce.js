const initialState = {
  user_name: '',
  questions: [],
  current_question: '',
  current_anwers: [],
  position_question: 0,
  finished: false,
  init_game: new Date(),
  finish_game: '',
  started: false
}

const reducer = (state, action) => {
  return actions[action.type](state, action);
}

const actions = {
  add_user: (state, action) => {
    return { ...state, user_name: action.user_name, started: true }
  },
  add_questions: (state, action) => {
    return { ...state, questions: action.questions }
  },
  next_question: (state, action) => {
    if (state.questions.length === state.position_question) {
      return {
        ...state,
        finished: true,
        finish_game: new Date()
      }
    } else {
      return {
        ...state,
        current_question: state.questions[state.position_question],
        current_anwers: [...state.questions[state.position_question].incorrect_answers, state.questions[state.position_question].correct_answer].sort(),
        position_question: state.position_question + 1,
      }
    }
  }
}

export { reducer, initialState }