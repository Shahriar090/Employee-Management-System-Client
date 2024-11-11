import AdminForm from "./dashComponents/adminForm/AdminForm";
import Header from "./dashComponents/Header";

const AdminDashboard = () => {
  return (
    <div className="w-full h-screen bg-slate-900 p-8">
      <div>
        <Header />
        <AdminForm />
      </div>
    </div>
  );
};

export default AdminDashboard;
