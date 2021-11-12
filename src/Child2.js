import React, { useCallback, useEffect, useMemo, useState } from 'react';
// import shallowCompare from 'react-addons-shallow-compare'; // ES6

const Child2 = () => {
  const [counter, setCounter] = useState(0);

  // const mouseMove = () => {
  //   console.log('Mouse Moved');
  // };

  const mouseMove = useCallback(() => {
    console.log('Mouse Moved');
  }, []);

  const incrementCounter = useCallback(() => {
    setCounter(val => val + 1);
  }, []);

  const data = useMemo(() => counter + 1, [counter]);

  useEffect(() => {
    document.addEventListener('mousemove', mouseMove);

    incrementCounter();
    // Component Will Unmount
    return () => {
      document.removeEventListener('mousemove', mouseMove);
    };
  }, [mouseMove, incrementCounter]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      <h1>Child 2 Component</h1>
      {counter}
      {/* <button type="button" onClick={incrementCounter}>
        Increment Counter
      </button> */}
    </div>
  );
};

export default Child2;

// export default class Child2 extends PureComponent {
//   //   shouldComponentUpdate(nextProps, nextState) {
//   //     //   if(this.props !== nextProps || this.state !== nextState) {
//   //     //       return true
//   //     //   }
//   //     //   return false
//   //     return shallowCompare(this, nextProps, nextState);
//   //   }
//   state = {
//     counter: 0,
//   };

//   componentDidMount() {
//     // document.addEventListener("mousemove", this.mouseMove);
//     // this.interval = setInterval(() => {
//     //   console.log("interval");
//     // }, 1000);
//   }

//   componentWillUnmount() {
//     // document.removeEventListener("mousemove", this.mouseMove);
//     // clearInterval(this.interval);
//   }

//   mouseMove = () => {
//     console.log('mouse move');
//   };

//   incrementCounter = () => {
//     // this.setState({
//     //   counter: this.state.counter + 1,
//     // });
//     this.setState(
//       ({ counter }) => ({
//         counter: counter + 1,
//       }),
//       () => {
//         // console.log(this.state.counter);
//       },
//     );
//   };

//   render() {
//     console.log('Child 2 Render');
//     const { counter } = this.state;
//     if (counter > 5) throw new Error('something went wrong');
//     return (
//       <div>
//         <h1>Child 2 Component</h1>
//         {counter}
//         <button type="button" onClick={this.incrementCounter}>
//           Increment Counter
//         </button>
//       </div>
//     );
//   }
// }
