
import axios from 'axios';

export async function getData(id){
    try {
        const {data:user} = await axios("https://jsonplaceholder.typicode.com/users/" + id);
        const {data:posts} = await axios("https://jsonplaceholder.typicode.com/posts/" + id);
        console.log(user,posts);
    } catch (error) {
        console.log(error);
    }
        
    }

