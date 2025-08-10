import React, { useState } from "react";
import { PlayCircle, Clock, Star, Users, BookOpen, Award, ChevronDown, ChevronUp, CheckCircle } from "lucide-react";

const CoursePage = () => {
  const [expandedSections, setExpandedSections] = useState(new Set(["section1"]));
  const [selectedVideo, setSelectedVideo] = useState(null);

  const courseData = {
    title: "Complete React Developer Course 2024",
    instructor: "Sarah Johnson",
    rating: 4.8,
    students: 15420,
    lastUpdated: "December 2024",
    language: "English",
    certificate: true,
    price: 89.99,
    originalPrice: 199.99,
    description:
      "Learn React from scratch to advanced concepts. Build real-world projects and master modern React development with hooks, context, and more.",
    detailedDescription: `This comprehensive React course takes you from complete beginner to advanced React developer. You'll start with the fundamentals of React, understanding components, props, and state management. As you progress, you'll dive deep into modern React patterns including hooks, context API, and advanced state management techniques.

Throughout the course, you'll build multiple real-world projects that will strengthen your portfolio and give you practical experience. You'll learn how to create responsive, accessible user interfaces, work with external APIs, implement proper testing strategies, and deploy your applications to production.

By the end of this course, you'll have the skills and confidence to build professional React applications and pursue a career in frontend development. Whether you're a complete beginner or an experienced developer looking to modernize your skills, this course provides everything you need to master React development.`,
    whatYouWillLearn: [
      "Build complete React applications from scratch",
      "Master React Hooks and modern React patterns",
      "Implement state management with Context API and Redux",
      "Create responsive and accessible user interfaces",
      "Deploy React applications to production",
      "Work with external APIs and data fetching",
      "Test React components and applications",
    ],
    requirements: ["Basic knowledge of HTML, CSS, and JavaScript", "A computer with internet connection", "No prior React experience required"],
    targetAudience: [
      "Beginners who want to learn React",
      "JavaScript developers looking to expand their skills",
      "Web developers wanting to build modern UIs",
      "Anyone interested in frontend development",
    ],
  };

  const videoSections = [
    {
      id: "section1",
      title: "Getting Started with React",
      lectures: [
        { id: 1, title: "Welcome to the Course", duration: "2:15", isPreview: true },
        { id: 2, title: "Setting Up Your Development Environment", duration: "8:32", isPreview: false },
        { id: 3, title: "Understanding React Basics", duration: "12:45", isPreview: false },
        { id: 4, title: "Your First React Component", duration: "15:20", isPreview: false },
      ],
    },
    {
      id: "section2",
      title: "React Fundamentals",
      lectures: [
        { id: 5, title: "Components and Props", duration: "18:30", isPreview: false },
        { id: 6, title: "State and Lifecycle", duration: "22:15", isPreview: false },
        { id: 7, title: "Event Handling", duration: "14:45", isPreview: false },
        { id: 8, title: "Conditional Rendering", duration: "11:20", isPreview: false },
      ],
    },
    {
      id: "section3",
      title: "Advanced React Concepts",
      lectures: [
        { id: 9, title: "React Hooks Introduction", duration: "25:10", isPreview: false },
        { id: 10, title: "useState Hook Deep Dive", duration: "20:35", isPreview: false },
        { id: 11, title: "useEffect Hook", duration: "28:45", isPreview: false },
        { id: 12, title: "Custom Hooks", duration: "16:20", isPreview: false },
      ],
    },
    {
      id: "section4",
      title: "State Management",
      lectures: [
        { id: 13, title: "Context API", duration: "30:15", isPreview: false },
        { id: 14, title: "Redux Toolkit", duration: "35:20", isPreview: false },
        { id: 15, title: "State Management Best Practices", duration: "18:45", isPreview: false },
      ],
    },
  ];

  const toggleSection = (sectionId) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    }
    setExpandedSections(newExpanded);
  };

  const totalLectures = videoSections.reduce((acc, section) => acc + section.lectures.length, 0);
  const totalDuration = videoSections.reduce((acc, section) => {
    return (
      acc +
      section.lectures.reduce((sectionAcc, lecture) => {
        const [minutes, seconds] = lecture.duration.split(":").map(Number);
        return sectionAcc + minutes + seconds / 60;
      }, 0)
    );
  }, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Course Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Course Header */}
            <div className="bg-white rounded-xl shadow-sm border-0 p-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{courseData.title}</h1>
              <p className="text-xl text-gray-600 mb-6">{courseData.description}</p>

              <div className="flex items-center space-x-8 mb-6">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="text-lg font-medium text-gray-900">{courseData.rating}</span>
                  <span className="text-gray-500">({courseData.students.toLocaleString()} students enrolled)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-500">Last updated {courseData.lastUpdated}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <BookOpen className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-500">{courseData.language}</span>
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-600">By {courseData.instructor}</span>
                </div>
                {courseData.certificate && (
                  <div className="flex items-center space-x-2">
                    <Award className="w-5 h-5 text-green-500" />
                    <span className="text-green-600">Certificate of completion</span>
                  </div>
                )}
              </div>
            </div>

            {/* Course Preview Video */}
            <div className="bg-white rounded-xl shadow-sm border-0 overflow-hidden">
              <div className="aspect-video bg-gray-900 flex items-center justify-center">
                <div className="text-center">
                  <PlayCircle className="w-20 h-20 text-white mx-auto mb-4" />
                  <p className="text-white text-xl font-medium">Course Preview Video</p>
                  <p className="text-gray-300">Click to watch the course introduction</p>
                </div>
              </div>
            </div>

            {/* Description Section */}
            <div className="bg-white rounded-xl shadow-sm border-0 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">About this course</h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                {courseData.detailedDescription.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* What You'll Learn */}
            <div className="bg-white rounded-xl shadow-sm border-0 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What you'll learn</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {courseData.whatYouWillLearn.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Requirements */}
            <div className="bg-white rounded-xl shadow-sm border-0 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Requirements</h2>
              <ul className="space-y-3">
                {courseData.requirements.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Target Audience */}
            <div className="bg-white rounded-xl shadow-sm border-0 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">This course is for:</h2>
              <ul className="space-y-3">
                {courseData.targetAudience.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Video List */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border-0 sticky top-8">
              {/* Course Info Card */}
              <div className="p-6 border-b border-gray-100">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-gray-900">₹{courseData.price}</div>
                  <div className="text-xl text-gray-500 line-through">₹{courseData.originalPrice}</div>
                  <div className="text-lg text-green-600 font-medium">Save ₹{(courseData.originalPrice - courseData.price).toFixed(2)}</div>
                </div>

                <button className="w-full bg-blue-600 text-white py-2 px-6 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors mb-6">
                  Enroll Now
                </button>

                <div className="text-center text-gray-500">
                  <p>30-Day Money-Back Guarantee</p>
                  <p>Full Lifetime Access</p>
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Course content</h3>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span className="font-medium">{totalLectures} lectures</span>
                    <span className="font-medium">
                      {Math.round(totalDuration)}h {Math.round((totalDuration % 1) * 60)}m total length
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  {videoSections.map((section) => (
                    <div key={section.id} className="border border-gray-200 rounded-lg text-sm">
                      <button
                        onClick={() => toggleSection(section.id)}
                        className="w-full px-4 py-4 text-left flex items-center justify-between hover:bg-gray-50 rounded-lg"
                      >
                        <div className="flex items-center space-x-3">
                          {expandedSections.has(section.id) ? (
                            <ChevronDown className="w-5 h-5 text-gray-500" />
                          ) : (
                            <ChevronUp className="w-5 h-5 text-gray-500" />
                          )}
                          <span className="font-semibold text-gray-900">{section.title}</span>
                        </div>
                        <span className="text-gray-500 font-medium">{section.lectures.length} lectures</span>
                      </button>

                      {expandedSections.has(section.id) && (
                        <div className="border-t border-gray-100 bg-gray-50 text-sm">
                          {section.lectures.map((lecture) => (
                            <div
                              key={lecture.id}
                              onClick={() => setSelectedVideo(lecture)}
                              className={`px-4 py-4 flex items-center justify-between cursor-pointer hover:bg-gray-100 transition-colors ${
                                selectedVideo?.id === lecture.id ? "bg-blue-50 border-l-4 border-blue-500" : ""
                              }`}
                            >
                              <div className="flex items-center space-x-3 flex-1">
                                <PlayCircle className="w-5 h-5 text-gray-400 flex-shrink-0" />
                                <div className="min-w-0 flex-1">
                                  <span className="text-sm text-gray-700 font-medium block">{lecture.title}</span>
                                  {lecture.isPreview && (
                                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">Preview</span>
                                  )}
                                </div>
                              </div>
                              <span className="text-gray-500 font-medium ml-3">{lecture.duration}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
