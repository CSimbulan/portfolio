import React from "react";
import Project from "./project.component";

const Projects = (props) => {
    return (
        <div className="mini-section container-custom full-vw-width projects">

            <Project
                title="Basketball Shot Tracker (BST)"
                imageUrl="/assets/basketball-shot-tracker.png"
                technologies={["HTML", "CSS", "JavaScript", "ReactJS", "Redux", "NodeJS", "ExpressJS", "MongoDB"]}
                description="BST is an app for basketball players to track their shooting
                percentages from specific spots on the court. BST can be used to
                track shots for a real game, or individual workouts. The user's
                profile page contains the ability to edit or delete previous workouts,
                and a graph of their shooting percentage over time. I developed
                this app for personal use after looking at already existing apps
                and not being satisfied with their use. I wanted to experiment
                with using different libraries, such as Auth0 for user
                authentication, and Redux for managing an app-wide state."
                liveLink="https://basketball-shot-tracker.herokuapp.com"
                githubLink="https://github.com/CSimbulan/basketball-shot-tracker"
                liveBtnLabel="Live"
            />

            <Project
                title="PickApp"
                imageUrl="/assets/pick-app.png"
                technologies={["HTML", "CSS", "JavaScript", "ReactJS", "NodeJS", "ExpressJS", "MongoDB"]}
                description="PickApp is an app to find local pickup games for any sport. Users
                can sign up and create postings, indicating where and what they're
                playing. The postings are displayed in a list format, as well as
                markers on top of an embedded google map. Users are able to update
                and delete their posting through their profile page. This was my first time
                developing something involving a back-end. While developing
                PickApp, I learned a lot about potential security risks while
                storing user data."
                liveLink="https://pick-app-sports.herokuapp.com"
                githubLink="https://github.com/CSimbulan/pickapp"
                liveBtnLabel="Live"
            />

            <Project
                title="Pokémon Go IV Table Generator"
                imageUrl="/assets/ivtable.png"
                technologies={["HTML", "CSS", "JavaScript", "ReactJS"]}
                description="This app generates a reference table for Pokémon Go's &quot;raid&quot;
                feature. Players would normally have to wait for someone in the
                community to create a reference table and share it, and it would
                usually only be for the popular raid battles. This app can create
                a table for any possible raid boss and allows users to customize
                what kind of information is shown on it. This was my first time
                working with ReactJS. The biggest challenge was managing passing
                information between components, which was overcome by learning how
                to lift that state up the component tree."
                liveLink="https://csimbulan.github.io/ivtable/"
                githubLink="https://github.com/CSimbulan/ivtable"
                liveBtnLabel="Live"
            />

            <Project
                title="Pokémon Go Search String Generator"
                imageUrl="/assets/searchstring.png"
                technologies={["HTML", "CSS", "JavaScript", "ReactJS"]}
                description="This app is another tool for Pokémon Go players. It creates a
                    string that users can copy and paste in the game to filter their
                    in-game inventory. Just like with the table generator app, this
                    app solves the problem where the community had to wait for
                    specific strings to be made by other players. Now, they can make a
                    string for whatever they want, whenever they want. This app and
                    the table generator app are both tools I wanted to exist, and
                    decided to develop them to practice my skills with ReactJS."
                liveLink="https://csimbulan.github.io/searchstring/"
                githubLink="https://github.com/CSimbulan/searchstring"
                liveBtnLabel="Live"
            />

            <Project
                title="Connecting HL Tau to the Observed Exoplanet Sample (Research Project)"
                imageUrl="/assets/hltau_square.png"
                imageUrl2="/assets/hltau.gif"
                technologies={["Python"]}
                description='In 2014 the Atacama Large Millimeter/submillimeter Array (ALMA) took
                    an image of the young star HL Tau. The image revealed concentric gaps in the
                    protoplanetary disk. The theory was that the gaps were carved out from giant
                    planets forming. In 2016-2017 I worked with the Canadian Institute for
                    Theoretical Astrophysics to run simulations based on HL Tau. We compared the
                    results to the observed distribution of exoplanets. I was awarded the "Smith
                    Solis Research Scholarship in Astronomy and Astrophysics" for this project.
                    Together with my supervisor Daniel Tamayo, we published a research paper in
                    the Monthly Notices of the Royal Astronomical Society.'
                liveLink="https://arxiv.org/pdf/1703.09132.pdf"
                githubLink="https://github.com/CSimbulan/HLTau"
                liveBtnLabel="Publication"
            />
        </div>
    );
};

export default Projects;
