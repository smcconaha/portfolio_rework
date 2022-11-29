import React from "react";

function August22() {
  return (
    <div>
      <Accordion defaultActiveKey="0" flush>
        {/* BLOG 1 */}
        <Accordion.Item eventKey="0">
          <Accordion.Header>Blog #1: First Week (8/26/22)</Accordion.Header>
          <Accordion.Body>
            <p>
              <strong>
                Was your first week what you expected? Why? Why not?
              </strong>
            </p>

            <p>
              I came into the first week expecting the course load to be challenging; however, I did not anticipate needing so much 
              time to learn the tools like GitHub and GitPod. I realize that I can be a slow learner, especially if the subject is 
              brand new, so this really isn't that surprising.
              These are a few of the interesting things I learned about today:
              How to initiate a pull request on GitHub. This feature allows teams to work together and discuss changes without 
              worrying about overwriting someone else's work.
              How the release based workflow operates. This is used to package and provide software to users at a particular point 
              in time. The directions seemed a bit rushed for this part of the lesson and I would like to research this further.
              The ways you can track history on a commit, issue, or pull request. This includes the secure hashtag algorithm (SHA).
              The differences between markup and markdown languages.
              That "git blame" 😆 is used to show revision history as well as the last author to modify a line of a file.
            </p>

            <p>
              <strong>
                What are you excited or eager to learn more about?
              </strong>
            </p>

            <p>
              I am eager to learn more about command line interface (CLI). I have played around with CLI on my computer as well 
              as a few test environments but this weekend I plan to dig in a little further and break some things.
            </p>

            <p>
              <strong>
                What is something about you that can only be learned by reading this blog?
              </strong>
            </p>
            <p>
              I have a lot of hobbies and interests which makes it hard to narrow down the list but here goes. I enjoy experimenting 
              with different types of art as well as drawing and painting. I took up wood carving roughly two years ago and have 
              included pictures of one of my wood spirit carvings. From time to time I also like to pick up figurines from Goodwill 
              and paint them to look like zombies. Sometimes I will even snag an old print and add my own spin on it.
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default August22