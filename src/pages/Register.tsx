import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import axios from "axios";
import API_BASE_URL from "../config/backend";

const Register: React.FC = () => {
  const [userType, setUserType] = useState<"student" | "educator">("student");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    // Educator specific fields
    contactNumber: "",
    address: "",
    city: "",
    country: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    // Common validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    // Educator specific validation
    if (userType === "educator") {
      if (!formData.contactNumber.trim()) {
        newErrors.contactNumber = "Contact number is required";
      }

      if (!formData.address.trim()) {
        newErrors.address = "Address is required";
      }

      if (!formData.city.trim()) {
        newErrors.city = "City is required";
      }

      if (!formData.country.trim()) {
        newErrors.country = "Country is required";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post(`${API_BASE_URL}/auth/register-${userType}`, {
        firstname: formData.firstName,
        lastname: formData.lastName,
        email: formData.email,
        password: formData.password,
        role: userType,
        ...(userType === "educator" && {
          contact: formData.contactNumber,
          address: formData.address,
          city: formData.city,
          country: formData.country,
        }),
      });

      console.log("response:", response.data);

      // Login user with context
      login({
        email: formData.email,
        name: `${formData.firstName} ${formData.lastName}`,
        id: Date.now().toString(),
        userType: userType,
        ...(userType === "educator" && {
          contactNumber: formData.contactNumber,
          address: formData.address,
          city: formData.city,
          country: formData.country,
        }),
      });

      // Navigate to dashboard after successful registration
      navigate("/");
    } catch (error) {
      console.error("Registration failed:", error);

      // Handle axios error properly
      if (axios.isAxiosError(error)) {
        const errorMessage =
          error.response?.data?.message || error.response?.data?.error || error.message || "Registration failed. Please try again.";

        console.log("err message:", errorMessage);
        // Set specific field errors if provided by the backend
        if (error.response?.data?.errors) {
          setErrors({ general: error.response.data.errors });
        } else {
          // Set a general error message
          setErrors({ general: errorMessage });
        }
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    // TODO: Implement Google login logic
    console.log("Google login clicked for", userType);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full space-y-8">
        {/* Header Section */}
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                />
              </svg>
            </div>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">Join MindVista</h1>
          <p className="text-gray-600 text-lg">Create your account and start your learning journey</p>
        </div>

        {/* User Type Selection */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">Choose Your Role</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => setUserType("student")}
              className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                userType === "student" ? "border-blue-500 bg-blue-50 shadow-lg" : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Student</h3>
                <p className="text-sm text-gray-600">Learn new skills and advance your career</p>
              </div>
            </button>

            <button
              type="button"
              onClick={() => setUserType("educator")}
              className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                userType === "educator" ? "border-purple-500 bg-purple-50 shadow-lg" : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Educator</h3>
                <p className="text-sm text-gray-600">Share your knowledge and teach others</p>
              </div>
            </button>
          </div>
        </div>

        {/* Registration Form */}
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Enter your first name"
                    disabled={isLoading}
                    className={`w-full px-4 py-3 text-gray-700 bg-gray-50 border-2 rounded-xl transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 ${
                      errors.firstName
                        ? "border-red-300 focus:border-red-500 focus:ring-red-100 bg-red-50"
                        : "border-gray-200 focus:border-blue-500 focus:ring-blue-100 hover:border-gray-300 hover:bg-white"
                    } ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
                  />
                  {errors.firstName && (
                    <p className="text-sm text-red-600 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {errors.firstName}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Enter your last name"
                    disabled={isLoading}
                    className={`w-full px-4 py-3 text-gray-700 bg-gray-50 border-2 rounded-xl transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 ${
                      errors.lastName
                        ? "border-red-300 focus:border-red-500 focus:ring-red-100 bg-red-50"
                        : "border-gray-200 focus:border-blue-500 focus:ring-blue-100 hover:border-gray-300 hover:bg-white"
                    } ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
                  />
                  {errors.lastName && (
                    <p className="text-sm text-red-600 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email address"
                  disabled={isLoading}
                  className={`w-full px-4 py-3 text-gray-700 bg-gray-50 border-2 rounded-xl transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 ${
                    errors.email
                      ? "border-red-300 focus:border-red-500 focus:ring-red-100 bg-red-50"
                      : "border-gray-200 focus:border-blue-500 focus:ring-blue-100 hover:border-gray-300 hover:bg-white"
                  } ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
                />
                {errors.email && (
                  <p className="text-sm text-red-600 flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Educator Specific Fields */}
              {userType === "educator" && (
                <div className="space-y-6 p-6 bg-purple-50 rounded-xl border border-purple-200">
                  <h3 className="text-lg font-semibold text-purple-800 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                    Educator Information
                  </h3>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700">Contact Number</label>
                      <input
                        type="tel"
                        name="contactNumber"
                        value={formData.contactNumber}
                        onChange={handleInputChange}
                        placeholder="Enter your contact number"
                        disabled={isLoading}
                        className={`w-full px-4 py-3 text-gray-700 bg-white border-2 rounded-xl transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 ${
                          errors.contactNumber
                            ? "border-red-300 focus:border-red-500 focus:ring-red-100"
                            : "border-gray-200 focus:border-purple-500 focus:ring-purple-100 hover:border-gray-300"
                        } ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
                      />
                      {errors.contactNumber && (
                        <p className="text-sm text-red-600 flex items-center gap-1">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {errors.contactNumber}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700">Address</label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="Enter your address"
                        disabled={isLoading}
                        className={`w-full px-4 py-3 text-gray-700 bg-white border-2 rounded-xl transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 ${
                          errors.address
                            ? "border-red-300 focus:border-red-500 focus:ring-red-100"
                            : "border-gray-200 focus:border-purple-500 focus:ring-purple-100 hover:border-gray-300"
                        } ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
                      />
                      {errors.address && (
                        <p className="text-sm text-red-600 flex items-center gap-1">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {errors.address}
                        </p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-700">City</label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          placeholder="Enter your city"
                          disabled={isLoading}
                          className={`w-full px-4 py-3 text-gray-700 bg-white border-2 rounded-xl transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 ${
                            errors.city
                              ? "border-red-300 focus:border-red-500 focus:ring-red-100"
                              : "border-gray-200 focus:border-purple-500 focus:ring-purple-100 hover:border-gray-300"
                          } ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
                        />
                        {errors.city && (
                          <p className="text-sm text-red-600 flex items-center gap-1">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                clipRule="evenodd"
                              />
                            </svg>
                            {errors.city}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-700">Country</label>
                        <select
                          name="country"
                          value={formData.country}
                          onChange={handleInputChange}
                          disabled={isLoading}
                          className={`w-full px-4 py-3 text-gray-700 bg-white border-2 rounded-xl transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 ${
                            errors.country
                              ? "border-red-300 focus:border-red-500 focus:ring-red-100"
                              : "border-gray-200 focus:border-purple-500 focus:ring-purple-100 hover:border-gray-300"
                          } ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
                        >
                          <option value="">Select your country</option>
                          <option value="US">United States</option>
                          <option value="CA">Canada</option>
                          <option value="UK">United Kingdom</option>
                          <option value="AU">Australia</option>
                          <option value="DE">Germany</option>
                          <option value="FR">France</option>
                          <option value="IN">India</option>
                          <option value="JP">Japan</option>
                          <option value="BR">Brazil</option>
                          <option value="MX">Mexico</option>
                          <option value="other">Other</option>
                        </select>
                        {errors.country && (
                          <p className="text-sm text-red-600 flex items-center gap-1">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                clipRule="evenodd"
                              />
                            </svg>
                            {errors.country}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Password Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Create a password"
                    disabled={isLoading}
                    className={`w-full px-4 py-3 text-gray-700 bg-gray-50 border-2 rounded-xl transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 ${
                      errors.password
                        ? "border-red-300 focus:border-red-500 focus:ring-red-100 bg-red-50"
                        : "border-gray-200 focus:border-blue-500 focus:ring-blue-100 hover:border-gray-300 hover:bg-white"
                    } ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
                  />
                  {errors.password && (
                    <p className="text-sm text-red-600 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {errors.password}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Confirm your password"
                    disabled={isLoading}
                    className={`w-full px-4 py-3 text-gray-700 bg-gray-50 border-2 rounded-xl transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 ${
                      errors.confirmPassword
                        ? "border-red-300 focus:border-red-500 focus:ring-red-100 bg-red-50"
                        : "border-gray-200 focus:border-blue-500 focus:ring-blue-100 hover:border-gray-300 hover:bg-white"
                    } ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
                  />
                  {errors.confirmPassword && (
                    <p className="text-sm text-red-600 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {errors.confirmPassword}
                    </p>
                  )}
                </div>
              </div>

              {errors?.general ? <p className="text-sm text-red-500 font-semibold text-center">{errors?.general}</p> : null}

              {/* Submit Button */}
              <button
                type="submit"
                className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-300 transform ${
                  isLoading
                    ? "bg-gray-400 cursor-not-allowed"
                    : userType === "student"
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-blue-200"
                    : "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-purple-200"
                }`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Creating Account...
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                      />
                    </svg>
                    Create {userType === "student" ? "Student" : "Educator"} Account
                  </div>
                )}
              </button>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>

              {/* Google Login Button */}
              <button
                type="button"
                onClick={handleGoogleLogin}
                className="w-full py-3 px-6 rounded-xl font-semibold text-gray-700 bg-white border-2 border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-gray-100"
              >
                <div className="flex items-center justify-center gap-3">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  <span>Continue with Google</span>
                </div>
              </button>
            </form>

            {/* Sign In Link */}
            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Already have an account?{" "}
                <Link to="/login" className="font-semibold text-blue-600 hover:text-blue-700 transition-colors duration-200">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center">
          <p className="text-sm text-gray-500">
            By creating an account, you agree to our{" "}
            <a href="/terms" className="text-blue-600 hover:text-blue-700">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/privacy" className="text-blue-600 hover:text-blue-700">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
