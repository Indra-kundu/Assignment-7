import { useContext } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { TimelineContext } from "../Timeline/TimelineContext"; // Path thik kore niben

const StatsPage = () => {
    const { activities } = useContext(TimelineContext);
    const getCount = (type) => activities.filter(act => act.type === type).length;


    const data = [
        { name: "Text", value: getCount("Text") || 0 },
        { name: "Call", value: getCount("Call") || 0 },
        { name: "Video", value: getCount("Video") || 0 },
    ];
    const COLORS = ["#8B5CF6", "#22C55E", "#14532D"]; // Purple, Green, Dark Green
    return (
        <div className="bg-[#F8FAFC] min-h-screen p-10 max-w-4xl mx-auto mb-4">
            <h2 className="mb-4 text-2xl font-bold">Friendship Analytics</h2>
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg border border-[#E9E9E9]">
                <h4 className="text-[#244D3F] font-bold">By Interaction Type</h4>

                {/* Chart Container - Fixed the height class */}
                <div className="h-[350px] w-full mt-6">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={data}
                                innerRadius="70%" // Ektu faka thakle Figma-r moto clean dekhabe
                                outerRadius="90%"
                                cornerRadius={10} // Pixel value use korun rounded look-er jonno
                                paddingAngle={8}
                                dataKey="value"
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend iconType="circle" verticalAlign="bottom" />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>

    );
};

export default StatsPage;