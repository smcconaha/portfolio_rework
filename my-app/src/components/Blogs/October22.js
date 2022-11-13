import React from "react";

function October22() {
  return (
    <div>
      <Accordion defaultActiveKey="0" flush>
        {/* BLOG 7 */}
        <Accordion.Item eventKey="0">
          <Accordion.Header>Blog #7: Technical Article - Pseudocode (10/07/22)</Accordion.Header>
          <Accordion.Body>
            <p>
              <strong>
                What is pseudocode and how does it help with programming?
              </strong>
            </p>

            <p>
                First, let&#39s break down the word pseudocode.  Pseudo, is defined by Merriam-Webster as “being apparently rather than 
                actually as stated” or in other words something that is not quite what it claims to be.  Using this logic we can 
                deduce that pseudocode appears to be code but is not actually code.

                This may be confusing but an example could help clarify things a bit.  Let&#39s say that Jim needs to know what time he 
                needs to wake up in order to make it to his favorite breakfast joint before it closes at 12:00 pm and let&#39s also 
                assume that Jim also prefers to sleep as late as possible.  We can think through all of the activities that Jim would 
                need to perform and the time required to complete each one.  The list below shows a few possible activities that Jim 
                would need to perform, the sum of which is 53 minutes.  If we subtract that number from the 12:00 pm closing time 
                then we know that Jim needs to wake up by 11:07 am at the latest in order to get those fluffy pancakes he enjoys so 
                much.

                Brush teeth = 3 minutes
                Take a shower = 20 minutes
                Get dressed = 20 minutes
                Drive to restaurant = 10 minutes

                The example above could be translated to pseudocode as follows:

                Breakfast joint close time equals 12:00 pm
                Jim leave time equals breakfast joint close time minus the sum of time to brush teeth, take a shower, get dressed, 
                and drive to the restaurant 

            </p>

            <p>
              <strong>
                So how does this help with programming?
              </strong>
            </p>

            <p>
                Pseudocoding is language-agnostic programming which means that it does not include anything that would tie it to 
                a particular programming language.  This is important because the logic contained within the pseudocode can be 
                applied to various programming languages.  The pseudocode example above could be dissected into variables, 
                mathematical operators, and functions depending on the language and methods chosen by the coder.  Pseudocode can 
                be thought of as a roadmap and without it you may just find yourself lost and asking for directions.
            </p>

            <p>
              <em>
              <a href ="https://www.merriam-webster.com/dictionary/pseudo">"Pseudo"</a> Merriam-Webster.com Dictionary, Merriam-Webster. 
                Accessed 16 Oct. 2022.
              </em>
            </p>
          </Accordion.Body>
        </Accordion.Item>

        {/* BLOG 8 */}
        <Accordion.Item eventKey="1">
          <Accordion.Header>Blog #8: Frameworks and Libraries (10/14/22)</Accordion.Header>
          <Accordion.Body>
            <p>
              <strong>
                Do you think JavaScript Frameworks and Libraries are easy or hard to use? Why?
              </strong>
            </p>

            <p>
                In my opinion JavaScript libraries are not hard to use, but they require attention to new details.  For example, 
                in React you need to install certain packages within a particular directory in order for them to operate.  I found 
                myself adding packages to the wrong directory far too often.  But the upside to this is how easy it is to add UI 
                elements once the files are in place and you have a goal in mind.
            </p>

            <p>
              <strong>What Frameworks or Libraries are you interested in learning more about?</strong>
            </p>

            <p>
                I am curious how jQuery compares to React.  I am curious about the longevity, ease of use, capabilities, and the 
                differences between these libraries.
            </p>

            <p>
              <strong>Find one emerging JavaScript tool that you would like to learn more about or use in your final project.</strong>
            </p>

            <p>
                I am interested in learning more about testing frameworks like Mocha.  I have seen Mocha paired with Chai library 
                to run tests but I am not well read on either at this point.  So far, testing for me has been largely running 
                console.log to see if I am getting the output that I expect so I would like to learn more about proper testing.
            </p>
          </Accordion.Body>
        </Accordion.Item>

        {/* BLOG 9 */}
        <Accordion.Item eventKey="2">
          <Accordion.Header>Blog #9: The CLI (10/21/22)</Accordion.Header>
          <Accordion.Body>
            <p>
              <strong>
                What have you learned about CLIs? Do you think they are scary?
              </strong>
            </p>
                I have learned a lot about CLI capabilities and the importance of executing certain commands within particular
                directories in order for the command to execute properly.  So far I do not find them scary and actualy enjoy
                working in the CLI.
            <p>

            </p>

            <p>
              <strong>If you were to build a CLI, what would it do?</strong>
            </p>

            <p>
                If I were to build a CLI it would likely be some sort of game.  I really like the idea of making an immersive
                CLI based adventure game.  I have never been a text based gamer but I think it sounds likes a fun exercise.
            </p>

            <p>
              <strong>List some ideas that without a Framework, would take you a long time to code</strong>
            </p>

            <p>
                I am not well read on databases yet but I know from experience that building tables can be extremely tedious.  That
                being said, I can image that without a Framework, building a database would be extremely tedious and monotonous.
            </p>
          </Accordion.Body>
        </Accordion.Item>

        {/* BLOG 10 */}
        <Accordion.Item eventKey="3">
          <Accordion.Header>Blog #10: Halfway There! (10/28/22)</Accordion.Header>
          <Accordion.Body>
            <p>
              <strong>
                Now that you are halfway through bootcamp, what has been the biggest hurdle that you have gone past? What do you 
                think is going to be the next biggest thing to power through?
              </strong>
            </p>

            <p>
                The biggest hurdle that I have faced has been learning when to ask for help.  I like to dig deep into the material
                and to gain a firm understanding rather than "coybow coding" or just jumping in and getting my hands dirty.  I
                think this can be a good thing but it can also be a bad thing if you spend too much time in the material.  I think
                the next biggest challenge for me is catching up on backlog items while continuing to build my knowledge base.
            </p>

            <p>
                <strong>Compared to earlier, what are three ideas you might want to do for your final project? Are they the same 
                ideas as before, or have they changed now that you understand more about the technology and your limitations?
                </strong>
            </p>
                I still like the idea of doing a copycat of AllTrails but I feel like this could be a stretch considering the maps
                and GPS components of that application.  I also really like the idea of something centered around coffee, like
                an untapped for local coffee shops where people can leave reviews.  Otherwise, I think I am entertaining the idea
                of a craigslist copycat.
            <p>
 
            </p>

            <p>
                <strong>What surprised you about your first week in Python and how was it different from your first week in 
                JavaScript? 
                </strong>
            </p>

            <p>
                I was surprised how much easier it was to learn python than javascript.  I know that is because I am less focused on
                the functionality and more on the syntax this round.
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default October22