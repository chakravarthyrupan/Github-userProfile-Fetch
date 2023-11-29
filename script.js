const userInput = document.getElementById("userName")
const getDetailsButton = document.getElementById("getDetails")
const profileInfo = document.getElementById("profileInfo")

//!using async function to get the user details
getDetailsButton.addEventListener("click",async () =>{
    const userName = userInput.value
     //console.log(userName);
     //!using the github api to fetch the data from server.
     const res = await fetch(`https://api.github.com/users/${userName}`)
     const data = await res.json();
     //console.log(data);
     getProfile(data)
})

//!get profile function it is used to get the used details from the server.
function getProfile(data) {
    console.log(data);
    profileInfo.innerHTML = `<div class="card">
    <div class="card-img">
   <img src=${data.avatar_url} alt=${data.name}>
   </div>
   <div class="card-body">
   <div class="card-title">${data.name}</div>
   <div class="card-subHeading">${data.login}</div>
   <div class="card-text">
   <p>${data.bio}</p>
   <p><i class="fa-solid fa-user-group"></i> ${data.followers} Followers ${data.following} Following </p>
   <p><i class="fa-solid fa-location-dot"></i> ${data.location}</p>
   <button>
   <a href=${data.html_url} target="_blank">Visit Profile</a>
   </div>
   </div>
   </div>`

}