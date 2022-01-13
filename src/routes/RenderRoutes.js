import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../screens/HomePage";
import LoginPage from "../screens/LoginPage";
import Navbar from "../components/Navbar";
import { PrivateRoute, AuthRoute } from "../components/ProtectedRoute";
import ProfilePage from "../screens/ProfilePage";
import Footer from "../components/Footer";

function RenderRoutes() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path='/login' element={<AuthRoute />}>
            <Route path='/login' element={<LoginPage/>}/>
        </Route>
        <Route path='/' element={<PrivateRoute/>}>
            <Route path='/' element={<HomePage/>}/>
        </Route>
        <Route path='/profile' element={<PrivateRoute/>}>
            <Route path='/profile' element={<ProfilePage/>}/>
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default RenderRoutes;
