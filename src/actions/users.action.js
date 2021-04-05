import axios from "axios";

import firebase from  'firebase';


export const GET_ALL_USERS = "GET_ALL_USERS";


export const getAllUsers = (email) => {
    return (dispatch) => {
      return axios
        .get("http://localhost:5000/etudiant-e96f9/us-central1/api/users" , { params: { email }})
        .then((res) => {
          console.log(res)
          dispatch({
               type: GET_ALL_USERS, 
               payload: res.data 
            });
        })
        .catch((err) => console.log(err));
    };
  };