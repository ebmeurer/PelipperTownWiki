# Pokémon Battling skill

Pokémon Battling is a separate ten-level SpaceCore skill for combat mastery.
Whenever an owned Pokémon is credited with a victory, its trainer receives
level-scaled Battling XP: 8 plus one per five defeated levels, capped at 20.
The first credited victory against each wild species adds 15 XP. Damage dealt,
attacks attempted, changing moves, and party-share XP do not grant skill XP,
preventing weak-target or menu-action grinding.

The skill is displayed in game as **Battling**; the stable skill ID remains
`Griff.PelipperTown.Battling`.

Defeating a wild Pokémon also awards the responsible farmer vanilla **Combat**
XP: one point per five opponent levels, rounded down, with a minimum of 1 and
maximum of 20. Both direct and partner defeats count. Captures, despawns and
unattributed cleanup do not. This is separate from Battling and the Pokémon's
own experience; multiplayer routes it to the credited farmer.

## Progression

The cumulative XP curve is:

`75, 225, 450, 750, 1150, 1650, 2250, 2950, 3750, 4650 XP`

Training and Battling progress independently. Existing Training XP and levels
are not reduced when upgrading to the split system. Individual Pokémon still
gain opponent-scaled battle XP. The configurable 1× Pokémon battle-XP rate is
rebased to half the award used before the setting existed; Battling levels,
Ace Trainer, Lucky Egg, and other bonuses multiply on top of that baseline.

## Per-level stat ladder

Every level improves exactly two numbers, and the level-up screen states the
running totals in one compact row. Recipes unlock without a count shown; a
second row is reserved for named perks. SpaceCore's profession cards stand on
their own instead of repeating a profession prompt. Damage reduction stays with
Survivor and Field Medic, and party share with Champion and Party Coach.

| Stat | Per level | At level 10 |
| --- | ---: | ---: |
| Partner damage | +2% | +20% |
| Active partner battle XP | +1% | +10% |

Party share is capped at 60% so a Champion with Party Coach lands at
`40% + 10%` with headroom instead of being clipped at the old 50% ceiling. A
separate party-share XP setting multiplies the resulting award. Its default 1×
preserves those normal share percentages against the active partner's newly
halved battle award.

## Level perks

| Level | Unlocks |
| ---: | --- |
| 1 | Antidote and VS Seeker recipes |
| 2 | Ether recipe |
| 3 | **Trophy Hunter**: 30% of victories salvage a crafting material, rising 4% per level to 58% at level 10, and half of those drops are doubled |
| 4 | Super Potion recipe |
| 5 | Ace Trainer or Tactician profession; King's Rock recipe |
| 6 | Full Heal and Metal Coat recipes |
| 7 | Revive and Up-Grade recipes |
| 8 | **Day Care Rotation**: boxed Pokémon silently earn 50% of party-share XP without level, move, evolution, or recovery popups while stored; Razor Claw, Electirizer, and Protector recipes |
| 9 | Max Ether recipe |
| 10 | Branch-specific final profession, plus **Rally**: pull a partner out at a quarter HP or less and the next one you send out deals 30% more damage for 10 seconds |

These recipes move from Training to Battling because they directly support
combat recovery or battle-earned evolution paths. Existing saves retain any
recipes they already learned; the split only changes how new saves unlock them.

Trophy Hunter deliberately gives no combat power. Salvage is themed to the
defeated Pokémon's primary type and drops as world debris beside the victor, so
the reward is economy rather than sustain, and it feeds the Exp. Candy, Repel,
and Ether recipes:

| Primary type | Salvage |
| --- | --- |
| Fire | Coal |
| Water, Normal | Sap |
| Grass, Flying | Fiber |
| Electric, Ice | Quartz |
| Rock, Ground, Steel | Stone |
| Bug | Bug Meat |
| Poison | Slime |
| Ghost, Dark | Void Essence |
| Psychic, Fairy | Solar Essence |
| Fighting, Dragon | Bone Fragment |

Rally rewards active switching rather than a passive save. Pulling a partner off
the field at or below 25% HP arms it for 5 seconds; whoever takes the field next
gets the burst, and the burst is dropped the moment that partner is recalled.
Both the arming and the burst are per-farmer and tick-based, so nothing persists
across a save. Recalling a healthy partner arms nothing.

## Profession tree

```text
Level 5
├─ Ace Trainer
│  Active Pokémon gain 25% more battle XP.
│
│  Level 10
│  ├─ Champion
│  │  The party-share baseline rises from 20% to 40% before level bonuses.
│  └─ Power Trainer
│     Damaging moves deal 15% more damage.
│
└─ Tactician
   Super-effective moves deal 10% more damage.

   Level 10
   ├─ Specialist
   │  Moves matching one of the user's types deal another 10% damage.
   └─ Survivor
      Owned Pokémon take 20% less damage from opposing Pokémon attacks.
```

All XP awards and profession effects are calculated by the host. Existing
players who previously selected Ace Trainer under Pokémon Training keep its
25% battle-XP effect as a compatibility measure, but all new profession choices
belong to Pokémon Battling.

## Visiting trainer battles

Each season has a three-rung visiting-trainer ladder:

| Season | Rung 1 | Rung 2 | Rung 3 |
| --- | --- | --- | --- |
| Spring | Mina | Evan | Lila |
| Summer | Joey | Marco | Violet |
| Fall | Tess | Cal | Finn |
| Winter | Poppy | Miles | June |

On Wednesdays and Saturdays, the host's next undefeated trainer appears inside
the paved circle in the middle of Town. Defeating that trainer unlocks the next
rung; clearing all three completes that season's ladder for the current year.
The host owns this progression in multiplayer, so every farmhand sees and helps
with one shared seasonal ladder.

Every trainer has two authored teams. Year one uses an introductory party of at
least three Pokémon. Year two and later use five strictly higher-level Pokémon
with at least four represented types. No species is repeated anywhere across
the twelve later-years teams. Levels do not scale to the player's deployed
partner. Opponent HP uses the same configurable multiplier as wild encounters
(1.4× by default), and owned-companion damage uses the same opponent-Pokémon
damage multiplier in both battle types.

The first member of the active team walks beside its trainer in town. Accepting
a challenge moves that same species into the battle as the opening opponent,
without leaving a duplicate ambient companion behind. Every trainer evaluates
the strongest legal move matchups every 15 real-time seconds and switches only
when the active Pokémon is disadvantaged and a living teammate scores
materially better. Each party member retains its own HP while benched. Joey's
blue shorts, yellow shirt, blue cap, and clean-shaven appearance are baked into
a standard four-direction NPC walking sheet; all visitors use Stardew's normal
synchronized NPC renderer.

Accepting a challenge uses the active deployed Pokémon and starts a three-minute
real-time clock at the top of the screen. Nearby online farmers who also have a
healthy deployed partner join automatically. One of ten reserve trainers takes
an open position around the Town circle for each additional farmer, builds a
type-diverse party with the same size and exact level pattern as the ladder
trainer, and excludes every species already assigned to another opposing
trainer. The HUD shows the one shared timer plus the number of player partners
and opposing party members still standing.

All participants fight on one battlefield instead of paired lanes. Every
player companion can choose any active opposing trainer Pokémon, and every
trainer Pokémon can retarget among the surviving player companions. Target
pressure spreads attackers when several valid opponents are nearby, while a
small retention window keeps combatants from changing targets every frame.
A player knockout, partner switch, arena exit, or event interruption removes
that player from the fight but does not end the attempt while an ally remains.
The players win only after every opposing trainer party is defeated. If every
player companion is out, or the shared clock reaches `0:00` while any opponent
remains, the trainer team wins. A group win advances the host's rung and grants
each participating farmer the ladder trainer's gold, Poké Ball, and Potion
prizes. Inventory overflow drops safely at that farmer's feet. The host's
completed attempt is recorded for that trainer for the rest of the day.
Passing scheduled villagers within nine tiles of the circle may pause, face the
battle for two seconds, and then resume their route; a cooldown prevents the
fight from holding them indefinitely.

Trainer attacks use the same type, category-defense, status, and fainting
resolution as wild Pokémon attacks. Survivor and Field Medic therefore protect
against any opposing Pokémon rather than only wild encounters. A trainer's
active Pokémon closes distance until one of its legal damaging moves can reach,
so a ranged player partner cannot attack forever without retaliation. Wild
Pokémon use the same distance, pressure, priority, and target-retention selector:
they prefer an available owned companion and can fall back to a nearby farmer.
The host owns the shared clock, all targets, the group result, and all ladder
progression, and broadcasts read-only timer snapshots to farmhands.

Alex's one-heart **A Friendly Rival** event uses the trainer runtime as a story
battle rather than a seasonal ladder rung. His level-10 Machop and level-10
Herdier are repeatable after a decline, loss, or timeout. Only the first
victory completes the quest and awards five Great Balls; the match never
changes seasonal ladder progress or its once-per-day attempt state.

## Milestone rewards

The Partner Journal tracks distinct wild species defeated:

| Species | Reward |
| ---: | --- |
| 10 | Type Analyst: +5% super-effective damage |
| 25 | Party Coach: +10% party-share XP, capped at 60% |
| 50 | Field Medic: 10% less incoming opposing-Pokémon damage |
| 100 | Champion Ribbon: +5% battle XP |
