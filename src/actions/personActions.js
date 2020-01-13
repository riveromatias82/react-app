import { getGitHubUser } from '../services/github.js';

export const fetchPerson = (username) => dispatch => {
  getGitHubUser(username).then((data) => {
    dispatch({
      type: 'FETCH_PERSON_SUCCESS',
      payload: { field: 'person', value: data }
    });
  }, (error) => {
    dispatch({
      type: 'FETCH_PERSON_ERROR',
      payload: { field: 'error', value: true }
    })
  });
}