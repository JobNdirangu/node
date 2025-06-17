const welcome = {
    sayHello() {
        console.log("Hello user");
    },
    currTime: new Date().toLocaleDateString(),
    companyName: "Modcom"
};

module.exports = welcome;
