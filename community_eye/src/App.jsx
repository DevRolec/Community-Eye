import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import AbiaNews from "./components/News/News";
import ReportForm from "./components/Report/Usereport";
import ReportsFeed from "./components/Report/ReportsFeed";
import EarlyWarnings from "./components/Report/EarlyWarnings";
import MissingPersonForm from "./components/Report/MissingPersonForm";
import WantedPersonForm from "./components/Report/WantedPersonForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/AbiaNews" element={<AbiaNews />} />
        <Route path="/ReportForm" element={<ReportForm />} />
        <Route path="/ReportsFeed" element={<ReportsFeed />} />
        <Route path="/EarlyWarnings" element={<EarlyWarnings />} />
        <Route path="/missing-person" element={<MissingPersonForm />} />
        <Route path="/wanted-person" element={<WantedPersonForm />} />
      </Routes>
    </Router>
  );
}

export default App;
