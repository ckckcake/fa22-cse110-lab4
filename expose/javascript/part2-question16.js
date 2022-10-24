let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for (property in statistics) {
    if ((property == "redCars") || (property == "raceCars") || (property=="rareCars")) {
        console.log(`${property}: ${statistics[property]}`);
    }
    else if (statistics[property] % 2 == 1) {
        console.log(`${property}: ${statistics[property]}`);
    }
}