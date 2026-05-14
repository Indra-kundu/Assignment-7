import { use } from "react";


const frindPromise = fetch('/FrindsData.json').then(res => res.json())

const AllFriends = () => {
    const friends = use(frindPromise)
    console.log(friends, "friends")
    return (
        <div className="max-w-5xl mx-auto p-6">
            <h2 className="font-bold text-2xl mb-10 text-[#1F2937]">Your Friends</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {friends.map((friend) => {
                    return (
                        <div key={friend.id} className="card bg-white shadow-sm border border-gray-100 rounded-xl p-4">
                            <div className="flex justify-center mb-4">
                                <div className="w-20 h-20 rounded-full overflow-hidden ring-2 ring-gray-50">
                                    <img src={friend.picture} alt="image" className="w-full h-full object-cover object-center" />
                                </div>

                            </div>

                            <div className="text-center">
                                <h3 className="font-bold text-[#1F2937] text-lg ">{friend.name}</h3>
                                <p className="text-[#64748B] text-xs mb-3">{friend.days_since_contact} day ago</p>

                                <div className="flex flex-wrap justify-center gap-2 mb-4">
                                    {friend.tags.map((tag, index) => (
                                        <span key={index} className="bg-[#CBFADB] text-[#244D3F] text-[10px] px-2 py-0.5 rounded-full font-bold lowercase">
                                            {tag}
                                        </span>

                                    ))}
                                </div>

                                <div className="mt-2">
                                    <span className={`text-[11px] font-bold px-4 py-1 rounded-full border lowercase 
                                    ${friend.status === "Overdue"
                                            ? "bg-[#EF4444] text-[#FFFFFF] border-red-100"
                                            : friend.status === "Almost due"
                                                ? "bg-[#EFAD44] text-[#FFFFFF] border-orange-100"
                                                : "bg-[#244D3F] text-[#FFFFFF] border-green-100"
                                        }`}>
                                        {friend.status}
                                    </span>
                                </div>


                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    );
};

export default AllFriends;