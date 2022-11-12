import React from "react";

export interface Point{
    lat:number,
    lon:number
}
export interface LocationContextType{
    endLocation:Point,
    currentLocation:Point,
    navigate:boolean,
    setEndLocation: (p:Point) => void,
    setCurrentLocation: (p:Point) => void,
    setNavigate: (b:boolean) => void
}

const endLoc = {lat:0,lon:0}
const currentLoc = {lat:0,lon:0}
export const locationContext = React.createContext<LocationContextType>({endLocation:endLoc,currentLocation:currentLoc,navigate:false,setEndLocation:(p)=>{},setCurrentLocation:(p) => {},setNavigate:(b) => {}});