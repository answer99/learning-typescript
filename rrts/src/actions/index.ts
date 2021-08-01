import axios from 'axios';
import { Dispatch } from 'redux';

const url = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get(url);

    dispatch({
      type: 'FETCH_TODOS',
      payload: response.data
    })
  }
}

// downside
// 1. response.data is any type
// 2. type is a harcodeed string(easy to make a type), enum is better
// 3. dispatch is a generic function, we should use it
