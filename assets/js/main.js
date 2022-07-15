if (localStorage.getItem("ld") == "dark") {
    document.body.classList.add("dark-mode");
}

window.onload = function() {
    let ldInput = document.getElementById('ld-input');

    // check if localStorage set for ld
    if (localStorage.getItem("ld") == "dark") {
        ldInput.checked = true;
        document.body.classList.add("dark-mode");
    }

    ldInput.addEventListener('change', function() {
        if (this.checked) {
            document.body.classList.add("dark-mode");
            localStorage.setItem("ld", "dark");
        } else {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("ld", "light");
        }
    });

    // header mobile nav
    let mobileNavBtn = document.querySelector(".header-mobile-nav-btn");
    let mobileNav = document.querySelector(".header-mobile-nav");
    let mobileNavState = false;

    mobileNavBtn.addEventListener('click', function() {
        if (!mobileNavState) {
            mobileNavState = true;
            mobileNavBtn.classList.add('active');
            mobileNav.classList.add('active');
        } else {
            mobileNavState = false;
            mobileNavBtn.classList.remove('active');
            mobileNav.classList.remove('active');
        }
    });
}
