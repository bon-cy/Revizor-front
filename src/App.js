import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./app.css";
import MainPage from "./pages/Mainpage/MainPage";
import Diner from "./components/Diner/Diner";
import PersonalArea from "./components/PersonalArea/PersonalArea";
import ChatPage from "./pages/Chat/ChatPage";
import Review from "./components/Review/Review";

function App() {
  return (
    <div className="container">
      <Header />
      <div style={{minHeight: '80vh'}} >
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/review" element={<Review />} />
        <Route path="/personal/:id" element={<PersonalArea />} />
        <Route path="/diner/:dinerId" element={<Diner />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
      </div>
     
      <Footer />
    </div>
  );
}

export default App;
