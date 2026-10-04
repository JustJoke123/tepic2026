const teams = [

    {
        number: "01",
        name: "Overall Coordinators",
        heads: [
            "Karthik D",
            "Seshagiri M",
        ]
    },
    
    {
        number: "02",
        name: "Official Admins",
        heads: [
            "Narayanan M",
            "Nivetha B",
        ]
    },

    {
        number: "03",
        name: "Finance Management Team",
        heads: [
            "Nithish Kumar K",
            "Nandhini P",
            "Mohammed Aslam M",
            "Devika R"
        ]
    },


    {
        number: "04",
        name: "Sponsorship Management Team",
        heads: [
            "Anandhalakshmanan EG",
            "Kiruthik Kumaran M",
            "Vishnuwardhan T",
            "Nivetha B"
        ]
    },


    {
        number: "05",
        name: "Technical Team",
        heads: [
            "Kavinesh C",
            "Aadhithan S",
            "Pravin Karthik R",
            "Suryaprakash T"
        ]
    },


    {
        number: "06",
        name: "Procurement Team",
        heads: [
            "Kishore Jebaraj R",
            "Barath V",
            "Kalimuthu K",
            "Sabarish Babu KG"
        ]
    },


    {
        number: "07",
        name: "Souvenir Team",
        heads: [
            "Jayagayathiri J",
            "Pavithra V",
            "Kanmani C",
            "Keerthana S"
        ]
    },


    {
        number: "08",
        name: "Decoration Team",
        heads: [
            "Mathesh S",
            "Janani C",
            "Selva Vignesh G",
            "Keerthivarman A"
        ]
    },
    

    {
        number: "09",
        name: "Crowd Management Team",
        heads: [
            "Susendhar M",
            "Vignesh Kumar VR",
            "Sundharesan R",
            "Saravanan B"
        ]
    },


    {
        number: "10",
        name: "Food & Refreshments Team",
        heads: [
            "Kannan G",
            "Suresh M",
            "Pranesh M",
            "Gajalakshmi V"
        ]
    },


    {
        number: "11",
        name: "Cultural Team",
        heads: [
            "Abdus Sameed Irfan J",
            "Harish Meeran V",
            "Hariharan R",
            "Nesa Nisha N"
        ]
    },


    {
        number: "12",
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