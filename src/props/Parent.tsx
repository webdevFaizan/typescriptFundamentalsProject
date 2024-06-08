import { Child } from "./Child";
import React from 'react'


interface ParentProps {
    
}

const Parent : React.FC<ParentProps>= (props : ParentProps) => {
    return (
        <Child color="green"/>
    )
}
export default Parent;

Parent.displayName;