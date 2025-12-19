function addFeedback() {
      const name = document.getElementById("name").value;
      const message = document.getElementById("message").value;

      if (name === "" || message === "") {
        alert("Please fill out all fields");
        return;
      }

      const feedbackDiv = document.createElement("div");
      feedbackDiv.className = "feedback-item";
      feedbackDiv.innerHTML = `<strong>${name}</strong><p>${message}</p>`;

      document.getElementById("feedbackList").prepend(feedbackDiv);

      // Clear inputs
      document.getElementById("name").value = "";
      document.getElementById("message").value = "";
    }