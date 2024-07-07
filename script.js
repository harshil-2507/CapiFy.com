document.addEventListener("DOMContentLoaded", function () {
    // Example data (static for demonstration)
    const blogs = [
        { title: "Introduction to Personal Finance", content: "Learn the basics of managing personal finances effectively." },
        { title: "Investing in Stocks: A Beginner's Guide", content: "Explore how to get started with stock market investments." },
        { title: "Saving Strategies for Retirement", content: "Tips and tricks to save effectively for your retirement years." },
        { title: "Understanding Credit Scores", content: "Learn how credit scores are calculated and their importance." }
    ];

    // Function to dynamically create blog elements
    function createBlogElements() {
        const blogContainer = document.getElementById('blogContainer');

        // Clear any existing content in blogContainer
        blogContainer.innerHTML = '';

        // Check if there are any blogs to display
        if (blogs.length === 0) {
            const errorMessage = document.createElement('p');
            errorMessage.textContent = 'No blogs found.';
            blogContainer.appendChild(errorMessage);
            return;
        }

        blogs.forEach(blog => {
            // Create elements for each blog entry
            const blogDiv = document.createElement('div');
            blogDiv.classList.add('blog-entry');

            const blogTitle = document.createElement('h2');
            blogTitle.textContent = blog.title;

            const blogContent = document.createElement('p');
            blogContent.textContent = blog.content;

            // Append elements to the container
            blogDiv.appendChild(blogTitle);
            blogDiv.appendChild(blogContent);
            blogContainer.appendChild(blogDiv);
        });
    }

    // Call the function to create blog elements on page load
    createBlogElements();

    // Add scroll functionality
    document.addEventListener("wheel", (event) => {
        if (event.deltaY > 0) {
            document.documentElement.scrollLeft += window.innerWidth;
        } else {
            document.documentElement.scrollLeft -= window.innerWidth;
        }
    });

    // Function to toggle between light and dark mode
    const themeSwitch = document.getElementById('themeSwitch');
    const body = document.body;

    // Check initial theme setting
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        themeSwitch.checked = true;
    }

    function toggleTheme() {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        } else {
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        }
    }

    // Event listener for theme switch
    themeSwitch.addEventListener('change', toggleTheme);

    // Initialize MouseFollower
    const cursor = new MouseFollower({
        container: document.body, // Ensure this is the correct container
        speed: 0.3
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // Create the custom cursor element
    const cursor = document.createElement('div');
    cursor.classList.add('cursor');
    document.body.appendChild(cursor);

    // Update cursor position on mouse move
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.pageX}px`;
        cursor.style.top = `${e.pageY}px`;
    });

    // Add hover effect for interactive elements
    document.querySelectorAll('a, button').forEach((element) => {
        element.addEventListener('mouseover', () => {
            cursor.classList.add('hover');
        });

        element.addEventListener('mouseout', () => {
            cursor.classList.remove('hover');
        });
    });
});
