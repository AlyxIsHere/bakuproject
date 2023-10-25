document.addEventListener("DOMContentLoaded", function () {
    const BakuganList = document.getElementById("Bakugan-list");
    const BakuganPopup = document.getElementById("Bakugan-popup");
    const popupImage = document.getElementById("popup-image");
    const popupText = document.getElementById("popup-text");
    const closePopup = document.getElementById("close-popup");
    const BakuganType = document.getElementById("Bakugan-type");

    const BakuganData = [
        {
            type: "Pyrus",
            image: "./images/Bakugan/PyrusHarpus.png",
            title: "Harpus",
            description: "Harpus may have super sharp claws, but her tongue is her best weapon. Harpus taunts, teases, and makes fun of opponent on the field. Her frustrated foe will lose focus in battle so that Harpus can make her move. Nobody can argue like Harpus!",
            power: "370 G",
            price: "6.000 HSP",
        },
        {
            type: "Pyrus",
            image: "./images/Bakugan/PyrusDualHydranoid.png",
            title: "Dual Hydranoid",
            description: "This Bakugan is extremely strong, and it steals energy from Bakugan sent to the Doom Dimension to become stronger. Only a cruel and heartless creature could do that! In battle, Hydranoid is hard to defeat, thanks to its tough outer skin and double heads. It lashes out at opponents with its long tail. Hydranoid may not be able to move fast, but it makes up for its lack of speed with the sheer force of its attacks.",
            power: "480 G",
            price: "12.500 HSP",
        },
        {
            type: "Darkus",
            image: "./images/Bakugan/DarkusSerpenoid.png",
            title: "Serpenoid",
            description: "The slow squeeze is Serpenoid's method of choice to subdue its enemies. The snakelike Bakugan wraps itself around a foe and slowly and painfully squeezes. Serpenoid will drain energy as it does this, making itself stronger while sucking all of its enemy's power. You'll often see Serpenoid slithering on the ground, but watch out. It can spring up and attack without a moment's notice.",
            power: "290 G",
            price: "2.250 HSP",
        },
        {
            type: "Pyrus",
            image: "./images/Bakugan/PyrusTentaclear.png",
            title: "Tentaclear",
            description: "This Bakugan has its eye on you! It's one giant eyeball with six tentacles around it. The eyeball can emit a shining beam of light to blind its enemy. And each of the tentacles can deliver a sharp sting.",
            power: "370 G",
            price: "6.500 HSP",
        },
        {
            type: "Pyrus",
            image: "./images/Bakugan/PyrusSirenoid.png",
            title: "Sirenoid",
            description: "You won't find this mermaid-like Bakugan in any fairy tale! It's true when Sirenoid plays her lyre it can calm the souls of everyone around. And she can use her long tail to swim gracefully through the water. But Sirenoid can also create a forceful wave that will boost her power-and to destroy her opponents.",
            power: "370 G",
            price: "7.500 HSP",
        },
        // Add more Bakugan data as needed
    ];

    // Function to create Bakugan elements
    function createBakugan(BakuganInfo) {
        const Bakugan = document.createElement("div");
        Bakugan.classList.add("Bakugan");
        Bakugan.setAttribute("data-type", BakuganInfo.type);

        const BakuganImage = document.createElement("img");
        BakuganImage.src = BakuganInfo.image;
        BakuganImage.alt = BakuganInfo.title;

        const BakuganTitle = document.createElement("h2");
        BakuganTitle.textContent = BakuganInfo.title;

        const BakuganDescription = document.createElement("p");
        BakuganDescription.textContent = BakuganInfo.description;

        const BakuganPower = document.createElement("p");
        BakuganPower.textContent = BakuganInfo.power;

        const BakuganPrice = document.createElement("p");
        BakuganPrice.textContent = BakuganInfo.price;

        Bakugan.appendChild(BakuganImage);
        Bakugan.appendChild(BakuganTitle);
        Bakugan.appendChild(BakuganDescription);
        Bakugan.appendChild(BakuganPower);
        Bakugan.appendChild(BakuganPrice);

        BakuganList.appendChild(Bakugan);
    }

    // Populate Bakugan list with data
    BakuganData.forEach(BakuganInfo => {
        createBakugan(BakuganInfo);
    });

    BakuganList.querySelectorAll(".Bakugan").forEach(Bakugan => {
        Bakugan.addEventListener("click", () => {
            const BakuganImage = Bakugan.querySelector("img");
            const BakuganTitle = Bakugan.querySelector("h2");
            const BakuganDescription = Bakugan.querySelector("p");
            const BakuganPrice = Bakugan.querySelector("p");
            const BakuganPower = Bakugan.querySelector("p");

            popupImage.src = BakuganImage.src;
            popupImage.alt = BakuganImage.alt;
            popupText.querySelector("h2").textContent = BakuganTitle.textContent;
            popupText.querySelector("p").textContent = BakuganDescription.textContent;
            popupText.querySelector("p").textContent = BakuganPower.textContent;
            popupText.querySelector("p").textContent = BakuganPrice.textContent;

            BakuganPopup.style.display = "flex";
        });
    });

    closePopup.addEventListener("click", () => {
        BakuganPopup.style.display = "none";
    });

    BakuganType.addEventListener("change", () => {
        const selectedType = BakuganType.value;
        BakuganList.querySelectorAll(".Bakugan").forEach(Bakugan => {
            const BakuganDataType = Bakugan.getAttribute("data-type");
            if (selectedType === "all" || selectedType === BakuganDataType) {
                Bakugan.style.display = "block";
            } else {
                Bakugan.style.display = "none";
            }
        });
    });
});
