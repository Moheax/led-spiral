let x = 0
let y = 0
basic.forever(function () {
    led.plot(x, y)
    if (x == 0 && y > 1) {
        y += -1
    } else {
        if (x > 0 && y == 4) {
            x += -1
        } else {
            if (x >= 4 && y <= 4) {
                y += 1
            } else {
                if (x == 4 && y < 3) {
                    y += 1
                } else {
                    if (x < 4 && y < 4) {
                        x += 1
                    }
                }
            }
        }
    }
    basic.pause(100)
})
