import { Component } from "react";
import { connect } from "react-redux";

class NewComp extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       message: "Hello Chathura!",
  //     };
  //   }

  styles = {
    fontStyle: "italic",
    color: "blue",
  };

  //   ButtonChange = () => {
  //     this.setState({
  //       message: "How are you?",
  //     });
  //   };
  render() {
    return (
      <div>
        <h1>NewComp</h1>
        {/* <p style={this.styles}>{this.state.message}</p>
        <button onClick={this.ButtonChange}>Say Hello!</button> */}

        <p style={this.styles}>{this.props.message}</p>
        <button onClick={this.props.ButtonChange}>Say Hello!</button>
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    message: state.message,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    ButtonChange: () => dispatch({ type: "message change" }),
  };
};


export default connect (
mapStatetoProps,mapDispatchtoProps
)(NewComp)