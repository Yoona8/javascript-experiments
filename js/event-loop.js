console.log('Starting to load the file');

const eventLoopButton = document.getElementById('event-loop-test-button');

function onEventLoopButtonClick() {
  console.log('Click!');
}

eventLoopButton.addEventListener('click', onEventLoopButtonClick);

setTimeout(() => {
  console.log('Set Timeout');
  let resultOfTheHugeLoop = 0;

  for (let i = 0; i < 1000000000; i++) {
    resultOfTheHugeLoop += i;
  }
  console.log('After loop inside timeout');
}, 0);

let resultOfTheHugeLoop = 0;

for (let i = 0; i < 1000000000; i++) {
  resultOfTheHugeLoop += i;
}

console.log('Finished loading the file');