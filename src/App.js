// import { NotFound } from 'http-errors';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import OrderReview from './components/OrderReview/OrderReview';
import Shop from './components/Shop/Shop';
import FoundNot from './components/FoundNot/FoundNot';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';



function App() {
  return (
    <div>
      
     
      
      
      <Router>

      <Header></Header>

        <Switch>
          <Route exact path="/">
              <Shop></Shop>
          </Route>

          <Route path="/shop">
              <Shop></Shop>
          </Route>
          
          <Route path="/review">
            
            <OrderReview></OrderReview>

          </Route>

          <Route path="/inventory">

                <Inventory></Inventory>

          </Route>

         <Route path="/placeOrder">
            <PlaceOrder></PlaceOrder>
         
         </Route>

          <Route path="*">
              <FoundNot></FoundNot>
              
          </Route>

        </Switch>
      </Router>
      
      
      
      {/* <Shop></Shop> */}
    </div>
  );
}

export default App;
