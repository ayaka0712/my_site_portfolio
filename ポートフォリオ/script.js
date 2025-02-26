document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const nav = document.querySelector(".nav");

    hamburger.addEventListener("click", function () {
        nav.classList.toggle("active");
        hamburger.classList.toggle("active");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const workMain = document.querySelector(".work_main");

    let isDown = false;
    let startX;
    let scrollLeft;

    workMain.addEventListener("mousedown", (e) => {
        isDown = true;
        workMain.classList.add("active");
        startX = e.pageX - workMain.offsetLeft;
        scrollLeft = workMain.scrollLeft;
    });

    workMain.addEventListener("mouseleave", () => {
        isDown = false;
        workMain.classList.remove("active");
    });

    workMain.addEventListener("mouseup", () => {
        isDown = false;
        workMain.classList.remove("active");
    });

    workMain.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - workMain.offsetLeft;
        const walk = (x - startX) * 2; // スクロール速度調整
        workMain.scrollLeft = scrollLeft - walk;
    });

    // スマホでのスワイプ対応
    workMain.addEventListener("touchstart", (e) => {
        startX = e.touches[0].pageX - workMain.offsetLeft;
        scrollLeft = workMain.scrollLeft;
    });

    workMain.addEventListener("touchmove", (e) => {
        e.preventDefault();
        const x = e.touches[0].pageX - workMain.offsetLeft;
        const walk = (x - startX) * 2;
        workMain.scrollLeft = scrollLeft - walk;
    });
});

