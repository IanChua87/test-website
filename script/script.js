document.getElementById('hamburger-icon').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    var hamburgerIcon = document.getElementById('hamburger-icon');

    sidebar.classList.toggle('active');

    if (sidebar.classList.contains('active')) {
        hamburgerIcon.classList.remove('fa-bars');
        hamburgerIcon.classList.add('fa-times');

    } else {
        hamburgerIcon.classList.remove('fa-times');
        hamburgerIcon.classList.add('fa-bars');
    }
});

document.getElementById('close-icon').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    var hamburgerIcon = document.getElementById('hamburger-icon');

    sidebar.classList.remove('active');
    hamburgerIcon.classList.remove('fa-times');
    hamburgerIcon.classList.add('fa-bars');
});