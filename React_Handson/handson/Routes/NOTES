
🔁 What is React Router?

React Router lets you create multiple views (pages) in a single-page React app without full page reloads.
It manages the URL and displays components based on the route.


🔗 1. Why Routing is Needed?

routing = mapping a URL to a React component

| Component       | Purpose                                    |
| --------------- | ------------------------------------------ |
| `BrowserRouter` | The top-level wrapper that enables routing |
| `Routes`        | Defines all the routes                     |
| `Route`         | Maps a `path` to a component               |
| `Link`          | For navigation (no page reload)            |






🧱 2. Basic Setup with BrowserRouter


import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}








🔁 3. How it Works Internally


"BrowserRouter" watches the URL in browser '(window.history.pushState)'
"Route" matches the current path to render the right component
"Link" changes URL without page reload






🪜 4. Difference: BrowserRouter vs HashRouter


| BrowserRouter            | HashRouter                  |
| ------------------------ | --------------------------- |
| Clean URLs: `/about`     | URL has hash: `/#/about`    |
| Uses `history.pushState` | Uses `window.location.hash` |
| Requires server config   | Works anywhere              |
| Preferred for real apps  | Best for static sites       |







Intermedant:



🌲 1. Nested Routes

🔍 Why?
When you have a layout shared between multiple pages (like a sidebar), and you want child components rendered inside it based on the route.


// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Settings from "./Settings";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// Dashboard.jsx
import { Outlet, Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <Link to="profile">Profile</Link> | <Link to="settings">Settings</Link>
      <Outlet /> {/* Renders child components */}
    </div>
  );
}






🧩 2. Route Parameters

Used when you want dynamic routes like /user/42

<Route path="/user/:id" element={<User />} />


// User.jsx
import { useParams } from "react-router-dom";

export default function User() {
  const { id } = useParams();
  return <h3>User ID: {id}</h3>;
}







🧭 3. useNavigate (Programmatic Navigation)

Used when you want to redirect user after a certain action (like form submit or login).


import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Do login logic...
    navigate("/dashboard"); // Redirect to dashboard
  };

  return <button onClick={handleLogin}>Login</button>;
}





🔐 4. Protected Routes (Private Route)

👮‍♂️ You only want to allow access if user is logged in

function ProtectedRoute({ isLoggedIn, children }) {
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return children;
}

  <Route path="/admin" element={
    <ProtectedRoute isLoggedIn={true}>
      <Admin />
    </ProtectedRoute>
  } />





🧱 5. Layout Routes (Shared Layouts)

This is a better version of nested routes used for layouts like navbars, footers, sidebars.


<Route path="/" element={<MainLayout />}>
  <Route index element={<Home />} />
  <Route path="about" element={<About />} />
</Route>


// MainLayout.jsx
export default function MainLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}



✅ Summary Table:


| Feature          | Hook/Component          | Purpose                      |
| ---------------- | ----------------------- | ---------------------------- |
| Navigation       | `useNavigate`           | Redirect programmatically    |
| Route Parameters | `useParams`             | Get dynamic params from URL  |
| Nested Routes    | `Outlet`                | Render child routes          |
| Auth Protection  | Custom `ProtectedRoute` | Block/allow based on logic   |
| Shared Layout    | `Route + Outlet`        | Layout across multiple pages |






Advanced:



✅ 1.  Scroll restoration / route transitions:


In a typical React app, when you navigate between routes, the scroll position doesn't reset like it does in a traditional website.
Example:
You're on /blog, scrolled halfway down.
Click to go to /about.
The page doesn't scroll to top — it stays at the same position. That feels broken.
React Router does not do this automatically — but you can handle it manually using a component + useLocation.

Handson:


  import { useEffect } from "react";
  import { useLocation } from "react-router-dom";

  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      // Scroll to top whenever the route changes
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  export default ScrollToTop;


app.jsx


  import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


✅ Now, when you navigate between routes, the window scrolls to the top automatically.







