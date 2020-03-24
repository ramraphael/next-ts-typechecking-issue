import React from 'react';

// let val = 1;
// val = true;

const App: React.FC<any> = ({ Component, pageProps }) => {
  return (
    <div>
      <h1>Rendered by custom app component</h1>
      <Component {...pageProps} />
    </div>
  );
};

export default App;
