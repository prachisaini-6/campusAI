import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import Discover from "./pages/Discover";
import OpportunityDetails from "./pages/OpportunityDetails";
import Saved from "./pages/Saved";
import Applications from "./pages/Applications";
import Deadlines from "./pages/Deadlines";
import Notifications from "./pages/Notifications";
import AIAssistant from "./pages/AIAssistant";
import AIApplicationHelper from "./pages/AIApplicationHelper";
import Recommendations from "./pages/Recommendations";
import ProjectRecommendations from "./pages/ProjectRecommendations";
import Insights from "./pages/Insights";
import Settings from "./pages/Settings";
import AdminDashboard from "./pages/AdminDashboard";
import ForgetPassword from "./pages/ForgetPassword";
import EditPassword from "./pages//EditPassword";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/edit" element={<EditProfile />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/opportunity/:id" element={<OpportunityDetails />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/deadlines" element={<Deadlines />} />
        <Route path="/notifications" element={<Notifications />} />

        <Route path="/ai-assistant" element={<AIAssistant />} />
        <Route path="/ai-helper" element={<AIApplicationHelper />} />

        <Route path="/recommendations" element={<Recommendations />} />
        <Route path="/projects" element={<ProjectRecommendations />} />

        <Route path="/insights" element={<Insights />} />
        <Route path="/settings" element={<Settings />} />

        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/forget-password" element={<ForgetPassword />} />  
        <Route path="/edit-password" element={<EditPassword />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;