const posters = [

    {
        id: "tepic",
        title: "TEPIC 2026",
        description: "Tepic'26 Poster",
        image: "assets/posters/tepic-poster.jpg",
        link: "assets/flyers/Tepic Flyer.pdf"
    },

    {
        id: "cipofest",
        title: "CIPOFEST 2026",
        description: "Cipofest'26 Poster",
        image: "assets/posters/Cipofest Poster.png",
        link: "assets/posters/Cipofest Poster.png"
    },

    {
        id: "paper",
        title: "Paper Presentation",
        description: "Paper Presentation Poster with Rules and Regulations",
        image: "assets/posters/paper.jpg",
        link: "assets/flyers/Paper Presentation Flyer.pdf"
    },

    {
        id: "poster",
        title: "Poster Presentation",
        description: "Poster Presentation Poster with Rules and Regulations",
        image: "assets/posters/poster.jpg",
        link: "assets/flyers/Poster Presentation Flyer.pdf"
    },

    {
        id: "idea",
        title: "Idea Presentation",
        description: "Idea Presentation Poster with Rules and Regulations",
        image: "assets/posters/idea.jpg",
        link: "assets/flyers/Idea Presentation Flyer.pdf"
    },

    {
        id: "technical",
        title: "Technical Quiz",
        description: "Technical Quiz with Rules and Regulations",
        image: "assets/posters/technical.jpg",
        link: "assets/flyers/Technical Quiz Flyer.pdf"
    },

    {
        id: "2mr",
        title: "2 minutes Review",
        description: "2 minutes Review with Rules and Regulations",
        image: "assets/posters/2mr.jpg",
        link: "assets/flyers/2 Minutes Review Flyer.pdf"
    },

    {
        id: "cad",
        title: "Cad Modelling",
        description: "Cad Modelling Poster with Rules and Regulations",
        image: "assets/posters/cad.jpg",
        link: "assets/flyers/CAD Flyer.pdf"
    },
    
    {
        id: "pworkshop",
        title: "Polymer Workshop",
        description: "Polymer Workshop Poster",
        image: "assets/posters/pworkshop.jpg",
        link: "assets/flyers/Workshop Polymer Flyer.pdf"
    },
];


const postersGrid =
    document.getElementById("postersGrid");

const emptyState =
    document.getElementById("emptyState");


function displayPosters() {

    postersGrid.innerHTML = "";


    /* ================================
       EMPTY STATE
    ================================= */

    if (posters.length === 0) {

        emptyState.style.display = "block";

        return;

    }


    emptyState.style.display = "none";


    /* ================================
       CREATE POSTERS
    ================================= */

    posters.forEach((poster, index) => {

        const card =
            document.createElement("article");

        card.className = "poster-card";


        /*
            If a link exists:
            clicking the poster opens it.

            If no link exists:
            clicking opens the image itself.
        */

        const destination =
            poster.link || poster.image;


        card.innerHTML = `

            <a
                href="${destination}"
                target="_blank"
                rel="noopener noreferrer"
                class="poster-image-link"
            >

                <div class="poster-image-wrapper">

                    <img
                        src="${poster.image}"
                        alt="${poster.title}"
                        loading="lazy"
                    >

                    <div class="poster-overlay">

                        <span>
                            VIEW POSTER ↗
                        </span>

                    </div>

                </div>

            </a>


            <div class="poster-info">

                <div class="poster-number">
                    ${String(index + 1).padStart(2, "0")}
                </div>

                <div>

                    <h2>
                        ${poster.title}
                    </h2>

                    ${
                        poster.description
                        ?
                        `<p>${poster.description}</p>`
                        :
                        ""
                    }

                </div>

            </div>

        `;


        postersGrid.appendChild(card);

    });

}


displayPosters();
