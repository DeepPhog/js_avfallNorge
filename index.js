//oppgave 2 var
var flex2 = document.getElementById("flex2")
var sub = document.getElementById("sub")
var svar = document.getElementById("svar")
var flex2len = flex2.children.length
var btnc = ["2019", "2020", "2022"]
var btns = [];
//oppgave 2
sub.onclick = function opp2() {
    for (let i = 1; i < flex2len; i++) {
        var btn = document.getElementById("btn" + i).value
        btns.push(btn)
        var high = Math.max(...btns)
    }
    for (let i = 0; i < flex2len; i++) {
        if (high == btns[i]) {
            console.log(btnc[i] + " has the most with " + high);
            svar.innerText = btnc[i] + " has the most with " + high
        }
    }
}
//oppgave 3
var op3 = document.getElementById("op3")
var personer = [


    {

        navn: "Runar Bålsrud",

        telefonJobb: "+4799988777",

        telefonPrivat: "+478885522",

        epost: "runar@avfallnorge.no",

        stilling: "Administrerende direktør"

    },

    {

        navn: "Sara Wilsgaard",

        telefonJobb: "+4777788999",

        telefonPrivat: "+478885522",

        epost: "sara.wilsgaard@avfallnorge.no",

        stilling: "Medlemskommunikasjon, bærekraft og ombruk."

    }
]
console.log(personer);
op3.onclick = function op3func() {
    personer[0].telefonPrivat = 222
    delete personer[1].telefonPrivat
    console.log(personer);
}
//oppgave 4
var op4 = document.getElementById("op4")
var text4 = "Hva er bærekraftig  utvikling? «En utvikling som imøtekommer dagens behov uten å ødelegge mulighetene for at kommende generasjoner skal få dekket sine behov"
op4.onclick = function op4func() {
    let position = text4.search("bærekraft ");
    let position2 = text4.search("bærekraftig");
    if (position != -1) {
        var pos = "er i setningen."
    } else {
        var pos = "er ikke i setningen."
    }
    if (position2 != -1) {
        var pos2 = "er i setningen."

    } else {
        var pos2 = "er ikke i setningen."
    }
    console.log("bærekraft " + pos + " bærekraftig " + pos2);
}