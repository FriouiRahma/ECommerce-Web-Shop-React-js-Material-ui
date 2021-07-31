import React from 'react'
import {AppBar,Toolbar,IconButton,Badge,MenuItem,Menu,Typography} from '@material-ui/core'
import {AddShoppingCart} from '@material-ui/icons'

import logo from '../../assets/commerce.png'
import useStyles from  './styles'

import {Link,useLocation} from "react-router-dom"

function Navbar({totalItems}) {
    const classes=useStyles()
    const location=useLocation()
    return (
        <>
        <AppBar position="fixed"  className="classes.appBar"  color='inherit'>
            <Toolbar>
                <Typography component={Link} to="/"   variant="h6" className={classes.title} color='inherit' >
                    <img src={logo} alt="commerce.js"  height="25px" className="classes.image"  />
                    commerce.js
                </Typography>
                <div className={classes.grow}/>
              {location.pathname=="/" &&
               ( <div classes={classes.button}>
                    <IconButton  component={Link}  to="/cart" area-label="Show cart items" color="inherit">
                        <Badge badgeContent={totalItems} color="secondary">
                            <AddShoppingCart/>
                        </Badge>
                    </IconButton>
                </div>)}
            </Toolbar>

        </AppBar>
            
        </>
    )
}

export default Navbar
