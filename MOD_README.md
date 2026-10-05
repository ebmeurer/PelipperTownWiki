# Pelipper Town

Pelipper Town is a free, unofficial Stardew Valley mod that lets Pokémon join
you around the valley, help with farm work, and take part in new quests with
familiar townspeople. Play solo or in multiplayer and shape the experience
through optional settings.

The mod is meant to feel at home in an ordinary Stardew Valley save. Explore at
your own pace, keep a Pokémon by your side, and discover the rest naturally as
you get to know the system and its stories. It works with new and existing
saves, with optional support for Stardew Valley Expanded, East Scarp, and Star
Crossed.

The current development update adds friendly VS Seeker battles with 142 supported
villagers across the base game, SVE, East Scarp, Ridgeside Village, and Star
Crossed. Alex mails the device after you beat his one-heart battle. Hold it
and talk to an eligible villager indoors or outside to choose any of four tiers:
level 15 with 3 Pokémon, 30 with 4, 45 with 5, or 60 with 6. Events and festivals
are excluded. Each player can win against each villager once per week across
all tiers, with rematches opening every Monday. Losses leave that win available.

Your first VS Seeker victory earns a **Villager Battle Journal**, mailed the next
morning. Hold the book and press the action button to view bronze, silver, gold,
and platinum portrait stickers. Each tier earns its own sticker; the journal
also shows rematch availability. Seasonal and VS Seeker trainers retain at least
two damaging moves when learned, and choose attacks using power and type matchups.

See the [Player Guide](docs/PLAYER_GUIDE.md#vs-seeker-and-villager-battle-journal)
for rewards and controls, [team rosters](docs/VS_SEEKER_TEAMS.md) for every lineup,
and the [changelog](CHANGELOG.md) for the rest of the update.

For missing partners, full parties, quest locations and bug-report details, see
[troubleshooting](docs/TROUBLESHOOTING.md).

## Requirements

- Stardew Valley 1.6
- [SMAPI](https://smapi.io/) 4.0 or later
- [SpaceCore](https://www.nexusmods.com/stardewvalley/mods/1348) 1.28.4 or
  later

[Generic Mod Config Menu](https://www.nexusmods.com/stardewvalley/mods/5098)
is optional. It provides the in-game menu for Pelipper Town's controls and
settings; 1.16 or later shows every option. Stardew Valley Expanded and Quick
Save are optional too, and no particular version of either is required.

SpaceCore is the only hard requirement. If it is older than 1.28.4, SMAPI skips
Pelipper Town entirely and nothing from the mod appears in game. See
[troubleshooting](docs/TROUBLESHOOTING.md#pelipper-town-is-missing-from-the-game-and-the-config-menu)
if the mod does not show up.

## Install

Install SMAPI and SpaceCore first. Unzip `PelipperTown.Mod` into Stardew
Valley's `Mods` folder, then start the game through SMAPI.

When updating, delete the old `PelipperTown.Mod` folder before installing the
new one. Do not extract one release over another. You can copy your old
`config.json` into the new folder if you want to keep your settings.

## Language

Pelipper Town follows Stardew Valley's selected language automatically. The
included French and Vietnamese translations cover the interface and built-in
Pokémon terminology. The French catalog uses official French Pokémon terms.
There is no separate language setting in the mod.

Translators can add any Stardew or custom locale. Interface text belongs in
`i18n/<language>.json`; built-in species, Pokédex, move, and ability terms
belong in `assets/data/localization/<language>.json`. See the
[localization guide](docs/LOCALIZATION.md) for the exact file layout and Korean
example.

## Your first session

1. Load a new or existing save.
2. Once the world is ready and you can move, the journey setup menu opens.
   Choose a traditional starter, Pikachu or Eevee, a custom team, or a
   no-Pokémon start. Each farmer makes this journey choice separately. After
   the host chooses their start, a second full menu asks whether the farm
   should begin a shared Nuzlocke challenge.
3. Leave the farmhouse. Marnie will meet you and complete the selected opening.
4. Explore outdoor maps to find wild Pokémon. Spring of Year 1 starts with a
   smaller encounter pool by default, then opens up as the save progresses.

For a Kanto-flavored playthrough, leave only **Generation 1** enabled under
**Mod Options → Wild Pokémon → Wild encounter generations** and **Villagers
and their Pokémon → Villager partner generations**. The two pools are
independent, so any combination of Generations 1–9 can be used for ordinary
wild spawns and roaming villager partners. Owned Pokémon, evolutions, quests,
trainer battles, and scripted or legendary encounters remain intact.
5. Weaken a wild Pokémon, hold `G` to aim a Poké Ball, and release to throw.
6. Press `P` to open the Partner Journal, where you can manage your party,
   moves, work policies, skills, and Pokédex.

To stop one Pokémon's passive abilities, select it as your active partner and
choose **Disable passives** on the Journal's Commands tab. **Enable passives**
restores them. The choice is saved for that individual, including in multiplayer,
and suppresses its field and team abilities while leaving it available for
chores, moves, and riding. For Kyogre, this prevents future forced-rain days;
weather already applied today remains until the next day. Other Pokémon can
still supply their own passives. The **Pokémon passives** mod setting turns off
passives globally.

If your backpack is full during the opening, Marnie keeps the remaining items
for you until there is room.

Server hosts can set **Starting preset** in Mod Options or `StartingPreset` in
the host's `config.json`: `0` lets each player choose (default), `1` requires
Starters, `2` Pikachu or Eevee, `3` Bootstraps, `4` Hardcore, and `5` Custom.
For a supplies-only server start, use `"StartingPreset": 3`: each new farmer
receives ten Poké Balls and Marnie's Ranch Guide, with no starter Pokémon.
The host enforces the preset for online and split-screen farmhands. Farmers who
have already chosen a journey keep it. Presets 1 and 5 still let players choose
regions or Pokémon within that opening. A nonzero preset takes precedence over
**Required starter species**; leave the preset at 0 to use that species setting.

## Controls

| Input | Action |
| --- | --- |
| `P` | Open the Partner Journal |
| `R` | Recall or redeploy the active Pokémon without swapping |
| `O` | Send out or swap to the gray queued Pokémon |
| `[` and `]` | Select the previous or next party member |
| Hold `G`, then release | Aim and throw a Poké Ball |
| `B` inside a Barn | Open that Barn's breeding menu |
| `F5` | Enable or disable the companion system |

On controller, press L3 to open the Journal and tap R3 to recall or redeploy
the active Pokémon. Holding R3 also opens the Journal. To throw, select a Poké
Ball and hold Action/Check; dedicated throw and quick-swap controller bindings
are available but unassigned by default. Optional keyboard and controller
bindings can also cycle combat stances without opening the Journal. RB opens
the breeding menu inside a Barn. Every binding can be changed in Mod Options.
If another mod uses `B`, change **Open barn breeding** to an unused key such as
`N` in **Mod Options → Companions**. Custom animal houses that accept Barn
livestock also support Pokémon breeding; coops alone do not.
If a nearby partner gets in the way of troughs, machines, or chests, turn off
**Partner interaction menu** under **Mod Options → Companions**; the Journal
key continues to work normally.

## What your Pokémon can do

- **Explore and travel.** Wild Pokémon live in habitats across the farm,
  valley, desert, mines, beach, and Ginger Island. Some partners can be ridden.
- **Help around the farm.** Depending on the species and its work policies, a
  partner can water, harvest, forage, fish, mine, clear brush, tend animals,
  gather fruit, collect crab pots, or move machine output.
- **Battle.** Partners can fight wild Pokémon, Stardew monsters, story
  opponents, and visiting trainers. Defensive, Aggressive, Catching, and
  Peaceful stances control when they engage and whether they finish a target.
- **Grow.** Pokémon gain experience, learn moves, build bond, and evolve.
  Training, Battling, and Breeding are separate skills for the farmer.
- **Breed.** Compatible Pokémon can live in a Barn as a breeding pair and
  produce Eggs with inherited traits and moves.
- **Join the town.** Villagers have configurable partner Pokémon, and several
  storylines lead to unique battles, encounters, and rewards.

The built-in roster includes animated normal and shiny overworld sprites and
portraits. Content packs can add more.

## Finding a specific Pokémon

Open **Partner Journal → Wild Pokémon** and choose an area. The Journal uses
the year, season, time, weather, farm type, settings, fossil research, and
installed expansions from your current save, so it is the best place to check
where a species can appear.

Fossil families normally join the wild tables after you donate their fossil to
Gunther. To make them available from the start, turn off **Fossils require
research** under **Mod Options → Wild Pokémon**.

## Items, storage, and settings

Pokémon supplies unlock through the normal Crafting menu as your three skills
increase. Pierre, Harvey, and Marlon sell different parts of the supply
catalog. Gus sells Nature Mints for 1,000g and their permanent recipes for
3,000g; each Mint changes the active Pokémon's saved Nature everywhere.
His Mint Sale Day on the 28th of every season gives 20% off mints and recipes,
with a letter from Gus that morning.

Your traveling party holds six Pokémon. Extra catches go to personal Pokémon
Chest storage. The Team Box is shared by the farm; the Global Box belongs to
the local player profile and can carry Pokémon between saves.

On a fresh farm, the host chooses whether to enable **Farm Nuzlocke** on a
dedicated screen after choosing their start during journey setup.
Each farmer then gets one successful ordinary wild catch per day; failed
throws do not spend it, and bosses and legendary Pokémon are exempt. A Pokémon
that truly faints in ordinary or trainer combat is retired
to the farm's shared, read-only Pokémon Memorial. PvP fainting is excluded, and
faint-prevention abilities resolve before retirement. Every current and future
farmhand receives a placeable Memorial gravestone; each retired entry keeps its
trainer's name. Personal Pokédex and milestone progress remain per farmer. The
host can end the challenge from the Memorial through a two-step confirmation;
all memorialized Pokémon are revived and returned to their original Trainers'
personal Pokémon Chest storage. The same restoration happens automatically if
the host is knocked out and wakes at Harvey's clinic, ending the run for the
whole farm and posting the result to each online farmer's chat history. The
host can enable **Any farmer ends Nuzlocke** in Mod Options to make farmhand
knockouts end it too; otherwise a farmhand's run simply continues without any
Pokémon they have already lost.

Mod Options includes encounter rates, first-year pacing, capture assistance,
combat, health and fainting, stamina, chores, controls, villager partners, and
accessibility choices. **Capture pity** only applies while the wild Pokémon is
alive and below 20% HP. Connecting throws still count toward the same encounter's
pity chain, but the bonus and the guarantee from the 25th connecting throw onward
require that low health, including for legendaries.
An opt-in setting makes boss and legendary area attacks
aim at deployed Pokémon before farmers, and **Pokémon say their names** can be
turned off for five-call pools across 22 animal, material, and supernatural
profiles, including bats, bears, primates, horses, hoofed Pokémon, crustaceans,
and slimes. When left on, full-name greetings occasionally use varied shortened
calls such as Pika-pi. Separate **Wild Pokémon on farm** and **Wild Pokémon in
town** switches can keep either area free of ordinary wild encounters without
hiding owned Pokémon or scripted encounters. The **Crop harvesting** switch leaves ripe crops for the
farmer without disabling watering or other partner chores. The default-on
**Protect giant crops** switch instead leaves only giant-capable crop types
untouched, including crops added by other mods. Near-black Pokémon outlines are
softened by default using
the neighboring body color. New configs use optimized soft outlines, which
keep the softened copies within a 256 MiB session budget. The Appearance page
also offers uncapped normal soft outlines, or the original
black outlines. **Soft item outlines** on that page uses the same treatment for custom
item sprites, and is off by default. The same page has a **Pokémon text size**
slider for Journey Setup, the Partner Journal, and Pelipper Town hover details.
Turn off **Pokémon in cutscenes** under **Appearance** to hide deployed partners
and villagers' ambient Pokémon during story scenes. Partners reappear when the
scene ends. This local setting is on by default, works for multiplayer guests,
and preserves festival settings and Pokémon that belong to the scene.
Debug and cheat settings are labeled separately.

Under **Wild Pokémon**, **Wild Pokémon damage** adjusts wild attacks against
farmers and Pokémon from 10–200% (default 100%). **Farmer damage reduction**
reduces Pokémon attack damage taken by farmers from 0–100% (default 30%),
before armor and other defenses. All Pokémon attacks now deal 10% less damage;
the two reductions stack, so a former 100-damage attack becomes 63 before
the farmer's defenses at the default settings. **Dungeon Pokémon density**
adjusts ordinary Mines, Skull Cavern, and Volcano groups from 0–200% (default
100%); groups also scale to reachable floor area. Set damage and density to
50% for gentler fights with fewer opponents. The host controls these options
in multiplayer. Scripted spawns keep their own population rules.

Most replaceable supplies can be given to villagers through Stardew's normal
gift system. Quest items, relics, fossils, Eggs, the DexNav, the Ranch Guide,
and other one-of-a-kind items are protected from accidental gifting.

## Optional expansions

Stardew Valley Expanded, East Scarp, Ridgeside Village, and Star Crossed are optional. Pelipper
Town recognizes the installed mods and adds their matching compatibility.
Star Crossed's relocated spouses keep their existing Pokémon through their new
homes and schedules, and its six rival children receive curated partners once
they are unlocked. The core download does not require or install Star Crossed;
that compatibility stays dormant when Star Crossed is absent. Standalone
`PelipperTown.SVE`, `PelipperTown.EastScarp`, `PelipperTown.RidgesideVillage`, and `PelipperTown.StarCrossed`
integration packs are separate downloads and must not replace the core file.

## Multiplayer

Each farmer has their own journey, Pokédex, party, active partner, skills,
milestones, gift limits, and personal storage. Wild encounters and shared
battles belong to the farm and are managed by the host. If the host enables
Farm Nuzlocke and its Memorial are farm-wide, while the daily ordinary-catch
allowance is tracked separately for each farmer. Farmhands can still catch,
command, train, battle, breed, trade, and manage their own Pokémon.
Each player can turn off **Farmer trade & PvP interactions** in Mod Options to
stop opening the interaction menu and automatically decline incoming requests.

The host and every farmhand must use the same Pelipper Town version. For this
release, install version 1.2.6 for every player before connecting.

By default, first catches of fixed legendaries such as Latias and Solgaleo are
shared across the farm. The host can enable **Legends per farmer**
(`LegendaryCatchesPerFarmer`) on GMCM's Wild Pokémon page to give each farmer
their own first catch and encounter cooldowns. Existing personal Pokédex history
counts, so turning it on does not reset catches. Story unlocks and encounter
schedules still apply, and farmers share the live encounter. A farmer who has
already caught that species needs their own eligible Champion's Crown rematch
(or the existing recovery opportunity) to catch another.

## Guides

- [Changelog](CHANGELOG.md) provides the concise version-by-version list of
  additions, improvements, and fixes.
- [Player Guide & Walkthrough](docs/PLAYER_GUIDE.md) covers the first day,
  party building, chores, progression, breeding, multiplayer, stories, and
  legendary encounters. Story sections contain spoilers.
- [Complete Quest Guide](docs/QUEST_GUIDE.md) gives step-by-step directions for
  every friendship story, one-time favor, request-board job, and long journal
  quest. The entire guide contains spoilers.
- [Excel Master List](Pelipper_Town_Master_List.xlsx) is a filterable list of
  the built-in Pokémon, habitats, passives, chores, evolutions, encounters,
  mounts, villager partners, and Barn produce.
- [Barn Produce Master List](docs/BARN_PRODUCE_MASTER_LIST.md) lists every
  Pokémon's goods, species products, seasonal forage, and care-based quality.
- [Release Notes](docs/RELEASE_NOTES.md) list changes, compatibility notes, and
  known issues for version 1.2.6.

## Console commands and "Nice try"

Pelipper Town does not disable Stardew or SMAPI console commands. Stardew's
in-game chat shows "ConcernedApe: Nice try..." for `/debug` or `/money` when
chat cheats are disabled. Enter SMAPI commands in the separate SMAPI console
window without a leading slash. For vanilla debug commands, use
`debug <command>` there; SMAPI's bundled **Console Commands** mod provides it.

Pelipper Town's **Pokémon spawn commands** setting controls its own Pokémon
and item spawning commands. Enable it in Mod Options to use commands such as
`pokemon_spawn psyduck 20` in SMAPI or `/pokemon spawn psyduck 20` in game
chat. It does not change Stardew's chat-cheat setting.

For ranch toys, enter `/pokemon item RanchBall 1` and
`/pokemon item RanchPunchingBag 1` separately in game chat. Use
`/pokemon item RanchPunchingBagRed 1` for the red bag. These commands require
the host and add the toys to your inventory.

Use `/pokemon item RanchFrisbee 1` to preview the White Ranch Frisbee.
Its recipe unlocks at Breeding level 2. Hold the action or tool button to
charge, then release to throw. Steer it in flight with the movement keys or a
mouse sweep. It sails over fences and low clutter when it's high and bounces
off them when it's low; tall things like trees and buildings always bounce it.
An awake Pokémon runs to meet it, leaping for great catches in midair, and
brings it back to your backpack. Your own partner gets first claim on your
throws. Walk near a disc once it stops to pick it up automatically. A full
backpack leaves it on the ground.
Play fetch with your deployed partner in any outdoor location or inside a
breeding Barn. Pokémon can't catch a throw during its first second in the air.
A disc that lands on water floats slowly toward reachable shore, giving
Water-type Pokémon time to swim out and retrieve it.

Friendship letters give a purple frisbee from Jas at 3 hearts, a red frisbee
from Vincent at 3 hearts, and Alex's blue frisbee with a yellow circle at 4 hearts.
Preview them with `/pokemon item RanchFrisbeePurple 1`,
`/pokemon item RanchFrisbeeRed 1`, and `/pokemon item RanchFrisbeeBlue 1`.

Ball play varies by Pokémon: lively and curious residents are more likely to
join in, while others prefer their usual ranch activities. Morning ranch and
breeding results appear as one short summary in game chat; reopen chat to
review it. Use the ranch marker, Barn breeding menu, or Pokémon Journal for
individual details.

Hit or walk into a ball near an interested ranch Pokémon to start a pass or
fetch game. The same partner stays with you for up to 60 seconds, with 15
seconds to return each pass. Helpful Pokémon fetch; bold ones send the ball
back. Other residents leave that ball alone during your game. Leave the farm,
move away, or stop returning the ball to end the session.

Catch the ball dead center in your swing to smash it farther, or hit it in
midair to volley it back up for a juggle. Hits in a row build a rally counter
over the ball. Pokémon pass to friends, lob returns for you to volley, and
cheer big hits. Barn Pokémon join in too, and so does your own partner when
it isn't fighting, doing a chore, or told to wait. It answers your hits
before any ranch Pokémon does. Keep a rally going for 30 touches and a
level 50 Victini appears nearby, at most once a day. It won't fight unless you
attack it, which starts its boss battle.

Hosts can also run `pokemon_bossrush` in the SMAPI console to fight every
authored boss one at a time at level 50. Use `pokemon_bossrush start 75` to
choose a level, `pokemon_bossrush start 50 moltres gyarados palkia` for a
custom route, and `pokemon_bossrush status`, `stop`, or `list` to manage it.
Rush bosses cannot be captured, and each next wave begins only after the
current boss is defeated.

## Reporting a problem

Reproduce the problem once with the latest release, then upload your SMAPI log
at [smapi.io/log](https://smapi.io/log). Include the Pelipper Town, SMAPI,
Stardew Valley, and SpaceCore versions; whether you were the host or a farmhand;
installed expansions; and what you did immediately before the problem.

## Credits

Vietnamese translation by
[zConnorI22](https://forums.nexusmods.com/profile/194430950-zconnori22/) and
[VotriValley](https://forums.nexusmods.com/profile/194683653-votrivalley/), with
additional UI fixes contributed by VotriValley.

Pokémon sprites and portraits are primarily adapted from the PMD SpriteCollab
archive. Item and interface art also uses work from pokeemerald-expansion, and
some effects come from Pokémon Mystery Dungeon: Explorers of Sky. See
[THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) for source links, individual
credits, licenses, and redistribution notes.

Pelipper Town is a free, unofficial, noncommercial fan project. Pokémon and
related names and characters belong to Nintendo, Creatures Inc., and GAME FREAK.
Stardew Valley belongs to ConcernedApe. This project is not endorsed by or
affiliated with any of them.
