export default async function getPost(id){

    const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

    if(!result.ok){
        throw new Error('single post not fetching error!')
    }
    
    return result.json();
    
}