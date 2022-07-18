let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@thenetninja.co.uk',
    location: 'Berlin',
    blogs: ['why mac & cheese rules', '10 things to make with marmite'],
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
            console.log(blog);
        });
    }
};

user.login();
user.logBlogs();