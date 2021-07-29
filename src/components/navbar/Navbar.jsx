import React from 'react'
import {AppBar,Toolbar,IconButton,Badge,MenuItem,Menu,Typography} from '@material-ui/core'
import {AddShoppingCart} from '@material-ui/icons'

import logo from '../../assets/commerce.png'
import useStyles from  './styles'

function Navbar() {
    const classes=useStyles()
    return (
        <>
        <AppBar position="fixed"  className="classes.appBar"  color='inherit'>
            <Toolbar>
                <Typography variant="h6" className={classes.title} color='inherit' >
                    <img src={logo} alt="commerce.js"  height="25px" className="classes.image"  />
                    commerce.js
                </Typography>
                <div className={classes.grow}/>
                <div classes={classes.button}>
                    <IconButton  area-label="Show cart items" color="inherit">
                        <Badge badgeContent={2} color="secondary">
                            <AddShoppingCart/>
                        </Badge>
                    </IconButton>

                </div>
            </Toolbar>

        </AppBar>
            
        </>
    )
}

export default Navbar