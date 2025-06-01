
// 22. dashboard


import React from 'react';

const DashboardLayout = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-5">

      {/* Sidebar */}
      <aside className="bg-gray-800 text-white p-6 lg:col-span-1">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
        <nav className="space-y-4">
          <a href="#" className="block hover:text-indigo-300">Home</a>
          <a href="#" className="block hover:text-indigo-300">Profile</a>
          <a href="#" className="block hover:text-indigo-300">Settings</a>
          <a href="#" className="block hover:text-indigo-300">Logout</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="bg-gray-100 p-6 lg:col-span-4">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-700">Welcome Back!</h1>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-500">New Report</button>
        </header>

        {/* Dashboard Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-lg font-semibold">Earnings</h3>
            <p className="text-2xl font-bold">$12,000</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-lg font-semibold">Users</h3>
            <p className="text-2xl font-bold">1,024</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-lg font-semibold">Reports</h3>
            <p className="text-2xl font-bold">87</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DashboardLayout;
