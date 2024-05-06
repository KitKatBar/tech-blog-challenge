const newCommentFormHandler = async (event) => {
    event.preventDefault();
  
    const postId = document.querySelector('.post-id').textContent;
    const comment = document.querySelector('#comment').value.trim();
  
    if (comment) {
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ postId, comment }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to post.');
      }
    }
};

const editCommentHandler = async (event) => {
    event.preventDefault();
  
    const comment = document.querySelector('#comment').value.trim();
      const url = window.location.pathname;
      const commentId = url.substring(url.lastIndexOf('/') + 1);
    
      if (comment) {
        const response = await fetch(`/api/comments/${commentId}`, {
          method: 'PUT',
          body: JSON.stringify({ comment }),
          headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
          document.location.replace('/');
        } else {
          alert('Failed to edit post.');
        }
      }
}

const deleteCommentHandler = async (event) => {
    event.preventDefault();

    const comment = event.target;
  
    const commentId = JSON.parse(comment.getAttribute('data-id'));
  
    const response = await fetch(`/api/comments/${commentId}`, {
      method: 'DELETE'
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to delete comment.');
    }
}

document
  .querySelector('.new-comment-form')
  ?.addEventListener('submit', newCommentFormHandler);

document
  .querySelector('.edit-comment')
  ?.addEventListener('click', editCommentHandler);

document.querySelectorAll('.delete-comment')
  .forEach(button => button?.addEventListener('click', deleteCommentHandler))
  