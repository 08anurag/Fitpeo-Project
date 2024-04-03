import React from 'react'
import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";

const Piechart = () => {
    const data = [
        { name: "customer_1", students: 45 },
        { name: "customer_2", students: 30 },
        { name: "customer_3", students: 25 },
    ];

    return (
        <div style={{ width: "100%", height: 250 }}>
        <ResponsiveContainer>
            <PieChart width={250} height={220}>
                <Tooltip />
                <Pie
                    data={data}
                    dataKey="students"
                    outerRadius={80}
                    innerRadius={50}
                    fill="green"
                    label={({ name, students }) =>
                        `${name}: ${students}`
                    }
                />
            </PieChart>
            </ResponsiveContainer>
        </div>
    );
}

export default Piechart
