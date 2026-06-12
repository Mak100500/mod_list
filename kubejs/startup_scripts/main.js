// Visit the wiki for more info - https://kubejs.com/\

Platform.getInfo('kubejs').name = 'Create: Electric Steel'

// ==================================
// 1. РЕГИСТРАЦИЯ МАТЕРИАЛА БРОНИ 
// ==================================
StartupEvents.registry('armor_material', event => {
    event.create('electrite')
        .defense({
            helmet: 7,      
            chestplate: 14,  
            leggings: 10,    
            boots: 6         
        })
        .toughness(7.0)                
        .knockbackResistance(0.50)     
        .enchantmentValue(30)         
        .equipSound('minecraft:item.armor.equip_netherite')
        .repairIngredient(() => Ingredient.of('#kubejs:electrite_ingot'))
})

// ==========================================
// 2. РЕГИСТРАЦИЯ ПРЕДМЕТОВ И ИНСТРУМЕНТОВ
// ==========================================
StartupEvents.registry('item', event => {

    // МАТЕРИАЛЫ
    event.create('electrite_ingot').texture('kubejs:item/electrite_ingot')
    event.create('incomplete_electrite').texture('kubejs:item/incomplete_electrite')

    // ХАРАКТЕРИСТИКИ ИНСТРУМЕНТОВ 
    const tech = tier => {
        tier.uses = 3500               
        tier.speed = 24.0              
        tier.enchantmentValue = 30     
        tier.repairIngredient = '#kubejs:electrite_ingot'
    }

    // МЕЧ 
    event.create('electrite_sword', 'sword')
        .texture('kubejs:item/electrite_sword')
        .tier('netherite')
        .attackDamageBaseline(7.0)     
        .speedBaseline(-1.8)           
        .modifyTier(tech)

    // ТОПОР 
    event.create('electrite_axe', 'axe')
        .texture('kubejs:item/electrite_axe')
        .tier('netherite')
        .attackDamageBaseline(10.0)   
        .speedBaseline(-2.4)
        .modifyTier(tech)

    // КИРКА 
    event.create('electrite_pickaxe', 'pickaxe')
        .texture('kubejs:item/electrite_pickaxe')
        .tier('netherite')
        .attackDamageBaseline(4.0)
        .speedBaseline(-2.0)
        .modifyTier(tech)

    // ЛОПАТА 
    event.create('electrite_shovel', 'shovel')
        .texture('kubejs:item/electrite_shovel')
        .tier('netherite')
        .attackDamageBaseline(4.5)
        .speedBaseline(-2.2)
        .modifyTier(tech)

    // МОТЫГА
    event.create('electrite_hoe', 'hoe')
        .texture('kubejs:item/electrite_hoe')
        .tier('netherite')
        .attackDamageBaseline(-1.0)
        .speedBaseline(1.0)
        .modifyTier(tech)

    // БРОНЯ 
    event.create('electrite_helmet', 'helmet').material('kubejs:electrite').texture('kubejs:item/electrite_helmet').fireResistant().maxDamage(800)
    event.create('electrite_chestplate', 'chestplate').material('kubejs:electrite').texture('kubejs:item/electrite_chestplate').fireResistant().maxDamage(1200)
    event.create('electrite_leggings', 'leggings').material('kubejs:electrite').texture('kubejs:item/electrite_leggings').fireResistant().maxDamage(1100)
    event.create('electrite_boots', 'boots').material('kubejs:electrite').texture('kubejs:item/electrite_boots').fireResistant().maxDamage(900)
})

// Регистрация кастомных блоков
StartupEvents.registry('block', event => {
    event.create('electrite_block') 
        .soundType('metal')         
        .hardness(25.0)              
        .resistance(1200.0)            
        .requiresTool(true)         
        .tagBlock('minecraft:mineable/pickaxe')   
        .tagBlock('minecraft:needs_diamond_tool')  
})