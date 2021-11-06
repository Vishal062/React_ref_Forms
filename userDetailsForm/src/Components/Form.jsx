import { useEffect, useState } from "react";
import { Inputform } from "./InputForm";
import { Table } from "./Table";
import axios from "axios";

export default function Form() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({});
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);
  //const [sort, setSort] = useState(null);
  //const [filter, setFilter] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };
  const postData = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3001/users", formData);
    getData(page);
  };
  const getData = async (page) => {
    const res = await axios.get("http://localhost:3001/users", {
      params: {
        _page: page,
        _limit: 5
        //_sort: sort === null ? "id" : "salary",
        //_order: sort === "highToLow" ? "desc" : "asc",
        //department: filter,
      }
    });
    setUsers(res.data);
  };

  return (
    <div className="mainDiv">
      <div>
        <button className="formButton" onClick={() => setShowForm(!showForm)}>
          {showForm ? "Hide Form" : "Show Form"}
        </button>
      </div>
      {showForm ? (
        <div>
          <Inputform
            handleChange={handleChange}
            handleSubmit={postData}
          ></Inputform>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
