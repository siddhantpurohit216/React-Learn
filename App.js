const heading = React.createElement(
  "h1",
  { id: "headinggg" },
  "Halooo from React!!"
);
console.log(heading);//react object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); //render method converts the react object into a html elem and puts inside root
