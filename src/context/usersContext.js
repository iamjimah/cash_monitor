import React, { createContext, useReducer } from "react";
import usersReducer from "../reducers/usersReducer";
import axios from "axios";

const initialState = {
  loading: true,
  userInfo: {},
  error: null,
};

export const UsersContext = createContext();

const UsersContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(usersReducer, initialState);

  //signin user
  async function userLogin(userInfo) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.post(
      "https://cm-bend.herokuapp.com/api/v6/user/login",
      userInfo,
      config
    );

    localStorage.setItem("userInfo", JSON.stringify(res.data));
    const userSignin = (await localStorage.getItem("userInfo"))
      ? JSON.parse(localStorage.getItem("userInfo"))
      : {};

    dispatch({
      type: "SIGNIN",
      payload: userSignin,
    });
    console.log(res.data);
  }
  //logout
  async function logout() {
    await localStorage.removeItem("userInfo");
    dispatch({
      type: "LOGOUT",
    });
  }

  //signup user
  async function Register(newuser) {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "https://cm-bend.herokuapp.com/api/v6/user/register",
        newuser,
        config
      );

      dispatch({
        type: "SIGNUP_USER",
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <UsersContext.Provider
      value={{
        userInfo: state.userInfo,
        loading: state.loading,
        userLogin,
        Register,
        logout,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UsersContextProvider;
