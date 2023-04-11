import Navbar from "./components/Navbar";
import "./index.css";
import { Home } from "./components/Home.jsx";
import { Shop } from "./components/Shop.jsx";
import { StoryArcs } from "./components/Story.jsx";
import { ContactUs } from "./components/ContactUs.jsx";
import { Admin } from "./components/Admin.jsx";
import  SignIn  from "./components/SignIn/SignIn.jsx";
import Create from "./components/Create/Create.jsx";
import StoreOwner from "./components/Create/store.jsx";
import Creator from "./components/Create/creator.jsx";
import StoreOwnerSignIn from "./components/SignIn/StoreOwner.jsx";
import CreatorSignIn from "./components/SignIn/Creator.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import CardValidator from "./components/CardValidator";
import CreatorStripe from "./components/Stripe/creator.jsx"

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Create" element={<Create />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/StoryArcs" element={<StoryArcs />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Validator" element={<CardValidator />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Create" element={<Create />} />
          <Route path="/StoreOwner" element={<StoreOwner />} />
          <Route path="/Creator" element={<Creator />} />
          <Route path="/StoreOwnerSignIn" element={<StoreOwnerSignIn />} />
          <Route path="/CreatorSignIn" element={<CreatorSignIn />} />
          <Route path="/CreatorStripe" element={<CreatorStripe />} />

        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
