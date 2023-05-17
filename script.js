const playList = [
  {
    author: "LED ZEPPELIN",
    song: "STAIRWAY TO HEAVEN",
  },

  {
    author: "QUEEN",
    song: "BOHEMIAN RHAPSODY",
  },

  {
    author: "LYNYRD SKYNYRD",
    song: "FREE BIRD",
  },

  {
    author: "DEEP PURPLE",
    song: "SMOKE ON THE WATER",
  },

  {
    author: "JIMI HENDRIX",
    song: "ALL ALONG THE WATCHTOWER",
  },

  {
    author: "AC/DC",
    song: "BACK IN BLACK",
  },

  {
    author: "QUEEN",
    song: "WE WILL ROCK YOU",
  },

  {
    author: "METALLICA",
    song: "ENTER SANDMAN",
  },
];

const playlistElement = document.querySelector(".player__list");

playList.forEach(function (item) {
  const song = `Author: ${item.author}, Song: ${item.song}`;

  const listItem = document.createElement("li");
  listItem.className = "player__item";
  listItem.textContent = song;

  playlistElement.appendChild(listItem);

  listItem.addEventListener("click", () => {
    listItem.classList.toggle("black");
  });
});

// --------------------modal-window----------------------------------

const modalController = ({ modal, btnOpen, btnClose, time = 300 }) => {
  const buttonElems = document.querySelectorAll(btnOpen);
  const modalElem = document.querySelector(modal);

  modalElem.style.cssText = `
display: flex;
visibility: hidden;
opacity: 0;
transition: opacity ${time}ms ease-in-out;
`;

  const closeModal = (event) => {
    const target = event.target;

    if (
      target === modalElem ||
      (btnClose && target.closest(btnClose)) ||
      event.code === "Escape"
    ) {
      modalElem.style.opacity = 0;

      setTimeout(() => {
        modalElem.style.visibility = "hidden";
      }, time);

      window.removeEventListener("keydown", closeModal);
    }
  };

  const openModal = () => {
    modalElem.style.visibility = "visible";
    modalElem.style.opacity = 1;
    window.addEventListener("keydown", closeModal);
  };

  buttonElems.forEach((btn) => {
    btn.addEventListener("click", openModal);
  });

  modalElem.addEventListener("click", closeModal);
};

modalController({
  modal: ".modal",
  btnOpen: ".button__open",
  btnClose: ".modal__close",
  time: 500,
});

// дана ф-я створена для кількох модальних вікон

// -------------------------traffic-light--------------------------------

const lights = document.querySelectorAll(".traffic-light__light");
const button = document.querySelector(".change-light");
let currentLight = 0;

function changeLight() {
  lights[currentLight].style.backgroundColor = "#002329";

  currentLight = (currentLight + 1) % lights.length;

  lights[currentLight].style.backgroundColor = lightColors[currentLight];
}

button.addEventListener("click", changeLight);

const lightColors = ["#f5222d", "#faad14", "#389e0d"];

lights[0].style.backgroundColor = lightColors[0];
