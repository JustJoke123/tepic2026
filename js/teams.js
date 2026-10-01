const teams = [

    {
        number: "01",
        name: "Finance Management Team",
        heads: [
            "Nithish Kumar K",
            "Nandhini P",
            "Mohammed Aslam M",
            "Devika R"
        ]
    },


    {
        number: "02",
        name: "Sponsorship Management Team",
        heads: [
            "Anandhalakshmanan EG",
            "Kiruthik Kumaran M",
            "Vishnuwardhan T",
            "Nivetha B"
        ]
    },


    {
        number: "03",
        name: "Technical Team",
        heads: [
            "Kavinesh C",
            "Aadhithan S",
            "Pravin Karthik R",
            "Sindhya P"
        ]
    },


    {
        number: "04",
        name: "Procurement Team",
        heads: [
            "Kishore Jebaraj R",
            "Barath V",
            "Kalimuthu K",
            "Sabarish Babu KG"
        ]
    },


    {
        number: "05",
        name: "Souvenir Team",
        heads: [
            "Jayagayathiri J",
            "Pavithra V",
            "Kanmani C",
            "Keerthana S"
        ]
    },


    {
        number: "06",
        name: "Decoration Team",
        heads: [
            "Mathesh S",
            "Janani C",
            "Selva Vignesh G",
            "Keerthivarman A"
        ]
    },
    

    {
        number: "07",
        name: "Crowd Management Team",
        heads: [
            "Susendhar M",
            "Vignesh Kumar VR",
            "Kalimuthu K",
            "Sabarish Babu KG"
        ]
    },


    {
        number: "08",
        name: "Food & Refreshments Team",
        heads: [
            "Kannan G",
            "Dharshini D",
            "Pranesh M",
            "Gajalakshmi V"
        ]
    },


    {
        number: "09",
        name: "Cultural Team",
        heads: [
            "Abdus Sameed Irfan J",
            "Harish Meeran V",
            "Hariharan R",
            "Nesa Nisha N"
        ]
    },


    {
        number: "10",
        name: "Event Management Team",
        heads: [
            "Praveena R",
            "Sam David M",
            "Gabrin Mercy P",
            "Nivetra G"
        ]
    }

];


const container =
    document.getElementById("teamsGrid");


teams.forEach(team => {

    const card =
        document.createElement("article");

    card.className = "team-card";


    card.innerHTML = `

        <div class="team-number">
            ${team.number}
        </div>

        <div class="team-content">

            <span>TEAM</span>

            <h2>
                ${team.name}
            </h2>

            <div class="team-heads">

                ${team.heads.map(head => `
                    <div class="team-head">
                        <small>TEAM HEAD</small>
                        <strong>${head}</strong>
                    </div>
                `).join("")}

            </div>

        </div>

    `;


    container.appendChild(card);

});