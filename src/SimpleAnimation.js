import React, {useState, useEffect} from 'react'
import { Animate } from "react-simple-animate";
import { divStyle, buttonStyle } from "./styles";
import { AnimateKeyframes } from "react-simple-animate";

const SimpleAnimation = (props) =>{

    const [play,setPlay] = useState(false)

    return(
        <div>
            <Animate
            play={play}
            duration={0.5}
            start={{
                transform: "translateX(0px)"
              }}
              end={{ transform: "translateX(500px)" }}
            >
            <div style={divStyle} />
            </Animate>
            <button
            style={buttonStyle}
            onClick={() => setPlay(!play)}
          >  
          Play
          </button>
          <AnimateKeyframes
      play
      duration={3}
      keyframes={["opacity: 0", "opacity: 1"]}
      iterationCount="infinite"
    >
      <div style={divStyle} />
    </AnimateKeyframes>
        </div>
    )
}

export default SimpleAnimation