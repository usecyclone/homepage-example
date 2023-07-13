const openCycloneAfterPrompt = require("./utils.js");

/**
 * START HERE!
 *
 * SCROLL DOWN ON THE LANDING PAGE and see how the editor will change
 *
 * Check out the terminal at the bottom
 */

function WelcomeToCyclone() {
  // Welcome! This is a live code editor that lets you write and run javascript code.

  console.log("Cyclone is an instant coding playground for your docs!");
  const whyIsCycloneDifferent = [
    "🔥 Instantly run code in your docs with the right example",
    "📝 Set up in 10 minutes",
    "🧑‍✈️ GPT takes care of maintenance",
  ];
  whyIsCycloneDifferent.forEach((reason) => {
    console.log(reason);
  });
  console.log("Get started with Cyclone today!");

  openCycloneAfterPrompt();
}

WelcomeToCyclone();
