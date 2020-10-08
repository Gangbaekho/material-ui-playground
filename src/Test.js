import React,{useState,useEffect} from 'react'
import Navigation from './Navigation'
import LostVillege from './LostVillege'
import Entering from './Entering'
import Login from './Login'
import Animation from './Animation'
import Swiper from './Swiper'
import SimpleAnimation from './SimpleAnimation'

const Test = (props) =>{

    const renderBodyContents = (path) =>{

        switch(path){
            case 'lostvillege':
                return (
                    <LostVillege/>
                )
            case 'simpleanimation':
                return (
                    <SimpleAnimation/>
                )
            case 'swiper':
                return (
                    <Swiper/>
                )
            case 'animation':
                return (
                    <Animation/>
                )
        }
    }

    return (
        <div>
            <Navigation {...props}/>
            {renderBodyContents(props.match.params.path)}
        </div>
    )
}

export default Test