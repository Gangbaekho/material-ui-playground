import React,{useState,useEffect} from 'react'
import Navigation from './Navigation'
import LostVillege from './LostVillege'
import Entering from './Entering'
import Login from './Login'

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
            case 'login':
                return (
                    <Login/>
                )
            case 'test':
                return (
                    <div>
                        테스트!!
                    </div>
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