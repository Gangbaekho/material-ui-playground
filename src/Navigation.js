import React,{useState,useEffect}from 'react'
import {Grid,AppBar,Toolbar,IconButton, Button,Link} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles({
    gridComponent:{
        textAlign:'center'
    },
    buttonColor:{
        color:'white'
    }
})

const Navigation = (props) =>{

    const classes = useStyles()
    const {match,history} = props

    console.log(match)

    return(
        <>
            <Grid container>
                <AppBar position="static">
                    <Toolbar>
                        <Grid item xs={4} className={classes.gridComponent}>
                            <Button className={classes.buttonColor}>로스트 빌리지</Button>
                        </Grid>
                        <Grid item xs={4} className={classes.gridComponent}>
                        <Button className={classes.buttonColor}>입국 심사</Button>
                        </Grid>
                        <Grid item xs={4} className={classes.gridComponent}>
                        <Button className={classes.buttonColor}>로그인</Button>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </Grid>
        </>
    )
}

export default Navigation