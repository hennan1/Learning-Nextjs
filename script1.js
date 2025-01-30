function getRandomName() {
    const names = ["Alice", "Bob", "Charlie", "David", "Eve"];
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
}

console.log(getRandomName());
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomNumber(1, 100));