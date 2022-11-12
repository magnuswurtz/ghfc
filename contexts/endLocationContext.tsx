import React from "react";

export interface Point{
    lat:number,
    lon:number
}
export interface EndLocationContextType{
    location:Point,
    navigate:boolean,
    setLocation: (p:Point) => void,
    setNavigate: (b:boolean) => void
}

const loc = {lat:0,lon:0}
export const endLocationContext = React.createContext<EndLocationContextType>({location:loc,navigate:false,setLocation:(p)=>{},setNavigate:(b) => {}});