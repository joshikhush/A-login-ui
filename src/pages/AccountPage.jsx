const AccountPage = () => {
  // Mock user data (replace with real auth context later)
  const user = {
    name: "Marry Doe",
    email: "Marry@Gmail.Com",
    bio: `Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing 
          Elit, Sed Diam Nonumy Eirmod Tempor invidunt Ut
          Labore Et Dolore Magna Aliquyam Erat, Sed Diam`
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Account Settings</h1>
        
        {/* User Card */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          {/* Name */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
          </div>
          
          {/* Email */}
          <div className="mb-6">
            <p className="text-gray-600 font-mono">{user.email}</p>
          </div>
          
          {/* Bio - matches line breaks from screenshot */}
          <div className="whitespace-pre-line text-gray-600">
            {user.bio}
          </div>
        </div>
      </div>
    </div>
  );
};