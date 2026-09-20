// Line Striping KC shared script: mobile menu + thank-you message after a form submit
(function () {
    var btn = document.getElementById('menuBtn');
    var menu = document.getElementById('mobileMenu');

    if (btn && menu) {
        var closeMenu = function () {
            menu.classList.remove('open');
            btn.setAttribute('aria-expanded', 'false');
            btn.textContent = '\u2630';
        };

        btn.addEventListener('click', function () {
            var open = menu.classList.toggle('open');
            btn.setAttribute('aria-expanded', open ? 'true' : 'false');
            btn.textContent = open ? '\u2715' : '\u2630';
        });

        menu.querySelectorAll('a').forEach(function (a) {
            a.addEventListener('click', closeMenu);
        });
    }

    var toast = document.getElementById('toast');
    if (toast && /[?&]sent=1/.test(window.location.search)) {
        toast.textContent = '\u2713 Thanks! We got your request and will reach out shortly.';
        toast.classList.add('show');
        if (window.history && history.replaceState) {
            history.replaceState(null, '', window.location.pathname + window.location.hash);
        }
        setTimeout(function () { toast.classList.remove('show'); }, 8000);
    }
})();
