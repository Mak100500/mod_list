// Visit the wiki for more info - https://kubejs.com/\

Platform.getInfo('kubejs').name = 'Create: Electric Steel'

StartupEvents.registry('item', event => {
  
    // 1. МАТЕРИАЛЫ
    event.create('electrite_ingot').texture('kubejs:item/electrite_ingot')
    event.create('incomplete_electrite').texture('kubejs:item/incomplete_electrite')

  
    // 2. ИНСТРУМЕНТЫ 
    event.create('electrite_pickaxe', 'pickaxe').texture('kubejs:item/electrite_pickaxe').tier('electrite')
    event.create('electrite_axe', 'axe').texture('kubejs:item/electrite_axe').tier('electrite')
    event.create('electrite_shovel', 'shovel').texture('kubejs:item/electrite_shovel').tier('electrite')
    event.create('electrite_sword', 'sword').texture('kubejs:item/electrite_sword').tier('electrite')
    event.create('electrite_hoe', 'hoe').texture('kubejs:item/electrite_hoe').tier('electrite')

})



ItemEvents.toolTierRegistry(event => {
    event.add('electrite', tier => {
        tier.uses = 1800;
        tier.speed = 15.0;
        tier.attackDamageBonus = 3.5;
        tier.enchantmentValue = 25;
        tier.repairIngredient = '#kubejs:electrite_ingot';
    })
})
