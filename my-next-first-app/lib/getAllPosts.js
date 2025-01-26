export default async function getAllPosts(){

    const result = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')

    if(!result.ok){
        throw new Error('Posts not fatching error!')
    }
    
    return result.json();
    
}