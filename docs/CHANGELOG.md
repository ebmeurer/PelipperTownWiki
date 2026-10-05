# Pelipper Town changelog

## 1.2.6

### Added

- Smoliv, Dolliv, and Arboliva with normal/shiny animations and portraits,
  level-25/35 evolutions, breeding, official moves, harvest/orchard chores,
  crop-quality passives, and daytime farm/woodland encounters.
- Barn produce references for every built-in Pokémon in the player guide and
  Excel Master List. Expanded species goods with Duck Feathers, Rabbit's Feet,
  tropical fruit, mushrooms, flowers, Coffee Beans, Oil, Sap, and Coal.
- Slugma and Magcargo with normal/shiny animations and portraits, level-38
  evolution, breeding, chores, Flame Body, and desert/volcanic encounters.
- Completed the Grubbin family's official Scarlet/Violet level-up moves,
  including Sticky Web, Charjabug's Charge, and Vikavolt's Thunderbolt.
- **Pokémon in cutscenes** under Appearance: optionally hide deployed and
  ambient villager partners during story scenes. Enabled by default; each
  multiplayer player controls their own view. Festivals and story actors keep
  their existing visibility.
- Giratina Standard/Origin form switching, with normal/shiny art and saved choices.
- Level-45 Meloetta at the Beach on Winter 15–17, including the Night Market.
  Passive until attacked; calls two level-35 Wigglytuffs at two-thirds health.
- Meloetta and Giratina entries in Marlon's Legendary Field Guide.

### Improved

- Renamed Calm, Bold, and Gentle temperaments to Mellow, Daring, and Loyal;
  existing Pokémon and Eggs retain their personalities and Nature.
- Curious partners gain a small bond-based range bonus in Explore and assist,
  capped at two extra tiles. Other movement commands keep their normal ranges.
- Loyal partners gradually become more confident, helpful, and sociable with
  bond, while remaining able to help from the start. Added player-guide details.
- Fetch works outdoors and inside breeding Barns.
- Pokémon wait one second before catching an airborne frisbee.
- Water landings drift slowly toward shore so Water-type Pokémon can retrieve them.
- Up to four Pokémon race for each frisbee throw, and your partner joins the
  race alongside ranch residents instead of claiming every throw.
- Each quest NPC reacts to shiny, legendary, and shiny legendary donations.
- Calyrex's Verdant Crown keeps each crop's days of growth when it advances a
  phase, so every boost saves a full phase. A morning notice says how many
  crops it sped up.

### Fixed

- Robin's ranch and hut introduction quests ignore quest-log entries with no
  ID, preventing a repeated one-second update error reported while Pokémon
  were grazing.
- Restored mine, Skull Cavern, quarry mine, and legendary chamber encounters
  blocked by the ranch fence check treating cave walls as enclosed farm yards.
- Pokémon requests appear on Help Wanted 0.9.3's board; previously missed slots recover.
- Carried frisbees return to their owner when changing maps.
- Willy's rare Pokémon dialogue fills in the player's name correctly.
- Dialogue and menus fall back to bundled English if translation files cannot load.
- Quality and quantity passives apply to bombs, Auto-Grabbers, Pokémon helpers,
  and Automate collections.
- Machine-speed passives apply to repeat and automatically refilled cycles.
- Tooltips preserve line breaks, blank paragraphs, and repeated lines.
- Clearer farmhand sync errors and reconnect instructions for lost SMAPI handshakes.
- Completed Meloetta localization and French/Vietnamese sync messages.
- A caught Magikarp shows its whole sprite when it is pulled from the water
  and held overhead, instead of a cropped corner.
- Status conditions colour the whole health bar again.
- Pokémon that can't swim wait where a floating frisbee will wash ashore, and
  can grab it from the bank, instead of retrying the chase over and over.

## 1.2.5

### Added

- PokéRanch Markers: up to ten owned Pokémon roam, swim, spar, and rest in
  fenced yards. Wild Pokémon stay out.
- Pokémon Huts: helpers do chores within ten tiles, store cargo, and play with
  ranch toys. Robin unlocks the marker after 15 catches and the hut after 25.
- Ranch Balls and White Frisbees at Breeding level 2; Punching Bags at level 4.
  Jas, Vincent, and Alex send frisbees at 3, 3, and 4 hearts.
- Charged, steerable frisbees with bounces, midair catches, and weapon/tool
  deflections. Works while mounted.
- Ball smashes, volleys, and rallies. A 30-touch rally can attract level-50
  Victini once per day.
- Partner, ranch, Barn, and hut Pokémon earn toy-play XP. Partners get first
  claim on their owner's throws.
- Host-controlled farmer damage reduction: 0–100%, default 30%. Pokémon attack
  damage is 10% lower; both reductions stack.
- Origin Dialga/Palkia and Primal Dialga; Wizard quests for Groudon/Kyogre's Orbs.
- Shiny Cosmog/Phione reward Eggs: 1-in-256, up to 1-in-32 with bonuses.
- Chinchou, Lanturn, and the Grubbin and Fomantis families.
- `pokemon_netprobe` multiplayer diagnostics; French and Vietnamese ranch text.

### Improved

- Live multiplayer toy play with instant local throws, steering, hits, and bumps.
  Protocol 19 requires matching host and guest builds.
- Smoother remote Pokémon movement and hops, including across maps.
- Pokémon chase toys at their own pace, intercept throws, pass, and cheer.
- Faster frisbees with 13-tile reach.
- Ranch residents keep species sleep schedules, seek friends, follow bonded
  owners, and leave daily produce. Fire/Electric residents glow after dark.
- Daily ranch training and bonding; Breeding perks at levels 2, 5, and 10.
- Multi-select PokéBox pickers, **Return all**, and hut chore previews.
- Better job tools cover more targets; mixed cargo of one family shares a bundle.
- Outdoor breeding pairs roam, nap, and swim within fenced yards.
- Cheaper Ranch Marker/Ball recipes; better gathered-item quality and fishing spots.
- Fuller Brilliant Diamond/Shining Pearl learnsets for Budew and 17 other lines.
- Updated toy art and shadows; faster ranch, hut, picker, and dungeon updates.

### Fixed

- Frisbee charge, steering, placement previews, and immediate self-pickup.
- New-save Pokémon serialization errors.
- Leah's Zorua quest Journal reverting to its investigation stage.
- Shiny Alcremie sprites, including all 63 appearances.
- Calyrex's Verdant Crown failing to advance crop growth.
- Pokémon sleeping heights, shadows, emotes, and health bars.
- Farmhand Joja Mew controls and Deoxys awakening while the host is elsewhere.
- Controller confirmation for multiplayer trades and activities.
- Ranch resets after fence repairs and PokéBox return buttons.
- Toy sound pitch and duplicate kicks; blurry item outlines.
- Wedding Ring proposals and player-specific Jas quest Ponyta.

## 1.2.4

- Added Starly, Staravia, and Staraptor with encounters, evolution, breeding,
  chores, and Custom starter selection.
- Added per-Pokémon passive toggles in the Partner Journal, including multiplayer.
- Fixed multiplayer healing, trainer rewards, fishing credit, Mewtwo shaft
  interception, combat stat arrows, and cutscene dismounts.
- Prevented duplicate forage pickups and conflicts with player debris collection.
- Fixed Reshiram and Zekrom shrinking while ridden; adjusted rider placement.
- Restored item artwork and corrected Emerald and Plasma Ball fallback icons.
- Completed missing French and Vietnamese Pokémon names, Pokédex entries, and
  ability text; added an English translation template.
- Added support-mode switching at active PokéLink Stations.
- Clarified Breeding XP, level-0 bonuses, quest lure controls, and DLL troubleshooting.

## 1.2.3

- Added proper normal/shiny portraits for Phione and the other eleven
  legendary field Pokémon, with available expressions instead of the
  overworld-sprite fallback. Fixed shiny Alcremie using its normal portrait,
  and filled missing Low Key Toxtricity and Snowy Castform mood portraits
  with suitable authored expressions from the same forms.
- Evolution now alternates white silhouettes of the old and evolved Pokémon
  for two seconds, accelerating before revealing the evolved form. The
  Appearance setting can disable the strobe.

- Fixed shiny Dedenne using normal overworld colors. Its available shiny
  animations now render correctly, with a shiny resting pose for damage.

- Added the host-controlled Legends per farmer setting. Fixed legendary catch
  eligibility, defeat windows, and Crown cooldowns can use each farmer’s history;
  shared catches remain the default. Deoxys’s meteorite can return for a farmer
  who has not faced it yet.

- Corrected the shared walking/mount direction layout for the twelve legendary
  field sprites, including normal and shiny artwork.
- Added Wild Pokémon damage (10–200%) and Dungeon Pokémon density (0–200%)
  sliders in GMCM. Dungeon groups now scale to connected reachable ground;
  the host controls both settings in multiplayer.
- Added Croagunk and Toxicroak with credited normal/shiny art and portraits,
  freshwater-shore encounters, level-37 evolution, breeding, Dry Skin, chores,
  and Scarlet/Violet level-up moves.
- Clarified farm-wide first legendary catches and Champion's Crown rematches
  in the multiplayer guide.

- Added the host-controlled `StartingPreset` config (0–5): let new farmers
  choose, or require Starters, Pikachu/Eevee, Bootstraps, Hardcore, or Custom.
  Dedicated servers can use 3 for ten Poké Balls and Marnie's Ranch Guide with
  no starter Pokémon. Existing journey choices stay intact.
- Added Klefki with credited normal/shiny sprites and portraits, rare year-round
  Town/Railroad encounters, breeding, companion chores, Prankster, and its
  Scarlet/Violet level-up moves.
- Added a searchable Sword and Shield Trial walkthrough to the Player and Quest
  Guides, including the level-55 unlock and 300 wild-Pokémon defeat requirement.

- Jodi recognizes a shiny Lillipup donation, including farmhand turn-ins.
- Retired Ranch Guide and Magikarp item IDs remain save-compatible but no
  longer appear as duplicates in item-spawner catalogs.
- George now offers all four VS Seeker tiers and journal stickers while
  remaining stationary in his wheelchair.
- Hisuian starter summaries distinguish the Mountain/Railroad/Mines route
  from the ordinary final form's elsewhere route.
- Outbreak selection and spawning now respect Farm/Town wild-spawn settings.
- Mewtwo only forces the first floor-99 encounter. Retries and Crown rematches
  provide an immediate escape ladder, and shaft falls can skip later visits.
- Custom object icons fit Stardew's 16-pixel source rectangle in crafting,
  shop and other native UI paths instead of showing only their top-left corner.

## 1.2.2

### Added

- Azurill, Hoppip, Fletchling, Jangmo-o, Dreepy, Ducklett, Hatenna, Wimpod,
  and Barboach families; Dedenne; and the Hisuian final starters.
- Weather Castform, Sunshine Cherrim, and Groudon/Kyogre weather reactions.
- Encounters or rewards for Xerneas, Yveltal, Reshiram, Zekrom, Zacian,
  Zamazenta, Zeraora, Shaymin, Jirachi, Victini, Manaphy, Phione, and Rotom.
- Marlon's Legendary Field Guide, four legendary summon items, the level-55
  Sword and Shield Ball quest, and Phione/Rotom VS Seeker Eggs.
- 13 mounts and Transform/Revert commands for Zorua, Zoroark, and Ditto.
- Configurable Poké Ball yields, new-species protection, clearer DexNav
  markers, summonable-Pokémon protection, content-pack stat overrides, and
  regional-form generation filters.

### Improved

- Reduced sprite-loading stalls, memory use, and overhead in menus, spawning,
  companion jobs, pathing, combat, and multiplayer.
- New configs use Optimized soft outlines with a larger texture budget.
- PokéLink partners deploy in Assist; interact to change modes, ride, or feed.
- Champion's Crown makes legendaries peaceful until attacked and allows daily
  Solgaleo, Lunala, and Secret Woods Celebi rematches. Group fights stay hostile.
- Zeraora's letter now gives a Plasma Ball and recipe for its level-70 fight;
  older saves receive the updated letter.
- Legendary Resonance covers relic summons and all legendary shiny rolls.
  Stronger legendary passives; Haley's level-60 rematch can give another Cosmog Egg.
- 12 team presets, adjustable legendary HP, slimmer boss HUDs, better capture
  targeting, and more reliable close-range attacks.
- Rare Candy costs 1 Iridium Bar and 5 Sugar. Clearer tilling and legendary guides.
- Persistent Mewtwo retry shortcut on floor 99; improved evolutions, flying
  mounts, shiny chimes, and developer commands.

### Fixed

- Fixed guest save loading failing when reading Mewtwo's host-only checkpoint.
- Harvey replaces lost Spare Suits during The Window Watcher. Select the suit
  and press the normal action button to throw it, including short presses.
- Duplicate fossils given to Gunther renew family sightings and spawn boosts.
  Repaired missing research sightings and stale spawn eligibility.
- Neutral resting poses for Pokémon with exaggerated idle frames, including Empoleon.
- VS Seeker spectators resume their schedules after battles; level-60 prompts
  list Willy's Phione Egg and Maru's Rotom Egg.
- Music continues after Pokémon change the weather to rain.
- Farmhand mounts, Egg steps, rewards, journal stickers, and secret Mew access;
  Unlimited Ball no longer consumes held premium Balls.
- Partner interactions and keyboard/controller navigation across menus and split screen.
- Haley's Cosmog Egg, Wizard mail, translated quests, and Harvey/Robin/Linus turn-ins.
- Espeon's early Confusion and Poipole's Dragon Pulse evolution.
- Large-rock mining, long-cast fishing, and frozen trainer/PvP targets.
- Human Pokémon greetings, trash reactions, cutscene shadows, and title cleanup.
- Optional-mod startup failures, stale recipes, Vortex packaging, and Mewtwo save keys.

## 1.2.1 (9/13/2026)

- Added the Teddiursa, Hoenn Zigzagoon, Whismur, Cherubi, and Stufful families,
  including Ursaluna.
- Added Milcery; a Prismatic Shard evolves it into Rainbow Swirl Alcremie.
- Fixed spouse gifts resetting friendship progress above ten hearts.
- Stopped watering cans and other utility tools from damaging wild Pokémon.
- Fixed scythes and other melee weapons hitting wild Pokémon twice.
- Fixed stuck multiplayer trades and battles; pending requests can now be
  cancelled.
- Fixed tall-mount dismount offsets and elemental companion lights for
  farmhands.
- Fixed the Ghost Club cemetery meeting trigger and multiplayer schedule sync.
- Improved multiplayer catch and tool-hit validation and removed redundant
  roster syncs.

## 1.2.0 (9/10/2026)

- Added the VS Seeker: four battle tiers, weekly rewards, and 568 teams for
  142 villagers across vanilla and supported expansions. Battles work indoors
  and outdoors, with one win per villager each week. A friendly match is a
  full team fight: when your Pokémon faints the next healthy one steps in, and
  you can swap mid-battle. The match only ends when a side runs out.
- Added a Battle Journal with permanent victory stickers and weekly rematch
  tracking, plus a Pokémon Journal with collection, habitat, passive, and mount
  information.
- Fixed journal mail for older saves. Both journals now recolor the native
  book sprite: red for Pokémon and yellow for battles, without clipping.
- Fixed Pokémon Journal icon outlines drawing as dull grey instead of their
  colour, so shiny entries read as orange at a glance.
- Fixed the "Let's battle!" button on the VS Seeker confirmation doing
  nothing. The same fault silently broke the skill respec profession choices,
  which now advance properly as well.
- Fixed a VS Seeker challenge being refused whenever wild Pokémon were
  fighting nearby. Only another battle blocks a friendly match now, and the
  refusal says which one.
- Shortened the trainer's cheers during a friendly battle to a rotating set of
  brief lines, so the speech bubble no longer covers the fight.
- Fixed controller navigation in the Pokémon storage menus. Focus no longer
  skips rows, the pointer no longer jumps to an unrelated control when you
  change direction with "Controller style menu" off, and the confirm button
  now acts on what you actually selected. Arrow keys work in mod menus again.
- Diversified villager teams and improved trainer move selection.
- Added Skarmory, Pawniard, Bisharp, and Kingambit with full art and support.
- Added a per-pair Barn breeding toggle; nonbreeding pairs still receive care
  and produce items. Auto-Petter care now grants 5 Bond.
- Restored wild populations on both islands below the Beach and fixed
  across-water spawning for Zapdos and other landmark legendaries.
- Anchored Regidrago's entrance on the northern Caldera ledge, clear of the
  Forge route. Fixed disappearing Regi doors, unintended re-entry, and chamber
  weather.
- Fixed Rockruff's Midday and Dusk evolution validation.
- Made the Four Signs birds and Lugia passive until attacked, including Crown
  rematches.
- Expanded seven legendary learnsets; existing Pokémon recover eligible moves
  without replacing equipped moves.
- Kept habitat clues visible for caught Pokémon and corrected Hisuian
  Sneasel/Sneasler's spawn listings.
- Preserved fossil collection credit after donations and recovered missing
  fossil and evolution-mineral discoveries, including for farmhands.
- Fixed Saved Teams leaving duplicate or frozen support Pokémon, mounts
  disrupting cutscenes, and companions blocking players.
- Preserved chosen villager partners and fixed Linus's Cubone handoff for
  farmhands.
- Added a Normal Plate recipe and corrected Soothe Bell's recipe and price.
- Fixed Kyogre watering outdoor crops and Rest curing ailments at full health.
- Added 1–20 vanilla Combat XP per wild Pokémon defeat.
- Fixed guide close buttons, quest paragraph breaks, and missing translations.
- Improved battle and quest performance; added slowdown profiling and a
  clearer disabled-mod reminder.
- Updated player guides, troubleshooting, and the Excel Master List.

## 1.1.9 (9/4/2026)

- New starters have 50/50 gender odds where applicable.
- Leo trades a buried recipe for three birds, including legendary birds.
- Rewrote Maru's emitter letter and Leo's dialogue.
- Capture pity requires targets below 20% HP.
- Fixed breeding in compatible custom barns.
- Added breeding key-conflict help.

## 1.1.8 (9/3/2026)

### Added

- Added 13 mounts: Corviknight, Drampa, Revavroom, Volcarona, Houndstone,
  Cresselia, Great Tusk, Roaring Moon, Walking Wake, Iron Leaves, Slither Wing,
  Stakataka, and Sneasler. Galarian Zapdos now runs along the ground.
- Added Rookidee, Corvisquire, Corviknight, Buizel, and Floatzel.
- Added Drampa, Furfrou, and the Spinarak, Wurmple, Stunky, Larvesta,
  Scatterbug, Skrelp, Bounsweet, Greavard, Sewaddle, Dewpider, Varoom, and
  Hisuian Sneasel families.
- Added Paradox and Ultra Space anomaly events with 24 Pokémon.
- Added all Vivillon patterns, Low Key Toxtricity, Shellos/Gastrodon regional
  colors, seasonal Deerling/Sawsbuck, Sinistea/Polteageist authenticity, and
  all three Lycanroc forms.
- Added 21 Nature Mints to change your Pokémon's Nature, available at Gus's
  shop for 1,000g each or 3,000g per crafting recipe.
- Gus holds Mint Sale Day on the 28th of every season, with 20% off mints
  and recipes and a letter to remind you.
- Added the Soothe Bell recipe at Training level 1. Carrying it doubles bond
  gains and removes the daily chore-bond cap.
- Pokémon storage now remembers your Deposit, Withdraw, Sell, or Favorite mode.
- Added options for bosses to target deployed Pokémon and for villager
  Pokémon to use animal-like calls.

### Improved

- Updated species passives, including Big Pecks, Pressure, Swift Swim,
  Berserk, Chlorophyll, and Water Bubble.
- Improved healing, protection, move-copying, and stat-changing moves.
  Substitute now displays an animated decoy.
- Added villager reactions to donated legendary Pokémon.
- Reduced pauses when changing locations in multiplayer.
- Improved rider placement on the new mounts. Slither Wing no longer hides
  the farmer when facing down.
- Updated the Master List with current species, locations, evolutions,
  chores, and passive effects.

### Fixed

- Fixed Nature Mint recipes missing from Gus's shop.
- Stopped false sound-error warnings for distant Pokémon.
- Fixed music falling silent after Kyogre's rain music ends, and refreshed
  location music after Celebi rewinds time.
- Fixed startup error messages for Rockruff, Ultra Beasts, and Paradox Pokémon.
- Shane's escaped Psyduck now moves below the movie theater when it replaces
  JojaMart, preserving quest progress.
- Big Pecks protects crops overnight when a healthy Pokémon with the passive
  is in the host's party, including inside its Ball.
- Mining and woodcutting helpers no longer waste energy on empty swings or
  keep working after their task is cancelled.
- Fixed combat getting stuck after a wild Pokémon's defeat.
- Healing services now restore Mega Evolutions to their full HP.
- Visiting trainers are easier to interact with and require their full party
  to be defeated before awarding a win.
- Small amounts of skill XP are no longer lost between actions or saves.
- Late-joining farmhands now receive eligible mail and progression unlocks.
- Fixed split-screen controller navigation in Pokémon storage menus.
- Cancelling trades or PvP requests now releases both players.
- Fixed Battle League counters resetting and translated quests failing to load.
- Companion area attacks now give proper rewards and protect shiny Pokémon
  and DexNav targets while catching.
- Fixed Rest, Purify, and Swallow effects.
- Fixed incorrect wild Pokémon appearances and Relicanth appearing on dry
  Skull Cavern floors.
- Clarified Leah's and Kent's requests for another partner.
- Fixed rain and mount sounds disrupting game audio.
- Fixed older Magikarp item icons and missing party members after QuickSave loads.
- Fixed Regidrago/Regieleki entrances, triggers, and chamber weather.
- Animal-care helpers no longer repeatedly try to pet sleeping animals.


## 1.1.7 - 2026-08-28

### Improved

- Replaced the one-helper-attempt-per-cast fishing limit with a continuous
  owner cooldown. Long casts can now produce another helper attempt after the
  cooldown. The Pokémon's internal fishing tool gains a tier every 20 levels,
  and each tier shortens recovery by half a second.
- Removed guaranteed fish schools. Helper catch rolls now heavily favor
  species that the farmer has caught before while leaving new catches possible.

### Fixed

- Fishing helpers now finish attempts they already started when the player's
  rod receives a bite, instead of silently cancelling after their animation.

## 1.1.6 - 2026-08-27

### Added

- Added Yamask and Cofagrigus to nighttime Desert and Skull Cavern encounters;
  Yamask evolves at level 34.
- Added Cresselia's three-night good-dream story and Emily's repeatable Lunar
  Incense recipe at six hearts.
- Added an optional **Keep donated fossils in museum** setting for expanded
  museum layouts.
- Added persistent female Pikachu and Meowstic variants and all five Flabébé
  flower colors, including shiny art.
- Added 25 supported Alolan and Galarian forms. Eligible wild spawns have a
  one-in-three regional-form chance.
- Added Alolan and Galarian Incense recipes, learned on the first matching
  regional catch. Incense changes matching odds to two in three for the day.
- Supported regional forms inherit their regular counterpart's mount profile.
- Cubone evolves into Alolan Marowak at level 28 at night on the Beach or
  Ginger Island. Elsewhere, it evolves into regular Marowak.
- Galarian Farfetch'd and Mr. Mime remain excluded pending complete evolution
  sprites.
- Added rare Forest cocoon/final-bug encounters and thematic wild routes for
  all eight Eeveelutions.
- Added Pokédex habitat clues, a complete Skills reference, 10,000g profession
  retraining, hatch-family labels, direct parent replacement, and repeat pairs.
- Added name and passive search to the Pokémon Chest, Team Box, and Global Box.

### Improved

- Bosses now fully heal after their area remains empty for five seconds.
- Kept levels 1–20 quick while progressively lengthening later Pokémon levels.
- Enlarged the PokéLink Station menu for clearer storage and status text.
- Added an option to stop direct partner interactions from opening the Journal,
  allowing nearby Stardew objects to receive Action/Check instead.
- Removed the Best Pokémon by Role guide.
- Expanded the title-intro stampede vertically so the herd fills the screen.
- DexNav hunts now exclude impossible placements, gain dry-streak odds, and
  guarantee the target after 20 feasible misses.
- Lengthened Pokémon skill curves, added a 25–200% skill-XP setting, and capped
  zero-XP companion chores at 20 bonus XP per Stardew skill daily.
- Protected first-time fish from automatic companion catches; rebalanced Ice,
  Oval, Sweet Apple, and Syrupy Apple recipes.

### Fixed

- Fixed configured shiny Egg odds at 1-in-128 and 1-in-64: Training level 10,
  the Shiny Charm, and Shiny Specialist now stack without a later reward
  canceling an earlier one, and a shiny parent now improves every configured
  rate by 4× while preserving the established 1-in-256 ceiling. Farmhands
  display the host's authoritative rate, and remote pairs wait for their skill
  snapshot before the morning Egg roll.
- Rewrote Marnie's starter introduction so she speaks naturally about finding
  homes for young Pokémon instead of referring to the player's region menu.
- Fixed farmhand objective state and turn-ins for Haley, Jas, Leah, Shane,
  Jimothy, and the Community Center Raticate quest.
- Routed farmhand Marnie, Ghost Club, Sam, Linus, Shane, and Leah story actors,
  encounters, and battles through the host-authoritative multiplayer paths.
- Mega-Evolved partners now return to their Poké Balls at bedtime instead of
  being redeployed during the multiplayer new-day synchronization, preventing
  farms from hanging on the `Waiting for players` screen.
- Unified per-player Pokédex credit across catches, evolutions, hatches, gifts,
  transfers, research, older saves, and the Loaded Pokédex Diploma.
- Pokémon Chest, Team Box, and Global Box transfers may now store the final
  party member.
- Fixed location-negated evolutions while a partner is recalled; Beach Pikachu
  can now evolve into Alolan Raichu as documented.
- Fixed translated quest text containing `/` corrupting Stardew's quest fields.
- Fixed Torkoal's impossible Mines terrain and over-stacked friendship gift
  bonuses; Stardrop Tea is no longer amplified.
- Willy's Gyarados invitation now also requires Battling level 2.
- Limited rare active-partner flavor to ordinary daily villager comments, and
  preserved native introductions and Flower Dance invitations.

## 1.1.5 - 2026-08-22

### Added

- Added reusable Mega Evolution for 30 species. A level-50 partner unlocks the
  Mega Band recipe and guide; each farmer may Mega Evolve once per day.
- Mega forms gain 25% HP and battle stats, 15% field speed, and stronger
  passives. Mega Evolution ends at bedtime or on fainting.
- Added the Cosmog, Espurr, Mudbray, Rockruff, Yamper, Ledyba, Bronzor, Cutiefly,
  Skorupi, and Scraggy families.
- Added Solgaleo and Lunala solstice encounters, team auras, and Haley's Cosmog
  Egg reward.
- Added the Emerald Ball, a level-70 Rayquaza boss, and Delta Stream.
- Added nine mounts: Mudbray, Mudsdale, Lycanroc, Yanmega, Solgaleo, Lunala,
  Rayquaza, Garchomp, and Bronzong.
- Added a party wheel, Pokédex catch filters, a farmer interaction toggle, and
  host-controlled 25–200% combat speed.
- Added optional breeding-Barn markers and the farm-only PokéLink Station with
  three support deployments per day.
- Healing moves now target the farmer or partner with the lower health ratio.
- Added `PLAYER_GUIDE.md` to release archives.

### Improved

- Expanded player weapon-damage settings and clarified the defense-cap label.
- Reworked the PokéLink Station sprite and recipe.
- Primordial Sea and Desolate Land now change weather immediately; Kyogre's rain
  waters outdoor crops and pet bowls.
- Clarified Verdant Crown and retired the Poké Flute from normal progression.
- Pokémon Nature names are now localizable without changing save values.

### Fixed

- Mega forms now inherit complete base-species mount profiles.
- Improved breeding-Barn marker size, position, and color stability.
- Fixed co-op mounts, water travel, backing horses, duplicate buffs, and mount
  recovery.
- Fixed farmhand quests, rewards, remote actors, rollback powers, and personal
  progression sync.
- Protected breeding pairs, Eggs, and products from blocked or removed Barns;
  fixed Egg pickup and hatch duplication.
- Fixed sleep-move accuracy and duration.
- Restored missing evolution branches and evolved-species milestone credit.
- Fixed partner-fishing slowdowns, empty reels, and skipped catch passives.
- Fixed Arena Trap ladders, premature recipe unlocks, boss-intro attacks, and
  Palkia movement locks.
- Fixed weather-audio cleanup and Kyogre rain muting game audio.
- Fixed Celebi and Dialga rollback restoring incorrect villager positions,
  schedules, or sleep states.
- Fixed Verdant Crown targeting mature crops or activating before Summer 1.
- Fixed Rayquaza drawing behind south-facing riders.

## 1.1.4 - 2026-08-16

### Added

- Added Vietnamese localization, contributed by
  [zConnorI22](https://forums.nexusmods.com/profile/194430950-zconnori22/) and
  [VotriValley](https://forums.nexusmods.com/profile/194683653-votrivalley/).
- Added per-NPC villager-companion toggles.
- Added `pokemon_four_signs <status|letter|start>` debugging commands.
- Electric partners now emit light at night and in dark interiors.
- Added Hisuian Zorua and Zoroark plus the Misdreavus, Duskull, Joltik, Tynamo,
  and Gothita families.

### Fixed

- Fixed farmhand Pokémon mounts being replaced by visible vanilla horses.
- Expanded Four Signs encounters to seasonal days 26–28 and Lugia's visit to
  days 1–3.
- Made Willy's first mail request available after Spring 5 in any later season.
- Fixed host Box changes appearing to fail when farmhand sync was interrupted.
- Fixed farmhand water mounts, wing audio, save serialization, sales, backing
  horses, resource-clump chores, and Egg duplication.

## 1.1.3 - 2026-08-16

### Added

- Added exact-level, Nature-aware `/pokemon spawn` commands.
- Added Bee House flower protection.
- Added separate Farm and Pelican Town wild-encounter toggles.
- Added the Yanma and Tympole families.

### Improved

- Reworked Browse Box and Saved Teams with larger, clearer party layouts.

### Fixed

- Fixed multiplayer mounts, wing audio, and optional Star Crossed packaging.
- Fixed Barn rendering, feeding, hunger, and product handling.
- Fixed local and farmhand Pokémon sale payouts.

## 1.1.2 - 2026-08-14

### Added

- Added the Mareanie, Solosis, and Gible families, bringing the roster to 521.
- Added a **Hide seasonal trainers** setting.

### Improved

- Gible's family now uses staged Rough Skin.
- Reworked Mines encounter bands and expanded frozen-floor variety.
- Added modest riverbank encounters to Riverland Farms.

### Fixed

- Fixed aquatic Pokémon treating normal water as magma.
- Fixed controller navigation in personal, Team, and Global Boxes.
- Fixed bombs replaying effects after hitting trees.
- Fixed trades and battles for players with negative multiplayer IDs.
- Fixed Pokémon catalogs always loading in French.
- Fixed canceled evolutions blocking other branches that day.
- Applin can evolve into Dipplin at level 30 in Cindersap Forest year-round.
- Fixed long evolution requirements being truncated in tooltips.

## 1.1.1 - 2026-08-13

### Added

- Added Woobat and Swoobat, bringing the roster to 513.
- Added Star Crossed 1.3.3 support.
- Added Generation 1–9 filters for encounters and villager partners.
- Added the Shinx, Petilil, and Nacli families, Torkoal, and future Calyrex and
  Marshadow boss data.
- Added enabled-by-default giant-crop protection.

### Improved

- Lapras now uses Tidal Serenade, reducing fishing bite time by 35%.
- Expanded the Player Guide and refreshed the Master List, French catalog,
  Passive Guide, and Type Affinity reference.
- Poké Ball recipes now produce 10 instead of 5.
- Reduced fossil frequency and wild-spawn hitches.
- Broadened winter and night encounters while limiting family repetition.
- Improved shiny animation, building navigation, Barn feeding, and Ranch Guide
  instructions.

### Fixed

- Fixed starter rewards, evolution cancellation, quest hand-ins, and key labels.
- Fixed multiplayer Nuzlocke and Unlimited Poké Ball sync.
- Fixed breeding visibility, product pickup, and NPC click priority.
- Fixed literal `\\n` text on the English skill page.
- Fixed Jimothy event staging on Stardew Valley Expanded's Town map.

## 1.1.0 - 2026-08-12

### Added

- Added the Pancham, Pansage, Venipede, and Tinkatink families, bringing the
  roster to 500.
- Added stories for Haley, Leah, Linus, and Shane, plus repeatable Dark Honey
  encounters.
- Added DexNav habitat scans, hunts, protection, and distinct hunt/shiny arrows.
- Added French localization, soft item outlines, eight mounts, and an option to
  prevent crop-harvesting chores.

### Improved

- Added Original, Optimized, and Normal outline modes with memory limits.
- Improved habitats, spawn placement, refill distance, encounter performance,
  companion navigation, fishing, battles, multiplayer, and split-screen play.
- Defeat streaks now scale to 4× spawns at 70 defeats and can shrink the refill
  ring to 3–5 tiles.

### Fixed

- Fixed DexNav/HUD layering, SVE spawns, Beach rendering, fossils, and shiny
  markers.
- Fixed farmhand saves and transactions, companion presentation, Rare Candy,
  seasonal trainers, Harvey dialogue, SpaceCore skill data, and French names.

## 1.0.5 - 2026-08-11

### Added

- Added or expanded signature passives across Dragonite, Tyranitar, Regidrago,
  Cramorant, Sigilyph, Zangoose, Snorlax, Dipplin, starter families, Eeveelutions,
  fossils, regional families, and many other Pokémon.
- Added Sigilyph to Desert/Skull Cavern encounters and Snom/Frosmoth to winter
  Mountain/Railroad encounters.

### Improved

- Refreshed the 490-Pokémon Master List.
- Rebalanced Sturdy, Guts, and Super Luck assignments.
- Strengthened Sand Stream, Ice Body, Multiscale, Rock Head, and Iron Fist.
- Shiny arrivals now retain their marker and special chime.
- Catching stance can no longer defeat wild Pokémon through Poison or Burn.
- Prevented duplicate Champion's Crowns and made them trashable.
- Farmhand-first map entry now creates the full wild population.
- Improved Ditto's copied-farmer palette.

### Fixed

- Fixed right-click multiplayer interaction failures.
- Fixed invisible Pokémon blocking infested-floor ladders.
- Fixed farmhand companion jitter and spacing.
- Fixed Magikarp and custom inventory icon scaling.
- Fixed multiplayer Illusions after location changes.
- Removed duplicate farmhand cargo popups.

## 1.0.4 - 2026-08-10

### Added

- Added Maru and Sebastian mailbox favors rewarding Ditto and a Zorua Egg.
- Added an optional shared Farm Nuzlocke and Memorial.
- Added Dipplin, Hydrapple, Paldean Wooper, Clodsire, Bellossom, Scizor,
  Magnezone, Magmortar, Porygon-Z, Wyrdeer, Kleavor, Annihilape, and Farigiraf.
- Added five evolution items and the host-only `/pokemon shiny` command.

### Improved

- Increased Zoroark's walking speed.
- Added a Farm Nuzlocke setup screen and 100–150% Pokémon text scaling.
- Updated family learnsets and modern move support.
- Improved attacks, HUD, controls, fishing, habitats, and multiplayer credit.
- Split Passive stance into Catching and Peaceful.
- Missed Poké Balls no longer redeploy recalled partners.
- Restored Stardew skill and quest credit for companion actions.
- Added grazing-grass protection and expanded the title-screen stampede.
- Gave Gen 1 world mode villagers distinct partners.

### Fixed

- Fixed saving with Pokémon present in a location.
- Fixed Robin accepting quest Wood as a gift.
- Fixed malformed Pokémon and stampede sprites.
- Fixed false defeat notices, farmhand items/rewards/sales, and Willy's quest.
- Fixed Mina's phantom Sandy, journal help bounds, trainer notifications,
  battle spacing, and retreats.
- Seasonal visitors now arrive Wednesdays and Sundays; ladder progress waits
  for the next visit.
- Adjusted Darkrai's Town encounter position.

## 1.0.3 - 2026-08-09

### Added

- Added the Noibat, Deino, Numel, Flabébé, and Goomy families.
- Added nocturnal Zorua/Zoroark encounters and owned Illusions for Zorua,
  Zoroark, and Ditto.
- Added outbreak announcements to message history.
- Expanded chores for Ditto, Darkrai, Numel, Trubbish, Alolan Raichu, Flabébé,
  Goomy, Sliggoo, and Goodra.
- Added Darkrai's nightmare story, Bad Dreams, and Nightmare Incense.
- Added soft Pokémon outlines, Gen 1 world mode, and optional Ridgeside Village
  integration.

### Improved

- Improved Illusion animations and positional Pokémon audio.
- Refreshed the 474-Pokémon Master List.
- Reworked Trainer Milestones into 25 fixed goals.
- Evolution notices now show the evolved Pokémon's happy portrait.

### Fixed

- Fixed Illusion visuals and combat transformations.
- Fixed farmhand companion movement, first catches, cargo delivery, and sync.
- Fixed Latias/Latios hostility, Lickitung encounters, DexNav arrows, short-range
  pathing, and journal help at unusual UI scales.

## 1.0.1 - 2026-08-09

### Added

- Added Girafarig near Marnie's Ranch.
- Added location-based Alolan Raichu and Exeggutor evolutions.
- Added the Glameow, Snorunt, Impidimp, and Trubbish families.
- Added Purugly as a companion option for Pam.
- Added configurable shiny odds.
- Expanded Ranch Guide storage help and the 458-Pokémon Master List.

### Improved

- Lowered Passive stance's unlock from 25 to 15 catches.
- Increased experience requirements by 20% without losing progress.
- Improved Box layouts and multiplayer companion movement.

### Fixed

- Fixed shipping-menu errors, Magikarp caught-fish art, and fossil recovery.
- Restored Pierre's Zangoose counter position.
- Fixed farmhand Poké Balls, skills, combat stance, companions, wild Pokémon,
  roaming farm Pokémon, join initialization, villager companions, journey setup,
  attacks, catches, and shared damage.
- Fixed legendary boss-summon throw sprites.
