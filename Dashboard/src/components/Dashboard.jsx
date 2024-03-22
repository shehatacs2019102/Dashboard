import React, {useState, useEffect} from 'react'
import PieChart from './PieChart';
import LineChart from './LineChart';
import RecentSalesTable from './RecentSalesTable';
import './dashboard.css'
import PageTitle from './PageTitle'


// import BarChart from './BarChart';

function Dashboard() {
  
 
  return (
    <div className="dashboard">
     
        <div className="container">
           <PageTitle page="Dashboard"/>
          <div className="row">
          <div className="col pie-chart">
                  <PieChart/>
                  </div>
                  <div className="col line-chart">
                  <LineChart/>
                  </div>
                  <div className="col">
                  <RecentSalesTable/>
                  </div>
          </div>
                 
                  
                   
          
                 
                 
                  

           

         
    </div>

        </div>
           
  )
}

export default Dashboard