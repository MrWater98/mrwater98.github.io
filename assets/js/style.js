// Language toggle for bilingual homepage
(function() {
    function setLang(lang) {
        // Hide all lang containers
        document.querySelectorAll('[data-lang-container]').forEach(function(el) {
            el.classList.remove('active');
        });
        // Show the selected one
        var target = document.getElementById('lang-' + lang);
        if (target) target.classList.add('active');
        // Update active state in nav links
        document.querySelectorAll('.lang-nav a').forEach(function(el) {
            el.classList.remove('active-lang');
        });
        var activeLink = document.querySelector('.lang-nav .lang-' + lang);
        if (activeLink) activeLink.classList.add('active-lang');
        // Save preference
        try {
            localStorage.setItem('homepage_lang', lang);
        } catch(e) {}
    }

    window.setLang = setLang;

    // Restore preference on page load
    document.addEventListener('DOMContentLoaded', function() {
        var saved = 'zh';
        try {
            var stored = localStorage.getItem('homepage_lang');
            if (stored === 'en' || stored === 'zh') saved = stored;
        } catch(e) {}
        setLang(saved);
    });
})();
