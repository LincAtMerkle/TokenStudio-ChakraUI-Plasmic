import * as React from "react";

export function SizeComponent({className,size}:{className:string,size:string}) {

    return <div className={className} style={{height:size,width:size,backgroundColor:"black"}}> </div>
}