import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, TextField, Checkbox, FormControlLabel, InputAdornment, IconButton, Divider, Alert, Snackbar } from "@mui/material";
import { useAuth } from "../../context/AuthContext";
import styles from "./AdminLogin.module.css";

const AdminLogin = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showOtp, setShowOtp] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email.trim() || !password.trim()) {
      setError("Please enter both email and password.");
      return;
    }

    setLoading(true);
    try {
      const session = await login(email, password);
      // If backend returns a 2FA requirement, show OTP section
      if (session.requiresTwoFactor) {
        setShowOtp(true);
      } else {
        navigate("/dashboard");
      }
    } catch (err) {
      setError(err.message || "Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box className={styles.loginPage}>
      {/* Top brand bar */}
      <header className={styles.topBar}>
        <Box className={styles.brandRow}>
          <img className={styles.brandLogo} alt="CV Properties" src="/merged-asset-1@2x.png" />
          <Typography className={styles.brandName}>CV Properties</Typography>
        </Box>
        <div className={styles.langBadge}>🌐 English (US)</div>
      </header>

      {/* Center card */}
      <Box className={styles.centerWrapper}>
        <Box className={styles.card}>
          <Box className={styles.cardHeader}>
            <Typography variant="h5" className={styles.title}>
              Admin sign in
            </Typography>
            <Typography className={styles.subtitle}>
              Welcome back. Please enter your administrator credentials.
            </Typography>
          </Box>

          <Snackbar
            open={!!error}
            autoHideDuration={6000}
            onClose={() => setError("")}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
          >
            <Alert severity="error" variant="filled" onClose={() => setError("")}>
              {error}
            </Alert>
          </Snackbar>

          <form className={styles.form} onSubmit={handleSubmit}>
            {/* Email */}
            <Box className={styles.fieldGroup}>
              <label className={styles.fieldLabel}>Email Address</label>
              <TextField
                fullWidth
                placeholder="admin@cvproperties.com"
                variant="outlined"
                size="small"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <img width="16" height="16" src="/mail.svg" alt="" style={{ opacity: 0.5 }} />
                    </InputAdornment>
                  ),
                }}
                sx={fieldSx}
              />
            </Box>

            {/* Password */}
            <Box className={styles.fieldGroup}>
              <label className={styles.fieldLabel}>Password</label>
              <TextField
                fullWidth
                type={showPassword ? "text" : "password"}
                placeholder="••••••••••••"
                variant="outlined"
                size="small"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <img width="16" height="16" src="/lock.svg" alt="" style={{ opacity: 0.5 }} />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton size="small" onClick={() => setShowPassword((p) => !p)} edge="end">
                        <img width="16" height="16" src="/Eye.svg" alt="" style={{ opacity: 0.5 }} />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={fieldSx}
              />
            </Box>

            {/* Remember + Forgot */}
            <Box className={styles.rememberRow}>
              <FormControlLabel
                control={<Checkbox size="small" sx={{ color: "#94a3b8", "&.Mui-checked": { color: "#0c693c" } }} />}
                label={<span className={styles.rememberLabel}>Remember this device</span>}
              />
              <button type="button" className={styles.forgotBtn}>
                Forgot password?
              </button>
            </Box>

            {/* Sign in button */}
            <button type="submit" className={styles.signInBtn} disabled={loading}>
              {loading ? "Signing in..." : "Sign In to Dashboard →"}
            </button>

            {/* 2FA Section (shown after successful credential check if 2FA is enabled) */}
            {showOtp && (
              <Box className={styles.twoFaSection}>
                <Divider className={styles.divider} />
                <Box className={styles.twoFaHeader}>
                  <img width="16" height="16" src="/shield-check.svg" alt="" />
                  <span className={styles.twoFaTitle}>Two-Factor Authentication</span>
                </Box>
                <Typography className={styles.twoFaDesc}>
                  Enter the 6-digit code from your authenticator app to complete the sign-in.
                </Typography>
                <Box className={styles.otpRow}>
                  {[0, 1, 2, 3, 4, 5].map((i) => (
                    <input
                      key={i}
                      className={`${styles.otpBox} ${i < 3 ? styles.otpFilled : ""}`}
                      maxLength={1}
                      type="text"
                      inputMode="numeric"
                    />
                  ))}
                </Box>
                <Box className={styles.otpFooter}>
                  <button type="button" className={styles.resendBtn}>Resend code</button>
                  <span className={styles.codeExpiry}>CODE EXPIRES IN 04:59</span>
                </Box>
              </Box>
            )}

            {/* Corporate Access */}
            <Box className={styles.corporateSection}>
              <Divider>
                <span className={styles.corporateLabel}>CORPORATE ACCESS</span>
              </Divider>
            </Box>
            <Divider sx={{ my: 0.5 }} />
            <button type="button" className={styles.ssoBtn} disabled={loading}>
              <img width="20" height="20" src="/Image.svg" alt="" />
              Sign in with Enterprise SSO
            </button>
          </form>

          {/* Security note */}
          <Box className={styles.securityNote}>
            <img width="36" height="36" src="/Container4.svg" alt="" />
            <Box>
              <Typography className={styles.securityTitle}>
                Secure Administrative Session
              </Typography>
              <Typography className={styles.securityText}>
                This is a restricted administrative portal. All access attempts and session activities are logged for security compliance.
              </Typography>
            </Box>
          </Box>

          {/* Footer */}
          <Box className={styles.cardFooter}>
            <Box className={styles.footerLinks}>
              <button type="button" className={styles.footerLink}>Terms of Service</button>
              <button type="button" className={styles.footerLink}>Privacy Policy</button>
              <button type="button" className={styles.footerLink}>Help Center</button>
            </Box>
            <Box className={styles.statusBadge}>
              <span className={styles.statusDot} />
              <span className={styles.statusText}>System Operational • v2.4.12-Enterprise</span>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const fieldSx = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "12px",
    backgroundColor: "#f8fafc",
    fontSize: "14px",
    "& fieldset": { borderColor: "#e2e8f0" },
    "&:hover fieldset": { borderColor: "#94a3b8" },
    "&.Mui-focused fieldset": { borderColor: "#0c693c", borderWidth: "1.5px" },
  },
  "& .MuiInputBase-input": { color: "#1e293b" },
  "& .MuiInputBase-input::placeholder": { color: "#94a3b8", opacity: 1 },
};

export default AdminLogin;
