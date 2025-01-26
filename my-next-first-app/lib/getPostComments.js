export default async function getPostComments(id){

    const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)

    if(!result.ok){
        throw new Error('single post not fetching error!')
    }
    
    return result.json();
    
}