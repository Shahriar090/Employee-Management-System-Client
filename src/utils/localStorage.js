import employeesData from "../data/employee.json";
import adminData from "../data/admin.json";

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employeesData));
  localStorage.setItem("admins", JSON.stringify(adminData));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admins = JSON.parse(localStorage.getItem("admins"));

  return { employees, admins };
};
