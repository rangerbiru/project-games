import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./Auth/LoginPage";
import RegisterPage from "./Auth/RegisterPage";
// import Shooter from "./Pages/Categories/Shooter";
import Category from "./Pages/Category";
import Home from "./Pages/HomePage";
import Testimoni from "./Pages/Testimoni";

// import Games from "./Components/Games";

function App() {
  return (
    <div>
      {/* <Games /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          {/* Categories */}
          {/* <Route path="/category/shooter" element={<Shooter />} /> */}
          <Route path="/category/:game" element={<Category />} />
          <Route path="/testimoni" element={<Testimoni />} />

          {/* Auth Page */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
