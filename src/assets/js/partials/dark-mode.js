class DarkMode {
    constructor() {
        this.toggleBtn = document.getElementById('btn-dark-mode');
        this.html = document.documentElement;
        this.icon = this.toggleBtn?.querySelector('i');

        if (this.toggleBtn) {
            this.init();
        }
    }

    init() {
        // Check saved preference or system preference
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            this.enableDark();
        } else {
            this.disableDark();
        }

        this.toggleBtn.addEventListener('click', () => {
            if (this.html.classList.contains('dark')) {
                this.disableDark();
            } else {
                this.enableDark();
            }
        });
    }

    enableDark() {
        this.html.classList.add('dark');
        localStorage.theme = 'dark';
        if (this.icon) {
            this.icon.classList.remove('sicon-moon');
            this.icon.classList.add('sicon-sun');
        }
    }

    disableDark() {
        this.html.classList.remove('dark');
        localStorage.theme = 'light';
        if (this.icon) {
            this.icon.classList.remove('sicon-sun');
            this.icon.classList.add('sicon-moon');
        }
    }
}

new DarkMode();
