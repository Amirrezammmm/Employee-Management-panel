import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-lg rounded-2xl p-10 max-w-md w-full text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Welcome to Employee Management Panel
        </h1>
        <p className="text-gray-600 mb-6">
          To use this panel, please log in with the default credentials:
        </p>
        <div className="bg-gray-100 rounded-lg p-4 mb-6">
          <p className="text-gray-700">
            <span className="font-semibold">Username:</span> admin
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Password:</span> 1234
          </p>
        </div>
        <Link
          to="/login"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition-colors"
        >
          Go to Login
        </Link>
      </div>
    </div>
  );
}

export default Home;
