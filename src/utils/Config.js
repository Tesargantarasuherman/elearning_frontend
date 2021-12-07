let login = JSON.parse(localStorage.getItem("data_user"));

const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `bearer ${login ? login.token : ""}`,
    },
  };

export default axiosConfig