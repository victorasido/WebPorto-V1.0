// toogle and responsice nav
const navSlide = () => {
    const burger = document.querySelector(".burger");
    const navLists  = document.querySelector("nav");

    burger.addEventListener("click", () => {
        navLists.classlist.toggle("nav-active");
        burger.classList.toggle("toggle-burger");
    });
}

navSlide();

// clear window

window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")) {
        form.reset();
    }
}