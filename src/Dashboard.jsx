import { plugins } from 'chart.js';
import React from 'react'
import {Line } from "react-chartjs-2";
import { pie } from "react-chartjs-2";

const Dashboard=()=> {

    const lineChartData={
        labels: ["Jan" ,"Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets:[
            {
                label:"Monthly Sales (NPR)",
                data : [15000,25000, 40000, 30000, 45000,50000, 600000, 55000, 70000,75000, 65000, 80000],
                borderColor: "rgba(54,162,235, 1)",
                backgroundColor: "rgba(54,162, 235, 0.2)",
                borderWidth:2,
                tension: 0.4,
            },
        ],
    },

    const lineChartOptions = {
        responsive : true,
        plugins:{
            legend:{display:true , position :"top"},
        },
    };

  return (
    <div className='space-y-6'>
        <div className='grid grid-cols-3 gap-4' >
            <div className='p-4 bg-white rounded shadow'>
            <h3 className='text-lg font-bold'> Total Sales</h3>
            <p className='text-2xl'>NPR 425,000</p>
            <p className='text-sm text-green-600'>↑ 12.5% from last month</p>
            </div>

            <div className='p-4 bg-white rounded shadow'>
            <h3 className='text-lg font-bold'>  Active Carts</h3>
            <p className='text-2xl'> 42</p>
            <p className='text-sm text-red-600'>↓ 5 from last week</p>
            </div>

            <div className='p-4 bg-white rounded shadow'>
            <h3 className='text-lg font-bold'> Completed Transactions</h3>
            <p className='text-2xl'>378</p>
            <p className='text-sm text-green-600'>↑ 8.3% from last month</p>
            </div>

            <div className='p-4 bg-white rounded shadow'>
            <h3 className='text-lg font-bold'>Monthly Sales Trend</h3>
            <div className='h-40 '>
                <Line data={lineChartData} options={lineChartOptions}/>
            </div>
            </div>

            <div className='p-4 bg-white rounded shadow'>
            <h3 className='text-lg font-bold'>Payment Methods</h3>
            <div className='h-40 bg-gray-100'>[ pie Chart Placeholder]</div>
            </div>
        </div>
        <div className='p-4 bg-white rounded shadow'>
            <h3 className='text-lg font-bold'>Recent Activity</h3>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>

            </ul>
        </div>
      
    </div>
  )
}

export default Dashboard;