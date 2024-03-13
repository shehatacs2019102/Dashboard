import React, {useState, useEffect} from 'react'
import PieChart from './PieChart';
import LineChart from './LineChart';
import RecentSalesTable from './RecentSalesTable';

// import BarChart from './BarChart';

function Dashboard() {
  
 
  return (
    <section className="dashboard">
        
            <div className="col-lg-8">
                <div className="row">
                  
                  <PieChart/>
                  <LineChart/> 
                 
                  

                </div>

           

        </div>
        <div className="col-lg-4">
          
           <RecentSalesTable/>
          </div>
    </section>
  )
}

export default Dashboard