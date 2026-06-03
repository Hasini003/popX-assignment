import { Navigate } from "react-router-dom";

function Account() {
  const user = JSON.parse(
    localStorage.getItem("user")
  );

  if (!user) {
    return <Navigate to="/register" />;
  }

  return (
    <div className="mobile-container">
      <div className="account-page">
        <div className="account-header">
          Account Settings
        </div>

        <div className="profile-section">
          <div className="avatar">
            👤
          </div>

          <div>
            <h3>{user.fullName}</h3>
            <p>{user.email}</p>
          </div>
        </div>

        <p className="account-text">
          Lorem Ipsum Dolor Sit Amet,
          Consectetur Sadipscing Elitr,
          Sed Diam Nonumy Eirmod Tempor.
        </p>
      </div>
    </div>
  );
}

export default Account;