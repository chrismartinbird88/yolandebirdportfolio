import React from 'react';
// import header
import Header from './components/Header';
// import router
import { BrowserRouter as Router} from 'react-router-dom';
// import Routes
import AnimRoutes from './components/AnimRoutes';
// import footer

const App = () => {

  return (
    <>
      <Router>
      <Header />
        <AnimRoutes/>
      </Router>
    </>
  );
};

export default App;
