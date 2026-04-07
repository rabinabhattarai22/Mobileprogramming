"use client";
import { useState } from "react";


export default function Home() {
  const [water, setWater] = useState(0);

  /* =========================
     Functions (App Logic)
     ========================= */
  const addWater = () => {
    setWater(water + 1);
    alert("Water Added 💧");
  };

  const viewProgress = () => {
    alert(`You drank ${water} glasses of water today 💧`);
  };

  /* =========================
     Landing Page UI
     ========================= */
  return (
    <div style={styles.container}>
      
      {/* Title & Subtitle */}
      <h1 style={styles.title}>Water Intake Tracker</h1>
      <p style={styles.subtitle}>Stay hydrated, stay healthy 💙</p>

      {/* Buttons */}
      <button style={styles.primaryBtn} onClick={addWater}>
        Add Water
      </button>

      <button style={styles.secondaryBtn} onClick={viewProgress}>
        View Progress
      </button>

      {/* Footer Section */}
      <div style={styles.footer}>
        <span style={styles.footerText}>About</span>
        <span style={styles.footerText}>Tips</span>
        <span style={styles.footerText}>Settings</span>
      </div>
    </div>
  );
}

/* =========================
   Styling Section (CSS)
   ========================= */
const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E6F7FF",
  },
  title: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#0077B6",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "16px",
    color: "#555",
    marginBottom: "25px",
  },
  primaryBtn: {
    backgroundColor: "#0077B6",
    color: "#fff",
    padding: "12px 20px",
    border: "none",
    borderRadius: "8px",
    marginBottom: "10px",
    cursor: "pointer",
  },
  secondaryBtn: {
    backgroundColor: "#fff",
    color: "#0077B6",
    padding: "12px 20px",
    border: "2px solid #0077B6",
    borderRadius: "8px",
    marginBottom: "20px",
    cursor: "pointer",
  },
  footer: {
    display: "flex",
    gap: "20px",
  },
  footerText: {
    color: "#0077B6",
    fontSize: "14px",
    fontWeight: "500",
  },
};