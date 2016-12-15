import { STEP1_CALORIES, STEP2_CALORIES } from '../actions/index';
// import { STEP2_CALORIES } from '../actions/index';


const INITIAL_STATE = { goalData: 0, dailyData: 0 };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case STEP1_CALORIES:
      return { ...state, goalData: action.payload };
    case STEP2_CALORIES:
        return { ...state, dailyData: action.payload };
    default:
      return state;
  }
}
