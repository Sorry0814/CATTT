namespace SpriteKind {
    export const Taco = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Taco, function (sprite, otherSprite) {
    info.changeScoreBy(10)
    otherSprite.destroy()
})
// Eating a strawberry or a cherry gives 1 point
// 
// Eating taco gives 10 points
// 
// If you try to eat the death pill you will lose a life, but gain 15 points.
// 
// Princess, you have 60 seconds and 3 life to finish the game.
function randomAssets () {
    Stuff = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e d d . . . . . . . . 
        . . . 1 f d d 1 1 . . . . . . . 
        . e e 1 1 1 d d d d . . . . . . 
        d e d e e f e d 1 d . . . . . . 
        e f 1 e 1 1 1 1 d e d . . . . . 
        d 1 1 e 1 1 e e d f . . . . . . 
        d f e d d e f 1 d . . . . . . . 
        1 d d 1 d e d 1 d . . . . . . . 
        . d 1 e d d d 1 . . . . . . . . 
        . . d f e . . . . . . . . . . . 
        `, SpriteKind.Food)
    Stuff.x = randint(0, scene.screenWidth())
    Stuff.y = randint(0, scene.screenHeight())
    cherry = sprites.create(img`
        . . . . . . . . . . . 6 6 6 6 6 
        . . . . . . . . . 6 6 7 7 7 7 8 
        . . . . . . 8 8 8 7 7 8 8 6 8 8 
        . . e e e e c 6 6 8 8 . 8 7 8 . 
        . e 2 5 4 2 e c 8 . . . 6 7 8 . 
        e 2 4 2 2 2 2 2 c . . . 6 7 8 . 
        e 2 2 2 2 2 2 2 c . . . 8 6 8 . 
        e 2 e e 2 2 2 2 e e e e c 6 8 . 
        c 2 e e 2 2 2 2 e 2 5 4 2 c 8 . 
        . c 2 e e e 2 e 2 4 2 2 2 2 c . 
        . . c 2 2 2 e e 2 2 2 2 2 2 2 e 
        . . . e c c e c 2 2 2 2 2 2 2 e 
        . . . . . . . c 2 e e 2 2 e 2 c 
        . . . . . . . c e e e e e e 2 c 
        . . . . . . . . c e 2 2 2 2 c . 
        . . . . . . . . . c c c c c . . 
        `, SpriteKind.Food)
    cherry.x = randint(0, scene.screenWidth())
    cherry.y = randint(0, scene.screenHeight())
    if (Math.percentChance(20)) {
        taco = sprites.create(img`
            . . . . . . . e e e e . . . . . 
            . . . . . e e 4 5 5 5 e e . . . 
            . . . . e 4 5 6 2 2 7 6 6 e . . 
            . . . e 5 6 6 7 2 2 6 4 4 4 e . 
            . . e 5 2 2 7 6 6 4 5 5 5 5 4 . 
            . e 5 6 2 2 8 8 5 5 5 5 5 4 5 4 
            . e 5 6 7 7 8 5 4 5 4 5 5 5 5 4 
            e 4 5 8 6 6 5 5 5 5 5 5 4 5 5 4 
            e 5 c e 8 5 5 5 4 5 5 5 5 5 5 4 
            e 5 c c e 5 4 5 5 5 4 5 5 5 e . 
            e 5 c c 5 5 5 5 5 5 5 5 4 e . . 
            e 5 e c 5 4 5 4 5 5 5 e e . . . 
            e 5 e e 5 5 5 5 5 4 e . . . . . 
            4 5 4 e 5 5 5 5 e e . . . . . . 
            . 4 5 4 5 5 4 e . . . . . . . . 
            . . 4 4 e e e . . . . . . . . . 
            `, SpriteKind.Taco)
        taco.x = randint(0, scene.screenWidth())
        taco.y = randint(0, scene.screenHeight())
    } else {
        deathpill = sprites.create(img`
            ........................
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f11111111f.......
            ......fd11111111df......
            ....7.fd11111111df......
            ...7..fd11111111df......
            ...7..fd11111111df......
            ...7..fddd1111dddff.....
            ...77.fbdbfddfbdbfcf....
            ...777fcdcf11fcdcfbf....
            ....77fffbdb1bdffcf.....
            ....fcb1bcffffff........
            ....f1c1c1ffffff........
            ....fdfdfdfffff.........
            .....f.f.f..............
            ........................
            ........................
            ........................
            `, SpriteKind.Enemy)
        deathpill.x = randint(0, scene.screenWidth())
        deathpill.y = randint(0, scene.screenHeight())
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    info.changeScoreBy(15)
    otherSprite.destroy()
})
let deathpill: Sprite = null
let taco: Sprite = null
let cherry: Sprite = null
let Stuff: Sprite = null
info.setLife(3)
info.startCountdown(60)
let Andrew = sprites.create(img`
    . . . . f f f f . . . . . 
    . . f f f f f f f f . . . 
    . f f f f f f c f f f . . 
    f f f f f f c c f f f c . 
    f f f c f f f f f f f c . 
    c c c f f f d d f f c c . 
    f f f f f d d f f c c f . 
    f f f 9 f d d f 9 f f f . 
    . f d 1 f d d f 1 d f . . 
    . f d d d d d d d d f . . 
    . f f f 8 f f 8 f f f . . 
    f d f 4 9 9 9 9 4 f d f . 
    d d f 4 4 9 9 4 4 f d d . 
    d d f 4 4 9 9 4 4 f d d . 
    . . . f f f f f f . . . . 
    . . . f f . . f f . . . . 
    `, SpriteKind.Player)
Andrew.setStayInScreen(true)
controller.moveSprite(Andrew)
scene.setBackgroundColor(9)
game.onUpdateInterval(2000, function () {
    randomAssets()
})
