import { GET_ITEM } from '../actions/index';

export default function (state = [], action) {
  switch (action.type) {
    case GET_ITEM:
      return state.concat([ action.payload.data ]);
  }
  return state;
}
