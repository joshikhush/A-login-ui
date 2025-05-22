import SignupForm from '../components/form';

const SignupPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-2">
          Create your <span className="text-indigo-600">PopX</span> account
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        
        <SignupForm />
      </div>
    </div>
  );
};

export default SignupPage;