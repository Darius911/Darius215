"use strict"

const displayUserName = async (userId) => {

  try {

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    const data = await res.json();
    
    if (res.status == 404) {
      throw new Error("User not found");
    }
   
    console.log(`User name: ${data.name}`);
    document.getElementById("user-info").textContent = `User name: ${data.name}`;
  } catch (err) {
    console.error(err);
    document.getElementById("user-info").textContent = 'Error loading user information';
  }
  
  


}
displayUserName (1)