import React from "react";

export default function Form() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isFriendly: true,
    employment: "",
    favColor: "",
  });

  function handleChange(event) {
    console.log(event);
    setFormData((prevName) => {
      let { name, value, type, checked } = event.target;
      return {
        ...prevName,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          id="input--first-name"
          type="text"
          placeholder="First Name"
          onChange={handleChange}
          name="firstName"
          value={formData.firstName}
        />
      </label>
      <br />
      <label>
        Last Name:
        <input
          id="input--last-name"
          type="text"
          placeholder="Last Name"
          onChange={handleChange}
          name="lastName"
          value={formData.lastName}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="text"
          placeholder="Email"
          onChange={handleChange}
          name="email"
          value={formData.email}
        />
      </label>
      <br />
      <textarea
        placeholder="Comments"
        onChange={handleChange}
        name="comments"
        value={formData.comments}
      />
      <br />
      <input
        id="isFriendly"
        type="checkbox"
        name="isFriendly"
        checked={formData.isFriendly}
        onChange={handleChange}
      />
      <label htmlFor="isFriendly">Are you friendly?</label>
      <br />

      <fieldset>
        <legend>Current employment status</legend>
        <input
          type="radio"
          id="unemployed"
          name="employment"
          onChange={handleChange}
          value="unemployed"
          checked={formData.employment === "unemployed"}
        />
        <label htmlFor="unemployed">Unemployed</label>
        <br />

        <input
          type="radio"
          id="part-time"
          name="employment"
          value="part-time"
          onChange={handleChange}
          checked={formData.employment === "part-time"}
        />
        <label htmlFor="part-time">Part-time</label>
        <br />

        <input
          type="radio"
          id="full-time"
          name="employment"
          value="full-time"
          onChange={handleChange}
          checked={formData.employment === "full-time"}
        />
        <label htmlFor="full-time">Full-time</label>
      </fieldset>

      <br />
      <label htmlFor="favColor">What is your favorite color?</label>
      <br />
      <select
        id="favColor"
        name="favColor"
        value={formData.favColor}
        onChange={handleChange}
      >
        <option value="">-- Choose --</option>
        <option value="red">Red</option>
        <option value="orange">Orange</option>
        <option value="yellow">Yellow</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="indigo">Indigo</option>
        <option value="violet">Violet</option>
      </select>
      <br />
      <button>Submit</button>
    </form>
  );
}
