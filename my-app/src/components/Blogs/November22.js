import React from "react";

function November22() {
  return (
    <div>
      <Accordion defaultActiveKey="0" flush>
        {/* BLOG 11 */}
        <Accordion.Item eventKey="0">
          <Accordion.Header>Blog #11: Charming The Snake That Is Python (11/04/22)</Accordion.Header>
          <Accordion.Body>
            <p>
              <strong>
                What are some similarities and differences you can see with JS and Python?
              </strong>
            </p>

            <p>
                I find that the syntax for JS and Python are very similar and in both cases it is fairly easy to see when you are
                entering a function or even a loop.  That being said, there are so many small differences like the &#39Four in loop&#39
                used in Python.  Python is also more particular about variable types, so if you define a variable as a string and
                then expect to use it in an equation, it will not be very happy.  But JS on the other hand is a little more fluid.
                I actually prefer Python and find it more intuitive and easier to read.
            </p>

            <p>
              <strong>
                If you had started with Python instead of JS, how do you think the Bootcamp would be different? Would you have 
                benefited?
              </strong>
            </p>

            <p>
                Assuming I needed to learn both JS and Python still, I think it would have hurt me to learn about Python first.  Even
                though I perfer Python, I believe I would hae struggled going the opposite direction.  I think the order makes sense
                when you think about building the front end first and then learning the back end like we have been doing.
            </p>
            <p>
              <strong>
                Think of a project or tech based tool that you use often and think about what the database structure might look 
                like for it. Do you feel like you have a better understanding of how it works now and could you see yourself 
                enjoying building something like that in the future? 
              </strong>
            </p>

            <p>
                I think of the Carfax app ad even RockAuto website and how their databases may look.  The tables and relationships
                between them make a lot more sense now.  I can even imagine the user profiles more and how the data you enter is stored.
                I can certainly see myself enjoying building databases in the future.
            </p>
          </Accordion.Body>
        </Accordion.Item>

        {/* BLOG 12 */}
        <Accordion.Item eventKey="1">
          <Accordion.Header>Blog #12: Frameworks and Libraries (11/11/22)</Accordion.Header>
          <Accordion.Body>
            <p>
              <strong>
                What are you struggling with the most in the Tech Stack so far and why?
              </strong>
            </p>

            <p>
                I think the thing that I have struggles with the most by far is React.  At this point I understand the interaction
                between components and the various imports but I need to brush up on props.  I have a basic understanding but would
                like to become more familiar with their uses.
            </p>

            <p>
              <strong>What companies or people would you like to hear talk during a Bootcamp lunch and learn?</strong>
            </p>

            <p>
                I would like to hear from a company that does cybersecurity.  In my previous profession, cybersecurity
                was paramount and I have always wanted to learn more.  It would be interesting to hear more about the work environment
                and how someone could pursue a career in the industry.
            </p>

            <p>
              <strong>After having built your first full-stack application, what things in your repertoire are a sticking point for 
                you? Were you able to reconnect your React Restaurant to your Backend Bistro code? If so, what was that like, and 
                if not, what hurdles did you need to jump? </strong>
            </p>

            <p>
                For this exercise the sticking point for me was getting the API to provide the data in a format that I could then
                feed into my React restaurant seemlessly.  I was able to complete all steps until that point with no problems and
                even retrieve a response in a readable format.  I was able to connect my React restaraunt to the backend bistro code
                but I did need to get some help in order to do so.  The hurdles that I faced were trying to get too deep of an 
                understanding of everything that Django was doing and how it accomplished it.  There are times when you need to put
                trust in the process and I had a hard time trusting Django this week.
            </p>
          </Accordion.Body>
        </Accordion.Item>

        {/* BLOG 13 */}
        <Accordion.Item eventKey="2">
          <Accordion.Header>Blog #13:  (11/18/22)</Accordion.Header>
          <Accordion.Body>
            <p>
              <strong>
                
              </strong>
            </p>
              
            <p>

            </p>

            <p>
              <strong></strong>
            </p>

            <p>
   
            </p>

            <p>
              <strong></strong>
            </p>

            <p>

            </p>
          </Accordion.Body>
        </Accordion.Item>

        {/* BLOG 14 */}
        <Accordion.Item eventKey="3">
          <Accordion.Header>Blog #14:  (11/25/22)</Accordion.Header>
          <Accordion.Body>
            <p>
              <strong>

              </strong>
            </p>

            <p>
     
            </p>

            <p>
                <strong></strong>
            </p>

            <p>
 
            </p>

            <p>
                <strong></strong>
            </p>

            <p>

            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default November22