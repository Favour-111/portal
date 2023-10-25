import "./App.css";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router";
// importing my components
import Home from "./components/Home";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Service from "./components/Service";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Notfound from "./components/Notfound";
import SignUp from "./components/SignUp";
import Map from "./DashBoard/map";
import Dashboard from "./DashBoard/Dashboard";
import LandingPage from "./DashBoard/LandingPage";
import AttendanceRecord from "./DashBoard/AttendanceRecord";
import AdministrativeManager from "./DashBoard/AdministrativeManager";
import ClassManager from "./DashBoard/ClassManager";
import SubjectManager from "./DashBoard/SubjectManager";
import StudentManager from "./DashBoard/StudentManager";
import RegisterStudentForm from "./DashBoard/RegisterStudentForm";
import SubjectManagerForm from "./DashBoard/SubjectManagerForm";
import ClassForm from "./DashBoard/ClassForm";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* using BrowserRouter to import all my component */}
        <Route path="/Faq" element={<FAQ />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/service" element={<Service />} />
        <Route path="*" element={<Notfound />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/attendance" element={<AttendanceRecord />} />
        <Route
          path="/administrativemanager"
          element={<AdministrativeManager />}
        />
        <Route path="/classmanager" element={<ClassManager />} />
        <Route path="/studentmanager" element={<StudentManager />} />
        <Route path="/subjectmanager" element={<SubjectManager />} />
        <Route path="/registerstud" element={<RegisterStudentForm />} />
        <Route path="/subjectform" element={<SubjectManagerForm />} />
        <Route path="/map" element={<Map />} />
        <Route path="/classForm" element={<ClassForm />} />
      </Routes>
    </>
  );
}

export default App;
