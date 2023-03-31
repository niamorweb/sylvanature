const my_services = [
  {
    title: "Plantation ",
    description:
      "Services de plantation pour embellir votre jardin ou vos espaces verts. Avec des conseilles sur le choix des plantes, des arbustes ou des arbres qui conviennent le mieux à votre terrain et à votre environnement.",
    image: "./assets/images/hero.jpg",
  },
  {
    title: "Débroussaillage ",
    description:
      "Service de débroussaillage pour entretenir vos espaces verts.",
    image: "./assets/images/hero.jpg",
  },
  {
    title: "Elagage ",
    description:
      "Service d'élagage pour tailler et entretenir vos arbres. Cela permet de conserver la forme naturelle de vos arbres, tout en favorisant leur santé et leur croissance.",
    image: "./assets/images/hero.jpg",
  },

  {
    title: "Balivage ",
    description:
      "Services de balivage pour délimiter les espaces et les zones de sécurité.",
    image: "./assets/images/hero.jpg",
  },
  {
    title: "Dépressage ",
    description:
      "Service de dépressage pour abattre les arbres dangereux ou malades en toute sécurité.",
    image: "./assets/images/hero.jpg",
  },
];

const servicesContainer = document.getElementById("services__offers");

my_services.forEach((service, index) => {
  newIndex = index + 1;
  const serviceHtml = `
                <div class="services__item services__item-${newIndex}">
            <div class="services__item-text">
            <div class="services__item-text-header">
              <span class="services__item-text-number">0${newIndex}</span>
              <h2 class="services__item-text-title">${service.title}</h2>
            </div>
              <p class="services__item-text-description">
                ${service.description}
              </p>
            </div>
            <img
              src="${service.image}"
              alt=""
              class="services__item-img"
            />
          </div>
    `;
  servicesContainer.insertAdjacentHTML("beforeend", serviceHtml);
});
