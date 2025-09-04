import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

const Courses = ({ isPrivate = false }) => {
  const { user } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState("web-development");
  const [searchQuery, setSearchQuery] = useState("");

  const courseCategories = [
    {
      id: "web-development",
      title: "Web Development",
      description: "Master modern web technologies and frameworks",
      icon: "💻",
      courses: [
        {
          id: 1,
          title: "Web Development Fundamentals",
          description: "Learn the basics of HTML, CSS, and JavaScript",
          instructor: "John Doe",
          duration: "8 weeks",
          level: "Beginner",
          price: "₹7,999",
          rating: 4.8,
          students: 1247,
          image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=250&fit=crop",
        },
        {
          id: 2,
          title: "Advanced React Development",
          description: "Master React hooks, context, and advanced patterns",
          instructor: "Jane Smith",
          duration: "10 weeks",
          level: "Advanced",
          price: "₹12,499",
          rating: 4.9,
          students: 892,
          image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
        },
        {
          id: 5,
          title: "Full-Stack Development",
          description: "Build complete applications with Node.js and MongoDB",
          instructor: "Alex Chen",
          duration: "12 weeks",
          level: "Intermediate",
          price: "₹14,999",
          rating: 4.7,
          students: 654,
          image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400&h=250&fit=crop",
        },
      ],
    },
    {
      id: "data-science",
      title: "Data Science",
      description: "Unlock insights from data with modern tools",
      icon: "📊",
      courses: [
        {
          id: 3,
          title: "Data Science Essentials",
          description: "Introduction to Python, pandas, and data analysis",
          instructor: "Mike Johnson",
          duration: "12 weeks",
          level: "Intermediate",
          price: "₹16,999",
          rating: 4.6,
          students: 1103,
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
        },
        {
          id: 6,
          title: "Machine Learning Fundamentals",
          description: "Learn ML algorithms and predictive modeling",
          instructor: "Dr. Emily Brown",
          duration: "14 weeks",
          level: "Advanced",
          price: "₹20,999",
          rating: 4.8,
          students: 567,
          image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&h=250&fit=crop",
        },
      ],
    },
    {
      id: "design",
      title: "Design & UX",
      description: "Create beautiful and functional user experiences",
      icon: "🎨",
      courses: [
        {
          id: 4,
          title: "UI/UX Design Principles",
          description: "Learn design thinking and user experience",
          instructor: "Sarah Wilson",
          duration: "6 weeks",
          level: "Beginner",
          price: "₹6,999",
          rating: 4.5,
          students: 2341,
          image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop",
        },
        {
          id: 7,
          title: "Advanced UI Design",
          description: "Master Figma, prototyping, and design systems",
          instructor: "Maria Garcia",
          duration: "8 weeks",
          level: "Intermediate",
          price: "₹10,999",
          rating: 4.7,
          students: 789,
          image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop",
        },
      ],
    },
    {
      id: "mobile",
      title: "Mobile Development",
      description: "Build apps for iOS and Android platforms",
      icon: "📱",
      courses: [
        {
          id: 8,
          title: "React Native Mastery",
          description: "Cross-platform mobile app development",
          instructor: "David Kim",
          duration: "10 weeks",
          level: "Intermediate",
          price: "₹13,999",
          rating: 4.6,
          students: 445,
          image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop",
        },
        {
          id: 9,
          title: "Flutter Development",
          description: "Build beautiful apps with Google's Flutter",
          instructor: "Lisa Wang",
          duration: "9 weeks",
          level: "Intermediate",
          price: "₹11,999",
          rating: 4.8,
          students: 623,
          image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=250&fit=crop",
        },
      ],
    },
  ];

  const getLevelColor = (level) => {
    switch (level.toLowerCase()) {
      case "beginner":
        return "badge-success";
      case "intermediate":
        return "badge-warning";
      case "advanced":
        return "badge-error";
      default:
        return "badge-primary";
    }
  };

  const selectedCategoryData = courseCategories.find((cat) => cat.id === selectedCategory);

  const filteredCourses =
    selectedCategoryData?.courses.filter(
      (course) =>
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) || course.description.toLowerCase().includes(searchQuery.toLowerCase())
    ) || [];

  // Calculate filtered course counts for each category
  const getFilteredCourseCount = (categoryId) => {
    const category = courseCategories.find((cat) => cat.id === categoryId);
    if (!category) return 0;

    return category.courses.filter(
      (course) =>
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) || course.description.toLowerCase().includes(searchQuery.toLowerCase())
    ).length;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {isPrivate ? "My Courses" : "Explore Our Courses"}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {isPrivate
              ? `Welcome back, ${user?.name || "User"}! Continue your learning journey with your enrolled courses and track your progress.`
              : "Discover comprehensive learning paths designed by industry experts. Choose from our carefully curated courses and start your journey today."}
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-12 pr-4 text-gray-700 bg-white border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Categories Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
              <h2 className="text-xl font-bold mb-6 text-gray-800">Categories</h2>
              <div className="space-y-3">
                {courseCategories.map((category) => {
                  const filteredCount = getFilteredCourseCount(category.id);
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left p-4 rounded-xl transition-all duration-200 ${
                        selectedCategory === category.id
                          ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                          : "bg-gray-50 hover:bg-gray-100 text-gray-700"
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{category.icon}</span>
                        <div>
                          <h3 className="font-semibold">{category.title}</h3>
                          <p className={`text-sm ${selectedCategory === category.id ? "text-blue-100" : "text-gray-500"}`}>
                            {searchQuery ? `${filteredCount} of ${category.courses.length} courses` : `${category.courses.length} courses`}
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Courses Section */}
          <div className="lg:w-3/4">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="mb-8">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-3xl">{selectedCategoryData?.icon}</span>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-800">{selectedCategoryData?.title}</h2>
                    <p className="text-gray-600">{selectedCategoryData?.description}</p>
                  </div>
                </div>
                <p className="text-gray-500">
                  {filteredCourses.length} course{filteredCourses.length !== 1 ? "s" : ""} found
                  {searchQuery && ` for "${searchQuery}"`}
                </p>
              </div>

              {/* Course Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredCourses.map((course) => {
                  // Add enrollment status for private view
                  const enrolledCourse = isPrivate
                    ? {
                        ...course,
                        enrolled: true,
                        progress: Math.floor(Math.random() * 100),
                        completed: course.id % 3 === 0,
                        enrolledDate: "2024-01-15",
                      }
                    : course;

                  return (
                    <div
                      key={course.id}
                      className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 overflow-hidden transform hover:-translate-y-2"
                    >
                      {/* Course Image */}
                      {course.image && (
                        <div className="relative overflow-hidden">
                          <img
                            src={course.image}
                            alt={course.title}
                            className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="absolute top-4 right-4 flex flex-col gap-2">
                            <span
                              className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white ${
                                course.level === "Beginner" ? "bg-emerald-500" : course.level === "Intermediate" ? "bg-amber-500" : "bg-red-500"
                              }`}
                            >
                              {course.level}
                            </span>
                            {isPrivate && enrolledCourse.enrolled && (
                              <span
                                className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                                  enrolledCourse.completed ? "bg-green-500 text-white" : "bg-blue-500 text-white"
                                }`}
                              >
                                {enrolledCourse.completed ? "Completed" : "In Progress"}
                              </span>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Course Content */}
                      <div className="p-6">
                        {/* Course Header */}
                        <div className="mb-4">
                          <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 mb-2">
                            {course.title}
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">{course.description}</p>
                        </div>

                        {/* Course Meta */}
                        <div className="space-y-3 mb-6">
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center space-x-2 text-gray-500">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                />
                              </svg>
                              <span className="font-medium">{course.instructor}</span>
                            </div>
                            <div className="flex items-center space-x-2 text-gray-500">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span>{course.duration}</span>
                            </div>
                          </div>

                          {/* Progress Bar for Private Courses */}
                          {isPrivate && enrolledCourse.enrolled && (
                            <div className="space-y-2">
                              <div className="flex justify-between text-sm">
                                <span className="text-gray-600">Progress</span>
                                <span className="font-semibold text-blue-600">{enrolledCourse.progress}%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div
                                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                                  style={{ width: `${enrolledCourse.progress}%` }}
                                ></div>
                              </div>
                            </div>
                          )}

                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <div className="flex text-yellow-400">
                                {[...Array(5)].map((_, i) => (
                                  <svg
                                    key={i}
                                    className={`w-4 h-4 ${i < Math.floor(course.rating) ? "fill-current" : "fill-gray-200"}`}
                                    viewBox="0 0 20 20"
                                  >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                ))}
                              </div>
                              <span className="text-sm font-medium text-gray-700">{course.rating}</span>
                            </div>
                            <div className="flex items-center space-x-2 text-gray-500">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                />
                              </svg>
                              <span className="text-sm">{course.students.toLocaleString()} students</span>
                            </div>
                          </div>
                        </div>

                        {/* Price and Actions Footer */}
                        <div className="pt-4 border-t border-gray-100">
                          <div className="flex items-center justify-between mb-4">
                            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                              {course.price}
                            </div>
                          </div>
                          <div className="flex space-x-3">
                            {isPrivate && enrolledCourse.enrolled ? (
                              // Private course actions
                              <>
                                <button className="flex-1 py-3 px-4 text-sm font-semibold text-gray-700 bg-gray-50 border border-gray-200 rounded-xl hover:bg-gray-100 hover:border-gray-300 transition-all duration-200 flex items-center justify-center space-x-2">
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                    />
                                  </svg>
                                  <span>View Details</span>
                                </button>
                                <button className="flex-1 py-3 px-4 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                  </svg>
                                  <span>{enrolledCourse.completed ? "Review Course" : "Continue Learning"}</span>
                                </button>
                              </>
                            ) : (
                              // Public course actions
                              <>
                                <button className="flex-1 py-3 px-4 text-sm font-semibold text-gray-700 bg-gray-50 border border-gray-200 rounded-xl hover:bg-gray-100 hover:border-gray-300 transition-all duration-200 flex items-center justify-center space-x-2">
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                    />
                                  </svg>
                                  <span>Preview</span>
                                </button>
                                <button className="flex-1 py-3 px-4 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                  </svg>
                                  <span>Enroll Now</span>
                                </button>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {filteredCourses.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-gray-400 text-6xl mb-4">🔍</div>
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">No courses found</h3>
                  <p className="text-gray-500">
                    {searchQuery
                      ? `No courses match "${searchQuery}" in ${selectedCategoryData?.title}`
                      : `No courses available in ${selectedCategoryData?.title}`}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
