import { useContext, useEffect, useState } from "react";
import Login from "./components/auth/Login";
import AdminDashboard from "./components/dashboard/AdminDashboard";
import EmployeeDashboard from "./components/dashboard/EmployeeDashboard";
import { AuthContext } from "./contexts/AuthProvider";

const App = () => {
  const [user, setUser] = useState("");
  const authData = useContext(AuthContext);
  console.log(user);
  // useEffect(() => {
  //   if (authData) {
  //     const loggedInUser = localStorage.getItem("loggedInUser");
  //     if (loggedInUser) {
  //       setUser(loggedInUser.role);
  //     }
  //   }
  // }, [authData]);

  const handleLogin = (email, password) => {
    if (email === "admin@gmail.com" && password === "123") {
      setUser({ role: "admin" });
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (authData) {
      const employee = authData.employees.find(
        (employee) => email === employee.email && password === employee.password
      );
      if (employee) {
        setUser({ role: "employee" });
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee" })
        );
      }
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user.role === "admin" ? (
        <AdminDashboard />
      ) : user.role === "employee" ? (
        <EmployeeDashboard />
      ) : null}
    </div>
  );
};

export default App;
