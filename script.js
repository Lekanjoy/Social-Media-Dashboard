const toggleBtn = document.getElementById('check');
const container = document.getElementById("container");
let darkModeText = document.getElementById('dark');


toggleBtn.addEventListener('change', () => {
    container.classList.toggle("dark");

    if (container.classList.contains('dark')) {
        setTimeout(() =>{
        darkModeText.innerHTML = "Light Mode";  
        },500);
    } else {
        setTimeout(() => {
          darkModeText.innerHTML = "Dark Mode";
        }, 500);   
    }
});