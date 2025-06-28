import { useState } from "react";

const FormPractice = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const validationForm = () => {
    let newErrors = {};

    if (!formData.name) {
      newErrors.name = "Name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email ID is required";
    }

    if (formData.password.length < 6) {
      newErrors.password = "Password should be more than 6 characters";
    }

    setError(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    setError((prevErrors) => ({
      ...prevErrors,
      [name]: ''
    }));
    setSuccessMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validationForm()) {
      setSuccessMessage("Form Submitted Successfully!!!");
      console.log(formData);

      setFormData({
        name: '',
        email: '',
        password: '',
      });

      setError({});
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>

        {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}

        <div>
          <label htmlFor="name">Name:</label><br />
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {error.name && <p style={{ color: "red" }}>{error.name}</p>}
        </div>

        <div>
          <label htmlFor="email">Email:</label><br />
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {error.email && <p style={{ color: "red" }}>{error.email}</p>}
        </div>

        <div>
          <label htmlFor="password">Password:</label><br />
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {error.password && <p style={{ color: "red" }}>{error.password}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormPractice;
