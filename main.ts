controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 6 . . . . . . . . . . 
        . 6 6 6 6 6 6 . . . . . . . . . 
        . . . . . 6 . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, space_plane, 200, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 500)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
})
let otherSprite: Sprite = null
let projectile: Sprite = null
let space_plane: Sprite = null
space_plane = sprites.create(img`
    . . . . 8 8 . . . . . . . . . . 
    . . . . 8 d 8 . . . . . 8 8 . . 
    . . . . 8 d d 8 . . . 8 8 8 8 . 
    . 8 . . 8 8 d 8 8 . 8 8 8 8 8 8 
    . 8 8 . . 8 d d 8 8 4 4 8 2 2 8 
    . . 8 . . . 8 d 8 8 4 2 8 2 4 8 
    . . . 8 8 8 8 8 8 . 8 8 8 8 8 8 
    . . 8 . . 8 8 8 . . 8 4 4 4 8 8 
    . . 8 . . . 8 8 8 . . 8 4 4 8 . 
    . 8 8 . . 8 8 d 8 . . . 8 8 . . 
    . 8 . . 8 d 8 d 8 . . . . . . . 
    . . . 8 d d d 8 8 . . . . . . . 
    . . . . 8 d 8 8 . . . . . . . . 
    . . . . . 8 8 . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(space_plane, 200, 200)
space_plane.setStayInScreen(true)
info.setLife(3)
game.onUpdateInterval(1000, function () {
    otherSprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . 6 6 6 . . 
        . . . . . . . . . . 6 6 6 . . . 
        . . 6 6 . . . . . . 6 6 6 . . 6 
        . 6 6 6 6 . . . . . 6 6 6 . 6 6 
        . 6 6 6 6 6 . . . 6 6 6 6 . 6 . 
        . 6 6 4 6 6 . . . 6 6 6 . . 6 . 
        . 6 6 6 6 6 6 . 6 . 6 . . 6 6 . 
        . 6 6 6 6 6 6 6 6 6 6 6 6 6 . . 
        . . 6 6 6 . . 6 6 6 . . . 6 . . 
        . . . . . . . 6 6 6 . . . 6 . . 
        . . . . . . . 6 6 6 6 . . 6 6 . 
        . . . . . . . 6 6 6 6 6 . 6 6 6 
        . . . . . . . . 6 6 6 6 . . . . 
        `, SpriteKind.Enemy)
    otherSprite.setVelocity(-100, 0)
    otherSprite.setPosition(160, randint(5, 115))
    otherSprite.setFlag(SpriteFlag.AutoDestroy, true)
})
