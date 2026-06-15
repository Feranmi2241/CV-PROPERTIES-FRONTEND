import { useEffect } from "react";
import { Routes, Route, useNavigationType, useLocation } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

// Auth (no layout)
import AdminLogin from "./pages/AdminLogin/AdminLogin";

// Dashboard pages (each wraps its own MainLayout)
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import ManageUsers from "./pages/ManageUsers/ManageUsers";
import AddNewUser from "./pages/AddNewUser/AddNewUser";
import PropertiesListings from "./pages/PropertiesListings/PropertiesListings";
import PropertyTypeSelection from "./pages/PropertyTypeSelection/PropertyTypeSelection";
import ServiceListings from "./pages/ServiceListings/ServiceListings";
import CreatePayoutBatch from "./pages/CreatePayoutBatch/CreatePayoutBatch";
import NotificationsCenter from "./pages/NotificationsCenter/NotificationsCenter";
import ManageBookings from "./pages/ManageBookings/ManageBookings";

const PAGE_TITLES = {
  "/": "Admin Login — CV Properties",
  "/dashboard": "Dashboard — CV Properties",
  "/users": "Manage Users — CV Properties",
  "/users/add": "Add New User — CV Properties",
  "/listings/properties": "Property Listings — CV Properties",
  "/listings/property-type": "Select Property Type — CV Properties",
  "/listings/services": "Service Listings — CV Properties",
  "/bookings": "Manage Bookings — CV Properties",
  "/earnings/payout-batch": "Create Payout Batch — CV Properties",
  "/notifications": "Notifications — CV Properties",
};

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    if (action !== "POP") window.scrollTo(0, 0);
  }, [action, pathname]);

  useEffect(() => {
    const title = PAGE_TITLES[pathname];
    if (title) document.title = title;
  }, [pathname]);

  return (
    <AuthProvider>
      <Routes>
        {/* Auth — no sidebar/layout */}
        <Route path="/" element={<AdminLogin />} />

        {/* Dashboard pages — each internally uses MainLayout */}
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/users" element={<ManageUsers />} />
        <Route path="/users/add" element={<AddNewUser />} />
        <Route path="/listings/properties" element={<PropertiesListings />} />
        <Route path="/listings/property-type" element={<PropertyTypeSelection />} />
        <Route path="/listings/services" element={<ServiceListings />} />
        <Route path="/bookings" element={<ManageBookings />} />
        <Route path="/earnings/payout-batch" element={<CreatePayoutBatch />} />
        <Route path="/notifications" element={<NotificationsCenter />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
