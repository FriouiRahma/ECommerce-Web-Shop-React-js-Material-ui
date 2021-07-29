import react from 'react';
import { Grid } from '@material-ui/core';
import Product from './product/Product';

const products=[
    {id:1,name:"Shoes", desciption:"Runnig shoes",price:"$5",image:"https://img.bfmtv.com/i/0/0/614/884795d1db8dae3aa27d784bd84b4.jpg"},
    {id:2,name:"Macbook", desciption:"Appele macbook",price:"$20",image:"https://img.bfmtv.com/i/0/0/614/884795d1db8dae3aa27d784bd84b4.jpg"},
]
const Products=()=>{

    return(
        <main>
            <Grid  container justify='center'  spacing={4}>
                {
                   products.map((product)=>(
                       <Grid  item key={product.id}  xs={12} sm={6} md={4} lg={3}>
                           <Product  product={product}/>
                       </Grid>
                   ))
                }
            </Grid>
        </main>

    )

}

export default Products;

