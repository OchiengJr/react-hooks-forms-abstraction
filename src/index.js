import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form';

// Render the Form component into the root DOM element
ReactDOM.render(
  <Form />,
  document.getElementById('root'),
  (error) => {
    if (error) {
      console.error('Error rendering the Form component:', error);
    } else {
      console.log('Form component rendered successfully!');
    }
  }
);
