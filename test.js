const testArr1 = [
    {
        propertyLocation: "Kensington, London",
        priceGBP: 890000,
        roomsM2: [14, 18, 14, 10, 6],
        comment: "Highly desirable location in stunning scenery!",
        image: "cottage.jpg",
    },
];

const testArr2 = [
    {
        propertyLocation: "",
        priceGBP: '',
        roomsM2: '',
        comment: "",
        image: "",
    },
];


const { propertyLocation, priceGBP, roomsM2, comment, image } = arr => {
    if (Object.values(arr[0])) {
        return testArr2;
    } else {
        return testArr1;
    }
}

console.log(propertyLocation, priceGBP)