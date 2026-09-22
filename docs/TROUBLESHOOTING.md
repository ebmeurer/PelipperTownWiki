# Pelipper Town troubleshooting

## My Pokémon disappeared

Check whether Pelipper Town is disabled. The default toggle is **F5**; use your
configured toggle key to enable it again. The HUD now shows a persistent
reminder while disabled. Menus, chat and events ignore the toggle shortcut.
Only the host can change this state in multiplayer.

## How do I replace a member of my full party?

Open a placed Pokémon Chest, deposit a traveling party member, then withdraw
the stored Pokémon you want. The Partner Journal shows your traveling party;
the Chest gives access to storage. Extra catches are stored automatically.
The Team and Global Box have explicit Deposit and Withdraw modes.
See [party management](PLAYER_GUIDE.md#the-partner-journal).

简体中文：打开已放置的宝可梦箱子，先将队伍中的一只宝可梦存入箱子，
再取出想加入队伍的宝可梦。队伍最多六只；队伍满员时，新捕获的宝可梦会进入储存箱。

## Where is Moltres?

Meet the Wizard, register 40 caught species, and read the mysterious Four Signs
letter. Moltres appears at the Volcano Caldera forge island on **Fall 26–28**.
A worn Champion's Crown enables daily rematches only after that species has
already been caught or defeated. It does not skip the first encounter's dates.
A defeat uses that year's normal opportunity; a catch is permanent. See
[Four Signs in the Sky](QUEST_GUIDE.md#four-signs-in-the-sky) for all locations
and the difference between resolving a sign and completing the Journal.

## Where is Haley's missing partner?

Start **A Very Important Favor** at one heart with Haley, then search the main
Beach shoreline. The partner uses Haley's configured species; it is not
necessarily the Pokémon shown in someone else's guide. Interact with it and
return to Haley. The authored location is the open sand at tile **42, 22**.

## Fossils and stones are still silhouettes

New acquisitions, changed/removed inventory stacks, confirmed evolution-item
consumption and items held at the start of a day now recover missing
fossil/mineral discovery entries without replaying item-discovery animations. If a stone was already consumed without a
discovery record, acquire another: there is no reliable history to reconstruct
that use. Researched fossils retain museum reward and achievement credit even
when the display fossil is removed for research. An affected-save check remains
necessary before declaring the original completion report resolved.

Pelipper Town's ordinary items are excluded from the shipping collection.
Fossil/mineral discovery and museum credit are separate from shipping; a
shipping exclusion does not mean an artifact can be ignored for museum completion.

## How do shiny chains and Marshadow copies work?

Catching or defeating wild Pokémon advances your farmer's current habitat
chain. Resolving an encounter in a different habitat starts a chain there;
just walking between areas does not reset it. Each ten encounters adds a shiny
roll. A shiny spawn drops the matching chain by one rung.

Marshadow's catchable copy rolls shiny independently of your active partner.
It uses the summon location's habitat chain and your Training/Shiny Charm
bonuses. See [shiny chains](WILD_ECOLOGY.md#shiny-chains) and
[Marshadow](PLAYER_GUIDE.md#marshadows-umbral-challenge).

## Spawn commands do not work

Enable **Pokémon Spawn Commands** in the mod settings and run commands as the
host. Use `/pokemon help` in game chat; the SMAPI console alternative is
`pokemon_spawn`. A chat-command registration conflict is logged at startup.
“Nice Try” is not a response in Pelipper Town's current command code. Include
the exact command, whether it was typed in chat or the SMAPI console, and the
full response when reporting it.

## Villager settings reset after restarting

Use the config menu's **Save** action. For a reproducible reset report, keep
copies of Pelipper Town's `config.json` after saving and after relaunching,
plus the startup SMAPI log. Include whether a mod manager reinstalled or
updated the mod between those steps. The assignment logic now preserves explicit default selections and duplicate
partners in Gen-1-only mode. Recognized custom names save as stable species
IDs; re-enter a legacy localized name once if it stops resolving after changing
language. Generation restrictions can still temporarily substitute an eligible
partner without deleting your saved choice. These fixes do not establish why
the original reporter saw a reset after restarting their PC.

## Reporting a late-night freeze or slowdown

Include the mod version, SMAPI log, location, game time, active partner and
passive, and exact steps. For late-night issues, say whether you were fishing,
riding, in a menu, sleeping, or removing Cresselia; include host/farmhand status.
For slowdowns, record when they start, whether they stop after leaving the area,
and whether disabling Pelipper Town changes them. An affected save helps us
check the same conditions instead of guessing at a cause.

For Eggventure Day Care or another Pokédex mod, include its exact Nexus link,
version and the observed conflict. Compatibility has not been established by
the original question alone.


## Capture performance evidence

In the SMAPI console, run `pokemon_profile 15` and reproduce the slowdown.
After 15 seconds, Pelipper Town prints the count, mean and longest duration,
and number of calls above 16.67 ms for its update and drawing handlers.
Use `pokemon_profile stop` to finish early; captures are limited to 60 seconds.
Returning to the title screen also ends a capture. This measures Pelipper Town
handlers, not whole-game FPS or other mods, and does not change your save.
In split-screen it aggregates calls from all local screens; on separate
computers run it on both host and farmhand and label each log.

## Eggventure compatibility and separate Pokédex progress

The reviewed products are [Eggventure Day Care](https://www.nexusmods.com/stardewvalley/mods/49098)
and [Eggventure Pokédex](https://www.nexusmods.com/stardewvalley/mods/50257).
Their pages showed Day Care 2.1.0 and Pokédex 1 on September 8, 2026.
The Pokédex author describes tracking raised Eggventure animals and their
actual evolution stages. Pelipper Town uses its own companion roster and
personal Pokédex. There is no cross-mod discovery bridge in this checkout;
do not expect a Pelipper Town catch to fill Eggventure's Pokédex.

Day Care also edits bundles and machine behavior. A simultaneous-install test
must cover mixed Barn capacity/feeding, item and machine recipes, both Pokédex
screens and save/reload. Documentation review does not certify that combination.
Use the exact installed versions and SMAPI log when reporting a conflict.

## Does Pelipper Town change perfection requirements?

Shipping exclusions are not a blanket exemption from every completion system.
Ordinary mod objects and fossils are excluded from shipping and fishing
collections. Fossils still participate in archaeology and museum rewards;
research removal now preserves museum credit. Evolution minerals retain their
mineral discovery entries.

Player-facing crafting recipes are registered in Stardew's ordinary crafting
data, so they can affect crafting completion. Learn the recipes through the
mod's progression and craft them as required by the game's tracker. Museum
reward progress and item discovery are separate from shipping completion;
a missing fossil silhouette alone does not identify which perfection category
is incomplete. Report the actual unfinished tracker category with the save.
