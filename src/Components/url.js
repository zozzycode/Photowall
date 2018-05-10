// const prodUrl = "/zozzy/photowall";
const prodUrl = "";
const localhostUrl = "";

const url = process.env.NODE_ENV === "production" ? prodUrl : localhostUrl;

export const HOME = `${url}/`;
export const ADD_PHOTO = `${url}/AddPhoto`;
export const SINGLE = `${url}/single/`;
