var friends = [
    {
        name: 'Jester',
        photo: 'https://vignette.wikia.nocookie.net/criticalrole/images/1/1b/Jester.jpg/revision/latest?cb=20180116194420',
        scores: [
            4,
            2,
            3,
            4,
            2,
            5,
            4,
            1,
            3,
            3
        ],
        blurb: '"Why though? But I won it."'
    },
    {
        name: 'Nott the Brave',
        photo: 'https://vignette.wikia.nocookie.net/criticalrole/images/d/dc/Nott.jpg/revision/latest?cb=20180116194408',
        scores: [
            3,
            3,
            5,
            3,
            5,
            3,
            2,
            2,
            5,
            3
        ],
        blurb: '"This is fine."'
    },
    {
        name: 'Caleb Widogast',
        photo: 'https://vignette.wikia.nocookie.net/criticalrole/images/9/92/Caleb_Widogast.jpg/revision/latest?cb=20180116194349',
        scores: [
            5,
            1,
            3,
            4,
            3,
            3,
            3,
            2,
            4,
            2
        ],
        blurb: '"Well, my social anxiety is getting the best of me. I\'m taking a walk; goodbye."'
    },
    {
        name: 'Fjord',
        photo: 'https://vignette.wikia.nocookie.net/criticalrole/images/2/24/Fjord.jpg/revision/latest?cb=20180116194444',
        scores: [
            2,
            4,
            3,
            4,
            3,
            2,
            4,
            2,
            2,
            2
        ],
        blurb: '"I hadn\'t had that terrifying thought. I\'ll Just add that to the list."'
    },
    {
        name: 'Beauregard',
        photo: 'https://vignette.wikia.nocookie.net/criticalrole/images/3/3e/Beauregard.jpg/revision/latest?cb=20180116194433',
        scores: [
            1,
            5,
            5,
            2,
            3,
            3,
            2,
            1,
            3,
            5
        ],
        blurb: '"Jails are not my favored terrain."'
    },
    {
        name: 'Mollymauk Tealeaf',
        photo: 'https://vignette.wikia.nocookie.net/criticalrole/images/c/ce/Mollymauk.jpg/revision/latest?cb=20180116194455',
        scores: [
            2,
            4,
            4,
            2,
            4,
            3,
            4,
            2,
            3,
            4
        ],
        blurb: '"Mother always told me to never give away a story for free.‬"'
    },
    {
        name: 'Yasha',
        photo: 'https://vignette.wikia.nocookie.net/criticalrole/images/9/92/Yasha.jpg/revision/latest?cb=20180116194508',
        scores: [
            1,
            5,
            4,
            2,
            4,
            2,
            1,
            1,
            3,
            3
        ],
        blurb: '"Woo"'
    },
    {
        name: "Vex'ahlia",
        photo: 'https://vignette.wikia.nocookie.net/criticalrole/images/4/4e/Vexahlia2.jpg/revision/latest?cb=20151228164410',
        scores: [
            5,
            1,
            3,
            3,
            5,
            3,
            4,
            4,
            3,
            3
        ],
        blurb: '"Would you like to talk before...or after?"'
    },
    {
        name: "Vax'ildan",
        photo: 'https://vignette.wikia.nocookie.net/criticalrole/images/4/4e/Vaxildan2.png/revision/latest?cb=20151228163354',
        scores: [
            3,
            4,
            3,
            4,
            3,
            4,
            3,
            2,
            3,
            3
        ],
        blurb: '"And I walk away."'
    },
    {
        name: 'Keyleth',
        photo: 'https://vignette.wikia.nocookie.net/criticalrole/images/c/c2/Keyleth2.png/revision/latest?cb=20151228163618',
        scores: [
            3,
            3,
            3,
            5,
            2,
            2,
            4,
            4,
            2,
            1
        ],
        blurb: '"I’m willing to dedicate the rest of my life to doing whatever I can for all of us."'
    },
    {
        name: 'Scanlan Shorthalt',
        photo: 'https://vignette.wikia.nocookie.net/criticalrole/images/a/a9/Scanlan2.png/revision/latest?cb=20151228164935',
        scores: [
            5,
            1,
            3,
            2,
            4,
            5,
            5,
            3,
            2,
            4
        ],
        blurb: '"Oh, you haven\'t heard of Scanlan Shorthalt? Well, gird your loins, ladies, because he has his eye on you."'
    },
    {
        name: 'Grog Strongjaw',
        photo: 'https://vignette.wikia.nocookie.net/criticalrole/images/4/45/Grog2.png/revision/latest?cb=20151228165057',
        scores: [
            1,
            5,
            5,
            3,
            1,
            4,
            2,
            3,
            4,
            4
        ],
        blurb: '"I would like to RAGE!"'
    },
    {
        name: 'Percival Fredrickstein Von Musel Klossowski de Rolo III',
        photo: 'https://vignette.wikia.nocookie.net/criticalrole/images/9/91/Percy2.png/revision/latest?cb=20151228164610',
        scores: [
            5,
            1,
            3,
            2,
            3,
            2,
            4,
            5,
            2,
            2
        ],
        blurb: '"Your secret is safe with my indifference."'
    },
    {
        name: 'Pike Trickfoot',
        photo: 'https://vignette.wikia.nocookie.net/criticalrole/images/1/1b/Pike2.png/revision/latest?cb=20151228165247',
        scores: [
            3,
            4,
            3,
            5,
            3,
            2,
            2,
            2,
            2,
            1
        ],
        blurb: '"I\'m a MONSTAH!"'
    },
    {
        name: 'Tiberius Stormwind',
        photo: 'https://vignette.wikia.nocookie.net/criticalrole/images/9/9c/Tiberius.png/revision/latest?cb=20150418162704',
        scores: [
            5,
            1,
            1,
            2,
            3,
            2,
            5,
            4,
            4,
            3
        ],
        blurb: '"Greetings and Salutations!'
    }
];

module.exports = friends;