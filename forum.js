document.getElementById("forumForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let message = document.getElementById("message").value;
    let forumPosts = document.getElementById("forumPosts");

    if (username && message) {
        let post = document.createElement("div");
        post.innerHTML = `<strong>${username}:</strong> ${message}`;
        forumPosts.appendChild(post);

        document.getElementById("forumForm").reset();
        
        // Display Thank You Message
        let thankYou = document.createElement("p");
        thankYou.textContent = "✅ Thank you for contributing to the forum!";
        thankYou.style.color = "green";
        forumPosts.appendChild(thankYou);
    }
});
