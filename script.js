const messages = [
    ['Il n\'y a que ', 'Etre ', 'Appeler ', 'Etre '],
    ['les montagnes ', 'sage ', 'un chat ', 'une poule '],
    ['qui ne se croisent pas.', 'comme une image.', 'un chat.', 'mouillée.']
];

function createMessage() {
    let message = '';
    for (let block of messages) {
        const i = Math.floor(Math.random() * block.length);
        message += block[i];
    }
    console.log(message);
}

createMessage();