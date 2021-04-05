
import axios from "axios";


export const GET_USER = "GET_USER";


export const getUser = () => {
  return (dispatch) => {
    return axios
      .get("http://localhost:5000/etudiant-e96f9/us-central1/api/user")
      .then((res) => {
        dispatch({
             type: GET_USER, 
             payload: res.data 
          });
      })
      .catch((err) => console.log(err));
  };
};

export const uploadImage = (formData) => {
return (dispatch) => {
const token = localStorage.FBIdToken;
axios.defaults.headers.common['Authorization'] = token; 
 return axios
    .post("http://localhost:5000/etudiant-e96f9/us-central1/api/user/image", formData)
    .then(() => {
      dispatch(getUser());
    })
    .catch((err) => console.log(err.response.data));
};
};


export const updateData =(data)=> { 

return (dispatch)=> {
  return axios
  .post("http://localhost:5000/etudiant-e96f9/us-central1/api/user/", data) 
  .then (()=> {
    dispatch(getUser());
  })
  .catch((err)=>console.log(err));

};
};