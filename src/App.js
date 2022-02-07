import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './containers/Header';
import ProductComponent from './containers/ProductComponent';
import ProductDetail from './containers/ProductDetail';
import ProductListing from './containers/ProductListing';
import MessengerCustomerChat from 'react-messenger-customer-chat';



function App() {
  return (
    <div className="App">
      
      <Router>
      <Header/>
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" exact component={ProductDetail} />
          <Route> 404 Not Found!</Route>
        </Switch>
      </Router>
      <MessengerCustomerChat
      pageId="103238395502166"
      appId="178599631048305"
      // htmlRef="<REF_STRING>"
      />,
    </div>
  );
}

// token
// EAACib3eQznEBAEqz0n8zUWAZCqmPLLU6OAe68fzhmz67PM4eduEZBbtc932q52fPSdm5T6IR4ITjtbahTTDsxRQcwMRmG7VhdWPuI6rZCXHgrPmbrs2EwXZCVI7SlX8PLTYpaiX4ihTcPkITUPcdkDeZB6Fyr1Q9JcZCLwvRQzNU95t6Rbr0aa

// app s
// 92f28a33d3b28ce6e42ee6733a655e5e
export default App;
