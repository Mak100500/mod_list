// Visit the wiki for more info - https://kubejs.com

ServerEvents.recipes(event => {

    
    const steelIngots = [
        'createmetallurgy:steel_ingot', 
        'tfmg:steel_ingot',           
        'createbigcannons:steel_ingot', 
        'alloyed:steel_ingot',           
        'create_ironworks:steel_ingot'
    ]

    
    steelIngots.forEach(steel => {
        if (Item.of(steel).id !== 'minecraft:air') {
            event.recipes.create.mixing(
                'kubejs:incomplete_electrite', 
                [
                    steel, 
                    'createaddition:electrum_ingot'
                ]
            ).superheated()
        }
    })

   
    event.recipes.create.sequenced_assembly(
        [
            'kubejs:electrite_ingot' 
        ], 
        'kubejs:incomplete_electrite', 
        [
            
            event.recipes.create.pressing('kubejs:incomplete_electrite', 'kubejs:incomplete_electrite'),
            
           
            event.recipes.create.deploying('kubejs:incomplete_electrite', [
                'kubejs:incomplete_electrite', 
                'create_new_age:overcharged_gold'
            ]),
            
            
            event.recipes.create.deploying('kubejs:incomplete_electrite', [
                'kubejs:incomplete_electrite', 
                'minecraft:redstone'
            ]),
            
           
            event.recipes.create.pressing('kubejs:incomplete_electrite', 'kubejs:incomplete_electrite')
        ]
    )
    .transitionalItem('kubejs:incomplete_electrite') 
    .loops(1) 
    .id('kubejs:sequenced_assembly/electrite_ingot')

    // 1. МЕЧ
    event.recipes.create.sequenced_assembly(
        ['kubejs:electrite_sword'], 
        'minecraft:stick', 
        [
            event.recipes.create.deploying('kubejs:incomplete_electrite', ['kubejs:incomplete_electrite', 'kubejs:electrite_ingot']),
            event.recipes.create.deploying('kubejs:incomplete_electrite', ['kubejs:incomplete_electrite', 'kubejs:electrite_ingot']),
            event.recipes.create.deploying('kubejs:incomplete_electrite', ['kubejs:incomplete_electrite', 'minecraft:redstone']),
            event.recipes.create.pressing('kubejs:incomplete_electrite', 'kubejs:incomplete_electrite')
        ]
    )
    .transitionalItem('kubejs:incomplete_electrite')
    .loops(1)
    .id('kubejs:sequenced_assembly/electrite_sword')

    // 2. КИРКА
    event.recipes.create.sequenced_assembly(
        ['kubejs:electrite_pickaxe'], 
        'minecraft:stick', 
        [
            event.recipes.create.deploying('kubejs:incomplete_electrite', ['kubejs:incomplete_electrite', 'minecraft:stick']),
            event.recipes.create.deploying('kubejs:incomplete_electrite', ['kubejs:incomplete_electrite', 'kubejs:electrite_ingot']),
            event.recipes.create.deploying('kubejs:incomplete_electrite', ['kubejs:incomplete_electrite', 'kubejs:electrite_ingot']),
            event.recipes.create.deploying('kubejs:incomplete_electrite', ['kubejs:incomplete_electrite', 'kubejs:electrite_ingot']),
            event.recipes.create.deploying('kubejs:incomplete_electrite', ['kubejs:incomplete_electrite', 'minecraft:redstone']),
            event.recipes.create.pressing('kubejs:incomplete_electrite', 'kubejs:incomplete_electrite')
        ]
    )
    .transitionalItem('kubejs:incomplete_electrite')
    .loops(1)
    .id('kubejs:sequenced_assembly/electrite_pickaxe')

    // 3. ТОПОР
    event.recipes.create.sequenced_assembly(
        ['kubejs:electrite_axe'], 
        'minecraft:stick', 
        [
            event.recipes.create.deploying('kubejs:incomplete_electrite', ['kubejs:incomplete_electrite', 'minecraft:stick']),
            event.recipes.create.deploying('kubejs:incomplete_electrite', ['kubejs:incomplete_electrite', 'kubejs:electrite_ingot']),
            event.recipes.create.deploying('kubejs:incomplete_electrite', ['kubejs:incomplete_electrite', 'kubejs:electrite_ingot']),
            event.recipes.create.deploying('kubejs:incomplete_electrite', ['kubejs:incomplete_electrite', 'kubejs:electrite_ingot']),
            event.recipes.create.deploying('kubejs:incomplete_electrite', ['kubejs:incomplete_electrite', 'minecraft:redstone']),
            event.recipes.create.pressing('kubejs:incomplete_electrite', 'kubejs:incomplete_electrite')
        ]
    )
    .transitionalItem('kubejs:incomplete_electrite')
    .loops(1)
    .id('kubejs:sequenced_assembly/electrite_axe')

    // 4. ЛОПАТА
    event.recipes.create.sequenced_assembly(
        ['kubejs:electrite_shovel'], 
        'minecraft:stick', 
        [
            event.recipes.create.deploying('kubejs:incomplete_electrite', ['kubejs:incomplete_electrite', 'minecraft:stick']),
            event.recipes.create.deploying('kubejs:incomplete_electrite', ['kubejs:incomplete_electrite', 'kubejs:electrite_ingot']),
            event.recipes.create.deploying('kubejs:incomplete_electrite', ['kubejs:incomplete_electrite', 'minecraft:redstone']),
            event.recipes.create.pressing('kubejs:incomplete_electrite', 'kubejs:incomplete_electrite')
        ]
    )
    .transitionalItem('kubejs:incomplete_electrite')
    .loops(1)
    .id('kubejs:sequenced_assembly/electrite_shovel')

    // 5. МОТЫГА
    event.recipes.create.sequenced_assembly(
        ['kubejs:electrite_hoe'], 
        'minecraft:stick', 
        [
            event.recipes.create.deploying('kubejs:incomplete_electrite', ['kubejs:incomplete_electrite', 'minecraft:stick']),
            event.recipes.create.deploying('kubejs:incomplete_electrite', ['kubejs:incomplete_electrite', 'kubejs:electrite_ingot']),
            event.recipes.create.deploying('kubejs:incomplete_electrite', ['kubejs:incomplete_electrite', 'kubejs:electrite_ingot']),
            event.recipes.create.deploying('kubejs:incomplete_electrite', ['kubejs:incomplete_electrite', 'minecraft:redstone']),
            event.recipes.create.pressing('kubejs:incomplete_electrite', 'kubejs:incomplete_electrite')
        ]
    )
    .transitionalItem('kubejs:incomplete_electrite')
    .loops(1)
    .id('kubejs:sequenced_assembly/electrite_hoe')

})

ServerEvents.tags('item', event => {
    event.add('minecraft:cluster_max_harvestables', 'kubejs:electrite_pickaxe')
    event.add('minecraft:picks', 'kubejs:electrite_pickaxe')
})

ServerEvents.tags('item', event => {
    event.add('kubejs:electrite_ingot', 'kubejs:electrite_ingot')
})