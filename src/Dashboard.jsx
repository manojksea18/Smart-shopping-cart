// import { plugins } from 'chart.js';

import React, { useEffect, useState } from 'react';
import { db, collection, getDocs } from '../src/firebase'; // Import Firebase setupimport { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Title, ArcElement, Tooltip, Legend } from 'chart.js';
import { Line } from "react-chartjs-2";

  import { Chart as ChartJS,LineElement, ArcElement, PointElement, Tooltip, Legend, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(
 LineElement,
  ArcElement, 
  PointElement, 
  Tooltip, 
  Legend, 
  CategoryScale, 
  LinearScale
);


import { Pie } from "react-chartjs-2";
import { Navigate } from 'react-router-dom';

const Dashboard=()=> {

    const[totalSales, setTotalSales] = useState(0);
    const [activeCarts, setActiveCarts]= useState(0);
    const[transactions, setTransactions]= useState(0);
    const [monthlySales, setMonthlySales] = useState([]);
    const [paymentMethods, setPaymentMethods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showDropdown, setShowDropdown] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(
        localStorage.getItem("token") !== null
      );

    // useEffect(()=>{
    //     if localStorage ma token xa vani Dashboard mai user lai rakhni
    //     else redirect to login
    // })

    useEffect(()=>{
         // Fetch data from Firebase
         const fetchData = async()=>{
            try{
                const salesData = await getDocs(collection(db,'sales'));
                const cartData = await getDocs(collection(db, "activeCarts"));
                const transactionsData= await getDocs(collection(db, "transactions"));
        
                // Assuming Firebase documents have structured data
                const sales = salesData.docs.map((doc)=> doc.data());
                const carts = cartData.docs.map((doc)=> doc.data());
                const transactions =transactionsData.docs.map((doc)=>doc.data());

                setTotalSales(sales.reduce((sum,item)=>sum+item.amount,0))
                setActiveCarts(carts.length);
                setTransactions(transactions.length);
                setMonthlySales(sales.map((item)=>item.monthlySales));
                setPaymentMethods(sales.map((item)=> item.paymentMethods));
            }catch(error){
                console.error("Error fetching data from Firebase:", error);
            }

            };
            fetchData();
    }, []);



      // Logout function
  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token
    setIsAuthenticated(false);
    alert("Logged out successfully!");
    Navigate("/"); // Redirect to login
  };

  // Redirect if not authenticated
  if (!isAuthenticated && localStorage.getItem("token") === null) {
    return <Navigate to="/" />;
  }

    const lineChartData={
        labels: ["Jan" ,"Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets:[
            {
                label:"Monthly Sales (NPR)",
                data: Array.isArray(monthlySales) && monthlySales.length ? monthlySales : [15000, 40000, 40000, 30000, 45000, 50000, 60000, 55000, 70000, 75000, 65000, 80000],
                borderColor: "rgba(54,162,235, 1)",
                backgroundColor: "rgba(54,162, 235, 0.2)",
                borderWidth:2,
                tension: 0.4,
                pointRadius: 3,
            },
        ],
    }

    const lineChartOptions = {
        responsive : true,
        plugins:{
            legend:{display:true , position :"top"},
        },
        // scales: {
        //     x: {
        //       grid: {
        //         display: false,
        //       },
        //     },
        //     y: {
        //       grid: {
        //         drawBorder: false,
        //       },
        //     },
        //   },
    };
    const pieChartData ={
        labels: ["esewa", "Cash" , "Card"],
        datasets:[
            {
                data: [50, 35, 20], // precentage of payment methods
                backgroundColor:["#66BB6A", "#FFD54F", "#42A5F5"],
                hoverBackgroundColor: ["#66BB6A", "#FFD54F", "#42A5F5"], // Colors on hover
                borderWidth: 2
            },
        ],
    };

    const pieChartOptions = {
        responsive: true,
        plugins:{
            legend:{ display:true , postions: "right"
                
            }
        },
    };
    return (
        <div className=''>
    <div className='space-y-6 mt-0 '>
        <div className='h-20 bg-white font-bold text-2xl text-gray-700  p-4 rounded shadow-sm  flex items-center justify-between'>
            <h1 className=''> Dashboard</h1>

        <div className='relative'>  
        <div className='flex flex-row  cursor-pointer'
         onClick={()=>setShowDropdown(!showDropdown)}>

         <div className='mr-6  '>
         <p className="text-sm font-bold ">Manoj Khati</p>
            <p className="text-xs ">Store Manager</p>
            </div>   
            <h2 className='h-12 w-12 bg-gray-400 rounded-full text-center '>  MK</h2>
        </div>
        </div>  

        {showDropdown && (
            <div className='absolute right-10 mt-20 w-20   rounded-lg z-10 space-y-5'>
         <button
          onClick={handleLogout}
          className="px-2 py-2 font-semibold rounded-full bg-blue-400 mt-5"
        >
          Logout
        </button>
            </div>

        )}
                   

        
        </div>
        
        <div className='grid grid-cols-3 gap-4' >
            <div className='p-4 bg-white rounded shadow'>
            <h3 className='text-lg font-bold'> Total Sales</h3>
            <p className='text-2xl'>NPR {totalSales}</p>
            <p className='text-sm text-green-600'>↑ 12.5% from last month</p>
            </div>

            <div className='p-4 bg-white rounded shadow'>
            <h3 className='text-lg font-bold'>  Active Carts</h3>
            <p className='text-2xl'> {activeCarts}</p>
            <p className='text-sm text-red-600'>↓ 5 from last week</p>
            </div>

            <div className='p-4 bg-white rounded shadow'>
            <h3 className='text-lg font-bold'> Completed Transactions</h3>
            <p className='text-2xl'>{transactions}</p>
            <p className='text-sm text-green-600'>↑ 8.3% from last month</p>
            </div>
           
            <div className='col-span-2 bg-white p-4  rounded shadow'>
            <h3 className='text-lg font-bold'>Monthly Sales Trend</h3>
            <div className='h-72  '>
                <Line data={lineChartData} options={lineChartOptions} />
            </div>
            </div>
            
            <div className='col-span-1 p-4 bg-white rounded shadow  '>
            <h3 className='text-lg font-bold flex items-center '>Payment Methods</h3>
            <div className='h-72 w-full '>
            <Pie data={pieChartData} options={pieChartOptions} /> </div>
            </div>
            
        </div>
        <div className='p-4 bg-white rounded shadow h-52'>
            <h3 className='text-lg font-bold'>Recent Activity</h3>
            <ul className='text-sm space-y-1'>
            <li>Anamika Rai - Cart A001 Completed</li>
          <li>Gagan Pradhan - Cart B001 Pending Payment</li>
          <li>Manoj Khati - Cart C001 Cancelled</li>
          <li>Suman Pokharel - Cart D001 Processing</li>

            </ul>
        </div>
      
    </div>
    </div>
  )
}

export default Dashboard;