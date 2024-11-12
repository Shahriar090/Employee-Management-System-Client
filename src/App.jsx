import { useState } from "react";
import Login from "./components/auth/Login";
import AdminDashboard from "./components/dashboard/AdminDashboard";
import EmployeeDashboard from "./components/dashboard/EmployeeDashboard";

const App = () => {
  const [user, setUser] = useState("");

  const handleLogin = (email, password) => {
    if (email === "admin@gmail.com" && password === "123") {
      setUser("admin");
    } else if (email === "user@gmail.com" && password === "123") {
      setUser("user");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === "admin" ? (
        <AdminDashboard />
      ) : user === "user" ? (
        <EmployeeDashboard />
      ) : null}
    </div>
  );
};

export default App;
