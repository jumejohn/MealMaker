menu = {
    courses: {
        appetizers: [],
        mains: [],
        desserts: [],
    },
    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice
        };
        return this.courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
        const dishes = this.courses[courseName];
        let num = Math.floor(Math.random()*dishes.length);
        return dishes[num];
    },
    getRandomMeal()  {
        let appetizer = menu.getRandomDishFromCourse('appetizers');
        let main = menu.getRandomDishFromCourse('mains');
        let dessert = menu.getRandomDishFromCourse('desserts');
        let totalPrice = appetizer.price + main.price + dessert.price;
        return `Appetizer is ${appetizer['name']}, the main dish is ${main['name']}, and dessert is ${dessert['name']} all for a total of ${totalPrice} dollars.`
    }
}    

menu.addDishToCourse('appetizers', 'Buffalo Wings', 8);
menu.addDishToCourse('appetizers', 'House Chips and Dip', 7.50);
menu.addDishToCourse('appetizers', 'Pesto Potato Skins', 9);
menu.addDishToCourse('mains', 'Brisket Sandwich', 16);
menu.addDishToCourse('mains', 'Classic Cheesebuger', 15);
menu.addDishToCourse('mains', 'Bacon Cheddar Burger', 17);
menu.addDishToCourse('desserts', 'Ice Cream Bowl', 5);
menu.addDishToCourse('desserts', 'Cheesecake Slice', 7);
menu.addDishToCourse('desserts', 'Double Chocolate Brownie', 7);

let meal = menu.getRandomMeal()
console.log(meal);
