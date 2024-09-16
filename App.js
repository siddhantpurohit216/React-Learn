import React from "react";
import ReactDOM from "react-dom/client";

//react.createElement returns an obj
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Halooo from React!!"
);
console.log(heading);//react object

//it is not necessary to write React.createElem, use JSX instead(easy)
//But js engine doesnot understand html hence jsx needs to be converted into js 
//this is done by babel(js transpiler) present inside parcel
//babel converts the html into the obj created by React.createElem 

const jsxHeading =<h1 id="heading2">Halooo from React!!</h1>
// console.lof=(jsxHeading)


//ReactDom.render converts that obj into html elem and renders it 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading); 
root.render(heading); //render method converts the react object into a html elem and puts inside root


