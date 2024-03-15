import axios from 'axios';
import { useEffect, useState } from 'react';
function Blog(containerId) {
    const [ blogs, setBlogs] = useState([]);
    const [ blogDetail, setBlogDetail ] = useState(null);


    useEffect(() => {
        return async function() {
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
            if(res.status === 200) {
                setBlogs(res.data);
            }
            const res2 = await axios.get(`https://jsonplaceholder.typicode.com/posts/${containerId.containerId}`);
            if(res2.status === 200) {
                setBlogDetail(res2.data);
                console.log(res2.data)
            }
        }
    }, []);

    return (
        <>
            <h2>Latest Blog Posts</h2>
            <ul>
                { blogs && blogs.map((it, index) => {
                    return <li key={index}> {it.title} </li>
                }) }
            </ul>
            <div>Container Id { containerId.containerId }</div>
            <div> { blogDetail && blogDetail.title } </div>
        </>
    );
}
export default Blog;