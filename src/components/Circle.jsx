import React from "react";

class Circle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  // When dom tree is ready to get rendered into ui as website
  UNSAFE_componentWillMount() {
    console.log("Before Mounting");
  }

  // When Dom tree is ready and its already rendered into the UI
  componentDidMount() {
    console.log("After Mounting");
  }

  UNSAFE_componentWillUpdate() {
    console.log("Before update");
  }

  componentDidUpdate() {
    console.log("After update");
  }

  shouldComponentUpdate() {
    return true;
  }

  static getDerivedStateFromProps() {}

  componentWillUnmount() {}

  componentDidCatch() {}

  render() {
    return (
      <div className="circle">
        <p
          onClick={() =>
            this.setState({
              ...this.state,
              count: this.state.count + 1,
            })
          }
        >
          {this.props.text}
        </p>
      </div>
    );
  }
}

export default Circle;
