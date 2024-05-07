const newPostFormHandler = async (event) => {
  event.preventDefault();
  
  const title = document.querySelector('#title').value.trim();
  const content = document.querySelector('#content').value.trim();
  
  if (title && content) {
    const response = await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to post.');
    }
  }
};

const editPostHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#title').value.trim();
  const content = document.querySelector('#content').value.trim();
  const url = window.location.pathname;
  const postId = url.substring(url.lastIndexOf('/') + 1);
  
  if (title && content) {
    const response = await fetch(`/api/posts/${postId}`, {
      method: 'PUT',
      body: JSON.stringify({ title, content }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to edit post.');
    }
  }
}

const deletePostHandler = async (event) => {
  event.preventDefault();

  const post = event.target;

  const postId = JSON.parse(post.getAttribute('data-id'));

  const response = await fetch(`/api/posts/${postId}`, {
    method: 'DELETE'
  });

  if (response.ok) {
    document.location.reload();
  } else {
    alert('Failed to delete post.');
  }
}

document
  .querySelector('.new-post-form')
  ?.addEventListener('submit', newPostFormHandler);

document
  .querySelector('.edit-post')
  ?.addEventListener('click', editPostHandler);

document.querySelectorAll('.delete-post')
  .forEach(button => button?.addEventListener('click', deletePostHandler))
  