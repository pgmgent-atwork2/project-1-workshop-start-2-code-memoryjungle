(() => {
    function createData() {
        function chooseAnimals() {
            let animals = new Set();

            while (animals.size < 6) { 
                animals.add(Math.floor(Math.random() * 6) + 1);
            }
            
            return Array.from(animals);
        }

        animals = chooseAnimals();

        function makeBoard(animals) {
            let animal_list = []; 

            animals.forEach(animal => {
                animal_list.push(animal)
                animal_list.push(animal)
            });

            for (let i = animal_list.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [animal_list[i], animal_list[j]] = [animal_list[j], animal_list[i]];
            }

            data = animal_list;

            function renderData(data) {
                const $container = document.getElementById("container");
                
                for (let i = 0; i < 12; i++) {
                    const card_container = document.createElement("div");
                    card_container.className = "card";
                    $container.appendChild(card_container);
                }
            }

            renderData(data);

        }

        makeBoard(animals);
    }

    createData();

})();