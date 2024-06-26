const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function () {
    if (darkToggle.checked) {
        html.classList.add('dark');
        localStorage.theme = "dark";
    }
    else {
        html.classList.remove('dark');
        localStorage.theme = "light";
    }
});

if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-schema: dark)").matches)
) {
    darkToggle.checked = true;
} else {
    darkToggle.checked = false;
}    