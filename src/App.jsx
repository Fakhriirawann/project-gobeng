"use client";

import { useState, useEffect, useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";

// Pages
import Login from "./components/Login";
import Homepage from "./components/Homepage";
import KasirDashboard from "./components/dashboards/KasirDashboard";
import AdminDashboard from "./components/dashboards/AdminDashboard";
import UserDashboard from "./components/dashboards/UserDashboard";
import About from "./components/About";
import Promo from "./components/Promo";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Register from "./components/Register";
import NotFound from "./components/NotFound";

// Shared Components
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import ScrollToTop from "./components/Shared/ScrollToTop.jsx";
import LoadingScreen from "./components/shared/LoadingScreen";

// Context
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";
import { AuthContext } from "./context/AuthContext";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });

    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <ScrollToTop />
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            closeOnClick
            pauseOnHover
          />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route
              path="/"
              element={
                <PublicLayout>
                  <Homepage />
                </PublicLayout>
              }
            />
            <Route
              path="/about"
              element={
                <PublicLayout>
                  <About />
                </PublicLayout>
              }
            />
            <Route
              path="/promo"
              element={
                <PublicLayout>
                  <Promo />
                </PublicLayout>
              }
            />
            <Route
              path="/contact"
              element={
                <PublicLayout>
                  <Contact />
                </PublicLayout>
              }
            />
            <Route
              path="/faq"
              element={
                <PublicLayout>
                  <FAQ />
                </PublicLayout>
              }
            />

            <Route
              path="/kasir-dashboard/*"
              element={
                <ProtectedRoute role="kasir">
                  <KasirDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin-dashboard/*"
              element={
                <ProtectedRoute role="admin">
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/user-dashboard/*"
              element={
                <ProtectedRoute role="user">
                  <UserDashboard />
                </ProtectedRoute>
              }
            />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

// Layout wrapper for public pages
const PublicLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

// Protected route component
const ProtectedRoute = ({ children, role }) => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (role && user.role !== role) {
    return <Navigate to="/" replace />;
  }

  return children;
};

// Custom hook to access auth context
const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default App;
