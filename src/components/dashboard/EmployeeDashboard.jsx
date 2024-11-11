import ListOfTask from "../taskList/ListOfTask";
import Header from "./dashComponents/Header";
import TaskNumbers from "./dashComponents/TaskNumbers";

const EmployeeDashboard = () => {
  return (
    <div className="p-10 bg-slate-900 w-full h-screen">
      <Header />
      <TaskNumbers />
      <ListOfTask />
    </div>
  );
};

export default EmployeeDashboard;
