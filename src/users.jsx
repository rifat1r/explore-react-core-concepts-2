import { useEffect, useState } from "react"

export default function Users(){
    const [users,setUSers] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUSers(data))
    },[])
    return (
        <div>
         <h3>USers: {users.length}</h3>
        </div>
    )
}

/*
1.declare a state to hold the data
2.useEffect with call back and dependency array
3.use fetch to load data
*/ 