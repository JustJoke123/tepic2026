const teams = [

    {
        number: "01",
        name: "Overall Coordinators",
        image: "assets/images/teams/overall.PNG",
        heads: [
            "Karthik D",
            "Seshagiri M",
        ]
    },

    {
        number: "02",
        name: "Official Admins",
        image: "assets/images/teams/admin.PNG",
        heads: [
            "Narayanan M",
            "Nivetha B",
        ]
    },

    {
        number: "03",
        name: "Finance Management Team",
        image: "assets/images/teams/finance.PNG",
        heads: [
            "Nithish Kumar K",
            "Devika R",
            "Nandhini P",
            "Mohammed Aslam M"
        ]
    },

    {
        number: "04",
        name: "Sponsorship Management Team",
        image: "assets/images/teams/sponsership.PNG",
        heads: [
            "Nivetha B",
            "Vishnuwardhan T",
            "Anandhalakshmanan EG",
            "Kiruthik Kumaran M"

        ]
    },

    {
        number: "05",
        name: "Technical Team",
        image: "assets/images/teams/technical.PNG",
        heads: [
            "Kavinesh C",
            "Aadhithan S",
            "Suryaprakash T",
            "Pravin Karthik R"
        ]
    },

    {
        number: "06",
        name: "Procurement Team",
        image: "assets/images/teams/procurement.PNG",
        heads: [
            "Sabarish Babu KG",
            "Kalimuthu K",
            "Kishore Jebaraj R",
            "Barath V"
        ]
    },

    {
        number: "07",
        name: "Event Management Team",
        image: "assets/images/teams/event.PNG",
        heads: [
            "Gabrin Mercy P",
            "Nivetra G",
            "Sam David M",
            "Praveena R"
        ]
    },

    {
        number: "08",
        name: "Decoration Team",
        image: "assets/images/teams/decoration.PNG",
        heads: [
            "Selva Vignesh G",
            "Keerthivarman A",
            "Janani C",
            "Mathesh S"
        ]
    },

    {
        number: "09",
        name: "Crowd Management Team",
        image: "assets/images/teams/crowd.PNG",
        heads: [
            "Saravanan B",
            "Sundharesan R",
            "Vignesh Kumar VR",
            "Susendhar M"
        ]
    },

    {
        number: "10",
        name: "Food & Refreshments Team",
        image: "assets/images/teams/food.PNG",
        heads: [
            "Suresh M",
            "Kannan G",
            "Pranesh M",
            "Gajalakshmi V"
        ]
    },

    {
        number: "11",
        name: "Souvenir Team",
        image: "assets/images/teams/souvenir.PNG",
        heads: [
            "Keerthana S",
            "Kanmani C",
            "Jayagayathri J",
            "Pavithra V",
        ]
    },

    {
        number: "12",
        name: "Cultural Team",
        image: "assets/images/teams/cultural.PNG",
        heads: [
            "Hariharan R",
            "Nesa Nisha N",
            "Abdus Sameed Irfan J",
            "Harish Meeran V",
        ]
    }

];


const container = document.getElementById("teamsGrid");


teams.forEach(team => {

    const card = document.createElement("article");

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

            <div class="team-photo">
                <img src="${team.image}" alt="${team.name} group photo">
            </div>

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