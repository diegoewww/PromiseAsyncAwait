function delay(ms) {
    promesa = new Promise(resolve => setTimeout(resolve, ms));
    return promesa
}

delay(3000).then(() => alert('runs after 3 seconds'));