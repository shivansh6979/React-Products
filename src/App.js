import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import UserScreen from "./screens/UserScreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import OrderScreen from "./screens/OrderScreen";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/users" element={<UserScreen />} />
          <Route path="/orders/:id" element={<OrderScreen />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
