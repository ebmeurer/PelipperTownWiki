# VS Seeker teams

Hold the VS Seeker in the selected inventory slot and talk to an eligible NPC indoors or outdoors, outside an event or festival. Choose any tier, review its team and rewards, then accept. Alex mails one VS Seeker the morning after you win his one-heart battle. Existing winners receive the letter once after updating. The device is reusable. Each player may win against each NPC once per week across all tiers; everyone resets on Monday. Losing does not use up the weekly win. Your first VS Seeker victory mails a reusable Villager Battle Journal the next morning. Hold the book and press the action button to view bronze (15), silver (30), gold (45), and platinum (60) portrait stickers. Each tier must be earned separately; stickers persist while weekly availability resets. It unlocks at Battling level 1 and costs the same crafting ingredients as DexNav: 1 Battery Pack, 2 Iron Bars, 5 Refined Quartz. Levels 1–3 previously each granted one extra benefit (Antidote, Ether, Trophy Hunter), so the tie goes to level 1.

| Tier | Level | Pokémon | Victory rewards |
| --- | --- | --- | --- |
| 1 | 15 | 3 | 10 Poké Balls, 5 Potions, 100g |
| 2 | 30 | 4 | 10 Great Balls, 5 Super Potions, 300g |
| 3 | 45 | 5 | 10 Ultra Balls, 5 Revives, 600g |
| 4 | 60 | 6 | 20 Ultra Balls, 5 Max Revives, 1,200g |

## Research and design

The repository's vanilla, SVE, East Scarp, Ridgeside Village and Star Crossed villager partner options are the primary source. These authored rosters follow those families and themes; they do not change with an arbitrary custom partner selected in settings. Lower tiers use earlier evolutionary stages according to the shipped level requirements; non-level evolutions generally enter at level 30. Both types of dual-type Pokémon count against the maximum of three sharing a type. No duplicate species appear within a tier. Each species may belong to at most three vanilla NPCs and ten NPCs overall, counting each NPC once across all four tiers.

Community discussion supports Maru's Magnemite family, Demetrius's Paras and fungus research, and Sebastian's frog/dark theme. Suggestions differ, so these are design influences, not claims of consensus. [Stardew Valley Forums: For Pokémon Fans](https://forums.stardewvalley.net/threads/for-pok%C3%A9mon-fans.48297/). Abigail's Sableye also appears in [community trainer designs](https://www.reddit.com/r/StardewValley/comments/17qq44d). Smeargle and Ditto are replaced by thematic teammates because the seasonal attack picker cannot use their status-only learnsets; Wizard opens with Espurr instead of a Teleport-only Abra. Level-15 Lapras and Wooloo slots use Seel and Mareep; level-45/60 Clefable slots retain Clefairy as retained thematic choices from the original roster. The final six-member rosters and compatibility-character extensions are original adaptations of the local partner choices.

The base-game sprite sheets were inspected: Dwarf, Krobus, Wizard, Birdie, Henchman and Professor Snail have walking frames and are included. Authored walking characters and George are eligible; Marlon and Gunther are always excluded, including with expansion mods. George stays in his wheelchair without formation walking. Other stationary/special actors (including Gil, Bouncer, Fizz, Governor, Grandpa, Mr. Qi, Junimos, Bear and Mermaid) are omitted. Optional SVE, East Scarp, Ridgeside Village and Star Crossed characters require the NPC and every team species to be available, plus a normal four-direction, three-frame walking sheet.

Combat uses the existing story-battle entry point and seasonal trainer move selection: up to four distinct level-eligible moves with type coverage, including at least two damaging moves whenever the learned pool allows. Trainer attacks favor damage, same-type bonuses, and the current target’s type matchup. Walking villagers move behind the player with the existing collision-aware walking animation, offers encouragement, and returns to the original position/controller on cleanup. Victory grants normal trainer experience without advancing the seasonal ladder.

Ridgeside and Star Crossed add 60 trainers (54 and 6 respectively), for 143 trainers and 572 teams total. Every new opening trio includes at least one family from that NPC’s partner options. The build picks from reviewed thematic candidates while enforcing the overall limit; it does not assign arbitrary Pokémon at runtime. See [add-on design and walking audit](VS_SEEKER_ADDONS.md).

See the [diversity review](VS_SEEKER_DIVERSITY.md) for the reviewed evolution alternatives and remaining concentrations.

## Authored rosters

### ProfessorSnail

Fossils, field research and island specimens.

- Level 15: Omanyte, Kabuto, Anorith
- Level 30: Omanyte, Kabuto, Anorith, Tropius
- Level 45: Omastar, Kabutops, Armaldo, Tropius, Yanmega
- Level 60: Omastar, Kabutops, Armaldo, Tropius, Yanmega, Bronzong

### Dwarf

Cave fossils, gemstones and metal armor.

- Level 15: Kabuto, Sableye, Aron
- Level 30: Kabuto, Sableye, Aron, Dugtrio
- Level 45: Kabutops, Sableye, Aggron, Dugtrio, Torkoal
- Level 60: Kabutops, Sableye, Aggron, Dugtrio, Torkoal, Bronzong

### Krobus

Shy spirits, shadows and pumpkins.

- Level 15: Shuppet, Mimikyu, Sableye
- Level 30: Shuppet, Mimikyu, Sableye, Umbreon
- Level 45: Banette, Mimikyu, Sableye, Umbreon, Quagsire
- Level 60: Banette, Mimikyu, Sableye, Umbreon, Quagsire, Malamar

### Birdie

Island waters and memories of a sailor.

- Level 15: Horsea, Wingull, Seel
- Level 30: Horsea, Pelipper, Lapras, Dhelmise
- Level 45: Kingdra, Pelipper, Lapras, Dhelmise, Pincurchin
- Level 60: Kingdra, Pelipper, Lapras, Dhelmise, Pincurchin, Galarian Slowking

### Henchman

Guard duty, shadows and cave companions.

- Level 15: Houndour, Skorupi, Zubat
- Level 30: Houndoom, Skorupi, Crobat, Koffing
- Level 45: Houndoom, Drapion, Crobat, Weezing, Arcanine
- Level 60: Houndoom, Drapion, Crobat, Weezing, Arcanine, Scrafty

### Alex

Athletics, loyal dogs and competitive spirit.

- Level 15: Yamper, Machop, Scorbunny
- Level 30: Boltund, Machoke, Raboot, Hitmonchan
- Level 45: Boltund, Machamp, Cinderace, Hitmonchan, Tauros
- Level 60: Boltund, Machamp, Cinderace, Hitmonchan, Tauros, Pidgeot

### Elliott

Ocean poetry and elegant storytelling.

- Level 15: Feebas, Inkay, Seel
- Level 30: Milotic, Malamar, Lapras, Horsea
- Level 45: Milotic, Malamar, Lapras, Kingdra, Serperior
- Level 60: Milotic, Malamar, Lapras, Kingdra, Serperior, Noivern

### Harvey

Medicine and aviation.

- Level 15: Rowlet, Happiny, Swablu
- Level 30: Dartrix, Chansey, Swablu, Togetic
- Level 45: Decidueye, Chansey, Altaria, Togekiss, Dodrio
- Level 60: Decidueye, Chansey, Altaria, Togekiss, Dodrio, Reuniclus

### Sam

Electric instruments, music and skatepark energy.

- Level 15: Pichu, Toxel, Elekid
- Level 30: Raichu, Toxtricity, Electabuzz, Ludicolo
- Level 45: Raichu, Toxtricity, Electivire, Ludicolo, Rillaboom
- Level 60: Raichu, Toxtricity, Electivire, Ludicolo, Rillaboom, Hitmontop

### Sebastian

Frogs, nocturnal companions and motorbikes.

- Level 15: Froakie, Absol, Eevee
- Level 30: Frogadier, Absol, Umbreon, Cyclizar
- Level 45: Greninja, Absol, Umbreon, Cyclizar, Crobat
- Level 60: Greninja, Absol, Umbreon, Cyclizar, Crobat, Gengar

### Shane

Poultry, ducks and comfort food.

- Level 15: Torchic, Psyduck, Taillow
- Level 30: Combusken, Psyduck, Swellow, Snorlax
- Level 45: Blaziken, Golduck, Swellow, Snorlax, Cramorant
- Level 60: Blaziken, Golduck, Swellow, Snorlax, Cramorant, Ludicolo

### Abigail

Gemstones, haunted adventures and swordplay.

- Level 15: Sableye, Mimikyu, Gastly
- Level 30: Sableye, Mimikyu, Haunter, Mawile
- Level 45: Sableye, Mimikyu, Gengar, Mawile, Aerodactyl
- Level 60: Sableye, Mimikyu, Gengar, Mawile, Aerodactyl, Carbink

### Emily

Dreams, crystals, wool and bright colors.

- Level 15: Munna, Carbink, Spinda
- Level 30: Musharna, Carbink, Spinda, Dubwool
- Level 45: Musharna, Carbink, Spinda, Dubwool, Espeon
- Level 60: Musharna, Carbink, Spinda, Dubwool, Espeon, Altaria

### Haley

Sunflowers, fashion and beautiful photography subjects.

- Level 15: Sunflora, Buneary, Skitty
- Level 30: Sunflora, Lopunny, Delcatty, Ninetales
- Level 45: Sunflora, Lopunny, Delcatty, Ninetales, Roserade
- Level 60: Sunflora, Lopunny, Delcatty, Ninetales, Roserade, Milotic

### Leah

Wood sculpture, painting and forest foraging.

- Level 15: Bonsly, Vivillon, Scyther
- Level 30: Sudowoodo, Vivillon, Scyther, Trevenant
- Level 45: Sudowoodo, Vivillon, Scyther, Trevenant, Leafeon
- Level 60: Sudowoodo, Vivillon, Scyther, Trevenant, Leafeon, Gourgeist

### Maru

Astronomy, robotics and laboratory helpers.

- Level 15: Staryu, Magnemite, Golett
- Level 30: Starmie, Magneton, Golett, Metang
- Level 45: Starmie, Magneton, Golurk, Metagross, Porygon2
- Level 60: Starmie, Magneton, Golurk, Metagross, Porygon2, Rotom

### Penny

Gentle caregivers, storybooks and children.

- Level 15: Audino, Ralts, Togepi
- Level 30: Audino, Gardevoir, Togetic, Kangaskhan
- Level 45: Audino, Gardevoir, Togetic, Kangaskhan, Meowstic
- Level 60: Audino, Gardevoir, Togetic, Kangaskhan, Meowstic, Wigglytuff

### Caroline

Tea garden and tranquil afternoons.

- Level 15: Bulbasaur, Petilil, Chikorita
- Level 30: Ivysaur, Lilligant, Bayleef, Sinistea
- Level 45: Venusaur, Lilligant, Meganium, Polteageist, Vespiquen
- Level 60: Venusaur, Lilligant, Meganium, Polteageist, Vespiquen, Politoed

### Clint

Forge heat, ore and metalworking.

- Level 15: Numel, Aron, Magby
- Level 30: Numel, Aron, Magmar, Onix
- Level 45: Camerupt, Aggron, Magmar, Steelix, Torkoal
- Level 60: Camerupt, Aggron, Magmar, Steelix, Torkoal, Durant

### Demetrius

Fungal biology and scientific instruments.

- Level 15: Paras, Porygon, Solosis
- Level 30: Parasect, Porygon2, Solosis, Breloom
- Level 45: Parasect, Porygon2, Reuniclus, Breloom, Vileplume
- Level 60: Parasect, Porygon2, Reuniclus, Breloom, Vileplume, Rotom

### Evelyn

Flowers, baking and a welcoming garden.

- Level 15: Chikorita, Budew, Applin
- Level 30: Bayleef, Roselia, Appletun, Dachsbun
- Level 45: Meganium, Roserade, Appletun, Dachsbun, Togekiss
- Level 60: Meganium, Roserade, Appletun, Dachsbun, Togekiss, Butterfree

### Gus

Cooking, apples and generous hospitality.

- Level 15: Munchlax, Applin, Fidough
- Level 30: Snorlax, Dipplin, Dachsbun, Sinistea
- Level 45: Snorlax, Dipplin, Dachsbun, Polteageist, Ludicolo
- Level 60: Snorlax, Dipplin, Dachsbun, Polteageist, Ludicolo, Farfetchd

### Jas

Dolls, ribbons and gentle fairy tales.

- Level 15: Cleffa, Togepi, Skitty
- Level 30: Clefable, Togetic, Delcatty, Ponyta
- Level 45: Clefairy, Togetic, Delcatty, Rapidash, Politoed
- Level 60: Clefairy, Togetic, Delcatty, Rapidash, Politoed, Ribombee

### Jodi

Family care and household helpers.

- Level 15: Kangaskhan, Miltank, Audino
- Level 30: Kangaskhan, Miltank, Audino, Leavanny
- Level 45: Kangaskhan, Miltank, Audino, Leavanny, Corviknight
- Level 60: Kangaskhan, Miltank, Audino, Leavanny, Corviknight, Vaporeon

### Kent

Watchful protectors and disciplined veterans.

- Level 15: Growlithe, Houndour, Ralts
- Level 30: Arcanine, Houndoom, Gallade, Pidgeotto
- Level 45: Arcanine, Houndoom, Gallade, Pidgeot, Lucario
- Level 60: Arcanine, Houndoom, Gallade, Pidgeot, Lucario, Skarmory

### Leo

Bird companions and island life.

- Level 15: Swablu, Rowlet, Taillow
- Level 30: Swablu, Dartrix, Swellow, Alolan Exeggutor
- Level 45: Altaria, Decidueye, Swellow, Alolan Exeggutor, Araquanid
- Level 60: Altaria, Decidueye, Swellow, Alolan Exeggutor, Araquanid, Alolan Raichu

### Lewis

Town leadership, dignified pets and purple shorts.

- Level 15: Slowpoke, Meowth, Furfrou
- Level 30: Slowking, Persian, Furfrou, Honchkrow
- Level 45: Slowking, Persian, Furfrou, Honchkrow, Bronzong
- Level 60: Slowking, Persian, Furfrou, Honchkrow, Bronzong, Nidoking

### Linus

Forest friends, fishing and life outdoors.

- Level 15: Farfetchd, Phantump, Slowpoke
- Level 30: Farfetchd, Trevenant, Slowpoke, Pancham
- Level 45: Farfetchd, Trevenant, Slowbro, Pangoro, Heracross
- Level 60: Farfetchd, Trevenant, Slowbro, Pangoro, Heracross, Breloom

### Marnie

Ranch animals and caring for strays.

- Level 15: Miltank, Mareep, Lillipup
- Level 30: Miltank, Dubwool, Herdier, Ponyta
- Level 45: Miltank, Dubwool, Stoutland, Rapidash, Ampharos
- Level 60: Miltank, Dubwool, Stoutland, Rapidash, Ampharos, Mudsdale

### Pam

Stubborn strength, bus travel and resilient companions.

- Level 15: Tauros, Spinda, Ponyta
- Level 30: Tauros, Spinda, Ponyta, Glameow
- Level 45: Tauros, Spinda, Rapidash, Purugly, Mudsdale
- Level 60: Tauros, Spinda, Rapidash, Purugly, Mudsdale, Krookodile

### Pierre

Shopkeeping, rivalry and produce.

- Level 15: Zangoose, Meowth, Furfrou
- Level 30: Zangoose, Persian, Furfrou, Tsareena
- Level 45: Zangoose, Persian, Furfrou, Tsareena, Breloom
- Level 60: Zangoose, Persian, Furfrou, Tsareena, Breloom, Honchkrow

### Robin

Carpentry, heavy lifting and stone construction.

- Level 15: Machop, Rhyhorn, Scyther
- Level 30: Machoke, Rhyhorn, Scyther, Sudowoodo
- Level 45: Machamp, Rhyperior, Kleavor, Sudowoodo, Excadrill
- Level 60: Machamp, Rhyperior, Kleavor, Sudowoodo, Excadrill, Corviknight

### Sandy

Desert blooms, sand and elegant companions.

- Level 15: Trapinch, Vulpix, Budew
- Level 30: Trapinch, Ninetales, Roselia, Maractus
- Level 45: Flygon, Ninetales, Roserade, Maractus, Sandslash
- Level 60: Flygon, Ninetales, Roserade, Maractus, Sandslash, Milotic

### Vincent

Playful small partners and adventure stories.

- Level 15: Totodile, Pichu, Bonsly
- Level 30: Feraligatr, Raichu, Sudowoodo, Yanma
- Level 45: Feraligatr, Raichu, Sudowoodo, Yanma, Dragonair
- Level 60: Feraligatr, Raichu, Sudowoodo, Yanma, Dragonite, Goodra

### Willy

Fishing and life at sea.

- Level 15: Wingull, Seel, Horsea
- Level 30: Pelipper, Lapras, Horsea, Dhelmise
- Level 45: Pelipper, Lapras, Kingdra, Dhelmise, Pincurchin
- Level 60: Pelipper, Lapras, Kingdra, Dhelmise, Pincurchin, Cradily

### Wizard

Arcane knowledge, spirits and transformation.

- Level 15: Espurr, Litwick, Misdreavus
- Level 30: Kadabra, Litwick, Mismagius, Braixen
- Level 45: Alakazam, Lampent, Mismagius, Delphox, Noctowl
- Level 60: Alakazam, Chandelure, Mismagius, Delphox, Noctowl, Clefairy

### Morris

Corporate rivalry, persuasion and sharp deals.

- Level 15: Seviper, Mime Jr, Drowzee
- Level 30: Seviper, Mr Mime, Hypno, Persian
- Level 45: Seviper, Mr Mime, Hypno, Persian, Honchkrow
- Level 60: Seviper, Mr Mime, Hypno, Persian, Honchkrow, Weavile

### Andy

Working farm, loyal dogs and tough livestock.

- Level 15: Donphan, Tauros, Ponyta
- Level 30: Donphan, Tauros, Ponyta, Mudsdale
- Level 45: Donphan, Tauros, Rapidash, Mudsdale, Ampharos
- Level 60: Donphan, Tauros, Rapidash, Mudsdale, Ampharos, Gogoat

### Claire

Cinema, graceful performers and quiet dreams.

- Level 15: Ralts, Eevee, Togepi
- Level 30: Gardevoir, Sylveon, Togetic, Floragato
- Level 45: Gardevoir, Sylveon, Togekiss, Meowscarada, Milotic
- Level 60: Gardevoir, Sylveon, Togekiss, Meowscarada, Milotic, Chandelure

### Martin

Movies, technology and a young enthusiast.

- Level 15: Eevee, Porygon, Rotom
- Level 30: Eevee, Porygon2, Rotom, Raichu
- Level 45: Eevee, Porygon Z, Rotom, Raichu, Zoroark
- Level 60: Eevee, Porygon Z, Rotom, Raichu, Zoroark, Dragonite

### Olivia

Refinement, flowers and graceful companions.

- Level 15: Meowth, Budew, Skitty
- Level 30: Persian, Roselia, Delcatty, Ninetales
- Level 45: Persian, Roserade, Delcatty, Ninetales, Primarina
- Level 60: Persian, Roserade, Delcatty, Ninetales, Primarina, Gardevoir

### Scarlett

Ranch life and dependable animals.

- Level 15: Miltank, Yamper, Ponyta
- Level 30: Miltank, Boltund, Ponyta, Vespiquen
- Level 45: Miltank, Boltund, Rapidash, Vespiquen, Ampharos
- Level 60: Miltank, Boltund, Rapidash, Vespiquen, Ampharos, Mudsdale

### Sophia

Cosplay, fairy tales and the vineyard.

- Level 15: Eevee, Cleffa, Ralts
- Level 30: Sylveon, Clefable, Gardevoir, Galarian Ponyta
- Level 45: Sylveon, Sliggoo, Gardevoir, Galarian Rapidash, Appletun
- Level 60: Sylveon, Goodra, Gardevoir, Galarian Rapidash, Appletun, Polteageist

### Suki

Adaptable partners and household hospitality.

- Level 15: Furfrou, Bibarel, Farfetchd
- Level 30: Furfrou, Bibarel, Farfetchd, Ludicolo
- Level 45: Furfrou, Bibarel, Farfetchd, Ludicolo, Tsareena
- Level 60: Furfrou, Bibarel, Farfetchd, Ludicolo, Tsareena, Rotom

### Susan

Gardens, agriculture and mountain living.

- Level 15: Chikorita, Exeggcute, Miltank
- Level 30: Bayleef, Exeggutor, Miltank, Joltik
- Level 45: Meganium, Exeggutor, Miltank, Galvantula, Mudsdale
- Level 60: Meganium, Exeggutor, Miltank, Galvantula, Mudsdale, Politoed

### Victor

Engineering, electronics and sturdy constructs.

- Level 15: Beldum, Rotom, Porygon
- Level 30: Metang, Rotom, Porygon2, Magneton
- Level 45: Metagross, Rotom, Porygon2, Magneton, Golurk
- Level 60: Metagross, Rotom, Porygon2, Magneton, Golurk, Revavroom

### Camilla

Magic, theatrical spirits and foxes.

- Level 15: Mimikyu, Gastly, Alolan Vulpix
- Level 30: Mimikyu, Haunter, Alolan Ninetales, Gardevoir
- Level 45: Mimikyu, Gengar, Alolan Ninetales, Gardevoir, Mismagius
- Level 60: Mimikyu, Gengar, Alolan Ninetales, Gardevoir, Mismagius, Drampa

### Morgan

An apprentice with frogs and fairy magic.

- Level 15: Froakie, Poliwag, Cleffa
- Level 30: Frogadier, Poliwhirl, Clefable, Mismagius
- Level 45: Greninja, Poliwrath, Clefairy, Mismagius, Espeon
- Level 60: Greninja, Poliwrath, Clefairy, Mismagius, Espeon, Hydrapple

### Alesia

Ranged combat and watchful woodland partners.

- Level 15: Rowlet, Scyther, Pidgey
- Level 30: Dartrix, Scyther, Pidgeotto, Quilladin
- Level 45: Decidueye, Scyther, Pidgeot, Chesnaught, Flygon
- Level 60: Decidueye, Scyther, Pidgeot, Chesnaught, Flygon, Absol

### Isaac

Blades, fire and experienced fighters.

- Level 15: Charcadet, Scyther, Houndour
- Level 30: Ceruledge, Scyther, Houndoom, Gallade
- Level 45: Ceruledge, Scyther, Houndoom, Gallade, Pawniard
- Level 60: Ceruledge, Scyther, Houndoom, Gallade, Bisharp, Flygon

### Jadu

Arcane constructs and volatile energies.

- Level 15: Voltorb, Golett, Koffing
- Level 30: Electrode, Golett, Koffing, Kadabra
- Level 45: Electrode, Golurk, Galarian Weezing, Alakazam, Lampent
- Level 60: Electrode, Golurk, Galarian Weezing, Alakazam, Chandelure, Magneton

### Jolyne

Leadership and reliable defenders.

- Level 15: Ralts, Growlithe, Chespin
- Level 30: Gallade, Arcanine, Quilladin, Pidgeotto
- Level 45: Gallade, Arcanine, Chesnaught, Pidgeot, Metagross
- Level 60: Gallade, Arcanine, Chesnaught, Pidgeot, Metagross, Bastiodon

### Lance

Dragons and magical swordplay.

- Level 15: Dratini, Riolu, Charcadet
- Level 30: Dragonair, Lucario, Armarouge, Ceruledge
- Level 45: Dragonair, Lucario, Armarouge, Ceruledge, Flygon
- Level 60: Dragonite, Lucario, Armarouge, Ceruledge, Flygon, Bisharp

### Axel

Electronic tools and machinery.

- Level 15: Magnemite, Porygon, Voltorb
- Level 30: Magneton, Porygon2, Electrode, Golett
- Level 45: Magneton, Porygon2, Electrode, Golurk, Scizor
- Level 60: Magneton, Porygon2, Electrode, Golurk, Scizor, Galvantula

### Brooklyn

Healing, kindness and supportive partners.

- Level 15: Audino, Happiny, Togepi
- Level 30: Audino, Chansey, Togetic, Eldegoss
- Level 45: Audino, Chansey, Togekiss, Eldegoss, Lapras
- Level 60: Audino, Chansey, Togekiss, Eldegoss, Lapras, Ribombee

### Chloe

Soft fur and elegant companions.

- Level 15: Minccino, Skitty, Buneary
- Level 30: Cinccino, Delcatty, Lopunny, Sylveon
- Level 45: Cinccino, Delcatty, Lopunny, Sylveon, Delphox
- Level 60: Cinccino, Delcatty, Lopunny, Sylveon, Delphox, Florges

### Jace

Clever cats, gemstones and sly partners.

- Level 15: Meowth, Sableye, Glameow
- Level 30: Persian, Sableye, Glameow, Weavile
- Level 45: Persian, Sableye, Purugly, Weavile, Zoroark
- Level 60: Persian, Sableye, Purugly, Weavile, Zoroark, Meowstic

### Zoey

Flowers, gardening and cheerful wildlife.

- Level 15: Oddish, Bulbasaur, Sunflora
- Level 30: Gloom, Ivysaur, Sunflora, Butterfree
- Level 45: Vileplume, Venusaur, Sunflora, Butterfree, Ribombee
- Level 60: Vileplume, Venusaur, Sunflora, Butterfree, Ribombee, Politoed

### Aideen

Flowers, music and colorful performers.

- Level 15: Budew, Sunflora, Toxel
- Level 30: Roselia, Sunflora, Toxtricity, Ribombee
- Level 45: Roserade, Sunflora, Toxtricity, Ribombee, Sylveon
- Level 60: Roserade, Sunflora, Toxtricity, Ribombee, Sylveon, Ludicolo

### Beatrice

Birds, flight and waterside company.

- Level 15: Swablu, Wingull, Pidgey
- Level 30: Swablu, Pelipper, Pidgeotto, Lapras
- Level 45: Altaria, Pelipper, Pidgeot, Lapras, Eiscue
- Level 60: Altaria, Pelipper, Pidgeot, Lapras, Eiscue, Abomasnow

### Eloise

Friendly pets and storybook creatures.

- Level 15: Eevee, Skitty, Fidough
- Level 30: Eevee, Delcatty, Dachsbun, Raichu
- Level 45: Eevee, Delcatty, Dachsbun, Raichu, Butterfree
- Level 60: Eevee, Delcatty, Dachsbun, Raichu, Butterfree, Dragonite

### Eyvinder

Goats, wool and rural life.

- Level 15: Skiddo, Mareep, Mudbray
- Level 30: Skiddo, Dubwool, Mudsdale, Ampharos
- Level 45: Gogoat, Dubwool, Mudsdale, Ampharos, Rapidash
- Level 60: Gogoat, Dubwool, Mudsdale, Ampharos, Rapidash, Lycanroc

### Jacob

Caregivers and dependable companions.

- Level 15: Audino, Happiny, Furfrou
- Level 30: Audino, Chansey, Furfrou, Bayleef
- Level 45: Audino, Chansey, Furfrou, Meganium, Walrein
- Level 60: Audino, Chansey, Furfrou, Meganium, Walrein, Arcanine

### Jessie

Loyal dogs and familiar comforts.

- Level 15: Lillipup, Fidough, Growlithe
- Level 30: Herdier, Dachsbun, Arcanine, Boltund
- Level 45: Stoutland, Dachsbun, Arcanine, Boltund, Lycanroc
- Level 60: Stoutland, Dachsbun, Arcanine, Boltund, Lycanroc, Furret

### JosephineK

Gardens, flowers and graceful support.

- Level 15: Chikorita, Budew, Ralts
- Level 30: Bayleef, Roselia, Gardevoir, Milotic
- Level 45: Meganium, Roserade, Gardevoir, Milotic, Florges
- Level 60: Meganium, Roserade, Gardevoir, Milotic, Florges, Froslass

### Juliet

Music and independent companions.

- Level 15: Toxel, Meowth, Houndour
- Level 30: Toxtricity, Persian, Houndoom, Thwackey
- Level 45: Toxtricity, Persian, Houndoom, Rillaboom, Crobat
- Level 60: Toxtricity, Persian, Houndoom, Rillaboom, Crobat, Salazzle

### KatarynaLK

Graceful cats, foxes and soft fur.

- Level 15: Alolan Meowth, Vulpix, Minccino
- Level 30: Alolan Persian, Ninetales, Cinccino, Snorunt
- Level 45: Alolan Persian, Ninetales, Cinccino, Froslass, Gothitelle
- Level 60: Alolan Persian, Ninetales, Cinccino, Froslass, Gothitelle, Serperior

### Leximonster

Sea creatures, mystery and intellect.

- Level 15: Seel, Inkay, Horsea
- Level 30: Lapras, Malamar, Horsea, Dhelmise
- Level 45: Lapras, Malamar, Kingdra, Dhelmise, Reuniclus
- Level 60: Lapras, Malamar, Kingdra, Dhelmise, Reuniclus, Sableye

### OliverK

Sensitive companions and gentle magic.

- Level 15: Ralts, Eevee, Togepi
- Level 30: Gardevoir, Eevee, Togetic, Dubwool
- Level 45: Gardevoir, Eevee, Togekiss, Dubwool, Politoed
- Level 60: Gardevoir, Eevee, Togekiss, Dubwool, Politoed, Bellossom

### Rosa

Graceful water partners and hospitality.

- Level 15: Feebas, Audino, Fidough
- Level 30: Milotic, Audino, Dachsbun, Lilligant
- Level 45: Milotic, Audino, Dachsbun, Lilligant, Tropius
- Level 60: Milotic, Audino, Dachsbun, Lilligant, Tropius, Primarina

### ToriLK

Shapeshifters, strange science and spirits.

- Level 15: Trubbish, Grimer, Rotom
- Level 30: Trubbish, Grimer, Rotom, Haunter
- Level 45: Garbodor, Muk, Rotom, Gengar, Porygon Z
- Level 60: Garbodor, Muk, Rotom, Gengar, Porygon Z, Malamar

### VivienneLK

Warmth, foxes and flowers.

- Level 15: Vulpix, Growlithe, Larvesta
- Level 30: Ninetales, Arcanine, Larvesta, Floette
- Level 45: Ninetales, Arcanine, Larvesta, Florges, Gardevoir
- Level 60: Ninetales, Arcanine, Volcarona, Florges, Gardevoir, Frosmoth

### KennedyLK

Style, soft fur and elegant pets.

- Level 15: Minccino, Eevee, Meowth
- Level 30: Cinccino, Sylveon, Persian, Alolan Ninetales
- Level 45: Cinccino, Sylveon, Persian, Alolan Ninetales, Lilligant
- Level 60: Cinccino, Sylveon, Persian, Alolan Ninetales, Lilligant, Tsareena

### Jasper

Ancient life and fossil research.

- Level 15: Relicanth, Lileep, Anorith
- Level 30: Relicanth, Lileep, Anorith, Bronzor
- Level 45: Relicanth, Cradily, Armaldo, Bronzong, Sigilyph
- Level 60: Relicanth, Cradily, Armaldo, Bronzong, Sigilyph, Metagross

### CorwinLK

Coastal birds and nautical mysteries.

- Level 15: Wingull, Seel, Swablu
- Level 30: Pelipper, Lapras, Swablu, Dhelmise
- Level 45: Pelipper, Lapras, Altaria, Dhelmise, Bellibolt
- Level 60: Pelipper, Lapras, Altaria, Dhelmise, Bellibolt, Dragalge

### EdithHart

Baking, kindness and comforting companions.

- Level 15: Fidough, Happiny, Applin
- Level 30: Dachsbun, Chansey, Appletun, Audino
- Level 45: Dachsbun, Chansey, Appletun, Audino, Gourgeist
- Level 60: Dachsbun, Chansey, Appletun, Audino, Gourgeist, Polteageist

### MichaelHart

Protective dogs and dependable friends.

- Level 15: Growlithe, Houndour, Yamper
- Level 30: Arcanine, Houndoom, Boltund, Lycanroc
- Level 45: Arcanine, Houndoom, Boltund, Lycanroc, Lucario
- Level 60: Arcanine, Houndoom, Boltund, Lycanroc, Lucario, Blastoise

### EthanHart

Bright young companions and adventure.

- Level 15: Pichu, Furret, Butterfree
- Level 30: Raichu, Furret, Butterfree, Arcanine
- Level 45: Raichu, Furret, Butterfree, Arcanine, Dragonair
- Level 60: Raichu, Furret, Butterfree, Arcanine, Dragonite, Floatzel

### StellaHart

Gentle pets, flowers and bright colors.

- Level 15: Eevee, Minccino, Oddish
- Level 30: Sylveon, Cinccino, Gloom, Seel
- Level 45: Sylveon, Cinccino, Bellossom, Dewgong, Ribombee
- Level 60: Sylveon, Cinccino, Bellossom, Dewgong, Ribombee, Frosmoth

### DaleWaede

Rugged dogs, goats and country living.

- Level 15: Poochyena, Houndour, Lillipup
- Level 30: Mightyena, Houndoom, Herdier, Skiddo
- Level 45: Mightyena, Houndoom, Stoutland, Gogoat, Mudsdale
- Level 60: Mightyena, Houndoom, Stoutland, Gogoat, Mudsdale, Lycanroc

### KeanuAvis

Owls, birds and woodland watchers.

- Level 15: Rowlet, Swablu, Hoothoot
- Level 30: Dartrix, Swablu, Noctowl, Trapinch
- Level 45: Decidueye, Altaria, Noctowl, Flygon, Torterra
- Level 60: Decidueye, Altaria, Noctowl, Flygon, Torterra, Corviknight

### JadeMalic

Gemstones, unusual fairies and spectral blades.

- Level 15: Sableye, Mawile, Mimikyu
- Level 30: Sableye, Mawile, Mimikyu, Absol
- Level 45: Sableye, Mawile, Mimikyu, Absol, Ceruledge
- Level 60: Sableye, Mawile, Mimikyu, Absol, Ceruledge, Carbink

### kcspace.StarCrossed_Jack

Fossils and adventurous loyal companions.

- Level 15: Cranidos, Shieldon, Amaura
- Level 30: Rampardos, Bastiodon, Amaura, Arcanine
- Level 45: Rampardos, Bastiodon, Aurorus, Arcanine, Sneasler
- Level 60: Rampardos, Bastiodon, Aurorus, Arcanine, Sneasler, Yanmega

### kcspace.StarCrossed_Fable

Fishing and graceful sea companions.

- Level 15: Popplio, Piplup, Horsea
- Level 30: Brionne, Prinplup, Horsea, Dhelmise
- Level 45: Primarina, Empoleon, Kingdra, Dhelmise, Eelektrik
- Level 60: Primarina, Empoleon, Kingdra, Dhelmise, Eelektross, Cradily

### kcspace.StarCrossed_Chelsea

Stylish pets and lively music.

- Level 15: Skitty, Minccino, Meowth
- Level 30: Delcatty, Cinccino, Persian, Toxtricity
- Level 45: Delcatty, Cinccino, Persian, Toxtricity, Roserade
- Level 60: Delcatty, Cinccino, Persian, Toxtricity, Roserade, Beautifly

### kcspace.StarCrossed_Cody

Ranch animals and bright companions.

- Level 15: Torchic, Wooloo, Tauros
- Level 30: Combusken, Dubwool, Tauros, Ponyta
- Level 45: Blaziken, Dubwool, Tauros, Rapidash, Mudsdale
- Level 60: Blaziken, Dubwool, Tauros, Rapidash, Mudsdale, Ampharos

### kcspace.StarCrossed_Dominique

Flowers and imaginative gentle partners.

- Level 15: Ralts, Petilil, Budew
- Level 30: Gardevoir, Lilligant, Roselia, Gloom
- Level 45: Gardevoir, Lilligant, Roserade, Vileplume, Swoobat
- Level 60: Gardevoir, Lilligant, Roserade, Vileplume, Swoobat, Vivillon

### kcspace.StarCrossed_Andre

Sweet treats and friendly dogs.

- Level 15: Fidough, Lillipup, Growlithe
- Level 30: Dachsbun, Herdier, Arcanine, Snorlax
- Level 45: Dachsbun, Stoutland, Arcanine, Snorlax, Alolan Raichu
- Level 60: Dachsbun, Stoutland, Arcanine, Snorlax, Alolan Raichu, Boltund

### Yuuma

Brave little partners and friendship.

- Level 15: Riolu, Pichu, Togepi
- Level 30: Lucario, Raichu, Togetic, Vaporeon
- Level 45: Lucario, Raichu, Togekiss, Vaporeon, Furret
- Level 60: Lucario, Raichu, Togekiss, Vaporeon, Furret, Sneasler

### Aguar

Laboratory research and cave waters.

- Level 15: Squirtle, Porygon, Psyduck
- Level 30: Wartortle, Porygon2, Psyduck, Omanyte
- Level 45: Blastoise, Porygon2, Golduck, Omastar, Magnezone
- Level 60: Blastoise, Porygon2, Golduck, Omastar, Magnezone, Reuniclus

### Alissa

Orchards and cheerful songbirds.

- Level 15: Swablu, Applin, Budew
- Level 30: Swablu, Flapple, Roselia, Swellow
- Level 45: Altaria, Flapple, Roserade, Swellow, Bellossom
- Level 60: Altaria, Flapple, Roserade, Swellow, Bellossom, Wigglytuff

### Anton

Sturdy protectors and dependable workers.

- Level 15: Shieldon, Cubone, Machop
- Level 30: Bastiodon, Marowak, Machoke, Mightyena
- Level 45: Bastiodon, Marowak, Machamp, Mightyena, Excadrill
- Level 60: Bastiodon, Marowak, Machamp, Mightyena, Excadrill, Donphan

### Ariah

Curious minds and gentle psychic partners.

- Level 15: Ralts, Cleffa, Eevee
- Level 30: Gardevoir, Clefable, Espeon, Noctowl
- Level 45: Gardevoir, Clefable, Espeon, Noctowl, Swoobat
- Level 60: Gardevoir, Clefable, Espeon, Noctowl, Swoobat, Carbink

### Belinda

Mystical flowers and mountain spirits.

- Level 15: Vulpix, Flabebe, Spiritomb
- Level 30: Ninetales, Floette, Spiritomb, Litwick
- Level 45: Ninetales, Florges, Spiritomb, Lampent, Mismagius
- Level 60: Ninetales, Florges, Spiritomb, Chandelure, Mismagius, Sigilyph

### Bert

Orchards and strong farm helpers.

- Level 15: Turtwig, Skiddo, Tropius
- Level 30: Grotle, Skiddo, Tropius, Mudsdale
- Level 45: Torterra, Gogoat, Tropius, Mudsdale, Ampharos
- Level 60: Torterra, Gogoat, Tropius, Mudsdale, Ampharos, Bibarel

### Blair

Fishing birds and outdoor adventure.

- Level 15: Cramorant, Quaxly, Poliwag
- Level 30: Cramorant, Quaxwell, Poliwhirl, Heracross
- Level 45: Cramorant, Quaquaval, Politoed, Heracross, Yanmega
- Level 60: Cramorant, Quaquaval, Politoed, Heracross, Yanmega, Charizard

### Bliss

Tiny fairy tales and woodland friends.

- Level 15: Cleffa, Togepi, Flabebe
- Level 30: Clefable, Togetic, Floette, Furret
- Level 45: Clefable, Togekiss, Florges, Furret, Sunflora
- Level 60: Clefable, Togekiss, Florges, Furret, Sunflora, Vaporeon

### Bryle

Disciplined guardians and aerial travel.

- Level 15: Ralts, Riolu, Absol
- Level 30: Gallade, Lucario, Absol, Fearow
- Level 45: Gallade, Lucario, Absol, Fearow, Skarmory
- Level 60: Gallade, Lucario, Absol, Fearow, Skarmory, Sneasler

### Carmen

Fishing trips and resilient sea partners.

- Level 15: Horsea, Wingull, Goldeen
- Level 30: Horsea, Pelipper, Goldeen, Dhelmise
- Level 45: Kingdra, Pelipper, Seaking, Dhelmise, Pincurchin
- Level 60: Kingdra, Pelipper, Seaking, Dhelmise, Pincurchin, Cradily

### Corine

Warmth and helpful companions.

- Level 15: Togepi, Audino, Budew
- Level 30: Togetic, Audino, Roselia, Sylveon
- Level 45: Togekiss, Audino, Roserade, Sylveon, Swoobat
- Level 60: Togekiss, Audino, Roserade, Sylveon, Swoobat, Bellossom

### Daia

Stealth and agile woodland fighters.

- Level 15: Froakie, Sneasel, Zorua
- Level 30: Frogadier, Weavile, Zoroark, Dartrix
- Level 45: Greninja, Weavile, Zoroark, Decidueye, Salazzle
- Level 60: Greninja, Weavile, Zoroark, Decidueye, Salazzle, Scyther

### Ezekiel

Steady workers and loyal protectors.

- Level 15: Aron, Rhyhorn, Drilbur
- Level 30: Aron, Rhyhorn, Drilbur, Mudsdale
- Level 45: Aggron, Rhyperior, Excadrill, Mudsdale, Corviknight
- Level 60: Aggron, Rhyperior, Excadrill, Mudsdale, Corviknight, Pangoro

### Faye

Creative performers and elegant pets.

- Level 15: Skitty, Eevee, Spinda
- Level 30: Delcatty, Sylveon, Spinda, Vivillon
- Level 45: Delcatty, Sylveon, Spinda, Vivillon, Swellow
- Level 60: Delcatty, Sylveon, Spinda, Vivillon, Swellow, Beautifly

### Flor

Dreams and caring companions.

- Level 15: Munna, Audino, Galarian Weezing
- Level 30: Musharna, Audino, Galarian Weezing, Farigiraf
- Level 45: Musharna, Audino, Galarian Weezing, Farigiraf, Swoobat
- Level 60: Musharna, Audino, Galarian Weezing, Farigiraf, Swoobat, Eldegoss

### Freddie

Blades and brave companions.

- Level 15: Charcadet, Scyther, Absol
- Level 30: Ceruledge, Scyther, Absol, Pawniard
- Level 45: Ceruledge, Scizor, Absol, Pawniard, Samurott
- Level 60: Ceruledge, Scizor, Absol, Kingambit, Samurott, Farfetchd

### Helen

Quiet spirits and elegant protectors.

- Level 15: Snorunt, Vulpix, Spiritomb
- Level 30: Snorunt, Ninetales, Spiritomb, Swoobat
- Level 45: Froslass, Ninetales, Spiritomb, Swoobat, Noctowl
- Level 60: Froslass, Ninetales, Spiritomb, Swoobat, Noctowl, Chandelure

### Ian

Hard work and reliable helpers.

- Level 15: Machop, Bibarel, Skiddo
- Level 30: Machoke, Bibarel, Skiddo, Rhyhorn
- Level 45: Machamp, Bibarel, Gogoat, Rhyperior, Donphan
- Level 60: Machamp, Bibarel, Gogoat, Rhyperior, Donphan, Excadrill

### Irene

Baking and elegant food partners.

- Level 15: Applin, Fidough, Sinistea
- Level 30: Appletun, Dachsbun, Sinistea, Floette
- Level 45: Appletun, Dachsbun, Polteageist, Florges, Alolan Raichu
- Level 60: Appletun, Dachsbun, Polteageist, Florges, Alolan Raichu, Tsareena

### Jeric

Farm produce and strong livestock.

- Level 15: Tauros, Skiddo, Grookey
- Level 30: Tauros, Skiddo, Thwackey, Ponyta
- Level 45: Tauros, Gogoat, Rillaboom, Rapidash, Scovillain
- Level 60: Tauros, Gogoat, Rillaboom, Rapidash, Scovillain, Mamoswine

### Jio

Focused martial arts and stealth.

- Level 15: Tyrogue, Froakie, Absol
- Level 30: Hitmonlee, Frogadier, Absol, Lokix
- Level 45: Hitmonlee, Greninja, Absol, Lokix, Hypno
- Level 60: Hitmonlee, Greninja, Absol, Lokix, Hypno, Grapploct

### June

Music and graceful performers.

- Level 15: Swablu, Jigglypuff, Popplio
- Level 30: Swablu, Wigglytuff, Brionne, Toxtricity
- Level 45: Altaria, Wigglytuff, Primarina, Toxtricity, Swoobat
- Level 60: Altaria, Wigglytuff, Primarina, Toxtricity, Swoobat, Leavanny

### Keahi

Playful mischief and energetic athletes.

- Level 15: Monferno, Impidimp, Scorbunny
- Level 30: Monferno, Impidimp, Raboot, Raichu
- Level 45: Infernape, Grimmsnarl, Cinderace, Raichu, Annihilape
- Level 60: Infernape, Grimmsnarl, Cinderace, Raichu, Annihilape, Ludicolo

### Kenneth

Electronics and patient precision.

- Level 15: Rotom, Magnemite, Porygon
- Level 30: Rotom, Magneton, Porygon2, Joltik
- Level 45: Rotom, Magnezone, Porygon2, Galvantula, Metagross
- Level 60: Rotom, Magnezone, Porygon2, Galvantula, Metagross, Revavroom

### Kiarra

Music and digital creativity.

- Level 15: Toxel, Porygon, Spinda
- Level 30: Toxtricity, Porygon2, Spinda, Thwackey
- Level 45: Toxtricity, Porygon2, Spinda, Rillaboom, Rotom
- Level 60: Toxtricity, Porygon2, Spinda, Rillaboom, Rotom, Swellow

### Kimpoi

Relaxed tropical company.

- Level 15: Lombre, Cramorant, Tropius
- Level 30: Ludicolo, Cramorant, Tropius, Hypno
- Level 45: Ludicolo, Cramorant, Tropius, Hypno, Snorlax
- Level 60: Ludicolo, Cramorant, Tropius, Hypno, Snorlax, Bellossom

### Kiwi

Small birds and woodland guardians.

- Level 15: Rowlet, Piplup, Torchic
- Level 30: Dartrix, Prinplup, Combusken, Sigilyph
- Level 45: Decidueye, Empoleon, Blaziken, Sigilyph, Noctowl
- Level 60: Decidueye, Empoleon, Blaziken, Sigilyph, Noctowl, Simisage

### Lenny

Village leadership and caring protectors.

- Level 15: Chikorita, Pidgey, Audino
- Level 30: Bayleef, Pidgeotto, Audino, Eldegoss
- Level 45: Meganium, Pidgeot, Audino, Eldegoss, Kangaskhan
- Level 60: Meganium, Pidgeot, Audino, Eldegoss, Kangaskhan, Corviknight

### Lola

Veteran fighters and sharp instincts.

- Level 15: Charcadet, Sneasel, Absol
- Level 30: Armarouge, Weavile, Absol, Scyther
- Level 45: Armarouge, Weavile, Absol, Scizor, Druddigon
- Level 60: Armarouge, Weavile, Absol, Scizor, Druddigon, Drapion

### Lorenzo

Refined pets and loyal companions.

- Level 15: Meowth, Minccino, Furfrou
- Level 30: Persian, Cinccino, Furfrou, Boltund
- Level 45: Persian, Cinccino, Furfrou, Boltund, Houndoom
- Level 60: Persian, Cinccino, Furfrou, Boltund, Houndoom, Honchkrow

### Louie

Brave small companions and friendship.

- Level 15: Riolu, Pichu, Togepi
- Level 30: Lucario, Raichu, Togetic, Vaporeon
- Level 45: Lucario, Raichu, Togekiss, Vaporeon, Floatzel
- Level 60: Lucario, Raichu, Togekiss, Vaporeon, Floatzel, Furret

### Maddie

Technology and imaginative partners.

- Level 15: Beldum, Rotom, Golett
- Level 30: Metang, Rotom, Golett, Magneton
- Level 45: Metagross, Rotom, Golurk, Magnezone, Farigiraf
- Level 60: Metagross, Rotom, Golurk, Magnezone, Farigiraf, Reuniclus

### Maive

Dignified leaders and formal elegance.

- Level 15: Combee, Piplup, Feebas
- Level 30: Vespiquen, Prinplup, Milotic, Servine
- Level 45: Vespiquen, Empoleon, Milotic, Serperior, Honchkrow
- Level 60: Vespiquen, Empoleon, Milotic, Serperior, Honchkrow, Kingambit

### Malaya

Tropical music and family care.

- Level 15: Popplio, Tropius, Kangaskhan
- Level 30: Brionne, Tropius, Kangaskhan, Ludicolo
- Level 45: Primarina, Tropius, Kangaskhan, Ludicolo, Bellossom
- Level 60: Primarina, Tropius, Kangaskhan, Ludicolo, Bellossom, Alolan Raichu

### Naomi

Gentle caregivers and loyal family pets.

- Level 15: Kangaskhan, Audino, Happiny
- Level 30: Kangaskhan, Audino, Blissey, Dachsbun
- Level 45: Kangaskhan, Audino, Blissey, Dachsbun, Eldegoss
- Level 60: Kangaskhan, Audino, Blissey, Dachsbun, Eldegoss, Leavanny

### Olga

Gardens and orchard helpers.

- Level 15: Tropius, Chikorita, Applin
- Level 30: Tropius, Bayleef, Flapple, Vespiquen
- Level 45: Tropius, Meganium, Flapple, Vespiquen, Bellibolt
- Level 60: Tropius, Meganium, Flapple, Vespiquen, Bellibolt, Donphan

### Paula

Medicine and attentive assistants.

- Level 15: Happiny, Sewaddle, Girafarig
- Level 30: Blissey, Leavanny, Farigiraf, Galarian Weezing
- Level 45: Blissey, Leavanny, Farigiraf, Galarian Weezing, Eldegoss
- Level 60: Blissey, Leavanny, Farigiraf, Galarian Weezing, Eldegoss, Seismitoad

### Philip

Physical therapy and balanced movement.

- Level 15: Tyrogue, Poliwag, Drowzee
- Level 30: Hitmontop, Poliwhirl, Hypno, Grapploct
- Level 45: Hitmontop, Poliwrath, Hypno, Grapploct, Blissey
- Level 60: Hitmontop, Poliwrath, Hypno, Grapploct, Blissey, Leavanny

### Pika

Spicy cooking and hearty meals.

- Level 15: Capsakid, Munchlax, Fuecoco
- Level 30: Scovillain, Snorlax, Crocalor, Appletun
- Level 45: Scovillain, Snorlax, Skeledirge, Appletun, Kingler
- Level 60: Scovillain, Snorlax, Skeledirge, Appletun, Kingler, Camerupt

### Pipo

Water play and pond adventures.

- Level 15: Froakie, Sobble, Lombre
- Level 30: Frogadier, Drizzile, Ludicolo, Bellibolt
- Level 45: Greninja, Inteleon, Ludicolo, Bellibolt, Sliggoo
- Level 60: Greninja, Inteleon, Ludicolo, Bellibolt, Goodra, Yanmega

### Raeriyala

Ancient mountains and guardian spirits.

- Level 15: Celebi, Flabebe, Suicune
- Level 30: Celebi, Floette, Suicune, Carbink
- Level 45: Celebi, Florges, Suicune, Carbink, Sigilyph
- Level 60: Celebi, Florges, Suicune, Carbink, Sigilyph, Cofagrigus

### Richard

Leadership and watchful companions.

- Level 15: Pidgey, Murkrow, Luxio
- Level 30: Pidgeotto, Honchkrow, Luxray, Fearow
- Level 45: Pidgeot, Honchkrow, Luxray, Fearow, Mamoswine
- Level 60: Pidgeot, Honchkrow, Luxray, Fearow, Mamoswine, Kingambit

### Sari

Foxes and gentle magic.

- Level 15: Fennekin, Misdreavus, Zorua
- Level 30: Braixen, Mismagius, Zoroark, Noctowl
- Level 45: Delphox, Mismagius, Zoroark, Noctowl, Meowstic
- Level 60: Delphox, Mismagius, Zoroark, Noctowl, Meowstic, Chandelure

### Sean

Playful tricks and relaxed companions.

- Level 15: Impidimp, Munchlax, Mime Jr
- Level 30: Impidimp, Snorlax, Mr Mime, Zoroark
- Level 45: Grimmsnarl, Snorlax, Mr Mime, Zoroark, Spinda
- Level 60: Grimmsnarl, Snorlax, Mr Mime, Zoroark, Spinda, Annihilape

### Shanice

Welcoming caregivers and soft-furred pets.

- Level 15: Kangaskhan, Minccino, Furfrou
- Level 30: Kangaskhan, Cinccino, Furfrou, Dachsbun
- Level 45: Kangaskhan, Cinccino, Furfrou, Dachsbun, Eldegoss
- Level 60: Kangaskhan, Cinccino, Furfrou, Dachsbun, Eldegoss, Leavanny

### Shiro

Healing and patient martial strength.

- Level 15: Absol, Drowzee, Clobbopus
- Level 30: Absol, Hypno, Grapploct, Leafeon
- Level 45: Absol, Hypno, Grapploct, Leafeon, Golurk
- Level 60: Absol, Hypno, Grapploct, Leafeon, Golurk, Hitmonlee

### Sonny

Theatrical spirits and gentle guardians.

- Level 15: Mime Jr, Woobat, Drowzee
- Level 30: Mr Mime, Swoobat, Hypno, Drampa
- Level 45: Mr Mime, Swoobat, Hypno, Drampa, Froslass
- Level 60: Mr Mime, Swoobat, Hypno, Drampa, Froslass, Banette

### Torts

Shells and slow woodland adventures.

- Level 15: Turtwig, Squirtle, Torkoal
- Level 30: Grotle, Wartortle, Torkoal, Parasect
- Level 45: Torterra, Blastoise, Torkoal, Parasect, Kabutops
- Level 60: Torterra, Blastoise, Torkoal, Parasect, Kabutops, Relicanth

### Trinnie

Playful pets and bright little sparks.

- Level 15: Cleffa, Buneary, Furret
- Level 30: Clefable, Lopunny, Furret, Ribombee
- Level 45: Clefable, Lopunny, Furret, Ribombee, Vaporeon
- Level 60: Clefable, Lopunny, Furret, Ribombee, Vaporeon, Jolteon

### Undreya

Hidden identities and mischievous spirits.

- Level 15: Zorua, Mimikyu, Shuppet
- Level 30: Zoroark, Mimikyu, Shuppet, Mismagius
- Level 45: Zoroark, Mimikyu, Banette, Mismagius, Meowscarada
- Level 60: Zoroark, Mimikyu, Banette, Mismagius, Meowscarada, Spinda

### Ysabelle

Dance and graceful companions.

- Level 15: Quaxly, Buneary, Beautifly
- Level 30: Quaxwell, Lopunny, Beautifly, Lilligant
- Level 45: Quaquaval, Lopunny, Beautifly, Lilligant, Grapploct
- Level 60: Quaquaval, Lopunny, Beautifly, Lilligant, Grapploct, Swellow

### Zayne

Dignity and precise command.

- Level 15: Piplup, Horsea, Beldum
- Level 30: Prinplup, Horsea, Metang, Pawniard
- Level 45: Empoleon, Kingdra, Metagross, Pawniard, Honchkrow
- Level 60: Empoleon, Kingdra, Metagross, Kingambit, Honchkrow, Serperior

### Acorn

Forest seedlings and tiny guardians.

- Level 15: Chespin, Bonsly, Bulbasaur
- Level 30: Quilladin, Sudowoodo, Ivysaur, Simisage
- Level 45: Chesnaught, Sudowoodo, Venusaur, Simisage, Ribombee
- Level 60: Chesnaught, Sudowoodo, Venusaur, Simisage, Ribombee, Furret

### George

Stubborn strength, stonework, leeks and dependable old friends.

- Level 15: Geodude, Farfetchd, Mankey
- Level 30: Graveler, Farfetchd, Primeape, Torkoal
- Level 45: Golem, Farfetchd, Primeape, Torkoal, Slowbro
- Level 60: Golem, Farfetchd, Primeape, Torkoal, Slowbro, Drampa
