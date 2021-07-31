import React,{useState,useEffect} from 'react'

import { Products, Navbar, Cart } from './components'
import {commerce} from './components/lib/commerce'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
    const [products,setProducts]=useState([])
    const [cart,setCart]=useState({})

    const fetchProducts= async()=>{
        const {data}=  await commerce.products.list()
        setProducts(data)
    }
    const fetchCart=async()=>{
        setCart(await commerce.cart.retrieve())
    }
    const handelAddToCart= async(productId,quantity)=>{
        const response= await commerce.cart.add(productId,quantity)
        setCart(response.cart)
    }

const handelUpdateCartQty=async(productsId,quantity)=>{
    const response=await commerce.cart.update(productsId,{quantity})
    setCart(response.cart)
}

const handelRemoveFromCart=async(productId)=>{
    const {cart}= await commerce.cart.remove(productId)
    setCart(cart)
}

const handelEmptyCart=async()=>{
    const {cart}=await commerce.cart.empty()
    setCart(cart)
}


    useEffect(()=>{
        fetchProducts()
        fetchCart()
    },[])
    console.log(cart)
    // console.log(products)
    return (
        <Router>
        <div>
            <Navbar   totalItems={cart.total_items}/>
                <Switch>
                    <Route exact path="/" >
                    <Products products={products} onAddToCart={handelAddToCart} />
                    </Route>
                    <Route    exact path='/cart' >
                    <Cart cart={cart} 
                    handelUpdateCartQty={handelUpdateCartQty}
                    handelRemoveFromCart={handelRemoveFromCart}
                    handelEmptyCart={handelEmptyCart}
                    />
                    </Route>
                </Switch>
        </div>
        </Router>
    )
}

export default App
