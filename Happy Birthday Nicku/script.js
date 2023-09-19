let button = document.querySelector(".button");

button.addEventListener("click", () => {
    let wish = document.querySelector('.bday');
    let messge = document.querySelector('.messge');
    let video = document.querySelector('.video');
    wish.style.display = "block";
    document.body.appendChild(wish);
    button.style.display = "none";
    let clickm = document.querySelector("i");
    clickm.addEventListener("click", () => {
        wish.style.display = "none";
        messge.style.display = "block";
        messge.addEventListener('click', () => {
            messge.style.display = "none";
            video.style.display = "block"
        })

    })
});