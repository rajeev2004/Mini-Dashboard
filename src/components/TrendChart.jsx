import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from "recharts";

export default function TrendChart({ series = [], title = "Metric Trend" }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 border">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div style={{ width: "100%", height: 260 }}>
        <ResponsiveContainer>
          <LineChart data={series}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="ts" tick={{ fontSize: 12 }} />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#0050ff" strokeWidth={2} dot={{ r: 2 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
