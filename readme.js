const openCycloneAfterPrompt = require("./utils.js");

function WelcomeToCyclone() {
  // Welcome! This is a live code editor that lets you write and run javascript code.

  console.log("Cyclone is an instant coding playground for your docs!");

  // TODO: add your doc link here
  // Want to make your docs look as nice as Stripe's?
  const yourDocs = "https://stripe.com/docs";

  // KEEP SCROLLING and see how the editor will change

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
