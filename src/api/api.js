import axios from "axios";

export default axios.create({
  baseURL: "https://vue-trello-e8e7d-default-rtdb.firebaseio.com/",
});
