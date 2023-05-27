import React, { useEffect, useState }  from "react";

const Admin =()=>{
    const [admin,setAdmin]= useState([]);
    useEffect(()=>{
   getProducts()
    },[])
 const getProducts = async () =>{
    let result = await fetch('http://localhost:5000/addmin');
 result = await result.json();
 setAdmin(result); 
}


console.log("Admin List" , admin.Name);
    return(
        <div className="product-list">
            <h2>Catagory List</h2>
            <ul>
                <li>Sr . number </li> 
                <li>ProductName</li>
                <li>CategoryName</li>
                
            </ul>
            {
                admin.map((item ,index)=>
                <ul key={item._id}>
                    <li>{index+1}</li>
                    <li>{item.Voter}</li>
                    <li>{item.Name}</li>
                </ul>
                )
            }

        </div>
    )
}
export default Admin