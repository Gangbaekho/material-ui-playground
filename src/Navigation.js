import React,{useState,useEffect} from 'react'
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
    const navigationOptions = [
        {
            path:'lostvillege',
            name:'로스트 빌리지'
        },
        {
            path:'simpleanimation',
            name:'심플 애니메이션'
        },
        {
            path:'swiper',
            name:'스와이퍼'
        },
        {
            path:'animation',
            name:'애니메이션'
        }
    ]
    const {history,match} = props
    const [path,setPath] = useState(match.params.path)

    useEffect(()=>{
        history.push(`/${path}`)
    },[path])
    
    return(
        <div> 
            <AppBar position="static">
                <Toolbar>
                    <Grid container>
                       {navigationOptions.map((item)=>(
                        <Grid key={item.name} item xs={3} className={classes.center}>
                            <Button 
                            className={classes.white}  
                            onClick={()=> setPath(item.path)}>
                                {item.name}
                            </Button>
                        </Grid>
                       ))}
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navigation