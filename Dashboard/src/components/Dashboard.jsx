import React, {useState, useEffect} from 'react'
import PieChart from './PieChart';
import LineChart from './LineChart';
import RecentSalesTable from './RecentSalesTable';

// import BarChart from './BarChart';

function Dashboard() {
  
 
  return (
    <div className="dashboard">
        <div className="container">
          <div className="row">
          <div className="col">
                  <PieChart/>
                  </div>
                  <div className="col">
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