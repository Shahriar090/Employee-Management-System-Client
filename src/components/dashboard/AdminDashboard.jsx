import AdminForm from "./dashComponents/adminForm/AdminForm";
import Header from "./dashComponents/Header";

const AdminDashboard = () => {
  return (
    <div className="w-full h-screen bg-slate-900 p-8">
      <div>
        <Header />
      </div>

      <div className="form-parent p-10 bg-slate-950 mt-20">
        <AdminForm />
      </div>
    </div>
  );
};

export default AdminDashboard;
