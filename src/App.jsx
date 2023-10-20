import { Route, Routes } from "react-router-dom";
import Error from "./routes/404/index";
import Login from "./routes/Login/login";
import Dashboard from "./routes/Dashboard/index";
import ProtectedRoute from "./utils/ProtectedRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Dashboard />} />
        </Route>
        <Route path="*" element={<Error />} /> *
      </Routes>
    </>
  );
}

export default App;
