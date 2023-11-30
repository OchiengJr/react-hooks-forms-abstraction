import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
                                    firstName: "John",
                                    lastName: "Henry",
                                    admin: false,
  });


  function handleChange(event) {
    let {name, value} = event.target

    if(event.target.type === "checkbox"){
      value= event.target.checked
    }
    setFormData({
      ...formData,
      [name]: value
    })
  }

  function handleSubmit(event){
    event.preventDefault();
    console.log(formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={formData.firstName} name="firstName"/>
      <input type="text" onChange={handleChange} value={formData.lastName} name="lastName"/>
      <input
        type="checkbox"
        name="admin"
        onChange={handleChange}
        checked={formData.admin}
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
