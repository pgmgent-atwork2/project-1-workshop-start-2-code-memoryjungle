(() => {
    let elementsSelected = 0;
    let firstCardSelected = null;
    let firstCardName = null;
    let mathingPairs = 0;
    
    function chooseAnimals() {
        let animals = new Set();

        while (animals.size < 6) { 
            animals.add(Math.floor(Math.random() * 6) + 1);
        }
        return Array.from(animals);
    }

    let animals = chooseAnimals();

    function randomizeCards(animals) {
        let animal_list = []; 

        animals.forEach(animal => {
            animal_list.push(animal);
            animal_list.push(animal);
        });

        for (let i = animal_list.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [animal_list[i], animal_list[j]] = [animal_list[j], animal_list[i]];
        }
        return animal_list;
    }
    
    let data = randomizeCards(animals);


    data = data.map(animal => {
        switch(animal) {
            case 1:
                return "ape";
            case 2:
                return "crocodile"; 
            case 3: 
                return "frog";
            case 4:
                return "gibbon";
            case 5:
                return "giraffe";
            case 6:
                return "lion";
            case 7:
                return "parrot";
            case 8:
                return "snake";
            case 9:
                return "tiger";
        }
    })

    function checkForWin() {
        if (mathingPairs === 6) {
            const $container = document.getElementById("container");
            $container.innerHTML = "";

            const message_container = document.createElement("div");
            message_container.className = "message_container";

            $container.appendChild(message_container);
            
            const message = document.createElement("h3");
            message.textContent = "Goed gespeeld!";

            message_container.appendChild(message);

            const refreshButton = document.createElement("button");
            refreshButton.textContent = "Speel opnieuw";
            refreshButton.onclick = function() {
                location.reload();
            }

            message_container.appendChild(refreshButton);

            const tekst = document.createElement("p");
            tekst.textContent = "Wil je zien hoe je dit kunt maken? kijk dan naar ons"

            message_container.appendChild(tekst);

            const link = document.createElement("a");
            link.href = "stappenplan.html";
            link.textContent = "stappenplan";

            message_container.appendChild(link);

            const sound = new Audio("sounds/ta-da.mp3");
            sound.play();


        }
    }

    function renderData(data) {
        const $container = document.getElementById("container");
        
        for (let i = 0; i < 12; i++) {
            const card_container = document.createElement("div");
            card_container.className = "card";
            card_container.onclick = function() {
                
                if (!card_container.classList.contains("flipped") && elementsSelected < 2) {
                    card_container.classList.add("flipped");

                    elementsSelected++;

                    if (elementsSelected === 1) {
                        firstCardSelected = card_container;
                        firstCardName = data[i];
                    } else if (elementsSelected === 2) {
                        if (data[i] !== firstCardName) {
                            setTimeout(function () {
                                firstCardSelected.classList.add("shake"); 
                                card_container.classList.add("shake"); 

                                setTimeout(function () {
                                    firstCardSelected.classList.remove("shake");
                                    card_container.classList.remove("shake");
                                }, 400);

                                setTimeout(function () {
                                    firstCardSelected.classList.remove("flipped");
                                    card_container.classList.remove("flipped");
                                    elementsSelected = 0;
                                    firstCardSelected = null;
                                }, 1000);
                            }, 200);
                        } else {
                            mathingPairs++;
                            elementsSelected = 0;
                            firstCardSelected = null;
                            firstCardName = null;
                            checkForWin();
                        }
                    }
                }

            } 

            $container.appendChild(card_container);

            const image = document.createElement("img");
            const imageSource = "./img/" + data[i] + ".jpg"; 
            image.src = imageSource; 

            card_container.appendChild(image);

            const name = document.createElement("h3");
            name.textContent = data[i];

            card_container.appendChild(name);
        }
    }
    
    renderData(data);

    randomizeCards(animals);

})();