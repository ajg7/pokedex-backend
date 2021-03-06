exports.seed = function (knex) {
	const pokemon = [
		{
			name: "golem",
			type1: "rock",
			type2: "ground",
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/76.png",
			number: 76,
			height: 14,
			weight: 3000,
			entry:
				"Its boulder-like body is extremely hard. It can easily withstand dynamite blasts without damage.",
			habitat: "mountain",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/76.png",
		},
		{
			name: "ponyta",
			type1: "fire",
			type2: null,
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/77.png",
			number: 77,
			height: 10,
			weight: 300,
			entry:
				"Its hooves are 10 times harder than diamonds. It can trample anything completely flat in little time.",
			habitat: "grassland",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/77.png",
		},
		{
			name: "rapidash",
			type1: "fire",
			type2: null,
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/78.png",
			number: 78,
			height: 17,
			weight: 950,
			entry:
				"Very competitive, this POKéMON will chase anything that moves fast in the hopes of racing it.",
			habitat: "grassland",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/78.png",
		},
		{
			name: "slowpoke",
			type1: "water",
			type2: "psychic",
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/79.png",
			number: 79,
			height: 12,
			weight: 360,
			entry:
				"Incredibly slow and dopey. It takes 5 seconds for it to feel pain when under attack.",
			habitat: "waters-edge",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/79.png",
		},
		{
			name: "slowbro",
			type1: "water",
			type2: "psychic",
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/80.png",
			number: 80,
			height: 16,
			weight: 785,
			entry:
				"The shellder that is latched onto SLOWPOKE's tail is said to feed on the host's left-over scraps.",
			habitat: "waters-edge",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/80.png",
		},
		{
			name: "magnemite",
			type1: "electric",
			type2: "steel",
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/81.png",
			number: 81,
			height: 3,
			weight: 60,
			entry:
				"Uses anti-gravity to stay suspended. Appears without warning and paralyzes its prey.",
			habitat: "rough-terrain",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/81.png",
		},
		{
			name: "magneton",
			type1: "electric",
			type2: "steel",
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/82.png",
			number: 82,
			height: 10,
			weight: 600,
			entry:
				"Formed by several magnemites linked together. They frequently appear when sunspots flare up.",
			habitat: "rough-terrain",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/82.png",
		},
		{
			name: "farfetch'd",
			type1: "normal",
			type2: "flying",
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/83.png",
			number: 83,
			height: 8,
			weight: 150,
			entry:
				"The sprig of green onions it holds is its weapon. It is used much like a metal sword.",
			habitat: "grassland",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/83.png",
		},
		{
			name: "doduo",
			type1: "normal",
			type2: "flying",
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/84.png",
			number: 84,
			height: 14,
			weight: 392,
			entry:
				"A bird that makes up for its poor flying with its fast foot speed. Leaves giant footprints.",
			habitat: "grassland",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/84.png",
		},
		{
			name: "dodrio",
			type1: "normal",
			type2: "flying",
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/85.png",
			number: 85,
			height: 18,
			weight: 852,
			entry:
				"Uses its three brains to execute complex plans. While two heads sleep, one head stays awake.",
			habitat: "grassland",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/85.png",
		},
		{
			name: "seel",
			type1: "water",
			type2: null,
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/86.png",
			number: 86,
			height: 11,
			weight: 900,
			entry:
				"The protruding horn on its head is very hard. It is used for bashing through thick ice.",
			habitat: "sea",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/86.png",
		},
		{
			name: "dewgong",
			type1: "water",
			type2: "ice",
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/87.png",
			number: 87,
			height: 17,
			weight: 1200,
			entry:
				"Stores thermal energy in its body. Swims at a steady 8 knots even in intensely cold waters.",
			habitat: "sea",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/87.png",
		},
		{
			name: "grimer",
			type1: "poison",
			type2: null,
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/88.png",
			number: 88,
			height: 9,
			weight: 300,
			entry:
				"Appears in filthy areas. Thrives by sucking up polluted sludge that is pumped out of factories.",
			habitat: "urban",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/88.png",
		},
		{
			name: "muk",
			type1: "poison",
			type2: null,
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/89.png",
			number: 89,
			height: 12,
			weight: 300,
			entry:
				"Thickly covered with a filthy, vile sludge. It is so toxic, even its footprints contain poison.",
			habitat: "urban",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/89.png",
		},
		{
			name: "shellder",
			type1: "water",
			type2: null,
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/90.png",
			number: 90,
			height: 3,
			weight: 40,
			entry:
				"Its hard shell repels any kind of attack. It is vulnerable only when its shell is open.",
			habitat: "sea",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/90.png",
		},
		{
			name: "cloyster",
			type1: "water",
			type2: "ice",
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/91.png",
			number: 91,
			height: 15,
			weight: 1325,
			entry:
				"Cloyster that live in seas with harsh tidal currents grow large, sharp spikes on their shells.",
			habitat: "sea",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/91.png",
		},
		{
			name: "gastly",
			type1: "ghost",
			type2: "poison",
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/92.png",
			number: 92,
			height: 13,
			weight: 1,
			entry:
				"Almost invisible, this gaseous POKéMON cloaks the target and puts it to sleep without notice.",
			habitat: "urban",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/92.png",
		},
		{
			name: "haunter",
			type1: "ghost",
			type2: "poison",
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/93.png",
			number: 93,
			height: 16,
			weight: 1,
			entry:
				"Because of its ability to slip through block walls, it is said to be from an­other dimension.",
			habitat: "urban",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/93.png",
		},
		{
			name: "gengar",
			type1: "ghost",
			type2: "poison",
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/94.png",
			number: 94,
			height: 15,
			weight: 405,
			entry:
				"Under a full moon, this POKéMON likes to mimic the shadows of people and laugh at their fright.",
			habitat: "urban",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/94.png",
		},
		{
			name: "onix",
			type1: "rock",
			type2: "ground",
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/95.png",
			number: 95,
			height: 88,
			weight: 2100,
			entry:
				"As it grows, the stone portions of its body harden to become similar to a diamond, but colored black.",
			habitat: "cave",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/95.png",
		},
		{
			name: "drowzee",
			type1: "psychic",
			type2: null,
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/96.png",
			number: 96,
			height: 10,
			weight: 324,
			entry:
				"Puts enemies to sleep then eats their dreams. Occasionally gets sick from eating bad dreams.",
			habitat: "grassland",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/96.png",
		},
		{
			name: "hypno",
			type1: "psychic",
			type2: null,
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/97.png",
			number: 97,
			height: 16,
			weight: 756,
			entry:
				"The arcing movement and glitter of the pendulum lull the foe into a deep state of hypnosis. While this POKéMON searches for prey,it polishes the pendulum.",
			habitat: "grassland",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/97.png",
		},
		{
			name: "krabby",
			type1: "water",
			type2: null,
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/98.png",
			number: 98,
			height: 4,
			weight: 65,
			entry:
				"Its pincers are not only powerful weapons, they are used for balance when walking sideways.",
			habitat: "waters-edge",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/98.png",
		},
		{
			name: "kingler",
			type1: "water",
			type2: null,
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/99.png",
			number: 99,
			height: 13,
			weight: 600,
			entry:
				"The large pincer has 10000 hp of crushing power. However, its huge size makes it unwieldy to use.",
			habitat: "waters-edge",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/99.png",
		},
		{
			name: "voltorb",
			type1: "electric",
			type2: null,
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/100.png",
			number: 100,
			height: 5,
			weight: 104,
			entry:
				"Usually found in power plants. Easily mistaken for a POKé BALL, they have zapped many people.",
			habitat: "urban",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/100.png",
		},
	];

	return knex("pokemon").insert(pokemon);
};
