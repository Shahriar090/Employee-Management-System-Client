const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="logo">
        <h2 className="text-white text-2xl font-semibold">Hey There</h2>
      </div>
      <div className="btn">
        <button className="px-8 py-3 outline-none text-white font-medium bg-red-600 rounded-md hover:bg-red-500">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;
