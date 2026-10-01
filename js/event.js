const events = {

    paper: {

        number: "01",

        title: "Paper Presentation",

        description:
            "Present your research, knowledge and ideas.",

        about:
            "A platform for participants to present their technical research, concepts and findings before an audience.",

        venue:
            "To Be Announced",

        date:
            "To Be Announced",

        time:
            "To Be Announced",

        team:
            "To Be Announced",

        register:
            "YOUR_PAPER_GOOGLE_FORM_LINK",

        rules: [

            "Topic and theme will be announced by the organizers.",

            "Participants must submit their presentation according to the given guidelines.",

            "Presentation time limits must be strictly followed.",

            "Further rules will be announced by the organizers."

        ]

    },


    project: {

        number: "02",

        title: "Project Presentation",

        description:
            "Build it. Demonstrate it. Explain it.",

        about:
            "Showcase an innovative project and explain its concept, development and practical applications.",

        venue:
            "To Be Announced",

        date:
            "To Be Announced",

        time:
            "To Be Announced",

        team:
            "To Be Announced",

        register:
            "YOUR_PROJECT_GOOGLE_FORM_LINK",

        rules: [

            "Participants must bring or demonstrate their project.",

            "The project should be presented within the allotted time.",

            "Participants must explain the concept and working of their project.",

            "Further rules will be announced by the organizers."

        ]

    },


    quiz: {

        number: "03",

        title: "Technical Quiz",

        description:
            "Put your technical knowledge to the test.",

        about:
            "A technical challenge designed to test knowledge, reasoning and problem-solving ability.",

        venue:
            "To Be Announced",

        date:
            "To Be Announced",

        time:
            "To Be Announced",

        team:
            "To Be Announced",

        register:
            "YOUR_QUIZ_GOOGLE_FORM_LINK",

        rules: [

            "Quiz format will be announced before the event.",

            "Participants must report before the scheduled time.",

            "Electronic devices may not be permitted during the quiz.",

            "Further rules will be announced by the organizers."

        ]

    },


    speech: {

        number: "04",

        title: "2 Minute Speech",

        description:
            "Two minutes. One idea. Make it count.",

        about:
            "Participants get two minutes to communicate an idea, thought or topic clearly and effectively.",

        venue:
            "To Be Announced",

        date:
            "To Be Announced",

        time:
            "To Be Announced",

        team:
            "Individual",

        register:
            "YOUR_SPEECH_GOOGLE_FORM_LINK",

        rules: [

            "The speech must not exceed two minutes.",

            "Participants must follow the topic provided by the organizers.",

            "Participants exceeding the time limit may be stopped.",

            "Further rules will be announced by the organizers."

        ]

    },


    idea: {

        number: "05",

        title: "Idea Presentation",

        description:
            "Turn your idea into something worth sharing.",

        about:
            "Present an original idea and explain its concept, purpose, impact and possible implementation.",

        venue:
            "To Be Announced",

        date:
            "To Be Announced",

        time:
            "To Be Announced",

        team:
            "To Be Announced",

        register:
            "YOUR_IDEA_GOOGLE_FORM_LINK",

        rules: [

            "The idea should be original and clearly explained.",

            "Participants must follow the presentation guidelines.",

            "Presentation time limits must be followed.",

            "Further rules will be announced by the organizers."

        ]

    },


    workshop: {

        number: "06",

        title: "Workshop",

        description:
            "Learn practical skills beyond the classroom.",

        about:
            "An interactive learning experience designed to introduce participants to practical technical concepts and skills.",

        venue:
            "To Be Announced",

        date:
            "To Be Announced",

        time:
            "To Be Announced",

        team:
            "To Be Announced",

        register:
            "YOUR_WORKSHOP_GOOGLE_FORM_LINK",

        rules: [

            "Participants must register before the deadline.",

            "Seats may be limited.",

            "Participants must follow workshop instructions.",

            "Further details will be announced soon."

        ]

    },


    cad: {

        number: "07",

        title: "CAD Modelling",

        description:
            "Design. Model. Create.",

        about:
            "A modelling challenge where participants can demonstrate their CAD design and modelling skills.",

        venue:
            "To Be Announced",

        date:
            "To Be Announced",

        time:
            "To Be Announced",

        team:
            "Individual",

        register:
            "YOUR_CAD_GOOGLE_FORM_LINK",

        rules: [

            "Participants must use the specified CAD software.",

            "The modelling task will be provided by the organizers.",

            "Participants must complete the task within the allotted time.",

            "Further rules will be announced by the organizers."

        ]

    }

};


const params = new URLSearchParams(
    window.location.search
);

const eventKey = params.get("event");

const event = events[eventKey];


if (!event) {

    window.location.href = "index.html#events";

} else {


    document.title =
        `${event.title} | TEPIC 2026`;


    document.getElementById("eventNumber")
        .textContent = event.number;


    document.getElementById("eventTitle")
        .textContent = event.title;


    document.getElementById("eventDescription")
        .textContent = event.description;


    document.getElementById("eventAbout")
        .textContent = event.about;


    document.getElementById("eventVenue")
        .textContent = event.venue;


    document.getElementById("eventDate")
        .textContent = event.date;


    document.getElementById("eventTime")
        .textContent = event.time;


    document.getElementById("eventTeam")
        .textContent = event.team;


    document.getElementById("registerButton")
        .href = event.register;


    const rulesContainer =
        document.getElementById("eventRules");


    rulesContainer.innerHTML = "";


    event.rules.forEach(rule => {

        const li = document.createElement("li");

        li.textContent = rule;

        rulesContainer.appendChild(li);

    });

}