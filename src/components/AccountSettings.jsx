import { Link } from 'react-router-dom';

const AccountSettings = () => {
  // User data (would typically come from context/API)
  const user = {
    name: 'Marry Doe',
    email: 'Marry@Gmail.Com',
    bio: `Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing 
          Elit, Sed Diam Nonumy Eirmod Tempor invidunt Ut
          Labore Et Dolore Magna Aliquyam Erat, Sed Diam`
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        {/* Header */}
        <div className="bg-indigo-600 p-6">
          <h1 className="text-2xl font-bold text-white">Account Settings</h1>
        </div>

        {/* Profile Section */}
        <div className="p-6 md:p-8 space-y-6">
          {/* Profile Picture Placeholder */}
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center">
              <span className="text-2xl text-indigo-600 font-medium">
                {user.name.charAt(0)}
              </span>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
              <p className="text-gray-600">{user.email}</p>
            </div>
          </div>

          {/* Bio Section */}
          <div className="pt-4 border-t border-gray-200">
            <h3 className="text-lg font-medium text-gray-800 mb-2">About</h3>
            <p className="text-gray-600 whitespace-pre-line">{user.bio}</p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-6">
            <Link
              to="/edit-profile"
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition text-center"
            >
              Edit Profile
            </Link>
            <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition">
              Change Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;