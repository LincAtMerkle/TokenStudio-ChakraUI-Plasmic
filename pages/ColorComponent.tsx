import * as React from "react";

export function ColorComponent({className,color}:{className:string,color:string}) {
    return <div className={className} style={{height:"80px",width:"80px",backgroundColor:color}}> </div>
}