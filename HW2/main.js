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
  
    posts.push(newPost);
  };

async function updatePosts() {
	
	await addPost({title: 'Entertainment', detail: 'Entertainment post'});
	listPosts();
}
updatePosts();