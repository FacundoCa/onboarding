const customers = [
    { name: "Leane Graham", age: 20, occupation: "Finance", end: 1999},
    { name: "Ervin Howell", age: 30, occupation: "Technology", end: 2000},
    { name: "Victor Plains", age: 17, occupation: "Sports", end: 2015},
    { name: "Clementine Bautch", age: 61, occupation: "Technology", end: 1987},
    { name: "Patricia Lebsack", age: 69, occupation: "Auto", end: 1999},
    { name: "Chelsey Dietrich", age: 21, occupation: "Retail", end: 2005},
    { name: "Mrs. Dennis Schulist", age: 31, occupation: "Retail", end: 2008},
    { name: "Kurtis Weissnat", age: 48, occupation: "Finance", end: 2006},
    { name: "Nicholas Runolfsdottir", age: 67, occupation: "Technology", end: 2019},
    { name: "Glenna Reichert", age: 29, occupation: "Sports", end: 2022},
];

let result = [];
for (let i = 0; i < customers.length; i++) {
    const customers = customers(i);
    if (customers.age > 30) {
        result.push(customers.name);
    }

};

console.log(result);



