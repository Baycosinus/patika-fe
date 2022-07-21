import axios from "axios";

const url = "http://jsonplaceholder.typicode.com";

const getUser = async (userId) => {
    let {data: user} = await axios(`${url}/users/${userId}`);
    return user;
}

const getPosts = async (userId) => {
    let {data: posts} = await axios(`${url}/posts?userId=${userId}`);

    return posts
}

export { getUser, getPosts}