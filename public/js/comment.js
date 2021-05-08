const createComment = async (event) => {
    event.stopPropagation();

    const userId = document.querySelector(".user-profile").getAttribute("data-currentuser");
    console.log(userId);
    const postId = event.target.getAttribute("data-postid");
    console.log(postId);
    const commentContent = document.querySelector(".input-comment").value;
    console.log(commentContent);

    const response = await fetch(`/api/comments/${userId}/${postId}`, {
        method: "POST",
        body: JSON.stringify({ userId, postId, commentContent }),
        headers: { "Content-Type": "application/json" }
    });
    if (response.ok) {
        document.location.reload();
    } else {
        alert("Failed to create comment.");
    }
};

document.querySelector(".new-comment").addEventListener("click", createComment);