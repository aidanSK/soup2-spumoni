// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
	// Change recipes here
})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})

onEvent('morejs.villager.trades', (event) => {
	//Farmer
	//Leatherworker
	//Shepard
    /*professions = [
                    "farmer", 
                    "shepherd", 
                    "leatherworker",
                    "armorer",
                    "weaponsmith",
                    "toolsmith",
                    "butcher",
                    "fisherman",
                    "fletcher",
                    "mason",
                    "mason"
    ]*/
	// Remove Default Trades
// ----------------------------------------------------------------------------------------------
	event.removeVanillaTrades(["farmer", "shepherd", "leatherworker", "armorer", "weaponsmith", "toolsmith", "butcher", "fisherman", "fletcher", "mason", "cleric"], 1)
	event.removeVanillaTrades(["farmer", "shepherd", "leatherworker", "armorer", "weaponsmith", "toolsmith", "butcher", "fisherman", "fletcher", "mason", "cleric"], 2)
	event.removeVanillaTrades(["farmer", "shepherd", "leatherworker", "armorer", "weaponsmith", "toolsmith", "butcher", "fisherman", "fletcher", "mason", "cleric"], 3)
	event.removeVanillaTrades(["farmer", "shepherd", "leatherworker", "armorer", "weaponsmith", "toolsmith", "butcher", "fisherman", "fletcher", "mason", "cleric"], 4)
	event.removeVanillaTrades(["farmer", "shepherd", "leatherworker", "armorer", "weaponsmith", "toolsmith", "butcher", "fisherman", "fletcher", "mason", "cleric"], 5)
	event.removeModdedTrades(["farmer", "shepherd", "leatherworker", "armorer", "weaponsmith", "toolsmith", "butcher", "fisherman", "fletcher", "mason", "cleric"], 1)
	event.removeModdedTrades(["farmer", "shepherd", "leatherworker", "armorer", "weaponsmith", "toolsmith", "butcher", "fisherman", "fletcher", "mason", "cleric"], 2)
	event.removeModdedTrades(["farmer", "shepherd", "leatherworker", "armorer", "weaponsmith", "toolsmith", "butcher", "fisherman", "fletcher", "mason", "cleric"], 3)
	event.removeModdedTrades(["farmer", "shepherd", "leatherworker", "armorer", "weaponsmith", "toolsmith", "butcher", "fisherman", "fletcher", "mason", "cleric"], 4)
	event.removeModdedTrades(["farmer", "shepherd", "leatherworker", "armorer", "weaponsmith", "toolsmith", "butcher", "fisherman", "fletcher", "mason", "cleric"], 5)


	// Add trades
// ----------------------------------------------------------------------------------------------
	// FARMER
	// lvl 1
	event.addCustomTrade("farmer", 1, (offer, entity, random) => {
        offer.setFirstInput("21x minecraft:wheat_seeds");
        //offer.setSecondInput(item);
        offer.setOutput("minecraft:emerald");
        offer.setMaxUses(16);
        offer.setVillagerExperience(2);
        offer.setPriceMultiplier(0.05);
    });
	event.addCustomTrade("farmer", 1, (offer, entity, random) => {
        offer.setFirstInput("21x supplementaries:flax_seeds");
        //offer.setSecondInput(item);
        offer.setOutput("minecraft:emerald");
        offer.setMaxUses(16);
        offer.setVillagerExperience(2);
        offer.setPriceMultiplier(0.05);
    });
	event.addCustomTrade("farmer", 1, (offer, entity, random) => {
        offer.setFirstInput("21x minecraft:beetroot_seeds");
        //offer.setSecondInput(item);
        offer.setOutput("minecraft:emerald");
        offer.setMaxUses(16);
        offer.setVillagerExperience(2);
        offer.setPriceMultiplier(0.05);
    });
	event.addCustomTrade("farmer", 1, (offer, entity, random) => {
        offer.setFirstInput("minecraft:emerald");
        //offer.setSecondInput(item);
        offer.setOutput("5x supplementaries:rope");
        offer.setMaxUses(16);
        offer.setVillagerExperience(2);
        offer.setPriceMultiplier(0.05);
    });
	event.addCustomTrade("farmer", 1, (offer, entity, random) => {
        offer.setFirstInput("minecraft:emerald");
        //offer.setSecondInput(item);
        offer.setOutput("8x minecraft:wheat");
        offer.setMaxUses(16);
        offer.setVillagerExperience(2);
        offer.setPriceMultiplier(0.05);
    });

	// lvl 2
	event.addCustomTrade("farmer", 2, (offer, entity, random) => {
        offer.setFirstInput("15x farmersdelight:tomato_seeds");
        //offer.setSecondInput(item);
        offer.setOutput("minecraft:emerald");
        offer.setMaxUses(16);
        offer.setVillagerExperience(5);
        offer.setPriceMultiplier(0.05);
    });
	event.addCustomTrade("farmer", 2, (offer, entity, random) => {
        offer.setFirstInput("15x farmersdelight:cabbage_seeds");
        //offer.setSecondInput(item);
        offer.setOutput("minecraft:emerald");
        offer.setMaxUses(16);
        offer.setVillagerExperience(5);
        offer.setPriceMultiplier(0.05);
    });
	event.addCustomTrade("farmer", 2, (offer, entity, random) => {
        offer.setFirstInput("15x culturaldelights:eggplant_seeds");
        //offer.setSecondInput(item);
        offer.setOutput("minecraft:emerald");
        offer.setMaxUses(16);
        offer.setVillagerExperience(5);
        offer.setPriceMultiplier(0.05);
    });
	event.addCustomTrade("farmer", 2, (offer, entity, random) => {
        offer.setFirstInput("2x minecraft:emerald");
        //offer.setSecondInput(item);
        offer.setOutput("farmersdelight:basket");
        offer.setMaxUses(6);
        offer.setVillagerExperience(10);
        offer.setPriceMultiplier(0.05);
    });
	event.addCustomTrade("farmer", 2, (offer, entity, random) => {
        offer.setFirstInput("minecraft:emerald");
        //offer.setSecondInput(item);
        offer.setOutput("3x farmersdelight:cabbage");
        offer.setMaxUses(16);
        offer.setVillagerExperience(5);
        offer.setPriceMultiplier(0.05);
    });

	// lvl 3 
	event.addCustomTrade("farmer", 3, (offer, entity, random) => {
        offer.setFirstInput("2x supplementaries:fodder");
        //offer.setSecondInput(item);
        offer.setOutput("minecraft:emerald");
        offer.setMaxUses(12);
        offer.setVillagerExperience(10);
        offer.setPriceMultiplier(0.05);
    });
	event.addCustomTrade("farmer", 3, (offer, entity, random) => {
        offer.setFirstInput("minecraft:iron_hoe");
        //offer.setSecondInput(item);
        offer.setOutput("3x minecraft:emerald");
        offer.setMaxUses(3);
        offer.setVillagerExperience(10);
        offer.setPriceMultiplier(0.05);
    });
	event.addCustomTrade("farmer", 3, (offer, entity, random) => {
        offer.setFirstInput("minecraft:emerald");
        //offer.setSecondInput(item);
        offer.setOutput("8x wildberries:cranberry_muffin");
        offer.setMaxUses(12);
        offer.setVillagerExperience(10);
        offer.setPriceMultiplier(0.05);
    });
	event.addCustomTrade("farmer", 3, (offer, entity, random) => {
        offer.setFirstInput("minecraft:emerald");
        //offer.setSecondInput(item);
        offer.setOutput("12x cookielicious:vanilla_cookie");
        offer.setMaxUses(12);
        offer.setVillagerExperience(10);
        offer.setPriceMultiplier(0.05);
    });
	event.addCustomTrade("farmer", 3, (offer, entity, random) => {
        offer.setFirstInput("minecraft:emerald");
        //offer.setSecondInput(item);
        offer.setOutput("12x neapolitan:strawberry_scones");
        offer.setMaxUses(12);
        offer.setVillagerExperience(10);
        offer.setPriceMultiplier(0.05);
    });

	// lvl 4
	event.addCustomTrade("farmer", 4, (offer, entity, random) => {
        offer.setFirstInput("miners_delight:rabbit_stew_cup");
        //offer.setSecondInput(item);
        offer.setOutput("2x minecraft:emerald");
        offer.setMaxUses(6);
        offer.setVillagerExperience(15);
        offer.setPriceMultiplier(0.05);
    });
	event.addCustomTrade("farmer", 4, (offer, entity, random) => {
        offer.setFirstInput("farmersdelight:vegetable_soup");
        //offer.setSecondInput(item);
        offer.setOutput("minecraft:emerald");
        offer.setMaxUses(6);
        offer.setVillagerExperience(15);
        offer.setPriceMultiplier(0.05);
    });
	event.addCustomTrade("farmer", 4, (offer, entity, random) => {
        offer.setFirstInput("farmersdelight:pumpkin_soup");
        //offer.setSecondInput(item);
        offer.setOutput("minecraft:emerald");
        offer.setMaxUses(6);
        offer.setVillagerExperience(15);
        offer.setPriceMultiplier(0.05);
    });
	event.addCustomTrade("farmer", 4, (offer, entity, random) => {
        offer.setFirstInput("minecraft:emerald");
        //offer.setSecondInput(item);
        offer.setOutput("4x brewinandchewin:kimchi");
        offer.setMaxUses(6);
        offer.setVillagerExperience(15);
        offer.setPriceMultiplier(0.05);
    });
	event.addCustomTrade("farmer", 4, (offer, entity, random) => {
        offer.setFirstInput("minecraft:emerald");
        //offer.setSecondInput(item);
        offer.setOutput("3x brewinandchewin:beer");
        offer.setMaxUses(6);
        offer.setVillagerExperience(15);
        offer.setPriceMultiplier(0.05);
    });

	// lvl 5
	event.addCustomTrade("farmer", 5, (offer, entity, random) => {
        offer.setFirstInput("alloyed:steel_hoe");
        //offer.setSecondInput(item);
        offer.setOutput("6x minecraft:emerald");
        offer.setMaxUses(3);
        offer.setVillagerExperience(20);
        offer.setPriceMultiplier(0.05);
    });
	event.addCustomTrade("farmer", 5, (offer, entity, random) => {
        offer.setFirstInput("2x minecraft:emerald");
        //offer.setSecondInput(item);
        offer.setOutput("3x brewinandchewin:mead");
        offer.setMaxUses(6);
        offer.setVillagerExperience(20);
        offer.setPriceMultiplier(0.05);
    });
	event.addCustomTrade("farmer", 5, (offer, entity, random) => {
        offer.setFirstInput("4x minecraft:emerald");
        //offer.setSecondInput(item);
        offer.setOutput("brewinandchewin:flaxen_cheese_wheel");
        offer.setMaxUses(3);
        offer.setVillagerExperience(30);
        offer.setPriceMultiplier(0.05);
    });
	event.addCustomTrade("farmer", 5, (offer, entity, random) => {
        offer.setFirstInput("20x minecraft:emerald");
        //offer.setSecondInput(item);
        offer.setOutput("overweight_farming:straw_hat");
        offer.setMaxUses(3);
        offer.setVillagerExperience(30);
        offer.setPriceMultiplier(0.05);
    });
	
// ----------------------------------------------------------------------------------------------
	// SHEPHERD
	// lvl 1
    event.addCustomTrade("shepherd", 1, (offer, entity, random) => {
        offer.setFirstInput("21x paragon_textiles:plant_fibers");
        //offer.setSecondInput(item);
        offer.setOutput("minecraft:emerald");
        offer.setMaxUses(16);
        offer.setVillagerExperience(2);
        offer.setPriceMultiplier(0.05);
    });
    event.addCustomTrade("shepherd", 1, (offer, entity, random) => {
        offer.setFirstInput("21x farmersdelight:straw");
        //offer.setSecondInput(item);
        offer.setOutput("minecraft:emerald");
        offer.setMaxUses(16);
        offer.setVillagerExperience(2);
        offer.setPriceMultiplier(0.05);
    });
    event.addCustomTrade("shepherd", 1, (offer, entity, random) => {
        offer.setFirstInput("minecraft:emerald");
        //offer.setSecondInput(item);
        offer.setOutput("4x paragon_textiles:twine");
        offer.setMaxUses(16);
        offer.setVillagerExperience(2);
        offer.setPriceMultiplier(0.05);
    });

    // lvl 2
    event.addCustomTrade("shepherd", 2, (offer, entity, random) => {
        offer.setFirstInput("12x minecraft:white_wool");
        //offer.setSecondInput(item);
        offer.setOutput("minecraft:emerald");
        offer.setMaxUses(12);
        offer.setVillagerExperience(5);
        offer.setPriceMultiplier(0.05);
    });
    event.addCustomTrade("shepherd", 2, (offer, entity, random) => {
        offer.setFirstInput("minecraft:emerald");
        //offer.setSecondInput(item);
        offer.setOutput("2x paragon_textiles:fabric_plain");
        offer.setMaxUses(12);
        offer.setVillagerExperience(5);
        offer.setPriceMultiplier(0.05);
    });
    event.addCustomTrade("shepherd", 2, (offer, entity, random) => {
        offer.setFirstInput("minecraft:emerald");
        //offer.setSecondInput(item);
        offer.setOutput("8x farmersdelight:full_tatami_mat");
        offer.setMaxUses(6);
        offer.setVillagerExperience(10);
        offer.setPriceMultiplier(0.05);
    });

    // lvl 3
    event.addCustomTrade("shepherd", 3, (offer, entity, random) => {
        offer.setFirstInput("minecraft:shears");
        //offer.setSecondInput(item);
        offer.setOutput("3x minecraft:emerald");
        offer.setMaxUses(3);
        offer.setVillagerExperience(10);
        offer.setPriceMultiplier(0.05);
    });
    event.addCustomTrade("shepherd", 3, (offer, entity, random) => {
        offer.setFirstInput("4x minecraft:emerald");
        //offer.setSecondInput(item);
        offer.setOutput("paragon_textiles:cushion_plain");
        offer.setMaxUses(12);
        offer.setVillagerExperience(10);
        offer.setPriceMultiplier(0.05);
    });
    
    // lvl 4
    event.addCustomTrade("shepherd", 4, (offer, entity, random) => {
        offer.setFirstInput("2x farmersdelight:dumplings");
        //offer.setSecondInput(item);
        offer.setOutput("minecraft:emerald");
        offer.setMaxUses(6);
        offer.setVillagerExperience(15);
        offer.setPriceMultiplier(0.05);
    });
    event.addCustomTrade("shepherd", 4, (offer, entity, random) => {
        offer.setFirstInput("farmersdelight:mixed_salad");
        //offer.setSecondInput(item);
        offer.setOutput("minecraft:emerald");
        offer.setMaxUses(6);
        offer.setVillagerExperience(15);
        offer.setPriceMultiplier(0.05);
    });
    event.addCustomTrade("shepherd", 4, (offer, entity, random) => {
        offer.setFirstInput("farmersdelight:black_cod");
        //offer.setSecondInput(item);
        offer.setOutput("2x minecraft:emerald");
        offer.setMaxUses(6);
        offer.setVillagerExperience(15);
        offer.setPriceMultiplier(0.05);
    });
    event.addCustomTrade("shepherd", 4, (offer, entity, random) => {
        offer.setFirstInput("2x minecraft:emerald");
        //offer.setSecondInput(item);
        offer.setOutput("minecraft:painting");
        offer.setMaxUses(6);
        offer.setVillagerExperience(15);
        offer.setPriceMultiplier(0.05);
    });

    // lvl 5
    event.addCustomTrade("shepherd", 5, (offer, entity, random) => {
        offer.setFirstInput("alloyed:steel_shears");
        //offer.setSecondInput(item);
        offer.setOutput("6x minecraft:emerald");
        offer.setMaxUses(3);
        offer.setVillagerExperience(20);
        offer.setPriceMultiplier(0.05);
    });
    event.addCustomTrade("shepherd", 5, (offer, entity, random) => {
        offer.setFirstInput("2x minecraft:emerald");
        //offer.setSecondInput(item);
        offer.setOutput("minecraft:lead");
        offer.setMaxUses(6);
        offer.setVillagerExperience(20);
        offer.setPriceMultiplier(0.05);
    });
    event.addCustomTrade("shepherd", 5, (offer, entity, random) => {
        offer.setFirstInput("20x minecraft:emerald");
        //offer.setSecondInput(item);
        offer.setOutput("naturalist:teddy_bear");
        offer.setMaxUses(3);
        offer.setVillagerExperience(30);
        offer.setPriceMultiplier(0.05);
    });

// ----------------------------------------------------------------------------------------------
	// LEATHERWORKER
	// lvl 1
	event.addCustomTrade("leatherworker", 1, (offer, entity, random) => {
        offer.setFirstInput("6x minecraft:rabbit_hide");
        //offer.setSecondInput(item);
        offer.setOutput("minecraft:emerald");
        offer.setMaxUses(16);
        offer.setVillagerExperience(2);
        offer.setPriceMultiplier(0.05);
    });
    event.addCustomTrade("leatherworker", 1, (offer, entity, random) => {
        offer.setFirstInput("5x minecraft:leather");
        //offer.setSecondInput(item);
        offer.setOutput("minecraft:emerald");
        offer.setMaxUses(16);
        offer.setVillagerExperience(2);
        offer.setPriceMultiplier(0.05);
    });
    event.addCustomTrade("leatherworker", 1, (offer, entity, random) => {
        offer.setFirstInput("4x minecraft:emerald");
        //offer.setSecondInput(item);
        offer.setOutput("tconstruct:travelers_boots");
        offer.setMaxUses(6);
        offer.setVillagerExperience(4);
        offer.setPriceMultiplier(0.05);
    });

    // lvl 2
    event.addCustomTrade("leatherworker", 2, (offer, entity, random) => {
        offer.setFirstInput("3x alexsmobs:kangaroo_hide");
        //offer.setSecondInput(item);
        offer.setOutput("minecraft:emerald");
        offer.setMaxUses(12);
        offer.setVillagerExperience(5);
        offer.setPriceMultiplier(0.05);
    });
    event.addCustomTrade("leatherworker", 2, (offer, entity, random) => {
        offer.setFirstInput("3x minecraft:emerald");
        //offer.setSecondInput(item);
        offer.setOutput("tconstruct:travelers_helmet");
        offer.setMaxUses(6);
        offer.setVillagerExperience(10);
        offer.setPriceMultiplier(0.05);
    });
    event.addCustomTrade("leatherworker", 2, (offer, entity, random) => {
        offer.setFirstInput("5x minecraft:emerald");
        //offer.setSecondInput(item);
        offer.setOutput("tconstruct:travelers_leggings");
        offer.setMaxUses(6);
        offer.setVillagerExperience(10);
        offer.setPriceMultiplier(0.05);
    });

    // lvl 3
    event.addCustomTrade("leatherworker", 3, (offer, entity, random) => {
        offer.setFirstInput("2x paragon_textiles:flaxseed_oil_bottle");
        //offer.setSecondInput(item);
        offer.setOutput("minecraft:emerald");
        offer.setMaxUses(12);
        offer.setVillagerExperience(10);
        offer.setPriceMultiplier(0.05);
    });
    event.addCustomTrade("leatherworker", 3, (offer, entity, random) => {
        offer.setFirstInput("7x minecraft:emerald");
        //offer.setSecondInput(item);
        offer.setOutput("tconstruct:travelers_chestplate");
        offer.setMaxUses(6);
        offer.setVillagerExperience(15);
        offer.setPriceMultiplier(0.05);
    });
    event.addCustomTrade("leatherworker", 3, (offer, entity, random) => {
        offer.setFirstInput("minecraft:emerald");
        //offer.setSecondInput(item);
        offer.setOutput("minecraft:bundle");
        offer.setMaxUses(6);
        offer.setVillagerExperience(15);
        offer.setPriceMultiplier(0.05);
    });

    // lvl 4
    event.addCustomTrade("leatherworker", 4, (offer, entity, random) => {
        offer.setFirstInput("farmersdelight:fruit_salad");
        //offer.setSecondInput(item);
        offer.setOutput("minecraft:emerald");
        offer.setMaxUses(6);
        offer.setVillagerExperience(15);
        offer.setPriceMultiplier(0.05);
    });
    event.addCustomTrade("leatherworker", 4, (offer, entity, random) => {
        offer.setFirstInput("farmersrespite:tea_curry");
        //offer.setSecondInput(item);
        offer.setOutput("minecraft:emerald");
        offer.setMaxUses(6);
        offer.setVillagerExperience(15);
        offer.setPriceMultiplier(0.05);
    });
    event.addCustomTrade("leatherworker", 4, (offer, entity, random) => {
        offer.setFirstInput("farmersrespite:blazing_chili");
        //offer.setSecondInput(item);
        offer.setOutput("2x minecraft:emerald");
        offer.setMaxUses(6);
        offer.setVillagerExperience(15);
        offer.setPriceMultiplier(0.05);
    });
    event.addCustomTrade("leatherworker", 4, (offer, entity, random) => {
        offer.setFirstInput("13x minecraft:emerald");
        //offer.setSecondInput(item);
        offer.setOutput("alexsmobs:falconry_glove");
        offer.setMaxUses(6);
        offer.setVillagerExperience(15);
        offer.setPriceMultiplier(0.05);
    });
    event.addCustomTrade("leatherworker", 4, (offer, entity, random) => {
        offer.setFirstInput("6x minecraft:emerald");
        //offer.setSecondInput(item);
        offer.setOutput("minecraft:leather_horse_armor");
        offer.setMaxUses(6);
        offer.setVillagerExperience(15);
        offer.setPriceMultiplier(0.05);
    });

    // lvl 5
    event.addCustomTrade("leatherworker", 5, (offer, entity, random) => {
        offer.setFirstInput("6x minecraft:emerald");
        //offer.setSecondInput(item);
        offer.setOutput("minecraft:saddle");
        offer.setMaxUses(6);
        offer.setVillagerExperience(20);
        offer.setPriceMultiplier(0.05);
    });
    event.addCustomTrade("leatherworker", 5, (offer, entity, random) => {
        offer.setFirstInput("11x minecraft:emerald");
        //offer.setSecondInput(item);
        offer.setOutput("alexsmobs:falconry_glove");
        offer.setMaxUses(6);
        offer.setVillagerExperience(20);
        offer.setPriceMultiplier(0.05);
    });


// ----------------------------------------------------------------------------------------------
	// ARMORER
	// lvl 1    
    event.addCustomTrade("armorer", 1, (offer, entity, random) => {
        offer.setFirstInput("9x minecraft:coal");
        offer.setOutput("1x minecraft:emerald");
        offer.setMaxUses("16");
        offer.setVillagerExperience("2");
        offer.setPriceMultiplier("0.05");
    });
    event.addCustomTrade("armorer", 1, (offer, entity, random) => {
        offer.setFirstInput("4x minecraft:emerald");
        offer.setOutput("1x minecraft:chainmail_helmet");
        offer.setMaxUses("6");
        offer.setVillagerExperience("5");
        offer.setPriceMultiplier("0.2");
    });
    event.addCustomTrade("armorer", 1, (offer, entity, random) => {
        offer.setFirstInput("6x minecraft:emerald");
        offer.setOutput("1x minecraft:chainmail_leggings");
        offer.setMaxUses("6");
        offer.setVillagerExperience("5");
        offer.setPriceMultiplier("0.2");
    });
    event.addCustomTrade("armorer", 1, (offer, entity, random) => {
        offer.setFirstInput("3x minecraft:emerald");
        offer.setOutput("1x minecraft:chainmail_boots");
        offer.setMaxUses("6");
        offer.setVillagerExperience("5");
        offer.setPriceMultiplier("0.2");
    });

	// lvl 2   
    event.addCustomTrade("armorer", 2, (offer, entity, random) => {
        offer.setFirstInput("4x minecraft:iron_ingot");
        offer.setOutput("1x minecraft:emerald");
        offer.setMaxUses("16");
        offer.setVillagerExperience("5");
        offer.setPriceMultiplier("0.05");
    });
    event.addCustomTrade("armorer", 2, (offer, entity, random) => {
        offer.setFirstInput("7x minecraft:emerald");
        offer.setOutput("1x minecraft:chainmail_chestplate");
        offer.setMaxUses("6");
        offer.setVillagerExperience("10");
        offer.setPriceMultiplier("0.2");
    });
    event.addCustomTrade("armorer", 2, (offer, entity, random) => {
        offer.setFirstInput("5x minecraft:emerald");
        offer.setOutput("1x minecraft:iron_helmet");
        offer.setMaxUses("6");
        offer.setVillagerExperience("15");
        offer.setPriceMultiplier("0.2");
    });
    event.addCustomTrade("armorer", 2, (offer, entity, random) => {
        offer.setFirstInput("4x minecraft:emerald");
        offer.setOutput("1x minecraft:iron_boots");
        offer.setMaxUses("6");
        offer.setVillagerExperience("15");
        offer.setPriceMultiplier("0.2");
    });

    // lvl 3
    event.addCustomTrade("armorer", 3, (offer, entity, random) => {
        offer.setFirstInput("7x minecraft:emerald");
        offer.setOutput("1x minecraft:iron_leggings");
        offer.setMaxUses("6");
        offer.setVillagerExperience("15");
        offer.setPriceMultiplier("0.2");
    });
    event.addCustomTrade("armorer", 3, (offer, entity, random) => {
        offer.setFirstInput("8x minecraft:emerald");
        offer.setOutput("1x minecraft:iron_chestplate");
        offer.setMaxUses("6");
        offer.setVillagerExperience("15");
        offer.setPriceMultiplier("0.2");
    });
    event.addCustomTrade("armorer", 3, (offer, entity, random) => {
        offer.setFirstInput("1x miners_delight:pasta_with_veggieballs");
        offer.setOutput("1x minecraft:emerald");
        offer.setMaxUses("6");
        offer.setVillagerExperience("15");
        offer.setPriceMultiplier("0.05");
    });
    event.addCustomTrade("armorer", 3, (offer, entity, random) => {
        offer.setFirstInput("1x brewinandchewin:ham_and_cheese_sandwich");
        offer.setOutput("1x minecraft:emerald");
        offer.setMaxUses("6");
        offer.setVillagerExperience("15");
        offer.setPriceMultiplier("0.05");
    });
    event.addCustomTrade("armorer", 3, (offer, entity, random) => {
        offer.setFirstInput("1x alexsmobs:kangaroo_burger");
        offer.setOutput("1x minecraft:emerald");
        offer.setMaxUses("6");
        offer.setVillagerExperience("15");
        offer.setPriceMultiplier("0.05");
    });

    // lvl 4
    event.addCustomTrade("armorer", 4, (offer, entity, random) => {
        offer.setFirstInput("11x minecraft:emerald");
        offer.setOutput("1x alloyed:steel_helmet");
        offer.setMaxUses("6");
        offer.setVillagerExperience("20");
        offer.setPriceMultiplier("0.2");
    });
    event.addCustomTrade("armorer", 4, (offer, entity, random) => {
        offer.setFirstInput("9x minecraft:emerald");
        offer.setOutput("1x alloyed:steel_boots");
        offer.setMaxUses("6");
        offer.setVillagerExperience("20");
        offer.setPriceMultiplier("0.2");
    });

    // lvl 5
    event.addCustomTrade("armorer", 5, (offer, entity, random) => {
        offer.setFirstInput("15x minecraft:emerald");
        offer.setOutput("1x alloyed:steel_leggings");
        offer.setMaxUses("6");
        offer.setVillagerExperience("20");
        offer.setPriceMultiplier("0.2");
    });
    event.addCustomTrade("armorer", 5, (offer, entity, random) => {
        offer.setFirstInput("17x minecraft:emerald");
        offer.setOutput("1x alloyed:steel_chestplate");
        offer.setMaxUses("6");
        offer.setVillagerExperience("20");
        offer.setPriceMultiplier("0.2");
    });

// ----------------------------------------------------------------------------------------------
	// WEAPONSMITH
	// lvl 1
    event.addCustomTrade("weaponsmith", 1, (offer, entity, random) => {
        offer.setFirstInput("9x minecraft:coal");
        offer.setOutput("1x minecraft:emerald");
        offer.setMaxUses("16");
        offer.setVillagerExperience("2");
        offer.setPriceMultiplier("0.05");
    });
    event.addCustomTrade("weaponsmith", 1, (offer, entity, random) => {
        offer.setFirstInput("5x minecraft:emerald");
        offer.setOutput("1x minecraft:iron_sword");
        offer.setMaxUses("6");
        offer.setVillagerExperience("5");
        offer.setPriceMultiplier("0.2");
    });
    event.addCustomTrade("weaponsmith", 1, (offer, entity, random) => {
        offer.setFirstInput("7x minecraft:emerald");
        offer.setOutput("1x minecraft:iron_axe");
        offer.setMaxUses("6");
        offer.setVillagerExperience("5");
        offer.setPriceMultiplier("0.2");
    });

    // lvl 2
    event.addCustomTrade("weaponsmith", 2, (offer, entity, random) => {
        offer.setFirstInput("4x minecraft:iron_ingot");
        offer.setOutput("1x minecraft:emerald");
        offer.setMaxUses("16");
        offer.setVillagerExperience("5");
        offer.setPriceMultiplier("0.05");
    });
    event.addCustomTrade("weaponsmith", 2, (offer, entity, random) => {
        offer.setFirstInput("9x minecraft:emerald");
        offer.setOutput("1x musketmod:musket");
        offer.setMaxUses("6");
        offer.setVillagerExperience("10");
        offer.setPriceMultiplier("0.2");
    });
    event.addCustomTrade("weaponsmith", 2, (offer, entity, random) => {
        offer.setFirstInput("5x minecraft:emerald");
        offer.setOutput("1x minecraft:shield");
        offer.setMaxUses("6");
        offer.setVillagerExperience("10");
        offer.setPriceMultiplier("0.2");
    });

    // lvl 3
    event.addCustomTrade("weaponsmith", 3, (offer, entity, random) => {
        offer.setFirstInput("5x minecraft:emerald");
        offer.setOutput("1x musketmod:pistol");
        offer.setMaxUses("6");
        offer.setVillagerExperience("10");
        offer.setPriceMultiplier("0.2");
    });
    event.addCustomTrade("weaponsmith", 3, (offer, entity, random) => {
        offer.setFirstInput("1x minecraft:emerald");
        offer.setOutput("5x musketmod:cartridge");
        offer.setMaxUses("16");
        offer.setVillagerExperience("10");
        offer.setPriceMultiplier("0.05");
    });
    event.addCustomTrade("weaponsmith", 3, (offer, entity, random) => {
        offer.setFirstInput("1x farmersdelight:bacon_sandwich");
        offer.setOutput("1x minecraft:emerald");
        offer.setMaxUses("6");
        offer.setVillagerExperience("15");
        offer.setPriceMultiplier("0.05");
    });
    event.addCustomTrade("weaponsmith", 3, (offer, entity, random) => {
        offer.setFirstInput("1x farmersdelight:mushroom_rice");
        offer.setOutput("1x minecraft:emerald");
        offer.setMaxUses("6");
        offer.setVillagerExperience("15");
        offer.setPriceMultiplier("0.05");
    });
    event.addCustomTrade("weaponsmith", 3, (offer, entity, random) => {
        offer.setFirstInput("1x shepherdsdelight:sausage_stew");
        offer.setOutput("1x minecraft:emerald");
        offer.setMaxUses("6");
        offer.setVillagerExperience("15");
        offer.setPriceMultiplier("0.05");
    });

    // lvl 4
    event.addCustomTrade("weaponsmith", 4, (offer, entity, random) => {
        offer.setFirstInput("11x minecraft:emerald");
        offer.setOutput("1x alloyed:steel_sword");
        offer.setMaxUses("6");
        offer.setVillagerExperience("20");
        offer.setPriceMultiplier("0.2");
    });
    event.addCustomTrade("weaponsmith", 4, (offer, entity, random) => {
        offer.setFirstInput("15x minecraft:emerald");
        offer.setOutput("1x alloyed:steel_axe");
        offer.setMaxUses("6");
        offer.setVillagerExperience("20");
        offer.setPriceMultiplier("0.2");
    });

    // lvl 5
    event.addCustomTrade("weaponsmith", 5, (offer, entity, random) => {
        offer.setFirstInput("54x minecraft:emerald");
        offer.setOutput("1x blocky_siege:cannon");
        offer.setMaxUses("3");
        offer.setVillagerExperience("30");
        offer.setPriceMultiplier("0.2");
    });
    event.addCustomTrade("weaponsmith", 5, (offer, entity, random) => {
        offer.setFirstInput("46x minecraft:emerald");
        offer.setOutput("1x blocky_siege:mortar");
        offer.setMaxUses("3");
        offer.setVillagerExperience("30");
        offer.setPriceMultiplier("0.2");
    });

// ----------------------------------------------------------------------------------------------
    // TOOLSMITH
    // lvl 1
    event.addCustomTrade("toolsmith", 1, (offer, entity, random) => {
        offer.setFirstInput("9x minecraft:coal");
        offer.setOutput("1x minecraft:emerald");
        offer.setMaxUses("16");
        offer.setVillagerExperience("2");
        offer.setPriceMultiplier("0.05");
    });
    event.addCustomTrade("toolsmith", 1, (offer, entity, random) => {
        offer.setFirstInput("5x minecraft:emerald");
        offer.setOutput("1x minecraft:iron_shovel");
        offer.setMaxUses("6");
        offer.setVillagerExperience("5");
        offer.setPriceMultiplier("0.2");
    });
    event.addCustomTrade("toolsmith", 1, (offer, entity, random) => {
        offer.setFirstInput("4x minecraft:emerald");
        offer.setOutput("1x minecraft:iron_hoe");
        offer.setMaxUses("6");
        offer.setVillagerExperience("5");
        offer.setPriceMultiplier("0.2");
    });

    // lvl 2
    event.addCustomTrade("toolsmith", 2, (offer, entity, random) => {
        offer.setFirstInput("4x minecraft:iron_ingot");
        offer.setOutput("1x minecraft:emerald");
        offer.setMaxUses("16");
        offer.setVillagerExperience("5");
        offer.setPriceMultiplier("0.05");
    });
    event.addCustomTrade("toolsmith", 2, (offer, entity, random) => {
        offer.setFirstInput("7x minecraft:emerald");
        offer.setOutput("1x minecraft:iron_pickaxe");
        offer.setMaxUses("6");
        offer.setVillagerExperience("10");
        offer.setPriceMultiplier("0.2");
    });
    event.addCustomTrade("toolsmith", 2, (offer, entity, random) => {
        offer.setFirstInput("3x minecraft:emerald");
        offer.setOutput("1x quark:abacus");
        offer.setMaxUses("6");
        offer.setVillagerExperience("10");
        offer.setPriceMultiplier("0.2");
    });

    // lvl 3
    event.addCustomTrade("toolsmith", 3, (offer, entity, random) => {
        offer.setFirstInput("1x farmersdelight:pasta_with_meatballs");
        offer.setOutput("1x minecraft:emerald");
        offer.setMaxUses("6");
        offer.setVillagerExperience("15");
        offer.setPriceMultiplier("0.05");
    });
    event.addCustomTrade("toolsmith", 3, (offer, entity, random) => {
        offer.setFirstInput("1x shepherdsdelight:poutine");
        offer.setOutput("1x minecraft:emerald");
        offer.setMaxUses("6");
        offer.setVillagerExperience("15");
        offer.setPriceMultiplier("0.05");
    });
    event.addCustomTrade("toolsmith", 3, (offer, entity, random) => {
        offer.setFirstInput("1x culturaldelights:eggplant_burger");
        offer.setOutput("1x minecraft:emerald");
        offer.setMaxUses("6");
        offer.setVillagerExperience("15");
        offer.setPriceMultiplier("0.05");
    });
    event.addCustomTrade("toolsmith", 3, (offer, entity, random) => {
        offer.setFirstInput("36x minecraft:emerald");
        offer.setOutput("1x minecraft:bell");
        offer.setMaxUses("3");
        offer.setVillagerExperience("30");
        offer.setPriceMultiplier("0.2");
    });

    // lvl 4
    event.addCustomTrade("toolsmith", 4, (offer, entity, random) => {
        offer.setFirstInput("11x minecraft:emerald");
        offer.setOutput("1x alloyed:steel_shovel");
        offer.setMaxUses("6");
        offer.setVillagerExperience("20");
        offer.setPriceMultiplier("0.2");
    });
    event.addCustomTrade("toolsmith", 4, (offer, entity, random) => {
        offer.setFirstInput("9x minecraft:emerald");
        offer.setOutput("1x alloyed:steel_hoe");
        offer.setMaxUses("6");
        offer.setVillagerExperience("20");
        offer.setPriceMultiplier("0.2");
    });
    event.addCustomTrade("toolsmith", 4, (offer, entity, random) => {
        offer.setFirstInput("3x minecraft:emerald");
        offer.setOutput("1x supplementaries:wrench");
        offer.setMaxUses("6");
        offer.setVillagerExperience("15");
        offer.setPriceMultiplier("0.2");
    });

    // lvl 5
    event.addCustomTrade("toolsmith", 5, (offer, entity, random) => {
        offer.setFirstInput("15x minecraft:emerald");
        offer.setOutput("1x alloyed:steel_pickaxe");
        offer.setMaxUses("6");
        offer.setVillagerExperience("20");
        offer.setPriceMultiplier("0.2");
    });
    event.addCustomTrade("toolsmith", 5, (offer, entity, random) => {
        offer.setFirstInput("18x minecraft:emerald");
        offer.setOutput("1x create:brown_toolbox");
        offer.setMaxUses("3");
        offer.setVillagerExperience("20");
        offer.setPriceMultiplier("0.2");
    });

// ----------------------------------------------------------------------------------------------
    // BUTCHER
    // lvl 1
    event.addCustomTrade("butcher", 1, (offer, entity, random) => {
        offer.setFirstInput("1x minecraft:emerald");
        offer.setSecondInput("3x minecraft:chicken");
        offer.setOutput("6x farmersdelight:chicken_cuts");
        offer.setMaxUses("16");
        offer.setVillagerExperience("2");
        offer.setPriceMultiplier("0.05");
    });
    event.addCustomTrade("butcher", 1, (offer, entity, random) => {
        offer.setFirstInput("15x minecraft:paper");
        offer.setOutput("1x minecraft:emerald");
        offer.setMaxUses("16");
        offer.setVillagerExperience("2");
        offer.setPriceMultiplier("0.05");
    });
    event.addCustomTrade("butcher", 1, (offer, entity, random) => {
        offer.setFirstInput("1x minecraft:emerald");
        offer.setSecondInput("3x minecraft:mutton");
        offer.setOutput("6x farmersdelight:mutton_chops");
        offer.setMaxUses("16");
        offer.setVillagerExperience("2");
        offer.setPriceMultiplier("0.05");
    });
    event.addCustomTrade("butcher", 1, (offer, entity, random) => {
        offer.setFirstInput("1x minecraft:emerald");
        offer.setSecondInput("3x minecraft:porkchop");
        offer.setOutput("6x farmersdelight:bacon");
        offer.setMaxUses("16");
        offer.setVillagerExperience("2");
        offer.setPriceMultiplier("0.05");
    });

    // lvl 2
    event.addCustomTrade("butcher", 2, (offer, entity, random) => {
        offer.setFirstInput("1x farmersdelight:iron_knife");
        offer.setOutput("3x minecraft:emerald");
        offer.setMaxUses("3");
        offer.setVillagerExperience("10");
        offer.setPriceMultiplier("0.05");
    });
    event.addCustomTrade("butcher", 2, (offer, entity, random) => {
        offer.setFirstInput("1x minecraft:emerald");
        offer.setSecondInput("3x minecraft:beef");
        offer.setOutput("6x farmersdelight:minced_beef");
        offer.setMaxUses("16");
        offer.setVillagerExperience("5");
        offer.setPriceMultiplier("0.05");
    });
    event.addCustomTrade("butcher", 2, (offer, entity, random) => {
        offer.setFirstInput("1x minecraft:emerald");
        offer.setOutput("3x berry_good:sweet_berry_mince");
        offer.setMaxUses("16");
        offer.setVillagerExperience("5");
        offer.setPriceMultiplier("0.05");
    });

    // lvl 3
    event.addCustomTrade("butcher", 3, (offer, entity, random) => {
        offer.setFirstInput("1x minecraft:emerald");
        offer.setOutput("1x farmersdelight:ham");
        offer.setMaxUses("12");
        offer.setVillagerExperience("10");
        offer.setPriceMultiplier("0.05");
    });
    event.addCustomTrade("butcher", 3, (offer, entity, random) => {
        offer.setFirstInput("1x minecraft:emerald");
        offer.setOutput("2x alexsdelight:raw_bison");
        offer.setMaxUses("12");
        offer.setVillagerExperience("10");
        offer.setPriceMultiplier("0.05");
    });

    // lvl 4
    event.addCustomTrade("butcher", 4, (offer, entity, random) => {
        offer.setFirstInput("1x alloyed:steel_knife");
        offer.setOutput("6x minecraft:emerald");
        offer.setMaxUses("3");
        offer.setVillagerExperience("20");
        offer.setPriceMultiplier("0.05");
    });
    event.addCustomTrade("butcher", 4, (offer, entity, random) => {
        offer.setFirstInput("1x culturaldelights:hearty_salad");
        offer.setOutput("1x minecraft:emerald");
        offer.setMaxUses("6");
        offer.setVillagerExperience("15");
        offer.setPriceMultiplier("0.05");
    });
    event.addCustomTrade("butcher", 4, (offer, entity, random) => {
        offer.setFirstInput("1x miners_delight:chicken_soup_cup");
        offer.setOutput("1x minecraft:emerald");
        offer.setMaxUses("6");
        offer.setVillagerExperience("15");
        offer.setPriceMultiplier("0.05");
    });
    event.addCustomTrade("butcher", 4, (offer, entity, random) => {
        offer.setFirstInput("1x culturaldelights:spicy_curry");
        offer.setOutput("1x minecraft:emerald");
        offer.setMaxUses("6");
        offer.setVillagerExperience("15");
        offer.setPriceMultiplier("0.05");
    });

    // lvl 5
    event.addCustomTrade("butcher", 5, (offer, entity, random) => {
        offer.setFirstInput("2x minecraft:emerald");
        offer.setOutput("3x shepherdsdelight:fermented_sausage");
        offer.setMaxUses("6");
        offer.setVillagerExperience("30");
        offer.setPriceMultiplier("0.05");
    });
    event.addCustomTrade("butcher", 5, (offer, entity, random) => {
        offer.setFirstInput("1x minecraft:emerald");
        offer.setOutput("3x brewinandchewin:jerky");
        offer.setMaxUses("6");
        offer.setVillagerExperience("30");
        offer.setPriceMultiplier("0.05");
    });
    event.addCustomTrade("butcher", 5, (offer, entity, random) => {
        offer.setFirstInput("1x minecraft:emerald");
        offer.setOutput("2x alexsmobs:kangaroo_meat");
        offer.setMaxUses("6");
        offer.setVillagerExperience("10");
        offer.setPriceMultiplier("0.05");
    });

// ----------------------------------------------------------------------------------------------
    // FISHERMAN
    // lvl 1
    event.addCustomTrade("fisherman", 1, (offer, entity, random) => {
        offer.setFirstInput("2x farmersdelight:safety_net");
        offer.setOutput("1x minecraft:emerald");
        offer.setMaxUses("16");
        offer.setVillagerExperience("2");
        offer.setPriceMultiplier("0.05");
    });
    event.addCustomTrade("fisherman", 1, (offer, entity, random) => {
        offer.setFirstInput("1x minecraft:emerald");
        offer.setOutput("6x minecraft:cod");
        offer.setMaxUses("16");
        offer.setVillagerExperience("2");
        offer.setPriceMultiplier("0.05");
    });
    event.addCustomTrade("fisherman", 1, (offer, entity, random) => {
        offer.setFirstInput("1x minecraft:emerald");
        offer.setOutput("6x minecraft:salmon");
        offer.setMaxUses("16");
        offer.setVillagerExperience("2");
        offer.setPriceMultiplier("0.05");
    });
    event.addCustomTrade("fisherman", 1, (offer, entity, random) => {
        offer.setFirstInput("1x minecraft:emerald");
        offer.setOutput("2x upgrade_aquatic:driftwood_log");
        offer.setMaxUses("16");
        offer.setVillagerExperience("2");
        offer.setPriceMultiplier("0.05");
    });

    // lvl 2
    event.addCustomTrade("fisherman", 2, (offer, entity, random) => {
        offer.setFirstInput("1x minecraft:emerald");
        offer.setOutput("4x alexsmobs:lobster_tail");
        offer.setMaxUses("16");
        offer.setVillagerExperience("5");
        offer.setPriceMultiplier("0.05");
    });
    event.addCustomTrade("fisherman", 2, (offer, entity, random) => {
        offer.setFirstInput("1x minecraft:emerald");
        offer.setOutput("1x miners_delight:squid");
        offer.setMaxUses("16");
        offer.setVillagerExperience("5");
        offer.setPriceMultiplier("0.05");
    });
    

    // lvl 3
    event.addCustomTrade("fisherman", 3, (offer, entity, random) => {
        offer.setFirstInput("1x minecraft:emerald");
        offer.setOutput("3x alexsmobs:raw_catfish");
        offer.setMaxUses("16");
        offer.setVillagerExperience("10");
        offer.setPriceMultiplier("0.05");
    });
    event.addCustomTrade("fisherman", 3, (offer, entity, random) => {
        offer.setFirstInput("12x minecraft:string");
        offer.setOutput("1x minecraft:emerald");
        offer.setMaxUses("16");
        offer.setVillagerExperience("10");
        offer.setPriceMultiplier("0.05");
    });

    // lvl 4
    event.addCustomTrade("fisherman", 4, (offer, entity, random) => {
        offer.setFirstInput("1x shepherdsdelight:salad_with_curds");
        offer.setOutput("1x minecraft:emerald");
        offer.setMaxUses("6");
        offer.setVillagerExperience("15");
        offer.setPriceMultiplier("0.05");
    });
    event.addCustomTrade("fisherman", 4, (offer, entity, random) => {
        offer.setFirstInput("4x brewinandchewin:kimchi");
        offer.setOutput("1x minecraft:emerald");
        offer.setMaxUses("6");
        offer.setVillagerExperience("15");
        offer.setPriceMultiplier("0.05");
    });
    event.addCustomTrade("fisherman", 4, (offer, entity, random) => {
        offer.setFirstInput("3x brewinandchewin:jerky");
        offer.setOutput("1x minecraft:emerald");
        offer.setMaxUses("6");
        offer.setVillagerExperience("15");
        offer.setPriceMultiplier("0.05");
    });
    event.addCustomTrade("fisherman", 4, (offer, entity, random) => {
        offer.setFirstInput("3x minecraft:emerald");
        offer.setOutput("1x upgrade_aquatic:pike_bucket");
        offer.setMaxUses("6");
        offer.setVillagerExperience("15");
        offer.setPriceMultiplier("0.05");
    });

    // lvl 5
    event.addCustomTrade("fisherman", 5, (offer, entity, random) => {
        offer.setFirstInput("1x alloyed:steel_fishing_rod");
        offer.setOutput("6x minecraft:emerald");
        offer.setMaxUses("3");
        offer.setVillagerExperience("20");
        offer.setPriceMultiplier("0.2");
    });
    event.addCustomTrade("fisherman", 5, (offer, entity, random) => {
        offer.setFirstInput("3x minecraft:emerald");
        offer.setOutput("2x brewinandchewin:kippers");
        offer.setMaxUses("6");
        offer.setVillagerExperience("20");
        offer.setPriceMultiplier("0.05");
    });
    event.addCustomTrade("fisherman", 5, (offer, entity, random) => {
        offer.setFirstInput("5x minecraft:emerald");
        offer.setOutput("1x upgrade_aquatic:thrasher_tooth");
        offer.setMaxUses("3");
        offer.setVillagerExperience("30");
        offer.setPriceMultiplier("0.02");
    });

// ----------------------------------------------------------------------------------------------
    // FLETCHER
    // lvl 1
    event.addCustomTrade("fletcher", 1, (offer, entity, random) => {
        offer.setFirstInput("32x minecraft:stick");
        offer.setOutput("1x minecraft:emerald");
        offer.setMaxUses("16");
        offer.setVillagerExperience("2");
        offer.setPriceMultiplier("0.05");
    });
    event.addCustomTrade("fletcher", 1, (offer, entity, random) => {
        offer.setFirstInput("3x minecraft:emerald");
        offer.setOutput("1x minecraft:bow");
        offer.setMaxUses("6");
        offer.setVillagerExperience("5");
        offer.setPriceMultiplier("0.2");
    });
    event.addCustomTrade("fletcher", 1, (offer, entity, random) => {
        offer.setFirstInput("1x minecraft:emerald");
        offer.setOutput("8x minecraft:arrow");
        offer.setMaxUses("16");
        offer.setVillagerExperience("2");
        offer.setPriceMultiplier("0.05");
    });

    // lvl 2
    event.addCustomTrade("fletcher", 2, (offer, entity, random) => {
        offer.setFirstInput("22x minecraft:flint");
        offer.setOutput("1x minecraft:emerald");
        offer.setMaxUses("16");
        offer.setVillagerExperience("5");
        offer.setPriceMultiplier("0.05");
    });
    event.addCustomTrade("fletcher", 2, (offer, entity, random) => {
        offer.setFirstInput("12x minecraft:feather");
        offer.setOutput("1x minecraft:emerald");
        offer.setMaxUses("16");
        offer.setVillagerExperience("5");
        offer.setPriceMultiplier("0.05");
    });
    event.addCustomTrade("fletcher", 2, (offer, entity, random) => {
        offer.setFirstInput("4x minecraft:emerald");
        offer.setOutput("1x minecraft:crossbow");
        offer.setMaxUses("6");
        offer.setVillagerExperience("10");
        offer.setPriceMultiplier("0.2");
    });

    // lvl 3
    event.addCustomTrade("fletcher", 3, (offer, entity, random) => {
        offer.setFirstInput("12x minecraft:string");
        offer.setOutput("1x minecraft:emerald");
        offer.setMaxUses("16");
        offer.setVillagerExperience("5");
        offer.setPriceMultiplier("0.05");
    });
    event.addCustomTrade("fletcher", 3, (offer, entity, random) => {
        offer.setFirstInput("2x minecraft:emerald");
        offer.setOutput("5x neapolitan:bananarrow");
        offer.setMaxUses("12");
        offer.setVillagerExperience("10");
        offer.setPriceMultiplier("0.05");
    });
    event.addCustomTrade("fletcher", 3, (offer, entity, random) => {
        offer.setFirstInput("2x minecraft:emerald");
        offer.setOutput("5x savage_and_ravage:mischief_arrow");
        offer.setMaxUses("12");
        offer.setVillagerExperience("10");
        offer.setPriceMultiplier("0.05");
    });

    // lvl 4
    event.addCustomTrade("fletcher", 4, (offer, entity, random) => {
        offer.setFirstInput("1x culturaldelights:chicken_taco");
        offer.setOutput("1x minecraft:emerald");
        offer.setMaxUses("6");
        offer.setVillagerExperience("15");
        offer.setPriceMultiplier("0.05");
    });
    event.addCustomTrade("fletcher", 4, (offer, entity, random) => {
        offer.setFirstInput("1x neapolitan:adzuki_stew");
        offer.setOutput("1x minecraft:emerald");
        offer.setMaxUses("6");
        offer.setVillagerExperience("15");
        offer.setPriceMultiplier("0.05");
    });
    event.addCustomTrade("fletcher", 4, (offer, entity, random) => {
        offer.setFirstInput("1x miners_delight:noodle_soup_cup");
        offer.setOutput("1x minecraft:emerald");
        offer.setMaxUses("6");
        offer.setVillagerExperience("15");
        offer.setPriceMultiplier("0.05");
    });

    // lvl 5
    event.addCustomTrade("fletcher", 5, (offer, entity, random) => {
        offer.setFirstInput("20x minecraft:emerald");
        offer.setOutput("1x supplementaries:quiver");
        offer.setMaxUses("3");
        offer.setVillagerExperience("30");
        offer.setPriceMultiplier("0.2");
    });

// ----------------------------------------------------------------------------------------------
    // MASON
    // lvl 1
    event.addCustomTrade("mason", 1, (offer, entity, random) => {
        offer.setFirstInput("10x minecraft:clay_ball");
        offer.setOutput("1x minecraft:emerald");
        offer.setMaxUses("16");
        offer.setVillagerExperience("2");
        offer.setPriceMultiplier("0.05");
    });
    event.addCustomTrade("mason", 1, (offer, entity, random) => {
        offer.setFirstInput("1x minecraft:emerald");
        offer.setOutput("10x minecraft:brick");
        offer.setMaxUses("16");
        offer.setVillagerExperience("2");
        offer.setPriceMultiplier("0.05");
    });
    event.addCustomTrade("mason", 1, (offer, entity, random) => {
        offer.setFirstInput("1x minecraft:emerald");
        offer.setOutput("10x createdeco:blue_brick");
        offer.setMaxUses("16");
        offer.setVillagerExperience("2");
        offer.setPriceMultiplier("0.05");
    });
    event.addCustomTrade("mason", 1, (offer, entity, random) => {
        offer.setFirstInput("1x minecraft:emerald");
        offer.setOutput("10x createdeco:dean_brick");
        offer.setMaxUses("16");
        offer.setVillagerExperience("2");
        offer.setPriceMultiplier("0.05");
    });

    // lvl 2
    event.addCustomTrade("mason", 2, (offer, entity, random) => {
        offer.setFirstInput("20x minecraft:stone");
        offer.setOutput("1x minecraft:emerald");
        offer.setMaxUses("16");
        offer.setVillagerExperience("5");
        offer.setPriceMultiplier("0.05");
    });
    event.addCustomTrade("mason", 2, (offer, entity, random) => {
        offer.setFirstInput("1x minecraft:emerald");
        offer.setOutput("10x createdeco:dusk_brick");
        offer.setMaxUses("16");
        offer.setVillagerExperience("5");
        offer.setPriceMultiplier("0.05");
    });
    event.addCustomTrade("mason", 2, (offer, entity, random) => {
        offer.setFirstInput("1x minecraft:emerald");
        offer.setOutput("10x createdeco:pearl_brick");
        offer.setMaxUses("16");
        offer.setVillagerExperience("5");
        offer.setPriceMultiplier("0.05");
    });
    event.addCustomTrade("mason", 2, (offer, entity, random) => {
        offer.setFirstInput("1x minecraft:emerald");
        offer.setOutput("10x createdeco:scarlet_brick");
        offer.setMaxUses("16");
        offer.setVillagerExperience("5");
        offer.setPriceMultiplier("0.05");
    });

    // lvl 3
    event.addCustomTrade("mason", 3, (offer, entity, random) => {
        offer.setFirstInput("16x minecraft:granite");
        offer.setOutput("1x minecraft:emerald");
        offer.setMaxUses("16");
        offer.setVillagerExperience("10");
        offer.setPriceMultiplier("0.05");
    });
    event.addCustomTrade("mason", 3, (offer, entity, random) => {
        offer.setFirstInput("16x minecraft:andesite");
        offer.setOutput("1x minecraft:emerald");
        offer.setMaxUses("16");
        offer.setVillagerExperience("10");
        offer.setPriceMultiplier("0.05");
    });
    event.addCustomTrade("mason", 3, (offer, entity, random) => {
        offer.setFirstInput("16x minecraft:diorite");
        offer.setOutput("1x minecraft:emerald");
        offer.setMaxUses("16");
        offer.setVillagerExperience("10");
        offer.setPriceMultiplier("0.05");
    });
    event.addCustomTrade("mason", 3, (offer, entity, random) => {
        offer.setFirstInput("1x minecraft:emerald");
        offer.setOutput("2x minecraft:dripstone_block");
        offer.setMaxUses("12");
        offer.setVillagerExperience("5");
        offer.setPriceMultiplier("0.05");
    });
    event.addCustomTrade("mason", 3, (offer, entity, random) => {
        offer.setFirstInput("1x minecraft:emerald");
        offer.setOutput("2x minecraft:sandstone");
        offer.setMaxUses("12");
        offer.setVillagerExperience("5");
        offer.setPriceMultiplier("0.05");
    });
    event.addCustomTrade("mason", 3, (offer, entity, random) => {
        offer.setFirstInput("1x minecraft:emerald");
        offer.setOutput("2x minecraft:red_sandstone");
        offer.setMaxUses("12");
        offer.setVillagerExperience("5");
        offer.setPriceMultiplier("0.05");
    });

    // lvl 4
    event.addCustomTrade("mason", 4, (offer, entity, random) => {
        offer.setFirstInput("1x shepherdsdelight:charque_cactus_roast");
        offer.setOutput("1x minecraft:emerald");
        offer.setMaxUses("6");
        offer.setVillagerExperience("15");
        offer.setPriceMultiplier("0.05");
    });
    event.addCustomTrade("mason", 4, (offer, entity, random) => {
        offer.setFirstInput("1x shepherdsdelight:equin_noodles");
        offer.setOutput("1x minecraft:emerald");
        offer.setMaxUses("6");
        offer.setVillagerExperience("15");
        offer.setPriceMultiplier("0.05");
    });
    event.addCustomTrade("mason", 4, (offer, entity, random) => {
        offer.setFirstInput("1x shepherdsdelight:sour_burger");
        offer.setOutput("1x minecraft:emerald");
        offer.setMaxUses("6");
        offer.setVillagerExperience("15");
        offer.setPriceMultiplier("0.05");
    });

    // lvl 5
    event.addCustomTrade("mason", 5, (offer, entity, random) => {
        offer.setFirstInput("10x minecraft:deepslate");
        offer.setOutput("1x minecraft:emerald");
        offer.setMaxUses("16");
        offer.setVillagerExperience("2");
        offer.setPriceMultiplier("0.05");
    });
    event.addCustomTrade("mason", 5, (offer, entity, random) => {
        offer.setFirstInput("1x minecraft:emerald");
        offer.setOutput("1x minecraft:quartz_block");
        offer.setMaxUses("12");
        offer.setVillagerExperience("5");
        offer.setPriceMultiplier("0.05");
    });

// ----------------------------------------------------------------------------------------------
    // CLERIC
    // lvl 1
    event.addCustomTrade("cleric", 1, (offer, entity, random) => {
        offer.setFirstInput("24x minecraft:rotten_flesh");
        offer.setOutput("1x minecraft:emerald");
        offer.setMaxUses("16");
        offer.setVillagerExperience("2");
        offer.setPriceMultiplier("0.05");
    });
    event.addCustomTrade("cleric", 1, (offer, entity, random) => {
        offer.setFirstInput("1x minecraft:emerald");
        offer.setOutput("2x minecraft:redstone");
        offer.setMaxUses("16");
        offer.setVillagerExperience("2");
        offer.setPriceMultiplier("0.05");
    });

    // lvl 2
    event.addCustomTrade("cleric", 2, (offer, entity, random) => {
        offer.setFirstInput("8x oreganized:yellow_crystal_glass");
        offer.setOutput("1x minecraft:emerald");
        offer.setMaxUses("12");
        offer.setVillagerExperience("5");
        offer.setPriceMultiplier("0.05");
    });
    event.addCustomTrade("cleric", 2, (offer, entity, random) => {
        offer.setFirstInput("8x oreganized:white_crystal_glass");
        offer.setOutput("1x minecraft:emerald");
        offer.setMaxUses("12");
        offer.setVillagerExperience("5");
        offer.setPriceMultiplier("0.05");
    });
    event.addCustomTrade("cleric", 2, (offer, entity, random) => {
        offer.setFirstInput("8x oreganized:orange_crystal_glass");
        offer.setOutput("1x minecraft:emerald");
        offer.setMaxUses("12");
        offer.setVillagerExperience("5");
        offer.setPriceMultiplier("0.05");
    });
    event.addCustomTrade("cleric", 2, (offer, entity, random) => {
        offer.setFirstInput("1x minecraft:emerald");
        offer.setOutput("1x minecraft:lapis_lazuli");
        offer.setMaxUses("16");
        offer.setVillagerExperience("5");
        offer.setPriceMultiplier("0.05");
    });

    // lvl 3
    event.addCustomTrade("cleric", 3, (offer, entity, random) => {
        offer.setFirstInput("2x minecraft:gold_ingot");
        offer.setOutput("1x minecraft:emerald");
        offer.setMaxUses("12");
        offer.setVillagerExperience("10");
        offer.setPriceMultiplier("0.05");
    });
    event.addCustomTrade("cleric", 3, (offer, entity, random) => {
        offer.setFirstInput("3x oreganized:silver_ingot");
        offer.setOutput("1x minecraft:emerald");
        offer.setMaxUses("12");
        offer.setVillagerExperience("10");
        offer.setPriceMultiplier("0.05");
    });
    event.addCustomTrade("cleric", 3, (offer, entity, random) => {
        offer.setFirstInput("2x minecraft:emerald");
        offer.setOutput("1x sullysmod:polished_jade");
        offer.setMaxUses("6");
        offer.setVillagerExperience("10");
        offer.setPriceMultiplier("0.05");
    });
    event.addCustomTrade("cleric", 3, (offer, entity, random) => {
        offer.setFirstInput("4x minecraft:emerald");
        offer.setOutput("1x minecraft:glowstone");
        offer.setMaxUses("6");
        offer.setVillagerExperience("10");
        offer.setPriceMultiplier("0.05");
    });

    // lvl 4
    event.addCustomTrade("cleric", 4, (offer, entity, random) => {
        offer.setFirstInput("1x miners_delight:cave_soup");
        offer.setOutput("1x minecraft:emerald");
        offer.setMaxUses("6");
        offer.setVillagerExperience("15");
        offer.setPriceMultiplier("0.05");
    });
    event.addCustomTrade("cleric", 4, (offer, entity, random) => {
        offer.setFirstInput("1x culturaldelights:fried_eggplant_pasta");
        offer.setOutput("1x minecraft:emerald");
        offer.setMaxUses("6");
        offer.setVillagerExperience("15");
        offer.setPriceMultiplier("0.05");
    });
    event.addCustomTrade("cleric", 4, (offer, entity, random) => {
        offer.setFirstInput("1x farmersdelight:vegetable_noodles");
        offer.setOutput("1x minecraft:emerald");
        offer.setMaxUses("6");
        offer.setVillagerExperience("15");
        offer.setPriceMultiplier("0.05");
    });
    event.addCustomTrade("cleric", 4, (offer, entity, random) => {
        offer.setFirstInput("5x minecraft:emerald");
        offer.setOutput("1x minecraft:ender_pearl");
        offer.setMaxUses("6");
        offer.setVillagerExperience("10");
        offer.setPriceMultiplier("0.05");
    });

    // lvl 5
    event.addCustomTrade("cleric", 5, (offer, entity, random) => {
        offer.setFirstInput("22x minecraft:nether_wart");
        offer.setOutput("1x minecraft:emerald");
        offer.setMaxUses("16");
        offer.setVillagerExperience("2");
        offer.setPriceMultiplier("0.05");
    });
    event.addCustomTrade("cleric", 5, (offer, entity, random) => {
        offer.setFirstInput("20x minecraft:emerald");
        offer.setOutput("1x minecraft:totem_of_undying");
        offer.setMaxUses("3");
        offer.setVillagerExperience("30");
        offer.setPriceMultiplier("0.2");
    });
    event.addCustomTrade("cleric", 5, (offer, entity, random) => {
        offer.setFirstInput("18x minecraft:emerald");
        offer.setOutput("1x cnb:heal_spell_book_1");
        offer.setMaxUses("3");
        offer.setVillagerExperience("30");
        offer.setPriceMultiplier("0.2");
    });
    event.addCustomTrade("cleric", 5, (offer, entity, random) => {
        offer.setFirstInput("2x minecraft:emerald");
        offer.setOutput("1x minecraft:experience_bottle");
        offer.setMaxUses("12");
        offer.setVillagerExperience("2");
        offer.setPriceMultiplier("0.05");
    });




	// Add Special Trades
// ----------------------------------------------------------------------------------------------
// TIPPED ARROWS
    const tippedArrow = VillagerUtils.createPotionTrade(["1x minecraft:emerald", "5x minecraft:arrow"]);
    const tippedArrowSilly = VillagerUtils.createPotionTrade(["1x minecraft:emerald", "5x minecraft:arrow"]);

    tippedArrow
        .potions(["minecraft:slowness", "minecraft:poison","minecraft:weakness"])
        .item("minecraft:tipped_arrow")
        .transform((offer, entity, random) => {
            offer.getOutput().setCount(5);
        })
    tippedArrowSilly
        .potions(["minecraft:strong_healing", "minecraft:strong_leaping", "ecologics:sliding"])
        .item("minecraft:tipped_arrow")
        .transform((offer, entity, random) => {
            offer.getOutput().setCount(5);
        })

    event.addTrade('fletcher', 5, tippedArrow)
    event.addTrade('fletcher', 5, tippedArrowSilly)


// ----------------------------------------------------------------------------------------------
// ENCHANTED BOOKS

/*const enchantedBookT1 = VillagerUtils.createEnchantedItemTrade(
    ["8x minecraft:emerald", "minecraft:book"],
    "minecraft:book"
);

enchantedBookT1
    .enchantments(["minecraft:protection","minecraft:projectile_protection"])
    .amount(2)

event.addTrade('librarian', 1, enchantedBookT1) */

})

// ----------------------------------------------------------------------------------------------
// FISHERMAN SPECIALS