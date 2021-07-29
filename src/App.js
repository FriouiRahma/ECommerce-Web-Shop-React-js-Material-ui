import React,{useState,useEffect} from 'react'

import {Products,Navbar} from './components'
import {commerce} from './components/lib/commerce'

function App() {
    const [products,setProducts]=useState([])

    const fetchProducts= async()=>{
        const response=  await commerce.products.list()
    }
    return (
        <div>
            <Navbar/>
            <Products/>
        </div>
    )
}

export default App
