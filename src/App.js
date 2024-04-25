import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginLayout from "./components/LoginLayout/LoginLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginLayout />} />
      </Routes>
    </Router>
  );
}
export default App;
