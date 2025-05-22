import { Link } from 'react-router-dom';

const PopX = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8 space-y-6">
        <h1 className="text-3xl font-bold text-center text-indigo-600">Welcome to PopX</h1>
        
        <div className="space-y-4 text-gray-600">
          <p>Lorem ipsum dolor sit amet,</p>
          <p>consectetur adipiscing elit.</p>
        </div>
        
        <Link 
          to="/signup" 
          className="block w-full bg-indigo-600 text-white py-2 px-4 rounded-md 
                    hover:bg-indigo-700 transition duration-200 text-center"
        >
          Create Account
        </Link>
        
         <p className="text-center text-gray-500">
        Already Registered?{' '}
        <Link to="/login" className="text-indigo-600 hover:underline">
          Login
        </Link>
      </p>

      </div>
    </div>
  );
};

export default PopX;