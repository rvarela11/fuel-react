import axios from 'axios';

const APP_ID = 'ac2eca48';
const API_KEY = '070587b79fa048410207e13028e65c7b';
const ROOT_URL = 'https://api.nutritionix.com/v1_1/search/';
const FIELDS = 'fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat%2Cnf_serving_size_qty%2Cnf_serving_size_unit';

export const STEP1_CALORIES = 'STEP1_CALORIES';
export const STEP2_CALORIES = 'STEP2_CALORIES';
export const GET_ITEM = 'GET_ITEM';

export function step1Calories (goalNumber) {
  return {
    type: STEP1_CALORIES,
    payload: goalNumber
  }
}

export function getItems (item) {
  const url = `${ROOT_URL}${item}?${FIELDS}&appId=${APP_ID}&appKey=${API_KEY}`;
  const request = axios.get(url);
  return {
    type: GET_ITEM,
    payload: request
  }
}

export function step2Calories (dailyNumber) {
  return {
    type: STEP2_CALORIES,
    payload: dailyNumber
  }
}
