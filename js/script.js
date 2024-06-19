const createVehicle = function (type, numWheels, color) {
    const vehicle = {
        type:type,
        numWheels:numWheels,
        color: color
    }
    return vehicle;
}

const car = createVehicle("car", 4, "blue");
const bike = createVehicle("bicycle", 2, "red");
const skateboard = createVehicle("skateboard", 4, "black with anime print");

const myVehicles = [car, bike, skateboard];

for (let vehicle of myVehicles){ //looping through an array
   // console.log(vehicle);
    for (let key in vehicle){ //looping through object
        console.log(key, vehicle[key])};
};