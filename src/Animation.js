import React from 'react'
import Spritesheet from 'react-responsive-spritesheet'

const Animation = (props) => {

    return (
        <Spritesheet
        className={`my-element__class--style`}
        image={`https://raw.githubusercontent.com/danilosetra/react-responsive-spritesheet/master/assets/images/examples/sprite-image-horizontal.png`}
        widthFrame={420}
        heightFrame={500}
        steps={14}
        fps={10}
        autoplay={true}
        loop={true}
      />
    )
}

export default Animation