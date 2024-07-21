import React, { useState } from 'react';
import { FaUserCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaTransgenderAlt } from "react-icons/fa";
const MyForm = () => {
  const initialFormData = {
    username: '',
    email: '',
    agree: false,
    gender: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [formValues, setFormValues] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;

    setFormData({
      ...formData,
      [name]: val,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      setFormValues(formData);
      setFormData(initialFormData); // Reset form values
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = (data) => {
    let errors = {};
    if (!data.username.trim()) {
      errors.username = 'Username is required';
    }
    if (!data.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = 'Email is invalid';
    }
    if (!data.agree) {
      errors.agree = 'You must agree to the terms';
    }
    if (!data.gender) {
      errors.gender = 'Gender is required';
    }
    return errors;
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="max-w-md my-8 mx-auto bg-gray-200 bg-opacity-50 backdrop-filter backdrop-blur-md py-8 px-10 rounded-lg">
        <h1 className="text-2xl font-semibold mb-6 ml-24 text-black">Form Validation</h1>
        <div className="mb-4">
          <label className="block text-gray-900 text-md font-bold mb-2 flex" htmlFor="username"><FaUserCircle className='mr-1 mt-0.5 text-lg' />Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder='Enter Your Username . . .'
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.username && <div className="text-red-600 text-xs mt-1">{errors.username}</div>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-900 text-md font-bold mb-2 flex" htmlFor="email"><MdEmail className='mr-1 mt-0.5 text-lg' />Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder='Enter Your Email . . .'
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.email && <div className="text-red-600 text-xs mt-1">{errors.email}</div>}
        </div>
        <div className="mb-4">
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            className="mr-2 leading-tight"
          />
          <label className="text-gray-900 text-sm" htmlFor="agree">I agree to the terms</label>
          {errors.agree && <div className="text-red-600 text-xs mt-1">{errors.agree}</div>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-900 text-md font-bold mb-2 flex"><FaTransgenderAlt className='mr-1 mt-0.5 text-lg' />Gender:</label>
          <div>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === 'male'}
              onChange={handleChange}
              className="mr-2"
            />
            <label className="text-gray-900 text-sm" htmlFor="gender">Male</label>
          </div>
          <div>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === 'female'}
              onChange={handleChange}
              className="mr-2"
            />
            <label className="text-gray-900 text-sm" htmlFor="gender">Female</label>
          </div>
          {errors.gender && <div className="text-red-600 text-xs mt-1">{errors.gender}</div>}
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
        {formValues && (
          <div className="mt-7 ">
            <h2 className="text-xl font-bold">Form Values :</h2>
            <p><strong>Username:</strong> {formValues.username}</p>
            <p><strong>Email:</strong> {formValues.email}</p>
            <p><strong>Agreed to terms:</strong> {formValues.agree ? 'Yes' : 'No'}</p>
            <p><strong>Gender:</strong> {formValues.gender}</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default MyForm;
