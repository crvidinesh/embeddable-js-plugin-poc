import { createRoot } from 'react-dom/client';
import Blog from './Blog';
// Define the Form component
const Form = () => {
    return (
        <form>
            {/* Your form fields here */}
            <input type="text" name="name" placeholder="Name" />
            <input type="email" name="email" placeholder="Email" />
            <button type="submit">Submit</button>
        </form>
    );
};

// Define the Blog component


// async function fetchBlogData(bloId) {
//     let endpoint = bloId ? `https://jsonplaceholder.typicode.com/posts/${bloId}` : 'https://jsonplaceholder.typicode.com/posts'
//     const response = await fetch(endpoint);
//     const blog = await response.json();
//     return blog;
// }


// Expose a function to initialize the plugin
export const initPlugin = function(containerId, type) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Container with ID "${containerId}" not found.`);
        return;
    }

    // Check if a root has already been created for this container
    let root = createRoot(container._reactRootContainer ? null : container);

    // If a root already exists, just render on it
    if (container._reactRootContainer) {
        root = container._reactRootContainer._internalRoot;
    }

    root.render(
        type === 'form' ? <Form /> : type === 'blog' ? <Blog containerId={containerId}/> : null
    );
};