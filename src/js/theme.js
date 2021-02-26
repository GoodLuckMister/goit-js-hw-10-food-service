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
    addDark();
    localStorage.setItem('theme', Theme.DARK);
  } else {
    addLight();
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

function checkTheme() {
  if (themeRef === Theme.DARK) {
    addDark();
    checkboxRef.checked = true;
  } else if (themeRef === Theme.LIGHT) {
    addLight();
  }
}

function addDark() {
  bodyRef.classList.add(Theme.DARK);
  bodyRef.classList.remove(Theme.LIGHT);
}

function addLight() {
  bodyRef.classList.add(Theme.LIGHT);
  bodyRef.classList.remove(Theme.DARK);
}
