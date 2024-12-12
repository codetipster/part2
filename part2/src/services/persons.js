import axios from "axios";
const baseUrl = "/api/persons";

//each of the functions below returns a promise related to their respective axios calls
const getAll = () => {
    const request = axios.get(baseUrl);
  return request.then(response => response.data)
}

const create = (personObject) => {
    const request = axios.post(baseUrl, personObject)
    return request.then(response => response.data)
}

const update = (personId, personObject) => {
    return axios.put(`${baseUrl}/${personId}`, personObject)
}

const deletePerson = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
}

export default { getAll, create, update, deletePerson }