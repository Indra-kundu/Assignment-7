import { useLoaderData, useParams } from "react-router";
import { FcAlarmClock } from "react-icons/fc";
import { FaArchive } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { BsChatRightText } from "react-icons/bs";
import { CiVideoOn } from "react-icons/ci";


import { useContext } from 'react';
import { TimelineContext } from "../Timeline/TimelineContext";
import { toast } from 'react-toastify';


const FriendsDetails = () => {
    const { id } = useParams()
    const friends = useLoaderData();

    const { addActivity } = useContext(TimelineContext);



    const expectedFriend = friends.find((friend) => friend.id === Number(id));
    const handleAction = (type) => {
        if (expectedFriend) {
            addActivity(expectedFriend.name, type, expectedFriend.picture);
            toast.success(`${type} recorded with ${expectedFriend.name}!`, {
                position: "top-right",
            });
        }
    };

    // toast.success("Succesfully Buy the product")

    return (
        <div className="min-h-screen bg-slate-50 p-6 flex flex-col justify-between">

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start max-w-7xl mx-auto w-full">

                <div className="md:col-span-4 flex flex-col gap-4">


                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
                        <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-gray-200">
                            <img src={expectedFriend.picture} alt="image" />
                        </div>
                        <h2 className="text-xl font-bold text-[#1F2937]">{expectedFriend.name}</h2>
                        <div className="mt-2 mb-3">
                            <span className={`text-[11px] font-bold px-4 py-1 rounded-full border lowercase 
                                    ${expectedFriend.status === "Overdue"
                                    ? "bg-[#EF4444] text-[#FFFFFF] border-red-100"
                                    : expectedFriend.status === "Almost due"
                                        ? "bg-[#EFAD44] text-[#FFFFFF] border-orange-100"
                                        : "bg-[#244D3F] text-[#FFFFFF] border-green-100"
                                }`}>
                                {expectedFriend.status}
                            </span>
                        </div>

                        <div className="flex flex-wrap justify-center gap-2 mb-2">
                            {expectedFriend.tags.map((tag, index) => (
                                <span key={index} className="bg-[#CBFADB] text-[#244D3F] text-[10px] px-2 py-0.5 rounded-full font-bold lowercase">
                                    {tag}
                                </span>

                            ))}
                        </div>
                        <p className="italic text-[#64748B] font-semibold mt-4 text-sm">{expectedFriend.bio}</p>
                        <p className="text-xs text-[#64748B] font-semibold mt-2">{expectedFriend.email}</p>
                    </div>

                    {/* Action Sidebar Buttons */}
                    <div className="flex flex-col gap-2">
                        <button className="w-full bg-white hover:bg-gray-50 text-[#1F2937] py-3 px-4 rounded-lg border border-gray-200 shadow-sm flex items-center justify-center gap-2 font-medium text-sm transition">
                            <FcAlarmClock />

                            <span>Snooze 2 Weeks</span>
                        </button>
                        <button className="w-full bg-white hover:bg-gray-50 text-[#1F2937] py-3 px-4 rounded-lg border border-gray-200 shadow-sm flex items-center justify-center gap-2 font-medium text-sm transition">
                            <FaArchive />
                            <span>Archive</span>
                        </button>
                        <button className="w-full bg-white hover:bg-red-50 text-[#EF4444] py-3 px-4 rounded-lg border border-red-200 shadow-sm flex items-center justify-center gap-2 font-medium text-sm transition">
                            <MdDelete />
                            <span>Delete</span>
                        </button>
                    </div>

                </div>

                {/* RIGHT COLUMN: Metrics & Goals (Takes 8 cols out of 12) */}
                <div className="md:col-span-8 flex flex-col gap-6">

                    {/* Top 3-Card Grid (Metrics) */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="bg-white  p-6 rounded-xl border border-gray-100 shadow-sm text-center">
                            <p className="text-3xl font-bold text-[#244D3F]">{expectedFriend.days_since_contact}</p>
                            <p className="text-xs text-[#64748B] mt-1 uppercase tracking-wider">Days Since Contact</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
                            <p className="text-3xl font-bold text-[#244D3F]">{expectedFriend.goal}</p>
                            <p className="text-xs text-[#64748B] mt-1 uppercase tracking-wider">Goal (Days)</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
                            <p className="text-3xl font-bold text-[#244D3F]">{expectedFriend.next_due_date}</p>
                            <p className="text-xs text-[#64748B] mt-1 uppercase tracking-wider">Next Due</p>
                        </div>
                    </div>

                    {/* Relationship Goal Box */}
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex justify-between items-center">
                        <div>
                            <h3 className="text-lg font-semibold text-[#244D3F]">Relationship Goal</h3>
                            <p className="text-sm text-[#64748B] mt-1">Connect every <span className="font-bold text-[#1F2937]">30 days</span></p>
                        </div>
                        <button className="px-4 py-1.5 border border-gray-300 text-[#64748B] text-sm font-medium rounded-lg hover:bg-gray-50 transition">
                            Edit
                        </button>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                        <h3 className="text-lg font-semibold text-[#244D3F] mb-4">Quick Check-In</h3>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <button onClick={() => handleAction('Call')} className="flex flex-col items-center justify-center p-4 border border-gray-100 rounded-xl hover:bg-[#ee82ee] transition gap-2">
                                <span className="text-2xl text-[#1F2937] font-bold"><IoCall />
                                </span>
                                <span className="text-sm font-medium text-[#64748B]">Call</span>
                            </button>
                            <button onClick={() => handleAction('Text')} className="flex flex-col items-center justify-center p-4 border border-gray-100 rounded-xl hover:bg-[#ee82ee] transition gap-2">
                                <span className="text-2xl text-[#1F2937] font-bold"><BsChatRightText />
                                </span>
                                <span className="text-sm font-medium text-[#64748B]">Text</span>
                            </button>
                            <button onClick={() => handleAction('Video')} className="flex flex-col items-center justify-center p-4 border border-gray-100 rounded-xl hover:bg-[#ee82ee] transition gap-2">
                                <span className="text-2xl text-[#1F2937] font-bold"><CiVideoOn />
                                </span>
                                <span className="text-sm font-medium text-[#64748B]">Video</span>
                            </button>
                        </div>
                    </div>

                </div>

            </div>


        </div>
    );
};
export default FriendsDetails;