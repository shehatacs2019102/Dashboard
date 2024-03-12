import React from 'react'

function Card({card}) {
  return (
    <div className="col-xxl-4 col-md-6">
        <div className="card info-card sales-card">
            <CardFilter filterChange = {handleFilterChange}/>
            <div className="card-body">
                <h5 className="card-title">
                    {card.name } <span> | {filter} </span>
                </h5>
            </div>

        </div>
    </div>
  )
}

export default Card