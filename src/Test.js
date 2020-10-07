import React , {useState,useEffect}from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Button} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

const Test = (props) =>{

    const classes = useStyles()
    const history = props.history
    const params = props.match.params
    const [id,setId] = useState(params.param)

    useEffect(()=>{
        console.log(id)
    },[id])

    const handleSubmit = (e) =>{
        e.preventDefault()
        setId(e.target.elements.id.value)
        history.push(`/test/${id}`)
    }

    return(
    <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField id="standard-basic" label="ID" name="id"/>
        <button>check id</button>
    </form>
    )
}

export default Test