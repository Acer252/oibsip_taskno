const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header_container p", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header_container h1", {
  ...scrollRevealOption,
  delay: 500,
});

// about container
ScrollReveal().reveal(".about_image img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".about_content .section_subheader", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about_content .section_header", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about_content .section_description", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".about_btn", {
  ...scrollRevealOption,
  delay: 2000,
});

// car container
ScrollReveal().reveal(".section_container .section_subheader", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".section_container .section_header", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".service_content", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".car_card", {
  ...scrollRevealOption,
  interval: 500,
});

// service container
ScrollReveal().reveal(".services_list li", {
  ...scrollRevealOption,
  delay: 1500,
  interval: 500,
  origin: "right",
});

ScrollReveal().reveal(".banner_card", {
  ...scrollRevealOption,
  delay: 1000,
  interval: 500,
  origin: "bottom",
});

const startCounters = () => {
  const myNum = document.querySelectorAll('.count');
  let speed = 200;

  myNum.forEach((myCount) => {
      let target_count = +myCount.dataset.count;
      let init_count = +myCount.innerText;
      let new_increment_num = Math.floor(target_count / speed);

      const updateNumber = () => {
          init_count += new_increment_num;
          myCount.innerText = init_count;

          if (init_count < target_count) {
              setTimeout(updateNumber, 5);
          }
      };

      updateNumber();
  });
};

ScrollReveal().reveal(".banner_card", {
  ...scrollRevealOption,
  afterReveal: startCounters
});

ScrollReveal().reveal(".section_subheader", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".section_header", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".explore_content", {
  ...scrollRevealOption,
  origin: "left",
});