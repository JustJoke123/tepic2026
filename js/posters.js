const posters = [

    {
        id: "paper",
        title: "TEPIC 2026",
        description: "Tepic'26 Poster",
        image: "assets/posters/tepic-poster.jpg",
        link: "assets/posters/tepic-poster.jpg"
    }

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