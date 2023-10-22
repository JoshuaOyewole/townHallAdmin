import { Route, Routes } from "react-router-dom";
import Error from "./routes/404/index";
import Login from "./routes/Login/login";
import Dashboard from "./routes/Dashboard/index";
import Organizations from "./routes/Organization/index";
import Members from "./routes/Members/index";
import PostManagement from "./routes/PostManagement/index";
import Election from "./routes/Election/index";
import ProtectedRoute from "./utils/ProtectedRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/org" element={<Organizations />} />
        <Route path="/members" element={<Members />} />
        <Route path="/post_management" element={<PostManagement />} />
        <Route path="/election" element={<Election />} />
        <Route path="*" element={<Error />} /> *
      </Routes>
    </>
  );
}

export default App;
