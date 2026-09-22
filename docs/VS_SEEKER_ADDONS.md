# Ridgeside and Star Crossed battles

The VS Seeker supports all **54 Ridgeside Village partner profiles** and all
**six Star Crossed children** defined in Pelipper Town's integration packs.
Together with the original 82 trainers, this provides **142 NPCs and 568 teams**.
The expansions themselves must be installed and their NPCs loaded in the save.
This update does not install either expansion or unlock their story events.

All four tiers remain freely selectable: level 15/3 Pokémon, level 30/4,
level 45/5, and level 60/6. Rewards, Monday rematch resets, and journal stickers
use the existing VS Seeker system.

## Team design

`PelipperTown.RidgesideVillage/integration.json` and
`PelipperTown.StarCrossed/integration.json` supply the partner choices.
The reviewable candidate lists are in `tools/vs_seeker_addon_rosters.txt`.
The generator chooses from those lists in a fixed order, keeping at least one
partner-family connection in every new opening trio. Existing vanilla, SVE,
and East Scarp lineups are preserved.

Species ownership is counted once per NPC across all four tiers, including
earlier evolutionary stages. The vanilla maximum stays **3**; the overall
maximum is now **10**, counting vanilla and all add-ons together. Both types of
dual-type Pokémon count toward the **three sharing a type** limit within a team.
Only species shipped by Pelipper Town are used. The generator rejects a team
member with no level-eligible damaging move. At runtime the shared trainer
selector keeps at least two damaging moves whenever legally learned.

The Star Crossed children retain their established themes: Jack's fossils,
Fable's fishing companions, Chelsea's stylish pets and music, Cody's ranch
animals, Dominique's flowers and gentle magic, and Andre's treats and dogs.
The [author's Star Crossed page and discussion](https://www.nexusmods.com/stardewvalley/mods/34252?tab=posts)
provide character context. Ridgeside team themes follow the local partner
profiles and the [official Ridgeside project](https://github.com/Rafseazz/Ridgeside-Village-Mod).
These are authored interpretations, not claims of community consensus.

## Walking eligibility

The September 9, 2026 audit checked the 54 character sheets from the official
Ridgeside source and the six child sheets in the user's Star Crossed 1.3.3
download. All have a normal four-direction sprite layout, populated walking
frames, and frame variation in each direction. The special Ridgeside profiles
include Acorn, Kiwi, Torts, and Raeriyala; their directional sheets also support
movement. Sprite dimensions and hashes are recorded in
`tools/vs_seeker_addon_walking_audit.json`. No expansion artwork is redistributed.

Runtime challenge eligibility still checks the loaded sprite dimensions and
blocks events and festivals. The journal uses each loaded NPC's relationship-tab
head crop. Marlon and Gunther remain excluded.

See [all four-tier lineups](VS_SEEKER_TEAMS.md) and
[species owner counts](VS_SEEKER_USAGE.md).
