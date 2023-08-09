import axios from "axios";
import { createSearchParams } from "react-router-dom";

const url = 'http://192.168.0.74:8080'

export const getList = async (queryObj) => {

  const queryString = createSearchParams(queryObj).toString();

  const res = await axios.get(`${url}/api/products/list?${queryString}`)

  return res.data

}

export const readOne = async (pno) => {

  const res = await axios.get(`${url}/api/${pno}`)

  return res.data
}