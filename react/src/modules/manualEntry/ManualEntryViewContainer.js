// @flow
import { compose } from 'recompose';
import { connect } from 'react-redux';

import ManualEntryView from './ManualEntryView';

export default compose(
  connect(
    state => ({foods: []}),
    dispatch => ({}),
    // this.state = {
    //         foods: ['beer'],
    //     },
  ),
//   componentDidMount( {
//     initialPlanets = [],
//     fetch('/foods')
//         .then(response => {
//             return response.json();
//         }).then(data => {
//         initialPlanets = data.results.map((planet) => {
//             return planet
//         });
//         console.log(initialPlanets);
//         this.setState({
//             planets: initialPlanets,
//         });
//     });
// }),
  
  // componentDidMount( { 
  //   fetch('/foods')
  //       .then(res => res.json())
  //       .then((data) => {
  //         console.log("test")
  //         this.setState({ foods: data })
  //       }),
  //       .catch(console.log)
  //     }),
)(ManualEntryView);
