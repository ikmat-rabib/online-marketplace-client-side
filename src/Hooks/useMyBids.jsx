import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const useMyBids = () => {
    const axiosSecure = useAxiosSecure()
    const auth = useContext(AuthContext);
    const { refetch, data: bidJobs = [] } = useQuery({
        queryKey: ['bidJobs', auth.user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/bidJobs?
            bidderEmail=${auth.user?.email}`)
            return res.data
        }
    })
    
    console.log(auth.user?.email)
    return [bidJobs,refetch]
};

export default useMyBids;