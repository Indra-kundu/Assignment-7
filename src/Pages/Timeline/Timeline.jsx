import { useContext, useState } from "react";
import { TimelineContext } from "./TimelineContext";
import { IoCall } from "react-icons/io5";
import { BsChatRightText } from "react-icons/bs";
import { CiVideoOn } from "react-icons/ci";

const Timeline = () => {
    const { activities } = useContext(TimelineContext);
    const [filter, setFilter] = useState("All");

    // Filter Logic: Initially sob dekhabe
    const filteredData = filter === "All"
        ? activities
        : activities.filter(act => act.type === filter);

    const getIcon = (type) => {
        if (type === 'Call') return <IoCall />;
        if (type === 'Text') return <BsChatRightText />;
        return <CiVideoOn />;
    };

    return (
        <div className="w-full  p-10 bg-[#F8FAFC] min-h-screen">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-[#1F2937] mb-2">Timeline</h2>

                {/* Figma Filter Dropdown */}
                <div className="mb-8">
                    <select
                        onChange={(e) => setFilter(e.target.value)}
                        className="border border-[#E9E9E9] rounded-md p-2 text-sm text-[#64748B] w-48 bg-white focus:outline-none"
                    >
                        <option value="All">Filter timeline</option>
                        <option value="Call">Call</option>
                        <option value="Text">Text</option>
                        <option value="Video">Video</option>
                    </select>
                </div>

                {/* Timeline List with Figma Styling */}
                <div className="relative  border-[#E9E9E9] bg-white   space-y-10 p-10 ">
                    {filteredData.length > 0 ? (
                        filteredData.map((item) => (



                            <div key={item.id} className="relative mb-6 "> {/* Card-er ba-dike space rakhar jonno ml-6 */}

                                {/* Corrected Icon position */}
                                <div className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white border border-[#E9E9E9] rounded-full shadow-sm text-yellow-500 z-10 flex items-center justify-center w-11 h-11">
                                    {getIcon(item.type)}
                                </div>

                                {/* Card Content - Figma style white box */}
                                <div className="bg-white border border-[#E9E9E9] rounded-md p-6 pl-20 flex items-center justify-between">
                                    <div>
                                        <p className="text-gray-700">
                                            <span className="font-bold">{item.type}</span> with <span className="font-bold text-gray-900">{item.name}</span>
                                        </p>
                                        <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider">{item.time}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="pl-10 text-gray-400 italic">No activity recorded yet.</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Timeline;