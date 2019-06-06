const addressMaker = function (city, state) {

    let newAdress = { city, state };

    console.log(newAdress);

}

addressMaker("Rio de Janeiro", "Rio de Janeiro");


function challenge({ city, state }) {
    let address = {
        city,
        state,
        country: "Brasil"
    };

    console.log(address);

}

challenge({ city: "Belo Horizonte", state: "Minas Gerais" });