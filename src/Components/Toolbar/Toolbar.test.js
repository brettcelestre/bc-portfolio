import React from 'react';
import ReactDOM from 'react-dom';

// import renderer from 'react-test-renderer';
// import * as renderer from 'react-test-renderer';
import Toolbar from './Toolbar';

// it('renders correctly', () => {
//   const tree = renderer
//     .create(<Toolbar />)
//     .toJSON()
//   expect(tree).toMatchSnapshot();
// });

it('renders without crashing', () => {
  const div = document.createElement('div');
  
  // Test Image Data
  let imageData = {
    date: 2015,
    description: null,
    fontStyles: null,
    href: null,
    info: "Driftwood, Walnut, Glue",
    sizes: {
      Large: {width: 873, height: 1200},
      Medium: {width: 654, height: 900},
      Small: {width: 436, height: 600}
    },
    title: "Driftwood",
    urlTitle: "driftwood",
  };

  ReactDOM.render(<Toolbar 
    imageData={imageData} />, div);
});