export function load() {
	let katapult = [
		'katapult5.png',
		'Katapult',
		'client',
		'Katapult is a commercial real estate site currently in production, built by myself and my partner at Sandpiper Studio. The site leverages Directus CMS and a custom block architecture.',
		'https://www.katapultproperties.com/',
		'',
		'Svelte  |  Directus  |  Skeleton UI'
	];
	let glory_farms = [
		'farm2.png',
		'Glory Farms',
		'client',
		'Glory Farms is my first commercial production, designed for a wedding venue. The site will soon undergo an overhaul to enhance functionality and design.',
		'https://www.glory-farms.com/',
		'',
		'Svelte  |  PocketBase  |  Skeleton UI'
	];
	let jack_sims = [
		'jack4.png',
		'jacksims.dev',
		'project',
		'My personal website, now in its second rendition, features a sleek and smooth interface. It showcases my projects in an artistic and visually creative way.',
		'',
		'https://github.com/simsjack30/PersonalSite',
		'Svelte  |  Skeleton UI'
	];
	let ultimate_alphabet = [
		'alphabet2.png',
		'Ultimate Alphabet',
		'game',
		"A web version of Mike Wilks' book Ultimate Alphabet, where players compete on a global leaderboard to find as many items as possible in the images.",
		'https://ultimate-alphabet.vercel.app/',
		'https://github.com/simsjack30/UltimateAlphabet',
		'Svelte  |  PocketBase  |  shadcn-svelte'
	];
	let chemical_bonds = [
		'bonds.png',
		'chemical bonds',
		'game',
		'An educational Pico-8 game about chemistry, designed to teach the periodic table in a fun and interactive way.',
		'https://chimefever.itch.io/chemical-bonds',
		'https://github.com/simsjack30/ChemicalBonds',
		'Lua  |  Pico-8'
	];
	let wyr = [
		'wyr3.png',
		'WYR',
		'game',
		'My first game jam submission, created with a partner for Mini Jam 98. This roguelike shooter focuses on choosing between two options at the end of each level and ranked 2nd in enjoyment and 5th overall.',
		'https://seltzerfish.itch.io/wyr',
		'',
		'Godot  |  GDScript  |  Aseprite'
	];
	let shotgolf = [
		'golf3.png',
		'Shotgolf',
		'game',
		"Created for Mini Jam 117, Shotgolf won #1 for best concept. It's a fun twist on golf where you play as a shotgun.",
		'https://seltzerfish.itch.io/shotgolf',
		'',
		'Defold  |  Aseprite'
	];
	let punchline_crunchtime = [
		'joke2.png',
		'Punchline',
		'game',
		'Made with Godot and submitted to Ludum Dare 53, this game challenges players to navigate increasingly difficult levels as a comedian, all while telling jokes.',
		'https://chimefever.itch.io/punchline-crunchtime',
		'',
		'Godot  |  GDScript  | Procreate'
	];
	let boring_mazes = [
		'maze2.png',
		'Boring Mazes',
		'game',
		"Submitted to Trijam 200 with the theme 'Expect the unexpected,' this game won #1 for closest adherence to the theme and offers anything but boring mazes.",
		'https://chimefever.itch.io/very-boring-mazes',
		'',
		'Lua  |  Pico-8'
	];
	let sandy_booty = [
		'booty.png',
		'Sandy Booty',
		'game',
		'A Score Jam 18 submission that swept 1st place in all categories, including sound, aesthetic, and overall. I composed the original soundtrack.',
		'https://seltzerfish.itch.io/sandy-booty',
		'',
		'Logic Pro X  |  OP-1  |  Nord Stage 3'
	];
	let d3_portfolio = [
		'd3.png',
		'D3 Portfolio',
		'project',
		'I built this site to learn more about D3.js and to demonstrate my expertise in visual storytelling. The site features three advanced visualizations, built using the Mapbox, US Census, and Marketstack APIs.',
		'https://data-portfolio-two.vercel.app/',
		'https://github.com/simsjack30/D3_Portfolio',
		'Svelte  |  LayerChart  |  Svelte UX'
	];
	let brush_up = [
		'art2.png',
		'Brush Up',
		'game',
		'An educational game that uses the Chicago Art Institute public API to quiz players on art history trivia.',
		'https://webhome.auburn.edu/~jos0007/project5/quiz.html',
		'https://github.com/simsjack30/BrushUp',
		'PHP  |  MySQL'
	];
	let ocean_breeze = [
		'beach.png',
		'Ocean Breeze',
		'client',
		'A commercial website built by myself and my partner at Sandpiper Studio for a Maryland beach rental property.',
		'https://oceanbreezemd.com/',
		'',
		'Svelte  |  Directus  |  Skeleton UI'
	];

	let imageArray1 = [boring_mazes, shotgolf, glory_farms];
	let imageArray2 = [wyr, ultimate_alphabet, d3_portfolio, ocean_breeze];
	let imageArray3 = [chemical_bonds, katapult, sandy_booty];
	let imageArray4 = [jack_sims, brush_up, punchline_crunchtime];

	let totalImageArray = [imageArray1, imageArray2, imageArray3, imageArray4];

	return { totalImageArray };
}
