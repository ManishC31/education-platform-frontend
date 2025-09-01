import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-base-200">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-24">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold mb-8 leading-tight">
            About <span className="text-primary">Us</span>
          </h1>
          <p className="text-2xl opacity-95 max-w-3xl mx-auto leading-relaxed">
            Empowering learners worldwide with quality education and innovative learning experiences
          </p>
          <div className="mt-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm rounded-full px-6 py-3">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Join 10,000+ learners worldwide</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20">
        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl font-bold text-gray-800 leading-tight">
                Our <span className="text-primary">Mission</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
            </div>
            <div className="space-y-6">
              <p className="text-xl text-gray-600 leading-relaxed">
                We believe that education should be accessible to everyone, regardless of their background or location. Our platform is designed to
                break down barriers and provide high-quality learning experiences that transform lives.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                Through innovative technology and expert instruction, we're creating a community of lifelong learners who are equipped to succeed in
                an ever-changing world and make meaningful contributions to society.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <button className="btn btn-primary btn-lg gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
                Learn More
              </button>
              <button className="btn btn-outline btn-lg">Get Started</button>
            </div>
          </div>

          <div className="bg-base-100 p-10 rounded-3xl shadow-2xl border border-base-300">
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Platform Statistics</h3>
                <p className="text-gray-600">Real-time data from our growing community</p>
              </div>
              <div className="grid grid-cols-1 gap-6">
                <div className="stat bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-6 border border-primary/20">
                  <div className="stat-title text-gray-600 font-medium">Active Students</div>
                  <div className="stat-value text-primary text-4xl font-bold">10K+</div>
                  <div className="stat-desc text-gray-500 flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                    </svg>
                    Growing daily
                  </div>
                </div>
                <div className="stat bg-gradient-to-r from-secondary/10 to-secondary/5 rounded-2xl p-6 border border-secondary/20">
                  <div className="stat-title text-gray-600 font-medium">Available Courses</div>
                  <div className="stat-value text-secondary text-4xl font-bold">200+</div>
                  <div className="stat-desc text-gray-500">Expert-curated content</div>
                </div>
                <div className="stat bg-gradient-to-r from-accent/10 to-accent/5 rounded-2xl p-6 border border-accent/20">
                  <div className="stat-title text-gray-600 font-medium">Expert Instructors</div>
                  <div className="stat-value text-accent text-4xl font-bold">50+</div>
                  <div className="stat-desc text-gray-500">Industry professionals</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-5xl font-bold text-gray-800">
              Why Choose <span className="text-primary">Us</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine cutting-edge technology with proven educational methods to deliver exceptional learning experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-base-100 rounded-3xl shadow-xl border border-base-300 p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center">Innovation</h3>
              <p className="text-gray-600 leading-relaxed text-center">
                Cutting-edge technology and modern learning methods that adapt to your learning style and pace
              </p>
            </div>

            <div className="group bg-base-100 rounded-3xl shadow-xl border border-base-300 p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center">Quality</h3>
              <p className="text-gray-600 leading-relaxed text-center">
                Expert-curated content and industry-recognized certifications that boost your career prospects
              </p>
            </div>

            <div className="group bg-base-100 rounded-3xl shadow-xl border border-base-300 p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center">Community</h3>
              <p className="text-gray-600 leading-relaxed text-center">
                Connect with learners and instructors worldwide, share knowledge, and grow together
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
