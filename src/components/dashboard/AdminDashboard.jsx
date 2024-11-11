import AdminForm from "./dashComponents/adminForm/AdminForm";
import AllTasks from "./dashComponents/AllTasks";
import Header from "./dashComponents/Header";

const AdminDashboard = () => {
  return (
    <div className="w-full min-h-screen bg-slate-900 p-8">
      <Header />
      <AdminForm />
      <AllTasks />
    </div>
  );
};

export default AdminDashboard;
