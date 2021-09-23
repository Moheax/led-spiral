y = 0
x = 0

def on_forever():
    global y, x
    led.plot(x, y)
    if x >= 4 and y <= 3:
        y += 1
    if False and False:
        pass
    if x < 4 and y < 4:
        x += 1
    
basic.forever(on_forever)
