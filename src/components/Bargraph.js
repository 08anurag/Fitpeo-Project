import React from 'react'
import {
    BarChart,
    Bar,
    CartesianGrid,
    XAxis,
    YAxis,
    ResponsiveContainer,
} from "recharts";

const BarGraph = () => {
    const data = [
        { month: "Jan", val: 65 },
        { month: "Feb", val: 45 },
        { month: "Mar", val: 100 },
        { month: "Apr", val: 70 },
        { month: "May", val: 80 },
        { month: "Jun", val: 35 },
        { month: "Jul", val: 90 },
        { month: "Aug", val: 100 },
        { month: "Sep", val: 95 },
        { month: "Oct", val: 80 },
        { month: "Nov", val: 75 },
        { month: "Dec", val: 80 },
    ];

    return (
        <div className=' bar'>
            <ResponsiveContainer>
                <BarChart width={800} height={220} data={data}>
                    <Bar dataKey="val" fill="purple" radius={[10, 10, 10, 10]} />
                    <XAxis dataKey="month"/>
                </BarChart>
            </ResponsiveContainer>
        </div>
        
    );
}

export default BarGraph
