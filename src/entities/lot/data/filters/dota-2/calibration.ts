import type { ILotsFilter } from "~/entities/lot"

export default [
    {
        buckets: [
            {
                label: "Any",
                value: "Any",
            },
            {
                label: "1 Win",
                value: "1 Win",
            },
            {
                label: "1-2000 MMR Calibration",
                value: "1-2000 MMR Calibration",
            },
            {
                label: "2000-3000 MMR Calibration",
                value: "2000-3000 MMR Calibration",
            },
            {
                label: "3000-4000 MMR Calibration",
                value: "3000-4000 MMR Calibration",
            },
            {
                label: "4000-5000 MMR Calibration",
                value: "4000-5000 MMR Calibration",
            },
            {
                label: "5000-5500 MMR Calibration",
                value: "5000-5500 MMR Calibration",
            },
            {
                label: "5500-6000 MMR Calibration",
                value: "5500-6000 MMR Calibration",
            },
            {
                label: "6000-6500 MMR Calibration",
                value: "6000-6500 MMR Calibration",
            },
            {
                label: "6500-7000 MMR Calibration",
                value: "6500-7000 MMR Calibration",
            },
            {
                label: "7000+ MMR Calibration",
                value: "7000+ MMR Calibration",
            },
        ],
        info: `
            MMR Calibration Range refers to the expected range of MMR that you will achieve after the
            calibration process in Dota 2. This filter allows you to select calibration services based
            on the specific MMR bracket you aim to reach. Whether you're starting from a lower tier and
            looking to climb, or you're already at a higher level seeking to refine your rank, this category
            provides options tailored to a wide range of starting points. The calibration will be conducted
            with the goal of placing you within your selected MMR range, taking into account your current
            skill level, gameplay history, and the outcomes of your calibration matches.
        `,
        name: "MMR Range",
        type: "radio",
    },
    {
        buckets: [
            {
                label: "Under 50%",
                value: "Under 50%",
            },
            {
                label: "50% - 60%",
                value: "50% - 60%",
            },
            {
                label: "60% - 70%",
                value: "60% - 70%",
            },
            {
                label: "70% - 80%",
                value: "70% - 80%",
            },
            {
                label: "80% - 90%",
                value: "80% - 90%",
            },
            {
                label: "90% - 100%",
                value: "90% - 100%",
            },
        ],
        info: `
            Win Rate of calibration services refers to the percentage of victories you can expect to achieve
            during the calibration process, conducted by a professional player. This category allows you to
            choose a desired win rate for your calibration matches, ranging from under 50% to as high as 90% - 100%.
            Selecting a higher win rate typically involves a higher level of skill and effort from the booster,
            aiming to place your account in a higher MMR bracket. This filter is crucial for players who have
            specific goals for their post-calibration MMR and want to ensure the best possible outcome based on
            their desired win rate during calibration matches.
        `,
        name: "Win Rate",
        type: "radio",
    },
    {
        buckets: [
            {
                label: "Any",
                value: "Any",
            },
            {
                label: "Solo",
                value: "Solo",
            },
            {
                label: "Party",
                value: "Party",
            },
        ],
        name: "Type of Сalibration",
        type: "radio",
    },
    {
        buckets: [
            {
                label: "Any",
                value: "Any",
            },
            {
                label: "Abaddon",
                value: "Abaddon",
            },
            {
                label: "Alchemist",
                value: "Alchemist",
            },
            {
                label: "Ancient Apparition",
                value: "Ancient Apparition",
            },
            {
                label: "Anti-Mage",
                value: "Anti-Mage",
            },
            {
                label: "Arc Warden",
                value: "Arc Warden",
            },
            {
                label: "Axe",
                value: "Axe",
            },
            {
                label: "Bane",
                value: "Bane",
            },
            {
                label: "Batrider",
                value: "Batrider",
            },
            {
                label: "Beastmaster",
                value: "Beastmaster",
            },
            {
                label: "Bloodseeker",
                value: "Bloodseeker",
            },
            {
                label: "Bounty Hunter",
                value: "Bounty Hunter",
            },
            {
                label: "Brewmaster",
                value: "Brewmaster",
            },
            {
                label: "Bristleback",
                value: "Bristleback",
            },
            {
                label: "Broodmother",
                value: "Broodmother",
            },
            {
                label: "Centaur Warrunner",
                value: "Centaur Warrunner",
            },
            {
                label: "Chaos Knight",
                value: "Chaos Knight",
            },
            {
                label: "Chen",
                value: "Chen",
            },
            {
                label: "Clinkz",
                value: "Clinkz",
            },
            {
                label: "Clockwerk",
                value: "Clockwerk",
            },
            {
                label: "Crystal Maiden",
                value: "Crystal Maiden",
            },
            {
                label: "Dark Seer",
                value: "Dark Seer",
            },
            {
                label: "Dark Willow",
                value: "Dark Willow",
            },
            {
                label: "Dawnbreaker",
                value: "Dawnbreaker",
            },
            {
                label: "Dazzle",
                value: "Dazzle",
            },
            {
                label: "Death Prophet",
                value: "Death Prophet",
            },
            {
                label: "Disruptor",
                value: "Disruptor",
            },
            {
                label: "Doom",
                value: "Doom",
            },
            {
                label: "Dragon Knight",
                value: "Dragon Knight",
            },
            {
                label: "Drow Ranger",
                value: "Drow Ranger",
            },
            {
                label: "Earth Spirit",
                value: "Earth Spirit",
            },
            {
                label: "Earthshaker",
                value: "Earthshaker",
            },
            {
                label: "Elder Titan",
                value: "Elder Titan",
            },
            {
                label: "Ember Spirit",
                value: "Ember Spirit",
            },
            {
                label: "Enchantress",
                value: "Enchantress",
            },
            {
                label: "Enigma",
                value: "Enigma",
            },
            {
                label: "Faceless Void",
                value: "Faceless Void",
            },
            {
                label: "Grimstroke",
                value: "Grimstroke",
            },
            {
                label: "Gyrocopter",
                value: "Gyrocopter",
            },
            {
                label: "Hoodwink",
                value: "Hoodwink",
            },
            {
                label: "Huskar",
                value: "Huskar",
            },
            {
                label: "Invoker",
                value: "Invoker",
            },
            {
                label: "Io",
                value: "Io",
            },
            {
                label: "Jakiro",
                value: "Jakiro",
            },
            {
                label: "Juggernaut",
                value: "Juggernaut",
            },
            {
                label: "Keeper of the Light",
                value: "Keeper of the Light",
            },
            {
                label: "Kunkka",
                value: "Kunkka",
            },
            {
                label: "Legion Commander",
                value: "Legion Commander",
            },
            {
                label: "Leshrac",
                value: "Leshrac",
            },
            {
                label: "Lich",
                value: "Lich",
            },
            {
                label: "Lifestealer",
                value: "Lifestealer",
            },
            {
                label: "Lina",
                value: "Lina",
            },
            {
                label: "Lion",
                value: "Lion",
            },
            {
                label: "Lone Druid",
                value: "Lone Druid",
            },
            {
                label: "Luna",
                value: "Luna",
            },
            {
                label: "Lycan",
                value: "Lycan",
            },
            {
                label: "Magnus",
                value: "Magnus",
            },
            {
                label: "Marci",
                value: "Marci",
            },
            {
                label: "Mars",
                value: "Mars",
            },
            {
                label: "Medusa",
                value: "Medusa",
            },
            {
                label: "Meepo",
                value: "Meepo",
            },
            {
                label: "Mirana",
                value: "Mirana",
            },
            {
                label: "Monkey King",
                value: "Monkey King",
            },
            {
                label: "Morphling",
                value: "Morphling",
            },
            {
                label: "Muerta",
                value: "Muerta",
            },
            {
                label: "Naga Siren",
                value: "Naga Siren",
            },
            {
                label: "Nature's Prophet",
                value: "Nature's Prophet",
            },
            {
                label: "Necrophos",
                value: "Necrophos",
            },
            {
                label: "Night Stalker",
                value: "Night Stalker",
            },
            {
                label: "Nyx Assassin",
                value: "Nyx Assassin",
            },
            {
                label: "Ogre Magi",
                value: "Ogre Magi",
            },
            {
                label: "Omniknight",
                value: "Omniknight",
            },
            {
                label: "Oracle",
                value: "Oracle",
            },
            {
                label: "Outworld Destroyer",
                value: "Outworld Destroyer",
            },
            {
                label: "Pangolier",
                value: "Pangolier",
            },
            {
                label: "Phantom Assassin",
                value: "Phantom Assassin",
            },
            {
                label: "Phantom Lancer",
                value: "Phantom Lancer",
            },
            {
                label: "Phoenix",
                value: "Phoenix",
            },
            {
                label: "Primal Beast",
                value: "Primal Beast",
            },
            {
                label: "Puck",
                value: "Puck",
            },
            {
                label: "Pudge",
                value: "Pudge",
            },
            {
                label: "Pugna",
                value: "Pugna",
            },
            {
                label: "Queen of Pain",
                value: "Queen of Pain",
            },
            {
                label: "Razor",
                value: "Razor",
            },
            {
                label: "Riki",
                value: "Riki",
            },
            {
                label: "Rubick",
                value: "Rubick",
            },
            {
                label: "Sand King",
                value: "Sand King",
            },
            {
                label: "Shadow Demon",
                value: "Shadow Demon",
            },
            {
                label: "Shadow Fiend",
                value: "Shadow Fiend",
            },
            {
                label: "Shadow Shaman",
                value: "Shadow Shaman",
            },
            {
                label: "Silencer",
                value: "Silencer",
            },
            {
                label: "Skywrath Mage",
                value: "Skywrath Mage",
            },
            {
                label: "Slardar",
                value: "Slardar",
            },
            {
                label: "Slark",
                value: "Slark",
            },
            {
                label: "Snapfire",
                value: "Snapfire",
            },
            {
                label: "Sniper",
                value: "Sniper",
            },
            {
                label: "Spectre",
                value: "Spectre",
            },
            {
                label: "Spirit Breaker",
                value: "Spirit Breaker",
            },
            {
                label: "Storm Spirit",
                value: "Storm Spirit",
            },
            {
                label: "Sven",
                value: "Sven",
            },
            {
                label: "Techies",
                value: "Techies",
            },
            {
                label: "Templar Assassin",
                value: "Templar Assassin",
            },
            {
                label: "Terrorblade",
                value: "Terrorblade",
            },
            {
                label: "Tidehunter",
                value: "Tidehunter",
            },
            {
                label: "Timbersaw",
                value: "Timbersaw",
            },
            {
                label: "Tinker",
                value: "Tinker",
            },
            {
                label: "Tiny",
                value: "Tiny",
            },
            {
                label: "Treant Protector",
                value: "Treant Protector",
            },
            {
                label: "Troll Warlord",
                value: "Troll Warlord",
            },
            {
                label: "Tusk",
                value: "Tusk",
            },
            {
                label: "Underlord",
                value: "Underlord",
            },
            {
                label: "Undying",
                value: "Undying",
            },
            {
                label: "Ursa",
                value: "Ursa",
            },
            {
                label: "Vengeful Spirit",
                value: "Vengeful Spirit",
            },
            {
                label: "Venomancer",
                value: "Venomancer",
            },
            {
                label: "Viper",
                value: "Viper",
            },
            {
                label: "Visage",
                value: "Visage",
            },
            {
                label: "Void Spirit",
                value: "Void Spirit",
            },
            {
                label: "Warlock",
                value: "Warlock",
            },
            {
                label: "Weaver",
                value: "Weaver",
            },
            {
                label: "Windranger",
                value: "Windranger",
            },
            {
                label: "Winter Wyvern",
                value: "Winter Wyvern",
            },
            {
                label: "Witch Doctor",
                value: "Witch Doctor",
            },
            {
                label: "Wraith King",
                value: "Wraith King",
            },
            {
                label: "Zeus",
                value: "Zeus",
            },
        ],
        info: "Hero Selection allows you to choose the specific Dota 2 heroes you prefer in your calibration matches.",
        name: "Hero",
        type: "radio",
    },
    {
        buckets: [
            {
                label: "Very Quickly",
                value: "Very Quickly",
            },
            {
                label: "Up to 2 days",
                value: "Up to 2 days",
            },
            {
                label: "Up to 3 days",
                value: "Up to 3 days",
            },
            {
                label: "Up to 7 days",
                value: "Up to 7 days",
            },
        ],
        name: "Calibration Duration",
        type: "radio",
    },
    {
        buckets: [
            {
                label: "Gameplay Analysis",
                tooltip: "Detailed analysis of past matches to identify areas for improvement and to develop a calibration strategy.",
                value: "Gameplay Analysis",
            },
            {
                label: "Personal Coaching",
                tooltip: "Individual sessions to develop skills and prepare for calibration matches.",
                value: "Personal Coaching",
            },
            {
                label: "Strategy Development",
                tooltip: "Creation of specific game plans and tactics to increase the chances of success in calibration matches.",
                value: "Strategy Development",
            },
            {
                label: "Post-Calibration Plan",
                tooltip: "Development of a long-term strategy to maintain and improve the achieved MMR after calibration.",
                value: "Post-Calibration Plan",
            },
            {
                label: "Hero Specialization",
                tooltip: "Preparation and advice on playing key heroes to maximize chances of success in calibration matches.",
                value: "Hero Specialization",
            },
            {
                label: "Psychological Coaching",
                tooltip: "Support in managing stress and boosting confidence before important matches.",
                value: "Psychological Coaching",
            },
            {
                label: "Live Streaming",
                tooltip: "The option to watch the boosting process in real-time for better understanding and learning.",
                value: "Live Streaming",
            },
            {
                label: "Progress Monitoring",
                tooltip: "Tracking results and adapting strategies in real-time to achieve the best outcomes during calibration.",
                value: "Progress Monitoring",
            },
        ],
        name: "Additional Services",
        type: "checkbox",
    },
] satisfies ILotsFilter[]
