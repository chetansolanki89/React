import React from "react";
import { ChildProps } from "./ChildProps";

export const ParentProps=()=>{
    const data="abcd1234"
    const data2="1234abcd"
    return(
        <div>
            <h3>Parent Component</h3>
            <ChildProps nameVar={data} varName={data2}/>
        </div>
    )
}