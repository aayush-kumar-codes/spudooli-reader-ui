import React from "react";

const About = () => {
  return (
    <>
      <div className="m-auto justify-center p-2">
        <h1 className="text-lg">About Spudooli Reader</h1>
        <p className="">
          I was a long time fan of Google Reader. When it bit the dust I
          installed Tiny Tiny RSS and was a fan of that instead
        </p>
        <p>Years go by...</p>
        <p>
          Then a new server build at home eventually meant Tiny Tiny RSS needed
          to be moved. A check of the site revealed that Docker was the only
          supported method of hosting. There was some details of how to host the
          site without Docker, so that was attempted. And failed. Given it's
          built in PHP anyway, my motivation to sort it was extremely low. After
          a look around, just about every other feed reader also required
          Docker. So nope. Nope, Docker is not the answer.
        </p>
        <p>
          Paying for a reader service, and there are very many good ones, is
          anathema to me as I much prefer everything under my control. That is
          what the internet is about.
        </p>
        <p>
          So here we are. I coded my own RSS Feed Reader in a weekend and am
          much happier for it.
        </p>
        <p>
          Spudooli Reader is a Python Flask application with MySQL for data
          storage, Bootstrap 5 and some basic javascript complete the thing
        </p>
        <p>It is my app. But you may use all or any of it. Help yourself.</p>
        <p>Favicon credit to Dontcom</p>
        <p>© Copyright 2023 | Spudooli Investments Ltd</p>
      </div>
    </>
  );
};

export default About;
