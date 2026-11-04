
const themeToggle = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("byisa-theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
}

function updateThemeIcon() {
    const isDark = document.body.classList.contains("dark");

    themeToggle.textContent = isDark ? "☀" : "☾";
    themeToggle.setAttribute(
        "aria-label",
        isDark ? "Ativar tema claro" : "Ativar tema escuro"
    );
}

updateThemeIcon();

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const theme = document.body.classList.contains("dark")
        ? "dark"
        : "light";

    localStorage.setItem("byisa-theme", theme);

    updateThemeIcon();
});
