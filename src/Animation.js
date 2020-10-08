import React, {useState} from 'react'
import Spritesheet from 'react-responsive-spritesheet'
import {Grid} from '@material-ui/core'

const Animation = (props) => {
    
    const [direction,setDirection] = useState('true')

    return (
        <Grid container justify="center">
        <Grid item xs={6}>
        <Spritesheet
        className={`my-element__class--style`}
        image={`https://raw.githubusercontent.com/danilosetra/react-responsive-spritesheet/master/assets/images/examples/sprite-image-horizontal.png`}
        widthFrame={420}
        heightFrame={500}
        steps={14}
        fps={10}
        autoplay={true}
        isResponsive={true}
        loop={true}
        onClick={(spritesheet)=>{
            console.log(direction)
            setDirection(!direction)
            direction ? spritesheet.setDirection('forward') : spritesheet.setDirection('rewind')
        }}
        onDoubleClick={()=>{
            alert('double clicked..')
        }}
        onMouseEnter={(spritesheet)=>{
            console.log('onMouseEnter')
        }}
        onMouseOver={(spritesheet)=>{
            console.log('onMouseOver')
        }}
        background={"static/images/village.jpg"}
        backgroudSize="cover"
      />
      </Grid>
      </Grid>
    )
}

export default Animation