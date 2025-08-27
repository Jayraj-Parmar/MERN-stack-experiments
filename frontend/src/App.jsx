import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [employees, setEmployees] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    designation: "Frontend Developer",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/employee/createemp", formData)
      .then((res) => {
        console.log(res.data.msg);
        fetchEmployees();
        setFormData({
          name: "",
          email: "",
          age: "",
          designation: "Frontend Developer",
        });
      })
      .catch((err) => console.log(err));
  };

  const handleData = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const fetchEmployees = () => {
    axios
      .get("/api/employee/listemp")
      .then((res) => setEmployees(res.data))
      .catch((err) => console.log(err));
  };

  const handleDelete = (e) => {
    axios.delete(`/api/employee/deleteemp/${e.target.id}`).then((res) => {
      fetchEmployees();
      console.log(res.data.msg);
    });
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={handleData}
          placeholder="Enter name"
          required
        />
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={handleData}
          placeholder="Enter email"
          required
        />
        <input
          type="number"
          id="age"
          value={formData.age}
          onChange={handleData}
          placeholder="Enter age"
          required
        />
        <select
          id="designation"
          value={formData.designation}
          onChange={handleData}
        >
          <option value="Frontend Developer">Frontend Developer</option>
          <option value="Backend Developer">Backend Developer</option>
          <option value="Fullstack Developer">Fullstack Developer</option>
        </select>
        <button type="submit">Submit</button>
      </form>

      <p>Total users : {employees.length}</p>
      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Designation</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={employee._id || index}>
              <td>{employee._id}</td>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.age}</td>
              <td>{employee.designation}</td>
              <td>
                <button id={employee._id} onClick={handleDelete}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
