let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@thenetninja.co.uk',
    location: 'Berlin',
    blogs: [
        {   title: 'why mac & cheese rules', likes: 30  },
        {   title: '10 things to make with marmite', likes: 40  }
    ],
    login() {
        console.log(`the user ${this.name} logged in`);
    },
    logout() {
        console.log(`the user ${this.name} logged out`)
    },
    logBlogs() {
        // console.log(this.blogs);
        console.log('this user has written the following blogs:');
        this.blogs.forEach(blog => {
            console.log(blog.title, `with ${blog.likes} likes`);
        });
    }
};

user.logBlogs();