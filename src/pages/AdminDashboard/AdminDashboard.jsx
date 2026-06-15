import { useState, useEffect } from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import DashboardHeader from "../../components/Dashboard/DashboardHeader/DashboardHeader";
import StatsCardsRow from "../../components/Dashboard/StatsCardsRow/StatsCardsRow";
import AnalyticsRow from "../../components/Dashboard/AnalyticsRow/AnalyticsRow";
import BottomRow from "../../components/Dashboard/BottomRow/BottomRow";
import { useAuth } from "../../context/AuthContext";
import { getAllUsers, getProperties, getPaymentHistory, getNotifications, getContactMessages } from "../../services/adminService";
import styles from "./AdminDashboard.module.css";

const AdminDashboard = () => {
  const { admin } = useAuth();

  // ── Dashboard state ──────────────────────────────────────────────────────
  const [dashboardData, setDashboardData] = useState({
    totalUsers: 0,
    totalCustomers: 0,
    totalAgents: 0,
    activeListings: 0,
    totalBookings: 0,
    totalRevenue: 0,
    platformCommission: 0,
    pendingApprovals: 0,
    recentActivity: [],
    bookingStatus: { total: 0, completed: 0, confirmed: 0, pending: 0, cancelled: 0 },
    platformSummary: { properties: 0, hotels: 0, eventCenters: 0, services: 0, reviews: 0 },
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function fetchDashboardData() {
      setLoading(true);
      setError("");
      try {
        // Fetch multiple endpoints in parallel
        const [allUsersRes, propertiesRes, paymentRes, notificationsRes, contactsRes] = await Promise.allSettled([
          getAllUsers(),
          getProperties(1, 100),
          getPaymentHistory(1, 100),
          getNotifications(1, 20),
          getContactMessages(1, 20),
        ]);

        if (cancelled) return;

        // Process users
        let totalUsers = 0;
        let totalCustomers = 0;
        let totalAgents = 0;
        if (allUsersRes.status === "fulfilled" && allUsersRes.value) {
          const users = Array.isArray(allUsersRes.value) ? allUsersRes.value : allUsersRes.value.users || allUsersRes.value.data || [];
          totalUsers = users.length;
          totalCustomers = users.filter((u) => u.role === "customer").length;
          totalAgents = users.filter((u) => u.role === "agent").length;
        }

        // Process properties
        let activeListings = 0;
        let pendingApprovals = 0;
        if (propertiesRes.status === "fulfilled" && propertiesRes.value) {
          const props = Array.isArray(propertiesRes.value)
            ? propertiesRes.value
            : propertiesRes.value.properties || propertiesRes.value.data || [];
          activeListings = props.filter((p) => p.status === "available").length;
          pendingApprovals = props.filter((p) => p.status === "pending" || !p.status).length;
        }

        // Process payments (for revenue calculation)
        let totalRevenue = 0;
        let platformCommission = 0;
        if (paymentRes.status === "fulfilled" && paymentRes.value) {
          const payments = Array.isArray(paymentRes.value)
            ? paymentRes.value
            : paymentRes.value.payments || paymentRes.value.data || [];
          totalRevenue = payments.reduce((sum, p) => sum + (p.amount || 0), 0);
          platformCommission = totalRevenue * 0.15; // Estimated 15% platform commission
        }

        // Process notifications for recent activity
        let recentActivity = [];
        if (notificationsRes.status === "fulfilled" && notificationsRes.value) {
          const notifs = Array.isArray(notificationsRes.value)
            ? notificationsRes.value
            : notificationsRes.value.notifications || notificationsRes.value.data || [];
          recentActivity = notifs.slice(0, 6).map((n) => ({
            id: n.id,
            title: n.title || n.message || "Notification",
            description: n.message || n.body || "",
            time: n.createdAt || n.created_at || "",
            type: n.type || "info",
          }));
        }

        if (cancelled) return;

        setDashboardData({
          totalUsers,
          totalCustomers,
          totalAgents,
          activeListings,
          totalBookings: 2431, // Placeholder until booking endpoint is available
          totalRevenue,
          platformCommission,
          pendingApprovals,
          recentActivity,
          bookingStatus: {
            total: 2431,
            completed: 1512,
            confirmed: 542,
            pending: 231,
            cancelled: 146,
          },
          platformSummary: {
            properties: activeListings,
            hotels: 0,
            eventCenters: 0,
            services: 0,
            reviews: 8543,
          },
        });
      } catch (err) {
        if (!cancelled) setError(err.message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchDashboardData();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <MainLayout adminName={admin?.user?.firstName ? `${admin.user.firstName} ${admin.user.lastName || ""}`.trim() : "Admin User"}
                adminRole={admin?.user?.role === "admin" ? "Super Admin" : admin?.role || "Super Admin"}>
      <div className={styles.dashboardContent}>
        {error && <div className={styles.errorBanner}>{error}</div>}
        <DashboardHeader loading={loading} />
        <StatsCardsRow data={dashboardData} loading={loading} />
        <AnalyticsRow data={dashboardData} loading={loading} />
        <BottomRow data={dashboardData} loading={loading} />
      </div>
    </MainLayout>
  );
};

export default AdminDashboard;
