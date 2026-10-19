const persons = [
    {
        name: "Mauricio Costa",
        age: 20,
        height: 1.76
    },
    {
        name: "Mateus Afonso",
        age: 22,
        height: 1.72
    },
    {
        name: "Assis Pedro",
        age: 31,
        height: 0.50
    },
]

const minHeight = persons.find(({height}) => height<=0.50);

console.log(minHeight)