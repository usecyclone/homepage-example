const readline = require("readline");
const open = require("open");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function readLineAsync(message) {
  return new Promise((resolve, reject) => {
    rl.question(message, (answer) => {
      resolve(answer);
    });
  });
}

async function openCycloneAfterPrompt() {
  var promptInput = await readLineAsync(
    "Wanna see a preview site with Cyclone? >[y/n] "
  );
  open("https://accounts.usecyclone.dev/sign-up");
  rl.close();
}

module.exports = openCycloneAfterPrompt;
