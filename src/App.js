import "./App.css";
import NewComp from "./NewComp";
import { Component } from "react";

// functional comp

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         To learn React-Redux
//       </header>
//       <NewComp/>
//     </div>
//   );
// }

// class comp

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">To learn React-Redux</header>
        <NewComp />
      </div>
    );
  }
}

