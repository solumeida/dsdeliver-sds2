import axios from "axios";

const BASE_URL ='https://solumeida-sds2.herokuapp.com';

export function fetchProducts(){
  return axios(`${BASE_URL}/products`)
}