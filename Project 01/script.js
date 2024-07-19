const btn = document.querySelector(".btn");
const menu = document.querySelector(".menu");
const closeBtn = document.querySelector(".close-btn");

btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    btn.classList.toggle('hidden');
    menu.classList.remove("hemant")

});

closeBtn.addEventListener('click', () => {  
    menu.classList.add("hemant")
    setTimeout(() => {
        menu.classList.add('hidden');
        btn.classList.toggle('hidden');
    }, 2000);
});
