import React from "react";

const AddFriend = () => {
  return (
    <div>
      <h2>Add Friend</h2>
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input id="username" placeholder="Username" />
        </div>
        <br />
        <div>
          <label htmlFor="age">Age:</label>
          <input id="age" placeholder="Age" />
        </div>
        <br />
        <div>
          <label htmlFor="email">Email:</label>
          <input id="email" placeholder="Email" />
        </div>
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddFriend;
