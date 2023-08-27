onEvent('recipes', event => {
    event.custom({
      "type": "chipped:carpenters_table",
      "tags": [
          "kubejs:spruce_bookshelf",
          "kubejs:birch_bookshelf",
          "kubejs:jungle_bookshelf",
          "kubejs:acacia_bookshelf",
          "kubejs:dark_oak_bookshelf",
          "kubejs:crimson_bookshelf",
          "kubejs:warped_bookshelf"
      ]
    })

    //Remove from crafting table
    event.remove({
        output: [
            //Bookshelves
            /woodworks:(spruce|birch|jungle|acacia|dark_oak|crimson|warped)_bookshelf/,
            //Chests
            /woodworks:(oak|spruce|birch|jungle|acacia|dark_oak|crimson|warped)_chest/
        ],
        type:"minecraft:crafting_shaped"
    })
    event.remove({
        output: [
            //Trapped chests
            /woodworks:(oak|spruce|birch|jungle|acacia|dark_oak|crimson|warped)_trapped_chest/,
        ],
        type:"minecraft:crafting_shapeless"
    })
})