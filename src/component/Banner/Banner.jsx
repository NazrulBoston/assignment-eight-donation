
const Banner = () => {
    return (
        <div className="flex justify-center items-center flex-col my-24">
            <h1 className=" text-4xl px-4 lg:text-5xl">I Grow By Helping People In Need</h1>
            <div>
                <div className="my-12">
                    <input className="input input-bordered join-item" placeholder="Search here...." />
                    <button className="btn join-item rounded-r-full bg-red-600 text-white">Search</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;