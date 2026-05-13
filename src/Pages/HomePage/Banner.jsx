import { FaPlus } from "react-icons/fa6";


const Banner = () => {
    return (
        <div className="bg-white pt-16 pb-12 px-4">
            <div className="max-w-3xl mx-auto text-center">

                <h1 className="text-5xl font-bold text-[#1F2937] leading-tight">Friends to keep close in your life</h1>
                <p className="text-[#64748B] py-6 text-sm md:text-base max-w-lg mx-auto leading-relaxed">

                    Your personal shelf of meaningful connections. Browse, tend, and nurture the
                    relationships that matter most.
                </p>
                <button className="flex items-center gap-2 bg-[#244D3F] hover:bg-[#1a3a2f] text-white px-6 py-2.5 rounded-md mx-auto text-sm font-medium transition-all shadow-sm">
                    <FaPlus />
                    <span>Add a Friend</span>
                </button>

            </div>
        </div>
    );
};

export default Banner;