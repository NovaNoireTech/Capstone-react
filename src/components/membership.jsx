
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Membership = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    city: '',
    state: '',
    zip_code: '',
    sex: '',
    race: '',
  });

  // useEffect(() => {
  //   // Fetch users from Flask
  //   axios.get('https://cap-back-hf8i.onrender.com/').then((response) => {
  //     setUsers(response.data);
  //   });
  // }, []); 

  console.log({ users})

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Sending user data to Flask 
    axios.post('https://cap-back-hf8i.onrender.com/add_user', formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="membership-container">
      
        <h1 className="section-heading1">Membership Form</h1>

        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.first_name} {user.last_name} - {user.email}</li>
          ))}
        </ul>
        
        
        <form onSubmit={handleSubmit}>
          {/* form inputs */}
          <div>
          <input type="text" name="first_name" value={formData.first_name} onChange={handleInputChange} placeholder="First Name" />
          </div>
          <div>
          <input type="text" name="last_name" value={formData.last_name} onChange={handleInputChange} placeholder="Last Name" />
          </div>
          <div>
          <input type="text" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" />
          </div>
          <div>
          <input type="text" name="state" value={formData.state} onChange={handleInputChange} placeholder="State" />
          </div>
          <div>
          <input type="text" name="city" value={formData.city} onChange={handleInputChange} placeholder="City" />
          </div>
          <button className="button-section yellow-button" type="submit">Submit</button>
        </form>
    </div>
  );
};

export default Membership;
