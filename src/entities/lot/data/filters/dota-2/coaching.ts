import type { ILotsFilter } from "~/entities/lot"

export default [
    {
        info: `
            Coach MMR Range allows you to select a Dota 2 coach based on their MMR (Matchmaking Rating),
            providing an indication of their skill level and expertise in the game. Please note that the
            MMR of coaches listed on the Gamevalues platform is not independently verified by us.
            We advise you to directly request proof of the coach’s MMR during the transaction process
            to ensure their claims match their actual skill level. This measure helps in making an
            informed decision while choosing a coach who best fits your learning requirements and skill improvement goals.
        `,
        name: "Coach MMR Range",
        type: "range",
    },
    {
        buckets: [
            {
                label: "Individual Training",
                value: "Individual Training",
            },
            {
                label: "Group Training",
                value: "Group Training",
            },
        ],
        info: `
            • Individual Training: One-on-one sessions focusing on the client's specific needs and goals.
            • Group Training: Small group sessions that allow for team learning and experience sharing.
        `,
        name: "Training Type",
        type: "radio",
    },
    {
        buckets: [
            {
                label: "Theory and General Gameplay",
                value: "Theory and General Gameplay",
            },
            {
                label: "Practical Gameplay and Mechanics",
                value: "Practical Gameplay and Mechanics",
            },
            {
                label: "Replay Analysis",
                value: "Replay Analysis",
            },
            {
                children: [
                    {
                        buckets: [
                            {
                                label: "Position 1 - Safe Lane",
                                value: "Position 1 - Safe Lane",
                            },
                            {
                                label: "Position 2 - Mid Lane",
                                value: "Position 2 - Mid Lane",
                            },
                            {
                                label: "Position 3 - Off Lane",
                                value: "Position 3 - Off Lane",
                            },
                            {
                                label: "Position 4 - Support",
                                value: "Position 4 - Support",
                            },
                            {
                                label: "Position 5 - Hard Support",
                                value: "Position 5 - Hard Support",
                            },
                        ],
                        info: `
                            • Position 1 - Carry: Typically plays on the Safe Lane. This role requires a significant amount of resources (gold and experience) and players in this position often become the main force of the team in the late game.
                            • Position 2 - Mid Lane: Plays on the middle lane. Midlaners often aim to gain an advantage in solo confrontations and level up quickly to have an active impact on the game.
                            • Position 3 - Off Lane: Plays on the offlane (hard lane). These players usually focus on disrupting the enemy’s strategy and surviving under tough conditions, often taking on the role of an initiator or a tank.
                            • Position 4 - Support: Also known as the roaming support. Players in this role often move around the map, assisting their team in securing early advantages.
                            • Position 5 - Hard Support: Requires fewer resources and is focused on supporting the team, placing wards, and healing allies.
                        `,
                        name: "Role",
                        type: "radio",
                    },
                ],
                label: "Role Training",
                value: "Role Training",
            },
            {
                label: "Team Strategy Development",
                value: "Team Strategy Development",
            },
            {
                label: "Mental Coaching and Psychological Training",
                value: "Mental Coaching and Psychological Training",
            },
            {
                children: [
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
                ],
                label: "Hero Training",
                value: "Hero Training",
            },
            {
                label: "Customized Training",
                value: "Customized Training",
            },
        ],
        info: `
            • Theory and General Gameplay: Education covering theoretical aspects of the game, fundamental principles, strategies, current meta, macro and micro-management, map control, and decision-making.
            • Practical Gameplay and Mechanics: Practical sessions involving participation in matches to apply and practice learned concepts, with a focus on improving mechanical skills like last-hitting, lane-blocking, and the use of items and abilities.
            • Replay Analysis: Detailed analysis of past games to identify mistakes and discuss ways to improve gameplay.
            • Role Training: Training focused on specific roles in the game such as carry, support, midlaner, and offlaner.
            • Team Strategy Development: Developing and implementing team strategies and tactics, teaching effective team communication and interaction.
            • Mental Coaching and Psychological Training: Addressing the psychological aspect of the game, including stress management, developing a resilient gaming mindset, and improving communication skills for effective teamwork.
            • Hero Training: Specialized training in playing specific heroes, considering their unique skills and role in the team.
            • Customized Training: Training sessions tailored to the unique requirements and preferences of the client, including choice of session duration and format.
        `,
        name: "Specialization",
        type: "radio",
    },
    {
        buckets: [
            {
                label: "1 game",
                value: "1 game",
            },
            {
                label: "1 hour",
                value: "1 hour",
            },
            {
                label: "2 hours",
                value: "2 hours",
            },
            {
                label: "3 hours",
                value: "3 hours",
            },
            {
                label: "Custom Duration \"minutes\"",
                value: "Custom Duration \"minutes\"",
            },
        ],
        info: `
            • 1 Game: A single match session, ideal for focused training and immediate feedback within the context of a real game scenario.
            • 30 minutes: Short sessions for a quick review and adjustment of specific aspects of the game.
            • 1 hour: Standard sessions suitable for deeper analysis and practical training.
            • 2 hours: Extended sessions for comprehensive learning, including theoretical teaching and practical games.
            • Custom Duration: Sessions whose length can be tailored to the specific needs and goals of the client.
        `,
        name: "Session Duration",
        type: "radio",
    },
] satisfies ILotsFilter[]
