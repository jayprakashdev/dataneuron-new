import React from 'react'
const ButtonComponent = ({icon, src, text, filled}) => {
  
    return (
        <div 
        className="flex py-2 px-4 rounded-3xl bg-white justify-center" 
        style={
            {border:"1px solid #0000FF",
             background:`${filled?"#0000FF":"#FFF"}`
             , color:`${filled?"#FFF":"#0000FF"}`}
             }
        >
            <div className="flex">
                {icon&&<img src={src} alt="icon" className="mr-3"/>}
                <p>{text}</p>
            </div>
        </div>
    );
}
 
export default ButtonComponent;