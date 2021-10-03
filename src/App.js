import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home.js'
import Gallery from './Pages/Gallery.js'
import Payment from './Pages/Payment.js'
import FormPin from './Pages/FormPin.js'
import PaymentSuccesful from './Pages/PaymentSuccessful';
import PayForm from './Pages/PayForm';


function App() {
  return (
    <div className="App">
      {/* Header (Navigation Bar) */}
            <header className="App-header">
        
      </header>
      
      {/* Router - Pages */}
          <Switch>
            <Route path={process.env.PUBLIC_URL + '/'} exact > <Home/> </Route>
            <Route path={process.env.PUBLIC_URL + '/home'} > <Home/> </Route>
            <Route path={process.env.PUBLIC_URL + '/gallery'}  > <Gallery/> </Route>
            <Route path={process.env.PUBLIC_URL + '/payment'}  > <Payment/> </Route>
            <Route path={process.env.PUBLIC_URL + '/FormPin'}  > <FormPin/> </Route>
            
            <Route path={process.env.PUBLIC_URL + '/PaymentSuccessful'}  > <PaymentSuccesful/> </Route>
            <Route path={process.env.PUBLIC_URL + '/PayForm'}  > <PayForm/> </Route>
          </Switch>
      {/* Payment is the 1st page. */}
      {/*<footer className="App-footer">
        This is a footer
      </footer>*/}
    </div>
  );
  }

export default App;
