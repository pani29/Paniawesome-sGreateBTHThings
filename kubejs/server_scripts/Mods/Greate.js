// priority: 0
ServerEvents.recipes(event => {

    let tiers = [
        'andesite',
        'steel',
        'aluminium',
        'stainless_steel',
        'titanium',
        'tungsten_steel',
        'palladium',
        'naquadah',
        'darmstadtium',
        'neutronium'
    ];

    let plates = [
        'gtceu:wood_plate',
        'gtceu:stone_plate',
        'gtceu:steel_plate',
        'gtceu:aluminium_plate',
        'gtceu:stainless_steel_plate',
        'gtceu:titanium_plate',
        'gtceu:tungsten_steel_plate',
        'gtceu:palladium_plate',
        'gtceu:naquadah_plate',
        'gtceu:darmstadtium_plate'
    ];
    let nuggets = [
        'gtceu:zinc_nugget',
        'gtceu:steel_nugget',
        'gtceu:aluminium_nugget',
        'gtceu:stainless_steel_nugget',
        'gtceu:titanium_nugget',
        'gtceu:tungsten_steel_nugget',
        'gtceu:palladium_nugget',
        'gtceu:naquadah_nugget',
        'gtceu:darmstadtium_nugget',
        'gtceu:neutronium_nugget'
    ];

    let materials = [
        'minecraft:andesite',
        'minecraft:glowstone_dust',
        'minecraft:andesite',
        'minecraft:andesite',
        'minecraft:andesite',
        'minecraft:andesite',
        'minecraft:andesite',
        'minecraft:andesite',
        'minecraft:andesite',
        'minecraft:andesite',
        // TODO change after magic mods are established
        
    ]

    // TODO: Uncomment when KubeJS Create is added
    // tiers.forEach((tier, index) => {
    //     // small cogwheel
    //     event.recipes.createDeploying(`greate:${tier}_cogwheel`, [`greate:${tier}_shaft`, `${plates[index]}`]);
    //     // large cogwheel
    //     event.recipes.createDeploying(`greate:large_${tier}_cogwheel`, [`greate:${tier}_cogwheel`, `${plates[index]}`]);
    //     event.recipes.createSequencedAssembly([
    //         `greate:large_${tier}_cogwheel`
    //     ],  `greate:${tier}_shaft`, [
    //         event.recipes.createDeploying(`greate:${tier}_cogwheel`, [`greate:${tier}_cogwheel`, `${plates[index]}`])
    //     ]).transitionalItem(`greate:${tier}_cogwheel`).loops(2)
    //     // alloys
    //     event.recipes.createMixing(
    //         Item.of(`greate:${tier}_alloy`, 1),
    //         [
    //             `${materials[index]}`,
    //             `${nuggets[index]}`
    //         ]
    //     )
    // });
});
