import React from "react";
import Para from "./Para";

class Circle extends React.Component {
  constructor(props) {
    super(props);

    console.log(props);
    this.props.cb("Hello here!");
  }

  render() {
    return (
      <div className="circle">
        <Para text={this.props.text} />
      </div>
    );
  }
}

export default Circle;
