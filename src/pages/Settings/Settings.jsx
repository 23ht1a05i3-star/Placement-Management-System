import { useState } from "react";
import { Link } from "react-router-dom";

function Settings() {
  const [collegeName, setCollegeName] = useState("ABC Engineering College");
  const [email, setEmail] = useState("placement@college.com");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Settings Saved Successfully");
  };

  return (
    <div className="settings-container">
      <h2>Settings</h2>

      <form onSubmit={handleSubmit}>
        <label>College Name</label>
        <input
          type="text"
          value={collegeName}
          onChange={(e) => setCollegeName(e.target.value)}
        />

        <label>Placement Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">Save Settings</button>
      </form>
    </div>
  );
}

export default Settings;