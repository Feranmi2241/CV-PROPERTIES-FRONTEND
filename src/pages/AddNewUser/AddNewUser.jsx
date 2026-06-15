import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputAdornment,
  IconButton,
  Radio,
  RadioGroup,
  FormControlLabel,
  Checkbox,
  Snackbar,
  Alert,
  CircularProgress,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { registerUser, uploadAvatar } from "../../services/authService";
import styles from "./AddNewUser.module.css";

const inputSx = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "8px",
    backgroundColor: "#fafafa",
    fontSize: "13px",
    height: "40px",
    "& fieldset": { borderColor: "#e8e8e8" },
    "&:hover fieldset": { borderColor: "#c0c0c0" },
    "&.Mui-focused fieldset": { borderColor: "#0c693c", borderWidth: "1.5px" },
  },
  "& .MuiInputBase-input": { color: "#555", padding: "0 14px" },
  "& .MuiInputBase-input::placeholder": { color: "#aaa", opacity: 1 },
};

const selectSx = {
  borderRadius: "8px",
  backgroundColor: "#fafafa",
  fontSize: "13px",
  height: "40px",
  "& fieldset": { borderColor: "#e8e8e8" },
  "&:hover fieldset": { borderColor: "#c0c0c0" },
  "&.Mui-focused fieldset": { borderColor: "#0c693c", borderWidth: "1.5px" },
  "& .MuiSelect-select": { color: "#555", fontSize: "13px" },
};

const SECTION = ({ number, title }) => (
  <div className={styles.sectionTitle}>
    <span className={styles.sectionNum}>{number}</span>
    {title}
  </div>
);

const FieldLabel = ({ children, required }) => (
  <label className={styles.fieldLabel}>
    {children}
    {required && <span className={styles.required}>*</span>}
  </label>
);

const ROLE_MAP = {
  client: "customer",
  agent: "agent",
  service_provider: "service_provider",
};

export default function AddNewUser() {
  const navigate = useNavigate();
  const profileRef = useRef(null);
  const docRef = useRef(null);

  // ── Form state ──────────────────────────────────────────────────────────
  const [userType, setUserType] = useState("client");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [altPhone, setAltPhone] = useState("");
  const [dob, setDob] = useState(null);
  const [gender, setGender] = useState("");
  const [nationality, setNationality] = useState("");
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [accountStatus, setAccountStatus] = useState("active");
  const [emailVerified, setEmailVerified] = useState(false);
  const [phoneVerified, setPhoneVerified] = useState(false);
  const [country, setCountry] = useState("nigeria");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [idType, setIdType] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [idDoc, setIdDoc] = useState(null);
  const [notes, setNotes] = useState("");

  // ── UI state ─────────────────────────────────────────────────────────────
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });

  const showMessage = (message, severity = "success") => {
    setSnackbar({ open: true, message, severity });
  };

  const handleCreateUser = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!firstName.trim() || !lastName.trim()) {
      showMessage("Full name is required (first and last name).", "error");
      return;
    }
    if (!email.trim()) {
      showMessage("Email address is required.", "error");
      return;
    }
    if (!phone.trim()) {
      showMessage("Phone number is required.", "error");
      return;
    }
    if (password && password.length < 6) {
      showMessage("Password must be at least 6 characters.", "error");
      return;
    }
    if (password && password !== confirmPassword) {
      showMessage("Passwords do not match.", "error");
      return;
    }

    setLoading(true);
    try {
      // 1. Register the user
      const userData = {
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: email.trim(),
        phone: phone.trim(),
        password: password || undefined,
        role: ROLE_MAP[userType] || "customer",
      };

      const registerResult = await registerUser(userData);

      // 2. Upload avatar if one was selected
      if (profilePhoto && registerResult?.user?.id) {
        const avatarFormData = new FormData();
        avatarFormData.append("avatar", profilePhoto);
        await uploadAvatar(avatarFormData).catch(() => {
          // Non-blocking — avatar upload failure shouldn't block user creation
        });
      }

      showMessage("User created successfully!", "success");
      setTimeout(() => navigate("/users"), 1500);
    } catch (err) {
      showMessage(err.message || "Failed to create user. Please try again.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout adminName="Admin User" adminRole="Super Admin" hideTopBar>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={() => setSnackbar((s) => ({ ...s, open: false }))}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert severity={snackbar.severity} variant="filled" onClose={() => setSnackbar((s) => ({ ...s, open: false }))}>
            {snackbar.message}
          </Alert>
        </Snackbar>

        <div className={styles.page}>
          {/* ── Page header ── */}
          <div className={styles.pageHeader}>
            <div>
              <Typography className={styles.pageTitle}>Add New User</Typography>
              <div className={styles.breadcrumb}>
                <span className={styles.breadcrumbLink} onClick={() => navigate("/dashboard")}>Dashboard</span>
                <span className={styles.breadcrumbSep}>›</span>
                <span className={styles.breadcrumbLink} onClick={() => navigate("/users")}>Users</span>
                <span className={styles.breadcrumbSep}>›</span>
                <span className={styles.breadcrumbCurrent}>Add New User</span>
              </div>
            </div>
            <div className={styles.headerActions}>
              <button className={styles.cancelBtn} onClick={() => navigate("/users")} disabled={loading}>
                ✕ &nbsp;Cancel
              </button>
              <button className={styles.createBtn} onClick={handleCreateUser} disabled={loading}>
                {loading ? <CircularProgress size={18} sx={{ color: "#fff", mr: 0.5 }} /> : "+ "}
                &nbsp;{loading ? "Creating..." : "Create User"}
              </button>
            </div>
          </div>

          {/* ── Body card ── */}
          <div className={styles.card}>

            {/* 1. User Type */}
            <section className={styles.section}>
              <SECTION number="1." title="User Type" />
              <p className={styles.sectionSubtitle}>Select the type of user you want to add</p>
              <div className={styles.userTypeRow}>
                {[
                  { value: "client", label: "Client", icon: "/Image15.svg", desc: "Can book properties and services but cannot list." },
                  { value: "agent", label: "Agent", icon: "/Image45.svg", desc: "Can list properties manage listings and handle bookings" },
                  { value: "service_provider", label: "Service Provider", icon: "/Image18.svg", desc: "Can offer services and manage service requests" },
                ].map((t) => (
                  <label
                    key={t.value}
                    className={`${styles.typeCard} ${userType === t.value ? styles.typeCardActive : ""}`}
                    onClick={() => setUserType(t.value)}
                  >
                    <Radio
                      checked={userType === t.value}
                      onChange={() => setUserType(t.value)}
                      size="small"
                      sx={{ color: "#ccc", "&.Mui-checked": { color: "#0c693c" }, padding: "0" }}
                    />
                    <img src={t.icon} alt={t.label} className={styles.typeIcon} />
                    <div className={styles.typeText}>
                      <div className={styles.typeLabel}>{t.label}</div>
                      <div className={styles.typeDesc}>{t.desc}</div>
                    </div>
                  </label>
                ))}
              </div>
            </section>

            <div className={styles.divider} />

            {/* 2 & 3 — Personal + Account side by side */}
            <div className={styles.twoCol}>

              {/* ── 2. Personal Information ── */}
              <section className={styles.section}>
                <SECTION number="2." title="Personal Information" />

                <div className={styles.formGrid2}>
                  <div className={styles.field}>
                    <FieldLabel required>First Name</FieldLabel>
                    <TextField fullWidth placeholder="Enter first name" variant="outlined" sx={inputSx} value={firstName} onChange={(e) => setFirstName(e.target.value)} disabled={loading} />
                  </div>
                  <div className={styles.field}>
                    <FieldLabel required>Last Name</FieldLabel>
                    <TextField fullWidth placeholder="Enter last name" variant="outlined" sx={inputSx} value={lastName} onChange={(e) => setLastName(e.target.value)} disabled={loading} />
                  </div>
                </div>

                <div className={styles.formGrid2}>
                  <div className={styles.field}>
                    <FieldLabel required>Email Address</FieldLabel>
                    <TextField fullWidth placeholder="Enter email address" variant="outlined" sx={inputSx} value={email} onChange={(e) => setEmail(e.target.value)} disabled={loading} />
                  </div>
                  <div className={styles.field}>
                    <FieldLabel required>Phone Number</FieldLabel>
                    <div className={styles.phoneInput}>
                      <div className={styles.phonePrefix}>
                        <img src="/Image41.svg" alt="NG" className={styles.flagIcon} />
                        <span className={styles.dialCode}>+234</span>
                        <span className={styles.phoneSep} />
                      </div>
                      <input className={styles.phoneField} placeholder="Enter phone number" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} disabled={loading} />
                    </div>
                  </div>
                </div>

                <div className={styles.formGrid2}>
                  <div className={styles.field}>
                    <FieldLabel>Alternative Phone (Optional)</FieldLabel>
                    <div className={styles.phoneInput}>
                      <div className={styles.phonePrefix}>
                        <img src="/Image20.svg" alt="NG" className={styles.flagIcon} />
                        <span className={styles.dialCode}>+234</span>
                        <span className={styles.phoneSep} />
                      </div>
                      <input className={styles.phoneField} placeholder="Enter alternative number" type="tel" value={altPhone} onChange={(e) => setAltPhone(e.target.value)} disabled={loading} />
                    </div>
                  </div>
                  <div className={styles.field}>
                    <FieldLabel>Date of Birth</FieldLabel>
                    <DatePicker
                      value={dob}
                      onChange={setDob}
                      slotProps={{ textField: { size: "small", fullWidth: true, placeholder: "Select date of birth", sx: { ...inputSx, "& .MuiOutlinedInput-root": { ...inputSx["& .MuiOutlinedInput-root"], height: "40px" } } } }}
                    />
                  </div>
                </div>

                <div className={styles.formGrid3}>
                  <div className={styles.field}>
                    <FieldLabel>Gender</FieldLabel>
                    <FormControl fullWidth size="small">
                      <Select displayEmpty value={gender} onChange={(e) => setGender(e.target.value)} sx={selectSx} disabled={loading}>
                        <MenuItem value="" disabled><span style={{ color: "#aaa" }}>Select gender</span></MenuItem>
                        <MenuItem value="male">Male</MenuItem>
                        <MenuItem value="female">Female</MenuItem>
                        <MenuItem value="other">Other</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div className={styles.field}>
                    <FieldLabel>Nationality</FieldLabel>
                    <FormControl fullWidth size="small">
                      <Select displayEmpty value={nationality} onChange={(e) => setNationality(e.target.value)} sx={selectSx} disabled={loading}>
                        <MenuItem value="" disabled><span style={{ color: "#aaa" }}>Select nationality</span></MenuItem>
                        <MenuItem value="nigerian">Nigerian</MenuItem>
                        <MenuItem value="ghanaian">Ghanaian</MenuItem>
                        <MenuItem value="other">Other</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div className={styles.field}>
                    <FieldLabel>Profile Photo</FieldLabel>
                    <label className={styles.uploadBox} htmlFor="profile-photo">
                      <img src="/Image23.svg" alt="" className={styles.uploadIcon} />
                      <span className={styles.uploadText}>Upload profile photo</span>
                      <span className={styles.uploadHint}>JPG, PNG or WEBP · Max 2MB</span>
                      <input type="file" id="profile-photo" hidden accept="image/*" ref={profileRef} onChange={(e) => setProfilePhoto(e.target.files[0] || null)} />
                    </label>
                  </div>
                </div>
              </section>

              {/* ── 3. Account Information ── */}
              <section className={styles.section}>
                <SECTION number="3." title="Account Information" />

                <div className={styles.field}>
                  <FieldLabel required>Username</FieldLabel>
                  <TextField fullWidth placeholder="Enter username" variant="outlined" sx={inputSx} value={username} onChange={(e) => setUsername(e.target.value)} disabled={loading} />
                </div>

                <div className={styles.formGrid2}>
                  <div className={styles.field}>
                    <FieldLabel>Password</FieldLabel>
                    <TextField fullWidth type={showPass ? "text" : "password"} placeholder="Enter password" variant="outlined" sx={inputSx} value={password} onChange={(e) => setPassword(e.target.value)} disabled={loading}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton size="small" onClick={() => setShowPass((p) => !p)} edge="end">
                              <img src="/Eye.svg" width="16" height="16" alt="" style={{ opacity: 0.5 }} />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>
                  <div className={styles.field}>
                    <FieldLabel>Confirm Password</FieldLabel>
                    <TextField fullWidth type={showConfirm ? "text" : "password"} placeholder="Confirm Password" variant="outlined" sx={inputSx} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} disabled={loading}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton size="small" onClick={() => setShowConfirm((p) => !p)} edge="end">
                              <img src="/Eye.svg" width="16" height="16" alt="" style={{ opacity: 0.5 }} />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>
                </div>

                <div className={styles.tempPassNote}>
                  <img src="/Image19.svg" alt="" width="14" height="14" style={{ flexShrink: 0, marginTop: "1px" }} />
                  <span>A temporary password will be sent to the user if you leave the password fields empty</span>
                </div>

                <div className={styles.field} style={{ marginTop: "4px" }}>
                  <FieldLabel required>Account Status</FieldLabel>
                  <RadioGroup row value={accountStatus} onChange={(e) => setAccountStatus(e.target.value)}>
                    {["active", "inactive", "pending_verification"].map((s) => (
                      <FormControlLabel key={s} value={s}
                        control={<Radio size="small" sx={{ color: "#ccc", "&.Mui-checked": { color: "#0c693c" }, padding: "4px 6px" }} />}
                        label={<span className={styles.radioLabel}>{s === "active" ? "Active" : s === "inactive" ? "Inactive" : "Pending Verification"}</span>}
                      />
                    ))}
                  </RadioGroup>
                </div>

                <div className={styles.verificationGroup}>
                  <div className={styles.verificationItem}>
                    <FieldLabel>Email Verification</FieldLabel>
                    <FormControlLabel
                      control={<Checkbox size="small" checked={emailVerified} onChange={(e) => setEmailVerified(e.target.checked)} sx={{ color: "#ccc", "&.Mui-checked": { color: "#0c693c" }, padding: "4px" }} />}
                      label={<span className={styles.checkLabel}>Mark email as verified</span>}
                      className={styles.checkRow}
                    />
                  </div>
                  <div className={styles.verificationItem}>
                    <FieldLabel>Phone Verification</FieldLabel>
                    <FormControlLabel
                      control={<Checkbox size="small" checked={phoneVerified} onChange={(e) => setPhoneVerified(e.target.checked)} sx={{ color: "#ccc", "&.Mui-checked": { color: "#0c693c" }, padding: "4px" }} />}
                      label={<span className={styles.checkLabel}>Mark phone as verified</span>}
                      className={styles.checkRow}
                    />
                  </div>
                </div>
              </section>
            </div>

            <div className={styles.divider} />

            {/* 4 & 5 — Address + Additional side by side */}
            <div className={styles.twoCol}>

              {/* ── 4. Address Information ── */}
              <section className={styles.section}>
                <SECTION number="4." title="Address Information" />

                <div className={styles.formGrid3}>
                  <div className={styles.field}>
                    <FieldLabel required>Country</FieldLabel>
                    <FormControl fullWidth size="small">
                      <Select value={country} onChange={(e) => setCountry(e.target.value)} sx={selectSx} disabled={loading}>
                        <MenuItem value="nigeria">Nigeria</MenuItem>
                        <MenuItem value="ghana">Ghana</MenuItem>
                        <MenuItem value="other">Other</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div className={styles.field}>
                    <FieldLabel>State</FieldLabel>
                    <FormControl fullWidth size="small">
                      <Select displayEmpty value={state} onChange={(e) => setState(e.target.value)} sx={selectSx} disabled={loading}>
                        <MenuItem value="" disabled><span style={{ color: "#aaa" }}>Select state</span></MenuItem>
                        <MenuItem value="lagos">Lagos</MenuItem>
                        <MenuItem value="abuja">Abuja</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div className={styles.field}>
                    <FieldLabel>City</FieldLabel>
                    <FormControl fullWidth size="small">
                      <Select displayEmpty value={city} onChange={(e) => setCity(e.target.value)} sx={selectSx} disabled={loading}>
                        <MenuItem value="" disabled><span style={{ color: "#aaa" }}>Select city</span></MenuItem>
                        <MenuItem value="ikeja">Ikeja</MenuItem>
                        <MenuItem value="vi">Victoria Island</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>

                <div className={styles.formGrid2}>
                  <div className={styles.field}>
                    <FieldLabel required>Address</FieldLabel>
                    <textarea className={styles.textarea} placeholder="Enter full address" rows={3} value={address} onChange={(e) => setAddress(e.target.value)} disabled={loading} />
                  </div>
                  <div className={styles.field}>
                    <FieldLabel>ZIP / Postal Code</FieldLabel>
                    <TextField fullWidth placeholder="Enter postal code" variant="outlined" sx={inputSx} value={zipCode} onChange={(e) => setZipCode(e.target.value)} disabled={loading} />
                  </div>
                </div>
              </section>

              {/* ── 5. Additional Information ── */}
              <section className={styles.section}>
                <SECTION number="5." title="Additional Information" />

                <div className={styles.formGrid2}>
                  <div className={styles.field}>
                    <FieldLabel>ID Type</FieldLabel>
                    <FormControl fullWidth size="small">
                      <Select displayEmpty value={idType} onChange={(e) => setIdType(e.target.value)} sx={selectSx} disabled={loading}>
                        <MenuItem value="" disabled><span style={{ color: "#aaa" }}>Select ID type</span></MenuItem>
                        <MenuItem value="nin">NIN</MenuItem>
                        <MenuItem value="passport">Passport</MenuItem>
                        <MenuItem value="drivers">Driver's License</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div className={styles.field}>
                    <FieldLabel>ID Number</FieldLabel>
                    <TextField fullWidth placeholder="Enter ID number" variant="outlined" sx={inputSx} value={idNumber} onChange={(e) => setIdNumber(e.target.value)} disabled={loading} />
                  </div>
                </div>

                <div className={styles.formGrid2}>
                  <div className={styles.field}>
                    <FieldLabel>Upload ID Document</FieldLabel>
                    <label className={styles.uploadBox} htmlFor="id-doc">
                      <img src="/Image12.svg" alt="" className={styles.uploadIcon} />
                      <span className={styles.uploadText}>Upload ID document (Optional)</span>
                      <span className={styles.uploadHint}>PDF, JPG or PNG · Max 5MB</span>
                      <input type="file" id="id-doc" hidden ref={docRef} onChange={(e) => setIdDoc(e.target.files[0] || null)} />
                    </label>
                  </div>
                  <div className={styles.field}>
                    <FieldLabel>Notes (Optional)</FieldLabel>
                    <textarea className={styles.textarea} placeholder="Add any notes about this user..." rows={4} value={notes} onChange={(e) => setNotes(e.target.value)} disabled={loading} />
                  </div>
                </div>
              </section>
            </div>

            <div className={styles.divider} />

            {/* 6. Permissions & Role Settings */}
            <section className={styles.section}>
              <div className={styles.permissionsRow}>
                <div>
                  <SECTION number="6." title="Permissions & Role Settings" /><br />
                  <p className={styles.sectionSubtitle}>Set permission based on the user type selected above</p>
                  <div className={styles.roleBadgeRow}>
                    <span className={styles.roleBadge}>Default Role: {userType === "client" ? "Client" : userType === "agent" ? "Agent" : "Service Provider"}</span>
                    <span className={styles.permissionNote}>Default Permission will be applied</span>
                  </div>
                </div>
                <div className={styles.permissionInfo}>
                  <img src="/Image37.svg" alt="" width="15" height="15" style={{ flexShrink: 0 }} />
                  <span>You can modify role permissions later from the Roles & Permissions section</span>
                </div>
              </div>
            </section>

          </div>
        </div>
      </LocalizationProvider>
    </MainLayout>
  );
}