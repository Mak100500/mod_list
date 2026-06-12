// Visit the wiki for more info - https://kubejs.com/\

Platform.getInfo('kubejs').name = 'Create: Electric Steel'


StartupEvents.registry('armor_material', event => {
    event.create('electrite')
        .defense({
            helmet: 4,
            chestplate: 9,
            leggings: 7,
            boots: 4
        })
        .toughness(3.0)
        .knockbackResistance(0.15)
        .enchantmentValue(24)
        .equipSound('minecraft:item.armor.equip_netherite')
        .repairIngredient(() => Ingredient.of('#c:ingots/electrite'))
})

// РЕГИСТРАЦИЯ ВСЕХ ПРЕДМЕТОВ
StartupEvents.registry('item', event => {

    // МАТЕРИАЛЫ
    event.create('electrite_ingot').texture('kubejs:item/electrite_ingot')
    event.create('incomplete_electrite').texture('kubejs:item/incomplete_electrite')


    // ИНСТРУМЕНТЫ

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


   // БРОНЯ
event.create('electrite_helmet', 'helmet')
    .material('kubejs:electrite')
    .texture('kubejs:item/electrite_helmet')
    .fireResistant()
    .maxDamage(420)

event.create('electrite_chestplate', 'chestplate')
    .material('kubejs:electrite')
    .texture('kubejs:item/electrite_chestplate')
    .fireResistant()
    .maxDamage(600)

event.create('electrite_leggings', 'leggings')
    .material('kubejs:electrite')
    .texture('kubejs:item/electrite_leggings')
    .fireResistant()
    .maxDamage(560)

event.create('electrite_boots', 'boots')
    .material('kubejs:electrite')
    .texture('kubejs:item/electrite_boots')
    .fireResistant()
    .maxDamage(490)
})