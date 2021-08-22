const messages = [
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', '']
]

function createMessage() {
    let message = '';
    for (let block of messages) {
        const i = Math.floor(Math.random() * block.length);
        message += block[i];
    }
    console.log(message);
}

createMessage();