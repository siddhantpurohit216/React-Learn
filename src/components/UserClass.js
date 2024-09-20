import React from "react";

class UserClass extends React.Component {

    constructor(props)
    {
        super(props)
        // console.log(props)

        this.state={
            count1:1,
            count2:2
        }
        console.log(props.name+"child constructor")

    }

    componentDidMount()
    {
        console.log(this.props.name+ "child DidMount");
    }

  render() {

    const {name,location}=this.props;
    console.log(name+"child render")

    return(
      <div>
        <hr></hr>
        <h1>Class Compo:</h1>
        <h1>{name}</h1>
        <h2>{location}</h2>
        <h3>{this.state.count1}</h3>
        <button
        onClick={()=>{
            this.setState({
                count1:++this.state.count1,
                count2:this.state.count2+1
            })
        }}
        >Inc</button>
        <h3>{this.state.count2}</h3>
        {/* <h3>{console.log("Halo")}</h3> */}

      </div>    
    );
  }
}

export default UserClass;
