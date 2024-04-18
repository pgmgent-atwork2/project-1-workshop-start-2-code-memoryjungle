(() => {
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
            animal_list.push(animal)
            animal_list.push(animal)
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
                return "Ape";
            case 2:
                return "Crocodile"; 
            case 3: 
                return "Frog";
            case 4:
                return "Gibbon";
            case 5:
                return "Girafe";
            case 6:
                return "Lion";
            case 7:
                return "Parrot";
            case 8:
                return "Snake";
            case 9:
                return "Tiger";

        }
    })


    function renderData(data) {
        const $container = document.getElementById("container");
        
        for (let i = 0; i < 12; i++) {
            const card_container = document.createElement("div");
            card_container.className = "card";
            $container.appendChild(card_container);

            const name = document.createElement("h3");
            name.textContent = data[i];

            card_container.appendChild(name);
        }
    }

    renderData(data);

    randomizeCards(animals);

})();