// Wrap the entire logic in a DOMContentLoaded listener
document.addEventListener("DOMContentLoaded", () => {
  // --- Initialize the Async Function ---
  async function fetchUserData() {
    // Define the API URL
    const apiUrl = "https://jsonplaceholder.typicode.com/users";

    // Select the Data Container Element
    const dataContainer = document.getElementById("api-data");

    // Fetch Data Using try-catch
    try {
      // 1. Fetch the data (await the Response object)
      const response = await fetch(apiUrl);

      // Check if the response was successful (e.g., status 200-299)
      if (!response.ok) {
        // If not successful, throw an error to jump to the catch block
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // 2. Convert the response to JSON (await the parsed data)
      const users = await response.json();

      // Clear the Loading Message
      dataContainer.innerHTML = "";

      // Create and Append User List
      const userList = document.createElement("ul");

      // 3. Loop through the users array and create <li> elements
      users.forEach((user) => {
        const listItem = document.createElement("li");
        // Set the text content to the user's name
        listItem.textContent = user.name;
        // Append the list item to the <ul>
        userList.appendChild(listItem);
      });

      // 4. Append the fully built <ul> to the container
      dataContainer.appendChild(userList);
    } catch (error) {
      // Error Handling: If any await fails or an error is thrown
      console.error("Error fetching user data:", error);

      // Clear the existing content and display the error message
      dataContainer.innerHTML = "";
      dataContainer.textContent =
        "Failed to load user data. Please check the network or API.";
      dataContainer.style.color = "red";
    }
  }

  // Invoke fetchUserData on DOMContentLoaded
  fetchUserData();
});
