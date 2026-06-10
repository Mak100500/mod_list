// Visit the wiki for more info - https://kubejs.com/\

Platform.getInfo('kubejs').name = 'Create: Electric Steel'

StartupEvents.registry('item', event => {
  
    // 1. МАТЕРИАЛЫ
    event.create('electrite_ingot').texture('kubejs:item/electrite_ingot')
    event.create('incomplete_electrite').texture('kubejs:item/incomplete_electrite')


    // 2. ИНСТРУМЕНТЫ

    // МЕЧ (В игре: Урон 9.0 / Скорость 2.0)
    event.create('electrite_sword', 'sword')
        .texture('kubejs:item/electrite_sword')
        .tier('netherite')
        .attackDamageBaseline(4.0)
        .speedBaseline(-2.0)
        .modifyTier(tier => {
            tier.uses = 1800
            tier.speed = 16.0
            tier.enchantmentValue = 25
            tier.repairIngredient = '#kubejs:electrite_ingot'
        })

    // ТОПОР (В игре: Урон 11.0 / Скорость 1.4)
    event.create('electrite_axe', 'axe')
        .texture('kubejs:item/electrite_axe')
        .tier('netherite')
        .attackDamageBaseline(6.0)
        .speedBaseline(-2.6)
        .modifyTier(tier => {
            tier.uses = 1800
            tier.speed = 16.0
            tier.enchantmentValue = 25
            tier.repairIngredient = '#kubejs:electrite_ingot'
        })

    // КИРКА (В игре: Урон 7.0 / Скорость 1.6)
    event.create('electrite_pickaxe', 'pickaxe')
        .texture('kubejs:item/electrite_pickaxe')
        .tier('netherite')
        .attackDamageBaseline(2.0)
        .speedBaseline(-2.4)
        .modifyTier(tier => {
            tier.uses = 1800
            tier.speed = 16.0
            tier.enchantmentValue = 25
            tier.repairIngredient = '#kubejs:electrite_ingot'
        })

    // ЛОПАТА (В игре: Урон 7.5 / Скорость 1.4)
    event.create('electrite_shovel', 'shovel')
        .texture('kubejs:item/electrite_shovel')
        .tier('netherite')
        .attackDamageBaseline(2.5)
        .speedBaseline(-2.6)
        .modifyTier(tier => {
            tier.uses = 1800
            tier.speed = 16.0
            tier.enchantmentValue = 25
            tier.repairIngredient = '#kubejs:electrite_ingot'
        })

    // МОТЫГА (В игре: Урон 3.0 / Скорость 4.5)
    event.create('electrite_hoe', 'hoe')
        .texture('kubejs:item/electrite_hoe')
        .tier('netherite')
        .attackDamageBaseline(-2.0)
        .speedBaseline(0.5)
        .modifyTier(tier => {
            tier.uses = 1800
            tier.speed = 16.0
            tier.enchantmentValue = 25
            tier.repairIngredient = '#kubejs:electrite_ingot'
        })
})