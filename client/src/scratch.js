async function handleDelete(id) {
    try {
      await fetch(`/blogs/${id}`, {
        method: 'DELETE'
      });
      setCurrentUser(prevUser => ({
        ...prevUser,
        blogs: prevUser.blogs.filter(blog => blog.id !== id)
      }))
    } catch (error) {
      // Handle error
    }
  }