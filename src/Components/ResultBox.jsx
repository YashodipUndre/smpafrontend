import React, { useState } from "react";
import { useResult } from "../context/ResultContext";

const Dashboard = () => {
  // State for active tab
  const [activeTab, setActiveTab] = useState("Overview");
  const [result, setResult] = useResult("");

  return (
    <div style={styles.container}>
      {/* Tabs */}
      <div style={styles.tabs}>
        {["Engagement", "Insights"].map((tab) => (
          <div
            key={tab}
            style={{
              ...styles.tab,
              borderBottom: activeTab === tab ? "3px solid blue" : "none",
              color: activeTab === tab ? "blue" : "black",
            }}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </div>
        ))}
      </div>

      {/* Content */}
      {result && (
        <div style={styles.cardContainer}>
          <div style={styles.card}>
            <pre style={styles.pre}>{`${result}`}</pre>
          </div>
        </div>
      )}

      {/* Placeholder for other tabs */}
      {!result && (
        <div style={styles.placeholder}>
          <p>{`Content for ${activeTab}`}</p>
        </div>
      )}
    </div>
  );
};

// Inline styles
const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    margin: "20px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    width: "100%", // Adjust width as necessary
  },
  tabs: {
    display: "flex",
    justifyContent: "space-around",
    marginBottom: "20px",
    borderBottom: "1px solid #ddd",
  },
  tab: {
    padding: "10px 15px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "color 0.3s, border-bottom 0.3s",
  },
  cardContainer: {
    display: "flex",
    justifyContent: "center", // Center align the card
    padding: "15px",
  },
  card: {
    padding: "15px",
    backgroundColor: "#f9f9f9",
    border: "1px solid #ddd",
    borderRadius: "8px",
    textAlign: "left", // Align content to the left for better readability
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    width: "100%", // Allow the card to take full width of its container
    maxWidth: "800px", // Set a max width to prevent it from being too wide
    overflowX: "auto", // Add horizontal scroll if the content overflows
  },
  pre: {
    color:'#19184a',
    whiteSpace: "pre-wrap", // Ensure content wraps correctly
    wordWrap: "break-word",
    fontSize: "17px",
    lineHeight: "1.6",
    margin: "0",
  },
  placeholder: {
    textAlign: "center",
    padding: "20px",
    color: "#666",
  },
};

export default Dashboard;
