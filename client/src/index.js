import React from 'react';
import ReactDOM from 'react-dom';
import dotenv from 'dotenv';

dotenv.config();

const AppWrapper = () => {
  return (
    <div>This is the React app...</div>
  );
};

ReactDOM.render(<AppWrapper />, document.getElementById('root'));