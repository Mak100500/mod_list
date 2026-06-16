// Visit the wiki for more info - https://kubejs.com

// ====================
// РЕЦЕПТЫ И КРАФТЫ 
// ====================
ServerEvents.recipes(event => {

    const TOOL_KEYS = {
        E: 'kubejs:electrite_ingot',
        R: 'minecraft:redstone_block',
        Q: 'create:polished_rose_quartz',
        G: 'create_new_age:overcharged_gold', 
        S: 'minecraft:stick',
        P: 'create:precision_mechanism'
    }

    const ARMOR_QUARTZ_KEYS = {
        E: 'kubejs:electrite_ingot',
        R: 'minecraft:redstone_block',
        Q: 'create:polished_rose_quartz',
        G: 'create_new_age:overcharged_gold',
        P: 'create:precision_mechanism'
    }

    const ARMOR_BASE_KEYS = {
        E: 'kubejs:electrite_ingot',
        R: 'minecraft:redstone_block',
        G: 'create_new_age:overcharged_gold',
        P: 'create:precision_mechanism'
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
        event.recipes.create.deploying('kubejs:incomplete_electrite', ['kubejs:incomplete_electrite', 'minecraft:redstone_block']),
        event.recipes.create.pressing('kubejs:incomplete_electrite', 'kubejs:incomplete_electrite')
    ]).transitionalItem('kubejs:incomplete_electrite').loops(1).id('kubejs:sequenced_assembly/electrite_ingot')

    event.recipes.create.sequenced_assembly(['kubejs:advanced_electron_tube'], 'kubejs:incomplete_electron_tube', [
        event.recipes.create.deploying('kubejs:incomplete_electron_tube', ['kubejs:incomplete_electron_tube', 'minecraft:redstone_dust']),
        event.recipes.create.deploying('kubejs:incomplete_electron_tube', ['kubejs:incomplete_electron_tube', 'create_new_age:overcharged_gold']),
        event.recipes.create.filling('kubejs:incomplete_electron_tube', [Fluid.of('kubejs:molten_electrite', 50)])
    ]).transitionalItem('kubejs:incomplete_electron_tube').loops(1).id('kubejs:sequenced_assembly/advanced_electron_tube')


    // ==================================
    // МЕХАНИЧЕСКИЙ КРАФТ ИНСТРУМЕНТОВ 
    // ==================================

    // 1. МЕЧ 
    event.recipes.create.mechanical_crafting('kubejs:electrite_sword', [
        ' E ',
        ' E ',
        'RQR',
        ' G ',
        ' P ',
        ' S '
    ], TOOL_KEYS)

    // 2. КИРКА
    event.recipes.create.mechanical_crafting('kubejs:electrite_pickaxe', [
        'EEEEE',
        'R G R',
        '  P  ',
        '  Q  ',
        '  S  ',
        '  S  '
    ], TOOL_KEYS)

    // 3. ТОПОР 
    event.recipes.create.mechanical_crafting('kubejs:electrite_axe', [
        'EEE ',
        'EEQ ',
        'R P ',
        'R S ',
        'G S ',
        '  S '
    ], TOOL_KEYS)

    // 4. ЛОПАТА
    event.recipes.create.mechanical_crafting('kubejs:electrite_shovel', [
        ' E ',
        'RQR',
        ' G ',
        ' P ',
        ' S ',
        ' S '
    ], TOOL_KEYS)

    // 5. МОТЫГА
    event.recipes.create.mechanical_crafting('kubejs:electrite_hoe', [
        'EEEE',
        'R Q ',
        'R G ',
        '  P ',
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
        'P   P',
        'G   G'
    ], ARMOR_QUARTZ_KEYS)

    // НАГРУДНИК
    event.recipes.create.mechanical_crafting('kubejs:electrite_chestplate', [
        'E   E',
        'ERERE',
        'EGQGE',
        'EPPPE',
        ' EEE '
    ], ARMOR_QUARTZ_KEYS)

    // ПОНОЖИ
    event.recipes.create.mechanical_crafting('kubejs:electrite_leggings', [
        'EEEEE',
        'R   R',
        'G   G',
        'P   P',
        'E   E',
        'E   E'
    ], ARMOR_BASE_KEYS)

    // БОТИНКИ
    event.recipes.create.mechanical_crafting('kubejs:electrite_boots', [
        'E E',
        'R R',
        'G G',
        'P P'
    ], ARMOR_BASE_KEYS)


    // =======================================
    // КРАФТЫ БЛОКА И РАЗБОРКА НА ИНГРЕДИЕНТЫ
    // =======================================

    // 1. Механический крафт блока
    event.recipes.create.mechanical_crafting('kubejs:electrite_block', [
        'EEE',
        'EEE',
        'EEE'
    ], { E: 'kubejs:electrite_ingot' })

    // 2. Сжатие предметов механическим прессом
    event.recipes.create.compacting('kubejs:electrite_block', [
        '9x kubejs:electrite_ingot'
    ])

    // 3. Разбор блока на больших Дробильных колесах
    event.recipes.create.crushing('9x kubejs:electrite_ingot', 'kubejs:electrite_block')

    // ===============================
    // ЛИСТ И РАСПЛАВ ЭЛЕКТРИТА
    // ===============================

    event.recipes.create.pressing('kubejs:electrite_sheet', 'kubejs:electrite_ingot')
        .id('kubejs:pressing/electrite_sheet')

    const moltenElectrite = Fluid.of('kubejs:molten_electrite', 90)
    const moltenElectriteBlock = Fluid.of('kubejs:molten_electrite', 810)

    event.recipes.createmetallurgy.melting(moltenElectrite, 'kubejs:electrite_ingot', 100)
        .id('kubejs:melting/electrite_ingot')

    event.recipes.createmetallurgy.melting(moltenElectrite, 'kubejs:electrite_sheet', 80)
        .id('kubejs:melting/electrite_sheet')

    event.recipes.createmetallurgy.melting(moltenElectriteBlock, 'kubejs:electrite_block', 200)
        .id('kubejs:melting/electrite_block')

    event.recipes.createmetallurgy.casting_in_table(
        'kubejs:electrite_ingot',
        [moltenElectrite, 'createmetallurgy:graphite_ingot_mold'],
        80,
        false
    ).id('kubejs:casting/electrite_ingot')

    event.recipes.createmetallurgy.casting_in_table(
        'kubejs:electrite_sheet',
        [moltenElectrite, 'createmetallurgy:graphite_plate_mold'],
        60,
        false
    ).id('kubejs:casting/electrite_sheet')

    event.recipes.createmetallurgy.casting_in_basin(
        'kubejs:electrite_block',
        moltenElectriteBlock,
        160
    ).id('kubejs:casting/electrite_block')
})


// =====================================================
//  ЭФФЕКТ ДЕТОНАЦИИ ПРИ СМЕРТИ ПРИ ПОЛНОМ СЕТЕ БРОНИ
// =====================================================
EntityEvents.death(event => {
    const entity = event.entity
    
    if (!entity.isPlayer()) return

    const player = entity
    
    let hasHelmet = player.getEquipment('head').id == 'kubejs:electrite_helmet'
    let hasChest = player.getEquipment('chest').id == 'kubejs:electrite_chestplate'
    let hasLegs  = player.getEquipment('legs').id == 'kubejs:electrite_leggings'
    let hasBoots = player.getEquipment('feet').id == 'kubejs:electrite_boots'

    if (hasHelmet && hasChest && hasLegs && hasBoots) {
        let x = player.x
        let y = player.y
        let z = player.z
        let dim = player.level.dimension
        
        
        player.server.scheduleInTicks(5, callback => {
          
            player.server.runCommandSilent(`execute in ${dim} run summon tnt ${x} ${y + 2.0} ${z} {Fuse:1}`)
        })
    }
})
// ===========
//  ТЕГИ
// ===========
ServerEvents.tags('item', event => {
    event.add('minecraft:cluster_max_harvestables', 'kubejs:electrite_pickaxe')
    event.add('minecraft:picks', 'kubejs:electrite_pickaxe')
    event.add('kubejs:electrite_ingot', 'kubejs:electrite_ingot')
    event.add('c:ingots/electrite', 'kubejs:electrite_ingot')
    event.add('c:plates/electrite', 'kubejs:electrite_sheet')
    event.add('c:sheets/electrite', 'kubejs:electrite_sheet')
    event.add('c:storage_blocks/electrite', 'kubejs:electrite_block')
})

ServerEvents.tags('fluid', event => {
    event.add('c:molten_electrite', 'kubejs:molten_electrite')
})

// =====================================================
//   УДАЛЕНИЕ КРАФТА НЕЗЕРИТОВОЙ БРОНИ
// =====================================================
ServerEvents.recipes(event => {
    
    event.remove({ output: 'minecraft:netherite_helmet' })
    event.remove({ output: 'minecraft:netherite_chestplate' })
    event.remove({ output: 'minecraft:netherite_leggings' })
    event.remove({ output: 'minecraft:netherite_boots' })
    
})