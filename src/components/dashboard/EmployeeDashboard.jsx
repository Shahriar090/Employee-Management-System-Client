import Header from "./dashComponents/Header";
import TaskNumbers from "./dashComponents/TaskNumbers";

const EmployeeDashboard = () => {
  return (
    <div className="p-10 bg-slate-900 h-screen">
      <Header />
      <TaskNumbers />
    </div>
  );
};

export default EmployeeDashboard;
