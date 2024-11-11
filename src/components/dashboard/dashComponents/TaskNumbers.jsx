const TaskNumbers = () => {
  return (
    <div className="flex gap-5 h-screen mt-8">
      {/* task 1 */}
      <div className="w-1/3 h-36 bg-yellow-500 p-6 rounded-md">
        <h2 className="text-white font-semibold text-4xl">0</h2>
        <p className="text-white font-semibold text-2xl">New Task</p>
      </div>
      {/* task 2 */}
      <div className="w-1/3 h-36 bg-green-500 p-6 rounded-md">
        <h2 className="text-white font-semibold text-4xl">0</h2>
        <p className="text-white font-semibold text-2xl">Completed</p>
      </div>
      {/* task 3 */}
      <div className="w-1/3 h-36 bg-blue-500 p-6 rounded-md">
        <h2 className="text-white font-semibold text-4xl">0</h2>
        <p className="text-white font-semibold text-2xl">Accepted</p>
      </div>
      {/* task 4 */}
      <div className="w-1/3 h-36 bg-red-500 p-6 rounded-md">
        <h2 className="text-white font-semibold text-4xl">0</h2>
        <p className="text-white font-semibold text-2xl">Failed</p>
      </div>
    </div>
  );
};

export default TaskNumbers;
