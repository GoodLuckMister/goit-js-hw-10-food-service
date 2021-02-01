const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const checkboxRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');
const themeRef = localStorage.getItem('theme');

checkTheme();

checkboxRef.addEventListener('change', changeTheme);

function changeTheme(event) {
       if (event.target.checked) {
           bodyRef.classList.add(Theme.DARK);
           bodyRef.classList.remove(Theme.LIGHT);
        localStorage.setItem('theme', Theme.DARK);
        
    } else {
           bodyRef.classList.add(Theme.LIGHT);
           bodyRef.classList.remove(Theme.DARK);
        localStorage.setItem('theme', Theme.LIGHT);
    }
};

function checkTheme() {
    if (themeRef === Theme.DARK) {
        bodyRef.classList.add(Theme.DARK);
        bodyRef.classList.remove(Theme.LIGHT);
        checkboxRef.checked = true;
    
} else if (themeRef === Theme.LIGHT) {
        bodyRef.classList.add(Theme.LIGHT);
        bodyRef.classList.remove(Theme.DARK);
    
}
};