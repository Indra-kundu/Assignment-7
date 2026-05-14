
const Card = () => {
    return (
        <div className="max-w-5xl mx-auto px-10 mt-10 mb-12">

            <div className="flex flex-wrap md:flex-nowrap justify-between gap-4">

                <div className="flex-1 min-w-150px bg-white border border-gray-100 rounded-xl p-6 text-center shadow-sm">
                    <h3 className="text-3xl font-bold text-[#244D3F] mb-3">10</h3>
                    <p className="text-[10px] font-bold text-[#64748B] uppercase tracking-widest leading-tight">
                        Total Friends
                    </p>
                </div>

                <div className="flex-1 min-w-150px bg-white border border-gray-100 rounded-xl p-6 text-center shadow-sm">
                    <h3 className="text-3xl font-bold text-[#244D3F] mb-3">3</h3>
                    <p className="text-[10px] font-bold text-[#64748B] uppercase tracking-widest leading-tight">
                        On Track
                    </p>
                </div>

                <div className="flex-1 min-w-150px bg-white border border-gray-100 rounded-xl p-6 text-center shadow-sm">
                    <h3 className="text-3xl font-bold text-[#244D3F] mb-3">6</h3>
                    <p className="text-[10px] font-bold text-[#64748B] uppercase tracking-widest leading-tight">
                        Need Attention
                    </p>
                </div>

                <div className="flex-1 min-w-150px bg-white border border-gray-100 rounded-xl p-6 text-center shadow-sm">
                    <h3 className="text-3xl font-bold text-[#244D3F] mb-3">12</h3>
                    <p className="text-[10px] font-bold text-[#64748B] uppercase tracking-widest leading-tight">
                        Interactions This Month
                    </p>
                </div>
            </div>
        </div >

    );
};

export default Card;