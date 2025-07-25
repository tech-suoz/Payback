// Home Page 2 Plan

function toggleDropdown(toggle) {
    const menu = toggle.nextElementSibling;
    menu.classList.toggle('open');
}

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
    const dropdowns = document.querySelectorAll('.plandropdown-menu');
    dropdowns.forEach(dropdown => {
        if (!dropdown.contains(event.target) && !dropdown.previousElementSibling.contains(event.target)) {
            dropdown.classList.remove('open');
        }
    });
});