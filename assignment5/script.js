const buttons = document.getElementsByClassName('xylo-button')
for (var i = 0; i < buttons.length; i++) {
    const button = buttons[i]
    button.addEventListener('click', soundButtonDidTap)
}

function soundButtonDidTap(event) {
    let button = event.currentTarget // current tapped button
    let soundName = button.getAttribute('data-sound') // get sound name from button attr 'data-sound'
    const audio = new Audio(`sounds/${soundName}.wav`)
    audio.play()
}
