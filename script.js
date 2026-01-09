const menuToggler = document.querySelector('.menu-toggler');
const sideBar = document.querySelector('.side-bar');

const navItemLinks = document.querySelectorAll('.nav li a');
const pages = document.querySelectorAll('.page');

const filterBtn = document.querySelectorAll('.filter-item');
const itemCategory = document.querySelectorAll('.item-category');

/*Slidebar Toggle*/

menuToggler.addEventListener('click', function() {
    sideBar.classList.toggle('active');
})

/* Page Navigation Functionality */

for (let i = 0; i < navItemLinks.length; i++) {
    navItemLinks[i].addEventListener('click', function(e) {
        e.preventDefault();

        const pageName = this.dataset.page;

        navItemLinks.forEach(link => link.classList.remove('active'));
        pages.forEach(page => page.classList.remove('active'));

        this.classList.add('active');
        document.querySelector(`.${pageName}`).classList.add('active');
    });
}

/* Adding eventlistener in filter buttons */
for (let i = 0; i < filterBtn.length; i++) {
    filterBtn[i].addEventListener('click', function() {

        filterBtn.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');

        const filterValue = this.dataset.filter;

        itemCategory.forEach(category => {
            const parentItem = category.parentElement;

            if (filterValue === 'all' || parentItem.dataset.category === filterValue) {
                parentItem.classList.add('active');
            } else {
                parentItem.classList.remove('active');
            }
        });
    });
}