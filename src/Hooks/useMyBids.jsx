import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useMyBids = () => {
    
    const axiosSecure = useAxiosSecure()
    const {user} = useAuth()

    const { refetch, data: bidJobs = [] } = useQuery({
        queryKey: ['bidJobs', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/bidJobs?
            bidderEmail=${user?.email}`)
            return res.data
        }
    })
    
    console.log(user?.email)
    return [bidJobs,refetch]
};

export default useMyBids;