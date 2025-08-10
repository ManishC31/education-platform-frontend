import React from "react";

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">Empowering learners worldwide with quality education</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We believe that education should be accessible to everyone, regardless of their background or location. Our platform is designed to
              break down barriers and provide high-quality learning experiences.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Through innovative technology and expert instruction, we're creating a community of lifelong learners who are equipped to succeed in an
              ever-changing world.
            </p>
            <button className="btn btn-primary btn-lg">Learn More</button>
          </div>
          <div className="bg-base-100 p-8 rounded-2xl shadow-xl border">
            <div className="stats stats-vertical lg:stats-horizontal shadow-lg">
              <div className="stat">
                <div className="stat-title text-gray-600">Students</div>
                <div className="stat-value text-primary">10K+</div>
                <div className="stat-desc text-gray-500">Active learners</div>
              </div>
              <div className="stat">
                <div className="stat-title text-gray-600">Courses</div>
                <div className="stat-value text-secondary">200+</div>
                <div className="stat-desc text-gray-500">Available courses</div>
              </div>
              <div className="stat">
                <div className="stat-title text-gray-600">Instructors</div>
                <div className="stat-value text-accent">50+</div>
                <div className="stat-desc text-gray-500">Expert teachers</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-base-100 rounded-2xl shadow-lg border hover:shadow-xl transition-shadow">
            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Innovation</h3>
            <p className="text-gray-600 leading-relaxed">Cutting-edge technology and modern learning methods</p>
          </div>

          <div className="text-center p-8 bg-base-100 rounded-2xl shadow-lg border hover:shadow-xl transition-shadow">
            <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Quality</h3>
            <p className="text-gray-600 leading-relaxed">Expert-curated content and industry-recognized certifications</p>
          </div>

          <div className="text-center p-8 bg-base-100 rounded-2xl shadow-lg border hover:shadow-xl transition-shadow">
            <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Community</h3>
            <p className="text-gray-600 leading-relaxed">Connect with learners and instructors worldwide</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
