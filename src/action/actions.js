import axios from "axios";
import {
  INCREMENT,
  DECREMENT,
  SET_JOB,
  ADD_JOB,
  TOGGLE_SWITCH,
  START_TIMER,
  STOP_TIMER,
  RESET_TIMER,
  TICK,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_ERROR,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_ERROR,
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_ERROR,
  FETCH_REGISTER_REQUEST,
  FETCH_REGISTER_SUCCESS,
  FETCH_REGISTER_ERROR,
  FETCH_LOGIN_REQUEST,
  FETCH_LOGIN_SUCCESS,
  FETCH_LOGIN_ERROR,
  FETCH_BLOG_REQUEST,
  FETCH_BLOG_SUCCESS,
  FETCH_BLOG_ERROR,
} from "./types";

export const increaseCounter = () => {
  return {
    type: INCREMENT,
  };
};

export const decreaseCounter = () => {
  return {
    type: DECREMENT,
  };
};

export const set_job = (payload) => {
  return {
    type: SET_JOB,
    payload,
  };
};

export const addJob = (payload) => {
  return {
    type: ADD_JOB,
    payload,
  };
};

export const toogleSwitch = () => {
  return {
    type: TOGGLE_SWITCH,
  };
};

export const startTimer = () => ({ type: START_TIMER });
export const stopTimer = () => ({ type: STOP_TIMER });
export const resetTimer = () => ({ type: RESET_TIMER });
export const tick = () => ({ type: TICK });

export const fetchAllUsers = () => {
  return (dispatch, getState) => {
    dispatch(fetchUserRequest());
    axios
      .get("http://localhost:8081/users/all")
      .then((res) => {
        console.log(res);
        dispatch(fetchUserSuccess(res.data));
      })
      .catch((error) => {
        console.log(error);
        dispatch(fetchUserError(error));
      });
  };
};

export const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};
export const fetchUserSuccess = (data) => {
  return {
    type: FETCH_USER_SUCCESS,
    dataUsers: data,
  };
};

export const fetchUserError = () => {
  return {
    type: FETCH_USER_ERROR,
  };
};

export const createUserRequest = () => {
  return {
    type: CREATE_USER_REQUEST,
  };
};
export const createUserSuccess = () => {
  return {
    type: CREATE_USER_SUCCESS,
  };
};

export const createUserError = () => {
  return {
    type: CREATE_USER_ERROR,
  };
};

export const CreateNewUsers = (email, password, username) => {
  return (dispatch, getState) => {
    dispatch(createUserRequest());
    axios
      .post("http://localhost:8081/users/create", { email, password, username })
      .then((res) => {
        dispatch(createUserSuccess(res));
        dispatch(fetchAllUsers());
      })
      .catch((error) => {
        console.log(error);
        dispatch(createUserError(error));
      });
  };
};

////////////////

export const deleteUserRequest = () => {
  return {
    type: DELETE_USER_REQUEST,
  };
};
export const deleteUserSuccess = () => {
  return {
    type: DELETE_USER_SUCCESS,
  };
};

export const deleteUserError = () => {
  return {
    type: DELETE_USER_ERROR,
  };
};
export const deleteUsers = (id) => {
  // Thêm tham số id vào hàm
  return (dispatch, getState) => {
    dispatch(deleteUserRequest());

    axios
      .post(`http://localhost:8081/users/delete/${id}`)
      .then((res) => {
        console.log("Delete success: ", res);

        dispatch(deleteUserSuccess(res));
        dispatch(fetchAllUsers()); // Cập nhật lại danh sách người dùng sau khi xóa
      })
      .catch((error) => {
        dispatch(deleteUserError());
        console.error("Delete error: ", error);
      });
  };
};
////////////////////////

export const fetchAllproduct = () => {
  return (dispatch, getState) => {
    dispatch(fetchProductRequest());
    axios
      .get(
        "https://newsapi.org/v2/everything?q=tesla&from=2024-02-26&sortBy=publishedAt&apiKey=c79330b07a7744d085167a2e748c7247&pageSize=5"
      )
      .then((res) => {
        console.log(res);
        dispatch(fetchProductSuccess(res.data.articles));
      })
      .catch((error) => {
        console.log(error);
        dispatch(fetchProductError(error));
      });
  };
};

export const fetchProductRequest = () => {
  return {
    type: FETCH_PRODUCT_REQUEST,
  };
};
export const fetchProductSuccess = (data) => {
  return {
    type: FETCH_PRODUCT_SUCCESS,
    dataUsers: data,
  };
};

export const fetchProductError = () => {
  return {
    type: FETCH_PRODUCT_ERROR,
  };
};

export const fetchRegister = (email, password, phone , name ,address) => {
  return async (dispatch) => {
    dispatch(fetchRegisterRequest());
    try {
      const response = await axios.post(
        "http://localhost:8080/laravel8/public/api/register",
        { email, password, name , phone , address}
      );
      dispatch(fetchRegisterSuccess(response.data));
      return response.data; // Optionally return data
    } catch (error) {
      dispatch(fetchRegisterError(error));
      throw error; // Re-throw error for handling in component
    }
  };
};



export const fetchRegisterRequest = () => {
  return {
    type: FETCH_REGISTER_REQUEST,
  };
};
export const fetchRegisterSuccess = (data) => {
  return {
    type: FETCH_REGISTER_SUCCESS,
    dataUsers: data,
  };
};

export const fetchRegisterError = () => {
  return {
    type: FETCH_REGISTER_ERROR,
  };
};




export const fetchLogin = (email, password,level) => {
  return async (dispatch) => {
    dispatch(fetchLoginRequest());
    try {
      const response = await axios.post(
        "http://localhost:8080/laravel8/public/api/login",
        { email, password ,level}
      );
      console.log(response);
      dispatch(fetchLoginSuccess(response));
      return response.data; // Optionally return data
    } catch (error) {
      dispatch(fetchLoginError(error));
      throw error; // Re-throw error for handling in component
    }
  };
};



export const fetchLoginRequest = () => {
  return {
    type: FETCH_LOGIN_REQUEST,
  };
};
export const fetchLoginSuccess = (data) => {
  return {
    type: FETCH_LOGIN_SUCCESS,
    dataUsers: data,
  };
};

export const fetchLoginError = () => {
  return {
    type: FETCH_LOGIN_ERROR,
  };
};



export const fetchBlog = () => {
  return (dispatch, getState) => {
    dispatch(fetchBlogRequest());
    axios
      .get(
        "http://localhost:8080/laravel8/public/api/blog"
      )
      .then((res) => {
        console.log(res);
        dispatch(fetchBlogSuccess(res.data.blog.data));
      })
      .catch((error) => {
        console.log(error);
        dispatch(fetchBlogError(error));
      });
  };
};

export const fetchBlogRequest = () => {
  return {
    type: FETCH_BLOG_REQUEST,
  };
};
export const fetchBlogSuccess = (data) => {
  return {
    type: FETCH_BLOG_SUCCESS,
    dataUsers: data,
  };
};

export const fetchBlogError = () => {
  return {
    type: FETCH_BLOG_ERROR,
  };
};