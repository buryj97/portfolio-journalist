// Conditional visibility
const showOnPx = 100;
const backToTopButton = document.querySelector(".back-to-top");

const scrollContainer = () => {
  return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden");
  } else {
    backToTopButton.classList.add("hidden");
  }
});

// Scroll to top
const goToTop = () => {
  document.body.scrollIntoView({
    behavior: "smooth",
  });
};

backToTopButton.addEventListener("click", goToTop);

const jsonData = {
  /* your JSON data here */
};

const slider = document.querySelector(".slider");

jsonData.previousWork.forEach((work, index) => {
  const slide = document.createElement("div");
  slide.classList.add("slide");
  slide.setAttribute("data-sb-object-id", `slide${index + 1}`);

  slide.innerHTML = `
    <div class="textBox">
      <h3 class="projectTitle" data-sb-field="slide${index + 1}Title">${work.title}</h3>
      <h4 class="role" data-sb-field="slide${index + 1}Role">${work.role}</h4>
      <br>
      <h5 data-sb-field="slide${index + 1}Company">${work.company}</h5>
      <br>
      <p class="desc" data-sb-field="slide${index + 1}Description">${work.description}</p>
      <button class="button" role="button" onclick="window.open('${work.url}', '_blank');">
        <span class="text">Read more</span>
        <span>${work.category}</span>
      </button>
    </div>
  `;

  slider.appendChild(slide);
});

// Assuming you have fetched the JSON and stored it in a variable called 'data'
const project1DescriptionHtml = data.projects.project1.description;
document.getElementById("project1Container").innerHTML =
  project1DescriptionHtml;
