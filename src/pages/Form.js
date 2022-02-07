// Import useState hook
import React, { useState } from "react";
import {Link} from "react-router-dom"


const Form = ({ initialItem, handleSubmit, buttonLabel, history }) => {
  ////////////////
  // The Form Data State
  ////////////////
  // Initiallize the form with the initialItem state
  const [formData, setFormData] = useState(initialItem);

  //////////////////////////
  // Functions
  //////////////////////////

  // Standard React Form HandleChange Function
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  // Function to run when form is submitted
  const handleSubmisson = (event) => {
    //prevent form refresh
    event.preventDefault();
    //pass formData to handleSubmit prop function
    handleSubmit(formData);
    //push user back to main page
    history.push("/");
  };

  // Our Form, an input for the subject and notes fields and a submit button
  return (
  <div className="text-center rounded-lg m-10 m-auto w-4/5">
    <form onSubmit={handleSubmisson}>
      <input
        type="text"
        onChange={handleChange}
        value={formData.subject}
        name="subject"
      />
      <input
        type="text"
        onChange={handleChange}
        value={formData.notes}
        name="notes"
      />
      <input type="submit" value={buttonLabel} />
    </form>
    <Link to="/">
      <button>Go back</button>
        </Link>
    </div>
  );
};

export default Form;