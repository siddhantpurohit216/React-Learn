import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{

    constructor()
    {
        super();
        console.log("Parent constructor")
    }

    componentDidMount()
    {
        console.log("parent DidMount");
    }

   


    render(){
        console.log("Parent render")

        return(
            <div>
                <h1>About Us</h1>
                <UserClass name={"Second"} location={"Landor"}/>

            </div>
        )
    }
    
}

export default About;

// const About =()=>{
//     return(
//         <div>
//             <h1>About Us</h1>
//             <User name={"haloFunctional"} />
//             <UserClass name={"haloCClasssss"} location={"Dehradun"}/>
//         </div>
//     )
// }

// export default About;