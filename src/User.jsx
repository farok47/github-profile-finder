import React from "react";

function User({ user }) {
  const { avatar_url, followers, following, login, name, public_repos } = user;
  return (
    <div>
      <div>
        {" "}
        <img src={avatar_url} alt="user" />
      </div>
        <a href={`https://github.com/${login}`}>{name || login}</a>
      <div></div>
      <div>
        <span>repos</span>
        <p>{public_repos}</p>
      </div>{" "}
      <div>
      <span>followers</span>

        <p>{followers}</p>
      </div>{" "}
      <div>
      <span>following</span>

        <p>{following}</p>
      </div>
    </div>
  );
}

export default User;
