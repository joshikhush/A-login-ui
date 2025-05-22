import { useState } from 'react';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: null
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.email.includes('@')) newErrors.email = 'Invalid email address';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.isAgency === null) newErrors.isAgency = 'Please select an option';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted:', formData);
      // Add your form submission logic here (e.g., API call)
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block mb-1 font-medium text-gray-700">
          Full Name<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className={`w-full px-3 py-2 border rounded-md ${errors.fullName ? 'border-red-500' : 'border-gray-300'}`}
          placeholder="Marry Doe"
        />
        {errors.fullName && <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>}
      </div>

      <div>
        <label className="block mb-1 font-medium text-gray-700">
          Phone Number<span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`w-full px-3 py-2 border rounded-md ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
          placeholder="1234567890"
        />
        {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
      </div>

      <div>
        <label className="block mb-1 font-medium text-gray-700">
          Email Address<span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-3 py-2 border rounded-md ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
          placeholder="marry@example.com"
        />
        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
      </div>

      <div>
        <label className="block mb-1 font-medium text-gray-700">
          Password<span className="text-red-500">*</span>
        </label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className={`w-full px-3 py-2 border rounded-md ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
          placeholder="••••••••"
        />
        {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
      </div>

      <div>
        <label className="block mb-1 font-medium text-gray-700">
          Company Name
        </label>
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          placeholder="Marry Doe"
        />
      </div>

      <fieldset className="pt-2">
        <legend className="block mb-1 font-medium text-gray-700">
          Are you an Agency?<span className="text-red-500">*</span>
        </legend>
        <div className="flex space-x-4 mt-2">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="isAgency"
              checked={formData.isAgency === true}
              onChange={() => setFormData({...formData, isAgency: true})}
              className="text-indigo-600 focus:ring-indigo-500"
            />
            <span className="ml-2">Yes</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="isAgency"
              checked={formData.isAgency === false}
              onChange={() => setFormData({...formData, isAgency: false})}
              className="text-indigo-600 focus:ring-indigo-500"
            />
            <span className="ml-2">No</span>
          </label>
        </div>
        {errors.isAgency && <p className="mt-1 text-sm text-red-500">{errors.isAgency}</p>}
      </fieldset>

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-200 mt-6"
      >
        Create Account
      </button>
    </form>
  );
};

export default SignupForm;