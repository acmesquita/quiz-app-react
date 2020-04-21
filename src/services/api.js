import axios from 'axios';

const api = axios.create();

const getQuestions = async () => {
  return await api.get('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple')
    .then(response => {
      return response.data.results
    })
}

export { getQuestions };
