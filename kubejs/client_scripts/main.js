// Visit the wiki for more info - https://kubejs.com/


ClientEvents.lang('ru_ru', event => {
    
    
    event.add('item.kubejs.electrite_ingot', 'Электритовый слиток')
    event.add('item.kubejs.incomplete_electrite', 'Необработанный электрит')

    event.add('item.kubejs.electrite_sword', 'Электритовый меч')
    event.add('item.kubejs.electrite_pickaxe', 'Электритовая кирка')
    event.add('item.kubejs.electrite_axe', 'Электритовый топор')
    event.add('item.kubejs.electrite_shovel', 'Электритовая лопата')
    event.add('item.kubejs.electrite_hoe', 'Электритовая мотыга')

})


ItemEvents.modifyTooltips(event => {

   
    event.add('kubejs:electrite_ingot', [
        Text.yellow('Высокотехнологичный сплав стали и электрума.'),
    ])

    
    event.add('kubejs:incomplete_electrite', [
        Text.gray('Грубый сплав.'),
        Text.darkGray('Требует прессования и легирования для стабилизации структуры.')
    ])

})
