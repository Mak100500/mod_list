// Visit the wiki for more info - https://kubejs.com/

Platform.getInfo('kubejs').name = "Create: Electric Steel"

StartupEvents.registry('item', event => {
    

    event.create('energized_steel_ingot')
         .displayName('Наэлектризованная сталь')


    event.create('incomplete_energized_steel')
         .displayName('Необработанный стале-электрумовый сплав')
         
})