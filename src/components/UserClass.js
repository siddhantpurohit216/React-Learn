import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props)

    this.state = {
      count1: 1,
      count2: 2,
      user: "",
    };
    console.log(props.name + "child constructor");
  }

  async componentDidMount() {
    console.log(this.props.name + "child DidMount");

    //wrong uurl:(skip)
    // const data = await fetch("https://api.github.com/user/siddhantpurohit225");
    // const jsonData = await data.json();

    this.setState({
      count1: this.state.count1 + 1,
      user: "sidd",
    });
  }

  componentDidUpdate() {
    console.log("component updated!!");
  }

  render() {
    const { name, location } = this.props;
    console.log(name + "child render");

    return (
      <div>
        <hr></hr>
        <h1>Class Compo:</h1>
        <h1>{name}</h1>

        <h1>{this.state.user}</h1>
        <h3>{this.state.count2}</h3>
      </div>
    );
  }
}

export default UserClass;
