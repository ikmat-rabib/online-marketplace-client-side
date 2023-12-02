import BidsTable from "../../Components/BidsTable/BidsTable";
import useMyBids from "../../Hooks/useMyBids";


const MyBidsJob = () => {

    const [myBids] = useMyBids()

    return (
        <div className="max-w-7xl mx-auto ">
            <h3 className="text-center text-3xl font-medium my-10">Total Bids: {myBids.length}</h3>
            <div>
                <BidsTable myBids={myBids}></BidsTable>
            </div>
        </div>
    );
};

export default MyBidsJob;