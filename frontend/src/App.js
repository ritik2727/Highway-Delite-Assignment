import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./index.css";
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import Colors from './components/Colors';
import Header from './components/Header';
import RegisterScreen from './screens/RegisterScreen';

function App() {
  return (
   
    <Router>
    

        <Header/>
        <main className="py-3">
          <Container  fluid style={{paddingRight:'5%',paddingLeft:'5%'}}>
            <Routes>
             
              <Route path="/" element={<HomeScreen />} />
           
             < Route path='/login' element={<LoginScreen />}  />
             < Route path='/register' element={<RegisterScreen />}  />
              <Route path='/admin/orderlist' element={<OrderHistoryScreen  />}  />
            
            </Routes>
          </Container>
        </main>
       
        {/* <Footer /> */}
    
    </Router>

  );
}

export default App;
