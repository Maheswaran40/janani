import React, { useState } from "react";

function CRUD() {
  let [userData, setUserData] = useState("");
  let [list, setList] = useState([]);
  console.log("userData", userData);

  function addData(e) {
    e.preventDefault();
    setList(list.concat(userData));
    console.log("list", list );
    setUserData("");
  }

  function getData(e) {
    setUserData(e.target.value);
  }

  return (
    <>
      <form action="" className="input-group p-5" onSubmit={addData}>
        <input
          type="text"
          className="form-control"
          placeholder="enter your data"
          onChange={getData}
          value={userData}
        />
        <input type="submit" className="btn btn-secondary" />
      </form>
      <br />
      {list.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>List</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {list.map((v, i) => (
              <tr>
                <td>{v}</td>
                <td>
                  <button>view</button>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        "no list items"
      )}
    </>
  );
}

export default CRUD;
