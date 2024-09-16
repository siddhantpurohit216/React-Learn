import React from "react";
import ReactDOM from "react-dom/client";

//we can call a react elem inside a another react elem using {obj_name}
//can call a fcunctional compo inside antoher fun compo using {func_compo_name()} or <func_compo_name/>
//can call another func compo from one func comp
//all possible combi is possible 

const elem=(
  <h3>I am html elem</h3>
)

const Child=(prop)=>(
  <>
  <h2>I am child!!</h2>
  <h1>{prop.value}</h1>
  </>
  
);
const Comp= ()=>(
  <div>
  <h1>Hello i am a functional component</h1>

  {/* {Child(5)} */}
  <Child value={5} />
  {/* <Child></Child> */}
  {elem}

  </div>
);

const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<Comp/>);