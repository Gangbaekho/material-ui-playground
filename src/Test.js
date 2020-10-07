import React,{useState,useEffect} from 'react'
import Navigation from './Navigation'
import LostVillege from './LostVillege'
import Entering from './Entering'
import Login from './Login'
import Animation from './Animation'
import Swiper from './Swiper'

const Test = (props) =>{

    const renderBodyContents = (path) =>{

        switch(path){
            case 'lostvillege':
                return (
                    <LostVillege/>
                )
            case 'entering':
                return (
                    <Entering/>
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