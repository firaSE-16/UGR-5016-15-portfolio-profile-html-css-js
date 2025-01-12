const hobbies = [
    { title: "Football", image: "./images/football.jpg" },
    { title: "Gym", image: "./images/gym.jpg" },
    { title: "Podcast", image: "./images/podcast.jpg" },
    { title: "Coding", image: "./images/coding.jpg" },
    { title: "Learning Business", image: "./images/business.jpg" },
    { title: "Church", image: "./images/church.jpg" },
  ];
  
  let currentIndex = 0;
  
  const hobbyContainer = document.querySelector(".hobby-container");
  const hobbyTitle = document.querySelector(".hobby-title");
  const hobbyImage = document.querySelector(".hobby-image");
  
  const updateHobby = () => {
    const hobby = hobbies[currentIndex];
    hobbyContainer.innerHTML = `
      <div class="hobby">
        <h3 class="hobby-title">${hobby.title}</h3>
        <img class="hobby-image" src="${hobby.image}" alt="${hobby.title}">
      </div>
    `;
  };
  
  const handleNext = () => {
    currentIndex = (currentIndex + 1) % hobbies.length;
    updateHobby();
  };
  
  const handlePrev = () => {
    currentIndex = (currentIndex - 1 + hobbies.length) % hobbies.length;
    updateHobby();
  };
  
  document.querySelector(".arrow-left").addEventListener("click", handlePrev);
  document.querySelector(".arrow-right").addEventListener("click", handleNext);
  
  
  updateHobby();
  
  function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}
