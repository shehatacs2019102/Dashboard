import React, {useState, useEffect} from 'react'
import PieChart from './PieChart';
import LineChart from './LineChart';
import Card from './Card';
import RecentSalesTable from './RecentSalesTable';
import './dashboard.css'
import PageTitle from './PageTitle'




// import BarChart from './BarChart';

function Dashboard() {
  
  const [cards, setCards] = useState([]);
  const fetchData = () => {
    fetch("http://localhost:4000/cards")
    .then(res=>res.json())
    .then(data =>{setCards(data)})
    .catch(e => console.log(e.message));
    console.log(cards);
  }
  useEffect(()=>{
    fetchData();
  },[])
  return (
    <div className="dashboard">
     
        <div className="container">
           <PageTitle page="Dashboard"/>
          <div className="row">
          <div className=" col-lg-3 pie-chart">
                  <PieChart/>
                  </div>
          <div className="col-lg-5  line-chart">
                  <LineChart/>
                  </div>
          <div className="col-lg-2  cards">
          {cards.map(card=>(
              <Card key={card._id} icon={card.icon} amount={`${card.amount} ` } percentage={card.percentage}/>
              
              
            ))}
            
                  </div>    
          
          
            </div>       
            <div className="row">

          <div className="col sales-table">
              <RecentSalesTable/>
              </div>
            </div>
                   
          
                 
                 
                  

           

         
    </div>

        </div>
           
  )
}

export default Dashboard