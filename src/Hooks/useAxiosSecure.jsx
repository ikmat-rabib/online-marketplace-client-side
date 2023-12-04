import axios from "axios";


const axiosSecure = axios.create({
    baseURL: 'https://assignment-11-server-7dsms1ns9-ikmat-rabib.vercel.app',
    withCredentials: true
})
const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;