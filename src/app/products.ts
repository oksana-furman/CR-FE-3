export var products = [{
    name: "Margherita",
    type: "pizza",
    availability: false,
    ingridients: "Tomato sause, mozzarella, basil",
    vegetarianStatus: true,
    veganStatus: false,
    spicyStatus: false,
    price: 9.90,
    photo: "../../assets/img/food/pizza-parmigiana.jpeg",
    qtty: 1
    }, {
        name: "Prosciutto",
        type: "pizza",
        availability: true,
        ingridients: "ham, cheese",
        vegetarianStatus: false,
        veganStatus: false,
        spicyStatus: false,
        price: 12.30,
        photo: "../../assets/img/food/pizza-prosciuto.jpg",
        qtty: 1
        }, {
            name: "Salami",
            type: "pizza",
            availability: true,
            ingridients: "Salami, cheese",
            vegetarianStatus: false,
            veganStatus: false,
            spicyStatus: false,
            price: 12.60,
            photo: "../../assets/img/food/pizza-salami.jpg",
            qtty: 1
    
            }, {
                name: "Funghi Freschi",
                type: "pizza",
                availability: true,
                ingridients: "Fresh mushrooms, cheese",
                vegetarianStatus: true,
                veganStatus: false,
                spicyStatus: false,
                price: 12.60,
                photo: "../../assets/img/food/pizza-funghi.jpg",
                qtty: 1
        
            }, {
                name: "Hawaii",
                type: "pizza",
                availability: true,
                ingridients: "ham, pineapple, cheese",
                vegetarianStatus: false,
                veganStatus: false,
                spicyStatus: false,
                price: 13.40,
                photo: "../../assets/img/food/pizza-hawaii.jpg",
                qtty: 1
        
            }, {
                name: "Parmigiana",
                type: "pizza",
                availability: false,
                ingridients: "mozzarella, aubergine, grana padano POD,oregano",
                vegetarianStatus: true,
                veganStatus: false,
                spicyStatus: false,
                price: 13.20,
                photo: "../../assets/img/food/pizza-parmigiana.jpeg",
                qtty: 1
        
            }, {
                name: "Spaghetti Pomodoro e Basilico",
                type: "pasta",
                availability: true,
                ingridients: "Tomato sugo, basil, onions, garlic",   
                vegetarianStatus: false,             
                veganStatus: true,
                spicyStatus: false,
                price: 9.80,
                photo: "../../assets/img/food/spaghetti-pomodoro.jpg",
                qtty: 1
        
            }, {
                name: "Tortelloni Prosciutto e Panna",
                type: "pasta",
                availability: true,
                ingridients: "Ham, cream sause, onions, grana padano POD",
                vegetarianStatus: false,
                veganStatus: false,
                spicyStatus: false,
                price: 12.50,
                photo: "../../assets/img/food/tortellini-prosciutto.jpg",
                qtty: 1
        
            }, {
                name: "Spaghetti Rucola Pomodorini",
                type: "pasta",
                availability: true,
                ingridients: "Rucola, cherry tomatos, garlic",  
                vegetarianStatus: false,              
                veganStatus: true,
                spicyStatus: true,
                price: 11.90,
                photo: "../../assets/img/food/spaghetti-rucola.jpg",
                qtty: 1
        
            }, {
             name: "Orecchiette di Manzo al Limone",
             type: "pasta",
             availability: false,
                ingridients: "Beef filet strips, paprika, rucola, onions, garlic, mascarpone-lemon sause",
                vegetarianStatus: false,
                veganStatus: false,
                spicyStatus: false,
                price: 14.60,
                photo: "../../assets/img/food/orecchiette.jpg",
                qtty: 1,
        
            }, {
                name: "Maccheroncini Pesto Genovese",
                type: "pasta",
                availability: true,
                ingridients: "Basil pesto, pine nuts, grana padano POD",
                vegetarianStatus: true,                
                veganStatus: false,
                spicyStatus: true,
                price: 11.80,
                photo: "../../assets/img/food/maccheroncini.jpg",
                qtty: 1
            }]

            export interface Product {
                name: string,
                type: string,
                availability: boolean,
                ingridients: string,
                veganStatus: boolean,
                vegetarianStatus: boolean,
                spicyStatus: boolean,
                price: number,
                photo: string,
                qtty: number
            }