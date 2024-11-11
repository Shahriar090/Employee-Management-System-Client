const AdminForm = () => {
  return (
    <div className="form-parent p-10 bg-slate-950 mt-20">
      <form className="flex gap-10  items-stretch">
        {/* small inputs */}
        <div className="inputs w-2/4 space-y-3 ">
          <div>
            <label
              htmlFor="taskTitle"
              className="block text-white font-semibold text-sm"
            >
              Task Title
            </label>
            <input
              type="text"
              placeholder="Enter Your Task"
              className="px-4 py-3 rounded-md w-full outline-none ring-2 focus:ring-green-500 text-black"
            />
          </div>

          <div>
            <label
              htmlFor="taskTitle"
              className="block text-white font-semibold text-sm"
            >
              Date
            </label>
            <input
              type="text"
              placeholder="Enter Your Task"
              className="px-4 py-3 rounded-md w-full outline-none ring-2 focus:ring-green-500 text-black"
            />
          </div>
          <div>
            <label
              htmlFor="taskTitle"
              className="block text-white font-semibold text-sm"
            >
              Assign To
            </label>
            <input
              type="text"
              placeholder="Enter Your Task"
              className="px-4 py-3 rounded-md w-full outline-none ring-2 focus:ring-green-500 text-black"
            />
          </div>
          <div>
            <label
              htmlFor="taskTitle"
              className="block text-white font-semibold text-sm"
            >
              Category
            </label>
            <input
              type="text"
              placeholder="Enter Your Task"
              className="px-4 py-3 rounded-md w-full outline-none ring-2 focus:ring-green-500 text-black"
            />
          </div>
        </div>
        {/* text area */}
        <div className="flex flex-col w-2/4">
          <label
            htmlFor="taskTitle"
            className="block text-white font-semibold text-sm"
          >
            Description
          </label>
          <textarea
            className="px-4 py-3 rounded-md w-full outline-none ring-2 focus:ring-green-500 text-black flex-grow"
            name="description"
            id="description"
            placeholder="Enter Description"
            rows={9}
          ></textarea>
          <button
            type="submit"
            className="bg-green-600 py-3 outline-none text-white rounded-md mt-2 hover:bg-green-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminForm;
