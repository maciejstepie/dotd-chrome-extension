export const EpicRaidsData = [
  {
    id: 0,
    name: "Deadly Erebus",
    size: "Epic",
    type: ["Deadly", "Dragon"],
    timer: 96,
    magics: 10,
    cooldown: 160,
    maxPlayers: 800,
    rarity: "Uncommon",
    resources: ["Energy", "Stamina"],
    statSwap: [
      { stat: "Attack", value: 4 },
      { stat: "Defense", value: 4 },
      { stat: "Health", value: 3 }
    ],
    notes_obtain:
      "Crafting: 150x Brown Shadow Fragments 150x Grey History of Dahrizon 1x Erebus the Black Essence 1x Tainted Erebus Essence 75x Vampire Hunter Mage 50x Writhing Tentacle",
    notes:
      "You stand face to face with Erebus the Black, one of the malevolent dragons who have led their army against West Kruna.",
    art_thumb: "erebus.jpg",
    art_essence: "Deadly_Erebus_Essence.png",
    tiers: [
      {
        difficulty: "Normal",
        maxHp: 5 * 10 ** 17
      },
      {
        difficulty: "Hard",
        maxHp: 5 * 10 ** 17
      },
      {
        difficulty: "Legendary",
        maxHp: 5 * 10 ** 17
      },
      {
        difficulty: "Nightmare",
        maxHp: 5 * 10 ** 17,
        tier: [
          {
            Damage: 10 ** 11,
            Common: null,
            Uncommon: null,
            Rare: 3861,
            Epic: 1
          },
          {
            Damage: 3 * 10 ** 11,
            Common: null,
            Uncommon: null,
            Rare: 11583,
            Epic: 2
          },
          {
            Damage: "600b",
            Common: null,
            Uncommon: null,
            Rare: 23165,
            Epic: 3
          },
          {
            Rare: "27,026",
            Epic: 4,
            Damage: "700b"
          },
          {
            Rare: "57,913",
            Epic: 5,
            Damage: "1.5t"
          },
          {
            Rare: "231,653",
            Epic: 6,
            Damage: "6t"
          },
          {
            Rare: "282,444",
            Epic: 8,
            Damage: "12t"
          },
          {
            Rare: "309,366",
            Epic: 9,
            Damage: "15t"
          },
          {
            Rare: "373,927",
            Epic: 9,
            Damage: "20t"
          },
          {
            Rare: "396,742",
            Epic: 9,
            Damage: "30t"
          },
          {
            Rare: "418,340",
            Epic: 10,
            Damage: "40t"
          },
          {
            Rare: "431,718",
            Epic: 10,
            Damage: "50t"
          },
          {
            Rare: "585,138",
            Epic: 10,
            Damage: "100t"
          },
          {
            Rare: "766,577",
            Epic: 15,
            Damage: "200t"
          },
          {
            Rare: "880,023",
            Epic: 20,
            Damage: "300t"
          },
          {
            Rare: "1,337,137",
            Epic: 30,
            Damage: "750t"
          },
          {
            Rare: "3,837,299",
            Epic: 40,
            Damage: "1.5q"
          },
          {
            Rare: "4,641,448",
            Epic: 50,
            Damage: "2q"
          },
          {
            Rare: "11,594,203",
            Epic: 60,
            Damage: "4q"
          },
          {
            Rare: "29,090,909",
            Epic: 70,
            Damage: "8q"
          },
          {
            Rare: "42,404,325",
            Epic: 80,
            Damage: "12q"
          },
          {
            Rare: "49,107,874",
            Epic: 100,
            Damage: "30q"
          },
          {
            Rare: "59,946,049",
            Epic: 150,
            Damage: "60q"
          }
        ]
      }
    ]
  }
];
