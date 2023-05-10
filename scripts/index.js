var personen = []

const setup = () => {
	// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    vulMetDemoData()
    toonAllePersonen(personen)
    let buttonPress = document.querySelector("#btnBewaar")
    buttonPress.addEventListener("click", bewaarPersoon)
}

const vulMetDemoData = () => {

    let persoon1 = {Voornaam: "Jan", Familienaam: "Janssens", Geboortedatum : new Date("2010-10-15"), Email: "jan@example.com", AantalKinderen: 0}
    let persoon2 = {Voornaam: "Mieke", Familienaam: "Mickelson", Geboortedatum : new Date("1980-01-01"), Email: "mieke@example.com", AantalKinderen: 1}
    let persoon3 = {Voornaam: "Piet", Familienaam: "Pieters", Geboortedatum : new Date("1970-01-31"), Email: "piet@example.com", AantalKinderen: 2}

    personen = [persoon1, persoon2, persoon3]
    console.log("test")
}


const toonAllePersonen = (personen) => {
    for (let i = 0; i < personen.length; i++) {
        let persoon = personen[i];
        console.log(`${persoon.Voornaam}, ${persoon.Familienaam}, ${persoon.Geboortedatum}, ${persoon.Email}, ${persoon.AantalKinderen} `)
    }
}

const bewaarPersoon = () => {
    let txtVoornaam = document.querySelector("#txtVoornaam")
    let txtFamilienaam = document.querySelector("#txtFamilienaam")
    let txtGeboortedatum = document.querySelector("#txtGeboortedatum")
    let txtEmail = document.querySelector("#txtEmail")
    let txtAantalKinderen = document.querySelector("#txtAantalKinderen")

    let voornaam = txtVoornaam.value;
    let familienaam = txtFamilienaam.value;
    let geboortedatum = txtGeboortedatum.value;
    let email = txtEmail.value;
    let aantalKinderen = txtAantalKinderen.value;

    let nieuwePersoon = {Voornaam: `${voornaam}`, Familienaam: `${familienaam}`, Geboortedatum : new Date(`${geboortedatum}`), Email: `${email}`, AantalKinderen: `${aantalKinderen}`}

    personen.push(nieuwePersoon);
    toonAllePersonen(personen)

}

window.addEventListener("load", setup);