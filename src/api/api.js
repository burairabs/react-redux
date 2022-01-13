import axios from "axios";
import jwt_decode from "jwt-decode";

const API_URL = "https://staging-sso.agrotrust.io/sso/api/user/byPassLogin"
const POSTS_URL = "https://jsonplaceholder.typicode.com/posts"

const login = (number) => {
    return axios
      .post(API_URL, {
        number: `+91${number}`
      })
      .then((response) => {
        if (response.data) {
          const user  = jwt_decode(response.data.token);
          localStorage.setItem("user", JSON.stringify(user));
          return user;
        }

        return
      });
  };

const logout = () => {
    localStorage.removeItem("user");
  };

  const fetchPosts = () => {
    return axios
      .get(POSTS_URL)
      .then((response) => {
        if (response.data) {
          return response.data;
        }

        return
      });
  }

  export {
    login,
    logout,
    API_URL,
    fetchPosts
  }