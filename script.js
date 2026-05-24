function hamburg() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(0)";
}

function cancel() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(-500px)";
}

const popupContent = {
    home: {
        title: "Home",
        text: "Welcome to my portfolio. This is where I show my work, my skills, and the creative projects I enjoy building."
    },
    skills: {
        title: "Skills",
        text: "I work with HTML, CSS, JavaScript, responsive design, graphic design tools, and also knowledge of Java, Spring Boot, and MySQL."
    },
    introduction: {
        title: "Introduction",
        text: "Hi, I am Saurabh Bhaskar. I am interested in web development, design, and creating digital experiences that look clean and feel easy to use."
    },
    services: {
        title: "Services",
        text: "I can help with portfolio websites, landing pages, basic frontend projects, graphic design work with great backend development."
    },
    contact: {
        title: "Contact",
        text: "Mail me at iamsaurabhbhaskr@gmail.com or connect with me on LinkedIn at linkedin.com/in/saurabh-bhaskr or call on: 9234530225."
    }
};

const popupOverlay = document.querySelector("#popupOverlay");
const popupTitle = document.querySelector("#popupTitle");
const popupText = document.querySelector("#popupText");
const popupClose = document.querySelector(".popup-close");

function openPopup(sectionName) {
    const content = popupContent[sectionName];

    if (!content || !popupOverlay || !popupTitle || !popupText) {
        return;
    }

    popupTitle.textContent = content.title;
    popupText.textContent = content.text;
    popupOverlay.classList.add("active");
    popupOverlay.setAttribute("aria-hidden", "false");
    cancel();
}

function closePopup() {
    if (!popupOverlay) {
        return;
    }

    popupOverlay.classList.remove("active");
    popupOverlay.setAttribute("aria-hidden", "true");
}

document.querySelectorAll("[data-popup]").forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        openPopup(link.dataset.popup);
    });
});

if (popupClose) {
    popupClose.addEventListener("click", closePopup);
}

if (popupOverlay) {
    popupOverlay.addEventListener("click", (event) => {
        if (event.target === popupOverlay) {
            closePopup();
        }
    });
}

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closePopup();
    }
});

const texts = ["Web Developer", "Graphic Designer", "Software Developer"];

const speed = 100;
const textElement = document.querySelector(".typewriter-text");
let textIndex = 0;
let characterIndex = 0;

function typeWriter() {
    if (!textElement) {
        return;
    }

    if (characterIndex < texts[textIndex].length) {
        textElement.textContent += texts[textIndex].charAt(characterIndex);
        characterIndex++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(eraseText, speed + 1000);
    }
}

function eraseText() {
    if (textElement.textContent.length > 0) {
        textElement.textContent = textElement.textContent.slice(0, -1);
        setTimeout(eraseText, 50);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        characterIndex = 0;
        setTimeout(typeWriter, 500);
    }
}

window.onload = typeWriter;
