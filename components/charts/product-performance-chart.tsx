"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  { name: "Product A", sales: 4000, revenue: 2400 },
  { name: "Product B", sales: 3000, revenue: 1398 },
  { name: "Product C", sales: 2000, revenue: 9800 },
  { name: "Product D", sales: 2780, revenue: 3908 },
  { name: "Product E", sales: 1890, revenue: 4800 },
]

export function ProductPerformanceChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="sales" fill="#8884d8" />
        <Bar dataKey="revenue" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  )
}

