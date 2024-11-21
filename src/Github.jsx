import React, { useEffect, useState } from "react";
import User from "./User";
import "./style.css";

function Github() {
  const [username, setusername] = useState("farok47");
  const [data, setdata] = useState(null);
  const [loading, setloading] = useState(false);

  async function fetchdata() {
    setloading(true);
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    if (data) {
      setdata(data);
      console.log(data);
      setusername("");
      setloading(false);
    }
  }

  useEffect(() => {
    fetchdata();
  }, []);

  if (loading) {
    return <div>loading...</div>;
  }

  function handlesubmit() {
    fetchdata();
  }
  return (
    <div>
      <div>
        <input
          className="input"
          type="text"
          placeholder="enter your github name"
          value={username}
          onChange={(e) => setusername(e.target.value)}
        />
        <button onClick={handlesubmit}>search</button>
      </div>
      <div className="datas">{data !== null ? <User user={data} /> : null}</div>{" "}
    </div>
  );
}

export default Github;
