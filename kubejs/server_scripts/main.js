// Visit the wiki for more info - https://kubejs.com

// ====================
// РЕЦЕПТЫ И КРАФТЫ 
// ====================
ServerEvents.recipes(event => {

   
    const TOOL_KEYS = {
        E: 'kubejs:electrite_ingot',
        R: 'minecraft:redstone',
        Q: 'create:polished_rose_quartz',
        G: 'create_new_age:overcharged_gold', 
        S: 'minecraft:stick'
    }

    const ARMOR_QUARTZ_KEYS = {
        E: 'kubejs:electrite_ingot',
        R: 'minecraft:redstone',
        Q: 'create:polished_rose_quartz',
        G: 'create_new_age:overcharged_gold'
    }

    const ARMOR_BASE_KEYS = {
        E: 'kubejs:electrite_ingot',
        R: 'minecraft:redstone',
        G: 'create_new_age:overcharged_gold'
    }

   
    const steelIngots = [
        'createmetallurgy:steel_ingot', 
        'tfmg:steel_ingot',           
        'createbigcannons:steel_ingot', 
        'alloyed:steel_ingot',           
        'create_ironworks:steel_ingot'
    ]

    steelIngots.forEach(steel => {
        if (Item.of(steel).id !== 'minecraft:air') {
            event.recipes.create.mixing('kubejs:incomplete_electrite', [steel, 'createaddition:electrum_ingot']).superheated()
        }
    })

    event.recipes.create.sequenced_assembly(['kubejs:electrite_ingot'], 'kubejs:incomplete_electrite', [
        event.recipes.create.pressing('kubejs:incomplete_electrite', 'kubejs:incomplete_electrite'),
        event.recipes.create.deploying('kubejs:incomplete_electrite', ['kubejs:incomplete_electrite', 'create_new_age:overcharged_gold']),
        event.recipes.create.deploying('kubejs:incomplete_electrite', ['kubejs:incomplete_electrite', 'minecraft:redstone']),
        event.recipes.create.pressing('kubejs:incomplete_electrite', 'kubejs:incomplete_electrite')
    ]).transitionalItem('kubejs:incomplete_electrite').loops(1).id('kubejs:sequenced_assembly/electrite_ingot')


    // ==================================
    // МЕХАНИЧЕСКИЙ КРАФТ ИНСТРУМЕНТОВ 
    // ==================================

  // 1. МЕЧ 
    event.recipes.create.mechanical_crafting('kubejs:electrite_sword', [
        ' E ',
        ' E ',
        'RQR',
        ' G ',
        ' S '
    ], TOOL_KEYS)

    // 2. КИРКА
    event.recipes.create.mechanical_crafting('kubejs:electrite_pickaxe', [
        'EEEEE',
        'R G R',
        '  Q  ',
        '  S  ',
        '  S  '
    ], TOOL_KEYS)

    // 3. ТОПОР 
    event.recipes.create.mechanical_crafting('kubejs:electrite_axe', [
        'EEE ',
        'EEQ ',
        'R S ',
        'G S ',
        '  S '
    ], TOOL_KEYS)

    // 4. ЛОПАТА
    event.recipes.create.mechanical_crafting('kubejs:electrite_shovel', [
        ' E ',
        'RQR',
        ' G ',
        ' S ',
        ' S '
    ], TOOL_KEYS)

    // 5. МОТЫГА
    event.recipes.create.mechanical_crafting('kubejs:electrite_hoe', [
        'EEEE',
        'R Q ',
        '  S ',
        '  G ',
        '  S '
    ], TOOL_KEYS)

    // =============================
    // МЕХАНИЧЕСКИЙ КРАФТ БРОНИ 
    // =============================

    // ШЛЕМ
    event.recipes.create.mechanical_crafting('kubejs:electrite_helmet', [
        'EEEEE',
        'R Q R',
        'G   G'
    ], ARMOR_QUARTZ_KEYS)

    // НАГРУДНИК
    event.recipes.create.mechanical_crafting('kubejs:electrite_chestplate', [
        'E   E',
        'ERERE',
        'EGQGE',
        'EEEEE',
        ' EEE '
    ], ARMOR_QUARTZ_KEYS)

    // ПОНОЖИ
    event.recipes.create.mechanical_crafting('kubejs:electrite_leggings', [
        'EEEEE',
        'R   R',
        'G   G',
        'E   E',
        'E   E'
    ], ARMOR_BASE_KEYS)

    // БОТИНКИ
    event.recipes.create.mechanical_crafting('kubejs:electrite_boots', [
        'E   E',
        'R   R',
        'G   G'
    ], ARMOR_BASE_KEYS)
})

// ===========
// 4. ТЕГИ
// ===========
ServerEvents.tags('item', event => {
    event.add('minecraft:cluster_max_harvestables', 'kubejs:electrite_pickaxe')
    event.add('minecraft:picks', 'kubejs:electrite_pickaxe')
    event.add('kubejs:electrite_ingot', 'kubejs:electrite_ingot')
    event.add('c:ingots/electrite', 'kubejs:electrite_ingot') 
})