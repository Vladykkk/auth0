// RoleSelectionPage.js
import { useState } from "react";
import { useHistory } from "react-router-dom";

const RoleSelectionPage = () => {
  const [selectedRole, setSelectedRole] = useState("");
  const history = useHistory();

  const handleRoleSelection = (event) => {
    setSelectedRole(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle role selection submission, e.g., update user profile in Auth0
    // After successful submission, redirect user to the desired page (e.g., dashboard)
    history.push("/dashboard");
  };

  return (
    <div>
      <h2>Select Your Role</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="radio"
            name="role"
            value="Victim"
            checked={selectedRole === "Victim"}
            onChange={handleRoleSelection}
          />
          Role A
        </label>
        <label>
          <input
            type="radio"
            name="role"
            value="Helper"
            checked={selectedRole === "Helper"}
            onChange={handleRoleSelection}
          />
          Role B
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RoleSelectionPage;
