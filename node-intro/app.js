import { getUser, getPosts } from './dataParser.js';

const myFunc = async (id) => {
    var user = await getUser(id);
    user.posts = await getPosts(id);

    console.log(user);
}

try{
    await myFunc(1);
}catch(e){
    console.log(e);
}