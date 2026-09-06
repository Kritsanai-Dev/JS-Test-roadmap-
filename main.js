function getGreeting(time) {
    switch (time) {
        case time ==="morning":
            return "Good morning";
        case time ==="afternoon":
            return "Good afternoon";
        default:
            return "Good evening";
    }
}


const formatName =(firstName, lastName) => {
    return `${firstName} `+""+ `${lastName}`;
}
function createGreeting(firstName, lastName ,time) {
    const name = formatName(firstName, lastName);
    const greeting = getGreeting(time);
    return `${greeting}, ${name}!`;
}

console.log(createGreeting('Ava', 'Stone', 'morning'));
console.log(createGreeting('Noah', 'Kim', 'evening'));
console.log(createGreeting('Mina', 'Patel', 'afternoon'));
