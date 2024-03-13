import React, {useState, useEffect} from 'react'

function RecentSalesTable() {
    const [items, setItems] = useState([])

    const fetchRecentSalesData = () => {
        return fetch("http://localhost:4000/recentsales")
          .then((res) => res.json())
          .then((d) => setItems(d))
      }

   
  useEffect(() => {
    fetchRecentSalesData();
  }, []);

    function handleStatus (status) {
        switch(status){
            case 'Approved':
                return'success';
                break;
            case 'Pendings':
                return 'warning';
                break;
            case 'Rejected':
                return 'danger';
                break;
            default:
                return 'success'
        }
        
    }
  return (
    // <div className="table">

    //             {   
    //             items && items.length>0 && items.map(item=> (
                
    //                 <div>
    //                     {item.number}
    //                 </div>


    //             ))
    //         }
    // </div>
      


    <table className="table table-borderless datatable">
        <thead className="table-light">
            <th scope="col">#</th>
            <th scope="col">Customer</th>
            <th scope="col">Product</th>
            <th scope="col">Price</th>
            <th scope="col">Status</th>
        </thead>
        <tbody>
            {items && items.length >0 && items.map(item => (
                <tr key={item._id}>
                    <th scope="row">
                        <a href="#">{item.number}</a>
                    </th>
                    <td>{item.customer}</td>
                    <td>
                        <a href="" className="text-primary">
                            {item.product}
                        </a>
                    </td>
                    <td>${item.price.toFixed(2)}</td>
                    <td>
                        <span className={`badge bg-${handleStatus(item.status)}`}>
                            {item.status}
                        </span>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
   
   
  );
}

export default RecentSalesTable;