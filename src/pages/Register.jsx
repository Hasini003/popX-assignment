import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "Yes"
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {

    if (!formData.fullName.trim()) {
      alert("Full Name is required");
      return;
    }

    if (!formData.phone.trim()) {
      alert("Phone Number is required");
      return;
    }

    if (!formData.email.trim()) {
      alert("Email Address is required");
      return;
    }

    if (!formData.password.trim()) {
      alert("Password is required");
      return;
    }

    localStorage.setItem(
      "user",
      JSON.stringify(formData)
    );

    navigate("/account");
  };

  return (
    <div className="mobile-container">

      <div className="register-content">

        <h1>
          Create your
          <br />
          PopX account
        </h1>

        <div className="field">
          <label>Full Name*</label>
          <input
            name="fullName"
            placeholder="Enter full name"
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <label>Phone Number*</label>
          <input
            name="phone"
            placeholder="Enter phone number"
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <label>Email Address*</label>
          <input
            name="email"
            placeholder="Enter email address"
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <label>Password*</label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <label>Company Name</label>
          <input
            name="company"
            placeholder="Enter company name"
            onChange={handleChange}
          />
        </div>

        <p className="agency-text">
          Are you an Agency?*
        </p>

        <div className="radio-group">

          <label>
            <input
              type="radio"
              name="agency"
              value="Yes"
              checked={
                formData.agency === "Yes"
              }
              onChange={handleChange}
            />
            Yes
          </label>

          <label>
            <input
              type="radio"
              name="agency"
              value="No"
              checked={
                formData.agency === "No"
              }
              onChange={handleChange}
            />
            No
          </label>

        </div>

        <button
          className="primary-btn create-btn"
          onClick={handleSubmit}
        >
          Create Account
        </button>

      </div>

    </div>
  );
}

export default Register;