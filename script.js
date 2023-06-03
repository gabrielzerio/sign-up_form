const btnTheme = document.querySelector(".btnTheme");
btnTheme.addEventListener("click", changeTheme);

function changeTheme(){
    const root = document.documentElement;
    const newTheme = root.className === 'dark'?'light':'dark';
    root.className = newTheme;
}
