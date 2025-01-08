import React, { ChangeEvent, useEffect, useState } from "react";


interface MyComponentProp {
  userName: string,
  age: number
}

export  const TScomponent:React.FC<MyComponentProp>=({userName,age})=>{

const [count , setCount]=useState<number>();

useEffect(() => {
  const intervalId = setInterval(() => {
    const randomColor = `hsl(${Math.random() * 360}, 70%, 50%)`;
    document.body.style.backgroundColor = randomColor;
  }, 300);

  return () => clearInterval(intervalId);
}, [])

const handleEvent=(e: React.MouseEvent<HTMLButtonElement>):void=>{
  // console.log(`Button clicked at : x:${e.clientX}, y:${e.clientY}`);
  const randomColor = `hsl(${Math.random() * 360}, 100%, 75%)`;
    document.body.style.backgroundColor = randomColor;

}
return(
<>
<div>
  <h4>My name is {userName}</h4>
  <h4>and age is {age}</h4>
  <button onClick={handleEvent}>event handle</button>
</div>
</>
)

}
