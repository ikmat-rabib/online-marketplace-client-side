

const Banner = () => {
    return (
        <div>
            <div className="flex w-full bg-cover min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/dPxsSF9/banner.jpg)' }}>
                <div className="my-auto mx-5 md:mx-10 text-left md:max-w-md lg:max-w-lg text-white">

                    <h1 className="mb-5 text-5xl font-bold">Connecting Freelancers and Clients Worldwide</h1>
                    <p className="mb-5">Discover top freelance talent or find your next project. Your gateway to success in the freelance world starts here.</p>
                    <button className="btn bg-[#5bbb7b] hover:bg-[#43a062] hover:scale-105 border-0">Get Started</button>

                </div>
            </div>
        </div>
    );
};

export default Banner;