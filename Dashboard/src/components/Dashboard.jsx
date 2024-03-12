import React, {useState, useEffect} from 'react'

function Dashboard() {
  const [cards, setCards] = useState([])
  const fetchData = () => {
    fetch('http://localhost:4000/cards').then(res=> res.json()).then(data => {setCards(data);})
    .catch(e => console.log(e.message))
  };
  UseEffect(()=> {fetchData();}, []);
  return (
    <section className="dashboard">
        <div className="row">
            <div className="col-lg-8">
                <div className="row">
                  {
                    cards && cards.length> 0 && cards.map(card => <Card key={card._id} card = {card} />)
                  }


                </div>

            </div>

        </div>
        <div className="col-lg-4"></div>
    </section>
  )
}

export default Dashboard