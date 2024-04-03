(() => {
  const preloader = () => {
    let imagesList, images, i;

    imagesList = [
      "./img/wind-mill.jpg",
      "./img/hydro-dam.jpg",
      "./img/solar-panel.jpg",
      "./img/wind-energy.svg",
      "./img/hydro-energy.svg",
      "./img/solar-energy.svg",
    ];

    images = [];

    for (i = 0; i < imagesList.length; i += 1) {
      images[i] = new Image();
      images[i].src = imagesList[i];
    }

    // images ready to be used:
    console.log(
      `Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}\n\t${images[3].src}\n\t${images[4].src}\n\t${images[5].src}`
    );
  };

  window.addEventListener("load", preloader);

  // declare variables
  let btns, contents, container, i;

  // resources
  btns = document.querySelectorAll(".buttons .energy-logo");
  container = document.querySelector(".content");
  contents = {
    wind: {
      headingContent: "Wind Energy",
      textContent:
        "Wind energy is a sustainable and cost-effective solution for individuals looking to reduce their carbon footprint without breaking the bank. Unlike traditional fossil fuels, which are subject to price fluctuations, wind energy offers a stable and predictable source of power. Additionally, the installation and maintenance costs of wind turbines have decreased significantly in recent years, making it more accessible to individuals with an average budget. With government incentives and tax credits available for renewable energy projects, investing in wind energy can be a financially sound decision for those looking to save money in the long run.Wind energy is not only environmentally friendly but also economically viable for those with average budgets. The initial setup cost for a residential wind turbine can range from $10,000 to $70,000, depending on the size and capacity of the turbine. However, this investment can pay off in the long run through reduced electricity bills and potential income from selling excess energy back to the grid. With an average wind turbine lifespan of 20 years or more, the return on investment can be substantial. Additionally, government incentives, such as tax credits and rebates, can further reduce the upfront cost of installing a wind turbine, making it a financially attractive option for many homeowners.",
      imgUrl: "./img/wind-mill.jpg",
      imgAlt: "wind-energy-icon",
    },
    hydro: {
      headingContent: "Hydro Energy",
      textContent:
        "Hydroelectric power is one of the most affordable sources of renewable energy, particularly for individuals with average budgets. The initial setup costs for hydroelectric systems can be higher than other renewable options, but the long-term savings and benefits outweigh these costs. Once installed, hydroelectric systems require minimal maintenance and can generate electricity for many years, making them a cost-effective choice in the long run. Additionally, many governments offer incentives and rebates for installing hydroelectric systems, further reducing the financial burden on individuals. Hydroelectric power is another affordable green energy option for those with average budgets. While the initial cost of installing a small-scale hydroelectric system can range from $5,000 to $50,000, depending on the location and size of the system, the long-term savings can be significant. Hydroelectric systems have a lifespan of 50 years or more and require minimal maintenance, making them a cost-effective energy solution. Furthermore, government incentives and grants are often available to help offset the initial installation cost, making hydroelectric power accessible to a wider range of homeowners.",
      imgUrl: "./img/hydro-dam.jpg",
      imgAlt: "hydro-energy-icon",
    },
    solar: {
      headingContent: "Solar Energy",
      textContent:
        "Solar energy is becoming increasingly affordable for individuals with average budgets, thanks to advancements in technology and government incentives. The cost of solar panels has decreased significantly in recent years, making them more accessible to homeowners and businesses alike. Additionally, solar panels have a long lifespan and require minimal maintenance, reducing long-term costs. With net metering programs and tax credits available in many areas, investing in solar energy can lead to significant savings on energy bills over time. Solar energy is perhaps the most well-known and accessible form of green energy for individuals with average budgets. The cost of solar panels has decreased by more than 70% in the last decade, making them a much more affordable option for homeowners. The average cost of installing a residential solar panel system ranges from $15,000 to $25,000, but this cost can be significantly offset by government incentives, such as tax credits and rebates. With an average lifespan of 25 years or more, solar panels can provide substantial long-term savings on electricity bills. Additionally, net metering programs allow homeowners to sell excess energy back to the grid, further reducing their energy costs.",
      imgUrl: "./img/solar-panel.jpg",
      imgAlt: "solar-energy-icon",
    },
  };

  const unfade = (el1, el2) => {
    let opac = 0.1; // initial opacity

    let timer = window.setInterval(() => {
      if (opac >= 1) {
        window.clearInterval(timer);
      }

      el1.style.opacity = opac;
      el2.style.opacity = opac;

      opac += opac * 0.1;
    }, 10);
  };

  // handle button-click
  const handleSelection = (e) => {
    let wrap, heading, pg, image, selectedContent, i;

    wrap = document.querySelector(".dynamic-content");

    // remove current content
    while (wrap.firstChild) {
      wrap.removeChild(wrap.firstChild);
    }

    for (i = 0; i < btns.length; i++) {
      if (btns[i].hasAttribute("id")) {
        btns[i].removeAttribute("id");
      }
    }

    e.target.setAttribute("id", "active-btn");

    heading = document.createElement("h2");
    pg = document.createElement("p");
    image = document.createElement("img");
    selectedContent = e.target.getAttribute("data-content");

    heading.innerHTML = contents[selectedContent].headingContent;
    pg.innerHTML = contents[selectedContent].textContent;
    image.src = contents[selectedContent].imgUrl;
    image.alt = contents[selectedContent].imgAlt;

    // Add class to the dynamically created image
    image.classList.add("energy-image");

    wrap.appendChild(heading);
    wrap.appendChild(image);
    wrap.appendChild(pg);

    container.appendChild(wrap);

    image.style.opacity = 0;
    pg.style.opacity = 0;
    unfade(image, pg);

    // Change background color based on button clicked
    switch (selectedContent) {
      case "solar":
        container.style.backgroundColor = "#8B0000";
        break;
      case "hydro":
        container.style.backgroundColor = "#001f3f";
        break;
      case "wind":
        container.style.backgroundColor = "rgb(7, 101, 0)";
        break;
      default:
        container.style.backgroundColor = "transparent";
        break;
    }
  };

  // register buttons to click events and make handleSelection listening for event
  for (i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", handleSelection);
  }
})();
