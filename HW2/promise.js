const posts=[
	
	{title: 'Technology', detail: 'Technology post'},
	{title: 'Book', detail: 'Book post'},
	{title: 'Movie', detail: 'Movie post'},
	{title: 'Software', detail: 'Software post'}
];

const listPosts = () => {
  posts.map((post) => {
    console.log(post.title+" "+post.detail);
  });
};

const addPost = (newPost) => {
  const promise1 = new Promise((resolve, reject) => {
    
    posts.push(newPost);
    resolve();

  });

  return promise1;
};


addPost({title: 'Environment', detail: 'Environment post'})
  .then(() => {
    console.log("New posts");
    listPosts();
  })
  .catch((error) => {
    console.log(error);
  });

