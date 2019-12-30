import axios from "axios";

const INSTRUCTOR = "webapi";
const COURSE_API_URL = "http://localhost:8080";
const INSTRUCTOR_API_URL = `${COURSE_API_URL}/ourapp/${INSTRUCTOR}`;

class MsgDataService {
  retrieveAllMsg() {
    return axios.get(`${INSTRUCTOR_API_URL}/messages`);
  }
  updateMsg(name, id, course) {
    return axios.put(`${INSTRUCTOR_API_URL}/messages/${id}`, course);
}

createMsg(name, course) {
    return axios.post(`${INSTRUCTOR_API_URL}/messages/add`, course);
}
  deleteMsg(name, id) {
    return axios.delete(`${INSTRUCTOR_API_URL}/messages/${id}`);
}
retrieveMsg(name, id) {
    //console.log('executed service')
    return axios.get(`${INSTRUCTOR_API_URL}/messages/${id}`);
}
}

export default new MsgDataService();
