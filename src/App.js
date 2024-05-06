import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginLayout from "./components/LoginLayout/LoginLayout";
import LeadsData from "./components/LeadsData/LeadsData1/LeadsData";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginLayout />} />
        <Route path="/leadsData" element={<LeadsData />} />
      </Routes>
    </Router>
  );
}
export default App;
