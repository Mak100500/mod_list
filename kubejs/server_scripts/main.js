// Visit the wiki for more info - https://kubejs.com/

ServerEvents.recipes(event => {

    const steelIngots = [
        'createmetallurgy:steel_ingot',
        'tfmg:steel_ingot',             
        'createbigcannons:steel_ingot', 
        'alloyed:steel_ingot',
        'create_ironworks:steel_ingot'
    ]

   // крафт плавки необработанного сплава с проверкой
    steelIngots.forEach(steel => {

        if (Item.of(steel).id !== 'minecraft:air') {
            event.recipes.create.mixing(
                'kubejs:incomplete_energized_steel', 
                [
                    steel, 
                    'createaddition:electrum_ingot'
                ]
            ).superheated()
        }
    })

   // крафт наэлектризованной стали
    event.recipes.create.sequenced_assembly(
        [
            Item.of('kubejs:energized_steel_ingot')
        ], 
        'kubejs:incomplete_energized_steel', 
        [
        
            event.recipes.createPressing('kubejs:incomplete_energized_steel', 'kubejs:incomplete_energized_steel'),
            
          
            event.recipes.createDeploying('kubejs:incomplete_energized_steel', [
                'kubejs:incomplete_energized_steel', 
                'create_new_age:overcharged_gold'
            ]),
            
          
            event.recipes.createPressing('kubejs:incomplete_energized_steel', 'kubejs:incomplete_energized_steel')
        ]
    )
    .transitionalItem('kubejs:incomplete_energized_steel')
    .loops(1)
    .id('kubejs:sequenced_assembly/energized_steel_ingot')

})