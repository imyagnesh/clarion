import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';

import ReactDOM from 'react-dom';
import Child1 from './Child1';
import Child2 from './Child2';

// Function Component

// Rules

// 1. Cant return multiple element from one component
// 2. component name shuld start with capital letter
// 3. style provide as in object & property name should be in camel case
// 4. use className instead of class

// Stateless component

// const App = ({ title, caption }) => {
//   return (
//     <>
//       <h1
//         className="heading"
//         style={
//           {
//             //   color: "green",
//             //   backgroundColor: "yellow",
//           }
//         }
//         id="heading"
//       >
//         {title}
//       </h1>
//       <h2>{caption}</h2>
//       <input type="text" />
//       <input type="checkbox" />
//     </>
//   );
// };

// let counter = 1;

// stateful component
// 1. component will upate only when you change state using setState or if you pass new prop value
// 2. forceUpdate(Never USE)

// Life Cycle method

// Stages of Life Cyle methods

// 1. Mounting
// -> 1. Constructor(call only once)
// -> 2. getDerivedStateFromProps
// -> 3. render
// -> 4. componentDidMount(call only once)

// 2. Updating
// -> 1. getDerivedStateFromProps
// -> 2. shouldComponentUpdate
// -> 3. render
// -> 4. getSnapshotBeforeUpdate
// -> 5. componentDidUpdate

// 3. Unmount
// -> componentWillUnmount

// 4. Error
// -> 1. getDerivedStateFromError
// -> 2. componentDidCatch

class App extends Component {
  state = {
    counter: 1,
  };

  headingRef = createRef();

  // Use cases of Constuctor
  // 1. Base on props derive new State value
  // 2. Analytics
  // 3. Bind methods
  constructor(props) {
    super(props);
    console.log(props);
    // this.state = {
    //   counter: 1,
    //   greet: `Hello ${props.name}`,
    // };

    // this.onIncrement = this.onIncrement.bind(this);
    console.log('constructor');
    // Make a api call for analytics

    // NEVER DERIVE STATE VALUE BASE ON API RESPONSE
  }

  static getDerivedStateFromProps(props) {
    console.log('getDerivedStateFromProps');
    return {
      greet: `Hello ${props.name}`,
    };
  }

  // 1. Load data on Mount
  // 2. To Register event

  // Call only once
  componentDidMount() {
    // API CALL
    // base on response set state
    // Register Events

    document.addEventListener('copy', () => {
      console.log('Copied');
    });

    // O(1)
    this.headingRef.current.style = 'color:red';
    // O(LogN)
    // document.getElementById("heading").style = "color:red";
    // O(N)

    // console.log();
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate() {
    return 1;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('snapshot', snapshot);
    console.log('componentDidUpdate');
  }

  static getDerivedStateFromError(error) {
    return {
      error,
    };
  }

  componentDidCatch(error, info) {
    console.warn(error);
    console.warn(info);
    // Log error
  }

  componentWillUnmount() {}

  onIncrement = () => {
    this.setState({
      counter: 2,
    });
  };

  render() {
    console.log('App render');

    const { greet, counter, error } = this.state;
    const { title, caption } = this.props;

    if (error) {
      return <h1>Error...</h1>;
    }

    return (
      <>
        <h1
          className="heading"
          style={
            {
              //   color: "green",
              //   backgroundColor: "yellow",
            }
          }
          id="heading"
          ref={this.headingRef}
        >
          {title}
        </h1>
        <h2>{caption}</h2>
        <h3>{greet}</h3>
        <h3>{counter}</h3>
        <button type="button" onClick={this.onIncrement}>
          Increment Counter
        </button>
        <Child1 />
        {counter === 1 && <Child2 />}
      </>
    );
  }
}

App.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
};

ReactDOM.render(
  <App name="Yagnesh" title="Hello from attribute" caption="hello caption" />,
  document.getElementById('root'),
);
