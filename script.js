let currentPage = 0;
const pages = document.querySelectorAll('.page');

function showPage(index) {
    pages.forEach((page, i) => {
        page.style.transform = `translateX(${(i - index) * 100}%)`;
    });
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        currentPage = (currentPage + 1) % pages.length;
        showPage(currentPage);
    } else if (event.key === 'ArrowLeft') {
        currentPage = (currentPage - 1 + pages.length) % pages.length;
        showPage(currentPage);
    }
});

// Initialize the flipbook
showPage(currentPage);
