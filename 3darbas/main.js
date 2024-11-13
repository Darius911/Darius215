"use strict";

const fetchUserData = async (id) => {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();

    if (res.status == 404) {
      throw new Error("User not found");
    }

    console.log(data.username);
  } catch (err) {
    console.error(err);
  }
};

fetchUserData(15);
