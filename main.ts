input.onButtonPressed(Button.A, function () {
    basic.showString("Started")
    for (let index = 0; index < minutes; index++) {
        basic.pause(60000)
        minutes += -1
    }
    minutes = 0
})
input.onButtonPressed(Button.B, function () {
    minutes += 1
    if (minutes > 60) {
        minutes = 0
        timer = 0
    }
    timer = 1
})
let timer = 0
let minutes = 0
minutes = 0
music.setVolume(255)
basic.forever(function () {
    basic.showString("" + (minutes))
    if (minutes == 0 && timer == 1) {
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
            basic.pause(100)
            basic.showLeds(`
                . . . . .
                . . # . .
                . # . # .
                . . # . .
                . . . . .
                `)
            basic.pause(100)
            basic.showLeds(`
                . . # . .
                . # . # .
                # . . . #
                . # . # .
                . . # . .
                `)
            basic.showLeds(`
                . # . # .
                # . . . #
                . . . . .
                # . . . #
                . # . # .
                `)
            basic.pause(100)
            basic.showLeds(`
                # . . . #
                . . . . .
                . . . . .
                . . . . .
                # . . . #
                `)
            basic.pause(100)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
        music.startMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.Once)
        timer = 0
    }
})
