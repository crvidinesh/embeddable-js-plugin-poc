// Define your form component
function renderForm(containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = `
        <form>
            <!-- Your form fields here -->
            <input type="text" name="name" placeholder="Name">
            <input type="email" name="email" placeholder="Email">
            <button type="submit">Submit</button>
        </form>
    `;
}

// Define your blog component
function renderBlog(containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = `
        <div>
            <h2>Latest Blog Posts</h2>
            <ul>
                <li>Post 1</li>
                <li>Post 2</li>
                <li>Post 3</li>
            </ul>
        </div>
    `;
}

// Expose a function to initialize the plugin
window.initPlugin = function(containerId, type) {
    if (type === 'form') {
        renderForm(containerId);
    } else if (type === 'blog') {
        renderBlog(containerId);
    } else {
        console.error('Invalid plugin type. Supported types: form, blog');
    }
};
