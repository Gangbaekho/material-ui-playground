import React from 'react'
import {AppBar,Toolbar,IconButton,Typography,Button,Grid} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles({
    center:{
        textAlign:'center'
    },
    white:{
        color:'white'
    }
})

const Navigation = (props) =>{

    const classes = useStyles()

    return(
        <div> 
            <AppBar position="static">
                <Toolbar>
                    <Grid container>
                        <Grid item xs={3} className={classes.center}><Button className={classes.white}>로스트 밸리지</Button></Grid>
                        <Grid item xs={3} className={classes.center}><Button className={classes.white}>입국 심사</Button></Grid>
                        <Grid item xs={3} className={classes.center}><Button className={classes.white}>로그인</Button></Grid>
                        <Grid item xs={3} className={classes.center}><Button className={classes.white}>테스트</Button></Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navigation