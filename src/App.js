import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './pages/shared/Header/Header';
import Footer from './pages/shared/Footer/Footer';
import Home from './pages/Home/Home/Home';
import AddTour from './pages/AddTour/AddTour';
import Booking from './pages/Booking/Booking';
import Login from './pages/Login/Login/Login';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import UserDetails from './pages/UserDetails/UserDetails';
import MyOrders from './pages/orderManagement/MyOrders/MyOrders';
import ManageOrders from './pages/orderManagement/ManageOrders/ManageOrders';
import ContactUs from './pages/ContactUs/ContactUs';
import AboutUs from './pages/AboutUs/AboutUs';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute exact path="/add-tour">
              <AddTour></AddTour>
            </PrivateRoute>
            <PrivateRoute exact path="/services/:id">
              <Booking></Booking>
            </PrivateRoute>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute exact path="/myOrders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute exact path="/allOrders">
              <ManageOrders></ManageOrders>
            </PrivateRoute>
            <Route exact path="/user">
              <UserDetails></UserDetails>
            </Route>
            <Route exact path="/about">
              <AboutUs></AboutUs>
            </Route>
            <Route exact path="/contact">
              <ContactUs></ContactUs>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
