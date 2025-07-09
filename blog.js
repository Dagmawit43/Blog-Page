window.onload = function () {
  // Comment form submission logic
  document.getElementById("comment-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("username").value.trim();
    const commentText = document.getElementById("comment").value.trim();

    if (name && commentText) {
      const commentList = document.getElementById("comment-list");

      const newComment = document.createElement("li");
      newComment.innerHTML = `<strong>${name}:</strong> ${commentText}`;
      // Add new comment at the top
      commentList.insertBefore(newComment, commentList.firstChild);

      // Clear input fields
      document.getElementById("username").value = "";
      document.getElementById("comment").value = "";
    }
  });

  // Fetch blog posts from JSONPlaceholder API
  const postsContainer = document.getElementById("posts-container");

  fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')  
    .then(response => response.json())
    .then(posts => {
      posts.forEach(post => {
        const postDiv = document.createElement('div');
        const postTitle = document.createElement('h3');
        const postBody = document.createElement('p');

        postTitle.textContent = post.title;
        postBody.textContent = post.body;

        postDiv.appendChild(postTitle);
        postDiv.appendChild(postBody);

        postsContainer.appendChild(postDiv);
      });
    })
    .catch(error => {
      console.error('Error fetching posts:', error);
      postsContainer.textContent = "Sorry, could not load posts.";
    });
};
