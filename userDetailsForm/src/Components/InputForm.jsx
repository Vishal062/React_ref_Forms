import React from "react";

const initState = {
  name: "",
  age: "",
  address: "",
  department: "",
  salary: "",
  maritalState: ""
};

export function InputForm() {
  const [data, setData] = React.useState(initState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const { name, age, address, salary, maritalState } = data;

  return (
    <div className="app">
      Name: <input
        type="text"
        value={name}
        name="name"
        placeholder="Entyer your name"
        onChange={handleChange}
      />
      <br />
      <br />
        Age:     <input
        type="number"
        value={age}
        name="age"
        placeholder="Entyer your age"    
        onChange={handleChange}
      />
      <br />
      <br />
      Address: 
      <input
        value={address}
        name="address"
        placeholder="Entyer your Address"
        onChange={handleChange}
      />
      <br />
      <br />
      Deartment: <span/><span/><span/>
      {/* <input
        value={department}
        name="department"
        placeholder="Entyer your department"
        onChange={handleChange}
      /> */}
      <select
            name="department"
            placeholder="enter department name"
            onChange={handleChange}
            >
            <option value="" disabled selected>
                    Department
            </option>
            <option value="Manager">Manager</option>
            <option value="Tester">Tester</option>
            <option value="Developer">Developer</option>
            </select>
      <br />
      <br />
      Salary:
      <input
        value={salary}
        name="salary"
        placeholder="Entyer your salary"
        onChange={handleChange}
      />
      <br />
      <br />
      Married: 
      <input
        type = "checkBox"
        value={maritalState}
        name="maritalState"
        placeholder="Entyer your name"
        onChange={handleChange}
      />
      <br />
      <br />
      <input type="submit" onClick={() => console.log(data)} />
    </div>
  );
}
