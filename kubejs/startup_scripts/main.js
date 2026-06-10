// Visit the wiki for more info - https://kubejs.com/\

Platform.getInfo('kubejs').name = 'Create: Electric Steel'

StartupEvents.registry('item', event => {
  
    // 1. МАТЕРИАЛЫ
    event.create('electrite_ingot').texture('kubejs:item/electrite_ingot')
    event.create('incomplete_electrite').texture('kubejs:item/incomplete_electrite')


    // 2. ИНСТРУМЕНТЫ

    // МЕЧ
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

    // ТОПОР
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

    // КИРКА
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

    // ЛОПАТА
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

    // МОТЫГА
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