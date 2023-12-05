import axios from "axios";


const axiosSecure = axios.create({
    baseURL: 'https://assignment-11-server-puce-iota.vercel.app',
    withCredentials: true
})
const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;