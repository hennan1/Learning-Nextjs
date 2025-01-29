function getRandomName() {
    const names = ["Alice", "Bob", "Charlie", "David", "Eve"];
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
}

console.log(getRandomName());