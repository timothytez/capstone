import Home from "./pages/home/Home";
import Hotel from "./pages/single_hotel/Hotel";
import List from "./pages/list/List";
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signUp/SignUp";
import Account from "./pages/account/Account";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { AuthContextProvider } from "./components/context/AuthContext";

// import { initializeApp } from 'firebase/app';
// const firebaseConfig = {

// // };

// const app = initializeApp(firebaseConfig);



function App() {
  return (
    <BrowserRouter>
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='account' element={<ProtectedRoute><Account/></ProtectedRoute>}/>
      </Routes>
    </AuthContextProvider>
    </BrowserRouter>
  );
}


export default App;
