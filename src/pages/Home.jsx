import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const latestCourses = [
    {
      id: 1,
      title: "Complete React Developer Course",
      instructor: "Sarah Johnson",
      rating: 4.8,
      students: 12450,
      price: "₹89.99",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
      category: "Web Development",
    },
    {
      id: 2,
      title: "Python for Data Science",
      instructor: "Michael Chen",
      rating: 4.9,
      students: 18920,
      price: "₹79.99",
      image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=250&fit=crop",
      category: "Data Science",
    },
    {
      id: 3,
      title: "Machine Learning Fundamentals",
      instructor: "Dr. Emily Rodriguez",
      rating: 4.7,
      students: 15680,
      price: "₹99.99",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
      category: "Artificial Intelligence",
    },
    {
      id: 4,
      title: "Docker & Kubernetes Mastery",
      instructor: "Alex Thompson",
      rating: 4.6,
      students: 8920,
      price: "₹69.99",
      image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=400&h=250&fit=crop",
      category: "DevOps",
    },
  ];

  const reviews = [
    {
      id: 1,
      name: "David Kim",
      role: "Full Stack Developer",
      company: "TechCorp",
      rating: 5,
      comment:
        "MindVista transformed my career! The React course was incredibly comprehensive and the instructors are world-class. I landed my dream job within 3 months.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face",
    },
    {
      id: 2,
      name: "Maria Garcia",
      role: "Data Scientist",
      company: "DataFlow Inc",
      rating: 5,
      comment:
        "The Python for Data Science course exceeded my expectations. Practical projects and real-world applications made learning so much easier.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face",
    },
    {
      id: 3,
      name: "James Wilson",
      role: "DevOps Engineer",
      company: "CloudTech",
      rating: 5,
      comment: "Excellent platform! The DevOps courses are up-to-date with the latest technologies. The community support is amazing too.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
    },
  ];

  const categories = [
    { name: "Web Development", icon: "🌐", count: 45 },
    { name: "Data Science", icon: "📊", count: 32 },
    { name: "Artificial Intelligence", icon: "🤖", count: 28 },
    { name: "DevOps", icon: "⚙️", count: 23 },
    { name: "Mobile Development", icon: "📱", count: 19 },
    { name: "Cybersecurity", icon: "🔒", count: 15 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Master Modern
                <span className="text-yellow-300 block">Development</span>
                with MindVista
              </h1>
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                Join thousands of developers learning cutting-edge technologies. From web development to AI, we've got you covered with expert-led
                courses and hands-on projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  className="btn btn-primary btn-lg bg-yellow-400 hover:bg-yellow-500 text-gray-900 border-0"
                  onClick={() => {
                    navigate("/courses");
                  }}
                >
                  Start Learning
                </button>
              </div>
              <div className="mt-8 flex items-center gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">👥</span>
                  <span>50,000+ Students</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">⭐</span>
                  <span>4.8/5 Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">📚</span>
                  <span>200+ Courses</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-4">
                  {categories.slice(0, 4).map((category, index) => (
                    <div key={index} className="bg-white/20 rounded-lg p-4 text-center">
                      <div className="text-3xl mb-2">{category.icon}</div>
                      <div className="font-semibold">{category.name}</div>
                      {/* <div className="text-sm text-blue-200">{category.count} courses</div> */}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore by Category</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from our comprehensive collection of courses across all major development domains
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6 text-center transition-all duration-300 hover:shadow-lg hover:scale-105">
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">{category.name}</h3>
                  <p className="text-sm text-gray-600">{category.count} courses</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Courses Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Courses</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay ahead with our newest courses featuring the latest technologies and industry best practices
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {latestCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full border border-blue-100"
              >
                <div className="relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-blue-600/90 text-white px-3 py-1 rounded-full text-xs font-semibold shadow">{course.category}</span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="bg-yellow-400 text-gray-900 px-2 py-1 rounded text-xs font-bold shadow">{course.price}</span>
                  </div>
                </div>
                <div className="flex flex-col flex-1 p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-1 line-clamp-2">{course.title}</h3>
                  <p className="text-gray-500 text-sm mb-2">by {course.instructor}</p>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-400 text-base">★</span>
                      <span className="text-sm font-medium">{course.rating}</span>
                    </div>
                    <span className="text-xs text-gray-400">{course.students.toLocaleString()} students</span>
                  </div>
                  <div className="flex-1"></div>
                  <button className="w-full btn btn-primary bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 border-0 text-white font-semibold py-2 rounded-lg shadow transition-all duration-200">
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="btn btn-outline btn-lg border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">Explore More Courses</button>
          </div>
        </div>
      </section>

      {/* Student Reviews Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of satisfied developers who have transformed their careers with MindVista
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div key={review.id} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-100">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-500 text-3xl">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">"{review.comment}"</p>
                <div className="flex items-center gap-4">
                  <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{review.name}</h4>
                    <p className="text-sm text-gray-600">
                      {review.role} at {review.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <h3 className="text-2xl font-bold mb-4">MindVista</h3>
              <p className="text-gray-100 mb-6 max-w-md">
                Empowering developers worldwide with cutting-edge education and practical skills for the modern tech industry.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-100 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-100 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Courses</h4>
              <ul className="space-y-2 text-gray-100">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Data Science
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Artificial Intelligence
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    DevOps
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Mobile Development
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-100">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Support
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-200">
            <p>&copy; 2025 MindVista. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
