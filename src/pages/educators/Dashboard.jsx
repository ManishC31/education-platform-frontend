import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend,
  AreaChart,
  Area,
} from "recharts";

const EducatorDashboard = () => {
  // Dummy analytics data
  const revenueByMonth = [
    { month: "Jan", revenue: 1200 },
    { month: "Feb", revenue: 1800 },
    { month: "Mar", revenue: 2400 },
    { month: "Apr", revenue: 2100 },
    { month: "May", revenue: 3200 },
    { month: "Jun", revenue: 2900 },
    { month: "Jul", revenue: 3600 },
    { month: "Aug", revenue: 4100 },
    { month: "Sep", revenue: 3800 },
    { month: "Oct", revenue: 4500 },
    { month: "Nov", revenue: 5200 },
    { month: "Dec", revenue: 6100 },
  ];

  const enrollmentsByCourse = [
    { course: "React Fundamentals", enrollments: 420 },
    { course: "Advanced JS", enrollments: 350 },
    { course: "Node API", enrollments: 280 },
    { course: "CSS Mastery", enrollments: 190 },
    { course: "Python Basics", enrollments: 310 },
  ];

  const categoryDistribution = [
    { name: "Web Dev", value: 45 },
    { name: "Programming", value: 30 },
    { name: "Data", value: 15 },
    { name: "Design", value: 10 },
  ];

  const engagementTrend = [
    { month: "Jan", watchTime: 120, completion: 62 },
    { month: "Feb", watchTime: 150, completion: 64 },
    { month: "Mar", watchTime: 175, completion: 66 },
    { month: "Apr", watchTime: 160, completion: 65 },
    { month: "May", watchTime: 210, completion: 69 },
    { month: "Jun", watchTime: 230, completion: 71 },
    { month: "Jul", watchTime: 260, completion: 73 },
    { month: "Aug", watchTime: 280, completion: 74 },
    { month: "Sep", watchTime: 265, completion: 73 },
    { month: "Oct", watchTime: 300, completion: 75 },
    { month: "Nov", watchTime: 335, completion: 77 },
    { month: "Dec", watchTime: 360, completion: 79 },
  ];

  const topCourses = [
    { title: "React Fundamentals", rating: 4.7, students: 420, revenue: 8400 },
    { title: "Advanced JavaScript", rating: 4.6, students: 350, revenue: 7000 },
    { title: "Node.js API Design", rating: 4.5, students: 280, revenue: 5600 },
    { title: "CSS Mastery", rating: 4.4, students: 190, revenue: 3800 },
  ];

  const recentSales = [
    { id: "#1001", course: "React Fundamentals", buyer: "Alice", amount: 49.99, time: "2h ago" },
    { id: "#1000", course: "Advanced JavaScript", buyer: "Bob", amount: 39.99, time: "5h ago" },
    { id: "#0999", course: "Python Basics", buyer: "Carol", amount: 29.99, time: "1d ago" },
    { id: "#0998", course: "Node.js API Design", buyer: "David", amount: 59.99, time: "2d ago" },
  ];

  const COLORS = ["#3b82f6", "#10b981", "#8b5cf6", "#f59e0b"]; // blue, green, purple, amber

  const formatINR = (value) => new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 2 }).format(value);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Educator Dashboard</h1>
        <p className="text-gray-600">Analytics overview for your courses and students</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <p className="text-sm font-medium text-gray-600">Total Revenue (YTD)</p>
          <p className="text-3xl font-semibold text-gray-900 mt-2">{formatINR(36960)}</p>
          <p className="text-xs text-green-600 mt-2">+18% vs last year</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <p className="text-sm font-medium text-gray-600">Active Students</p>
          <p className="text-3xl font-semibold text-gray-900 mt-2">1,550</p>
          <p className="text-xs text-green-600 mt-2">+6.5% MoM</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <p className="text-sm font-medium text-gray-600">Average Rating</p>
          <p className="text-3xl font-semibold text-gray-900 mt-2">4.6</p>
          <p className="text-xs text-gray-500 mt-2">Across 4 top courses</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <p className="text-sm font-medium text-gray-600">New Enrollments (30d)</p>
          <p className="text-3xl font-semibold text-gray-900 mt-2">862</p>
          <p className="text-xs text-green-600 mt-2">+12% vs prev. 30d</p>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 lg:col-span-2">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Revenue by Month</h2>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={revenueByMonth} margin={{ top: 5, right: 20, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(v) => [formatINR(v), "Revenue"]} />
                <Line type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Category Distribution</h2>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={categoryDistribution} dataKey="value" nameKey="name" innerRadius={50} outerRadius={80} paddingAngle={4}>
                  {categoryDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Enrollments by Course</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={enrollmentsByCourse} margin={{ top: 5, right: 20, left: 0, bottom: 40 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="course" angle={-15} textAnchor="end" interval={0} height={60} />
                <YAxis />
                <Tooltip />
                <Bar dataKey="enrollments" fill="#10b981" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Engagement Trend</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={engagementTrend} margin={{ top: 5, right: 20, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorWatch" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="watchTime" stroke="#8b5cf6" fillOpacity={1} fill="url(#colorWatch)" name="Watch time (hrs)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Listings */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 overflow-hidden">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Top Courses</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Students</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Revenue</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {topCourses.map((c) => (
                  <tr key={c.title} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900">{c.title}</td>
                    <td className="px-4 py-3 text-sm text-gray-700">{c.students}</td>
                    <td className="px-4 py-3 text-sm text-gray-700">{c.rating}</td>
                    <td className="px-4 py-3 text-sm text-gray-900">{formatINR(c.revenue)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 overflow-hidden">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Sales</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Buyer</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">When</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentSales.map((s) => (
                  <tr key={s.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900">{s.id}</td>
                    <td className="px-4 py-3 text-sm text-gray-700">{s.course}</td>
                    <td className="px-4 py-3 text-sm text-gray-700">{s.buyer}</td>
                    <td className="px-4 py-3 text-sm text-gray-900">{formatINR(s.amount)}</td>
                    <td className="px-4 py-3 text-sm text-gray-500">{s.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducatorDashboard;
