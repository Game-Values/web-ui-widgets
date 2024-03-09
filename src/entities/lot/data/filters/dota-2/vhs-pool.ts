import type { ILotsFilter } from "~/entities/lot"

export default [
    {
        buckets: [
            {
                label: "0-500 MMR",
                value: "0-500 MMR",
            },
            {
                label: "500-1000 MMR",
                value: "500-1000 MMR",
            },
            {
                label: "1000-1500 MMR",
                value: "1000-1500 MMR",
            },
            {
                label: "1500-2000 MMR",
                value: "1500-2000 MMR",
            },
            {
                label: "2000-2500 MMR",
                value: "2000-2500 MMR",
            },
            {
                label: "2500-3000 MMR",
                value: "2500-3000 MMR",
            },
            {
                label: "3000-3500 MMR",
                value: "3000-3500 MMR",
            },
            {
                label: "3500-4000 MMR",
                value: "3500-4000 MMR",
            },
            {
                label: "4000-4500 MMR",
                value: "4000-4500 MMR",
            },
            {
                label: "4500-5000 MMR",
                value: "4500-5000 MMR",
            },
            {
                label: "5000-5500 MMR",
                value: "5000-5500 MMR",
            },
            {
                label: "5500-6000 MMR",
                value: "5500-6000 MMR",
            },
            {
                label: "6000-6500 MMR",
                value: "6000-6500 MMR",
            },
            {
                label: "6500-7000 MMR",
                value: "6500-7000 MMR",
            },
            {
                label: "7000-7500 MMR",
                value: "7000-7500 MMR",
            },
            {
                label: "7500-8000 MMR",
                value: "7500-8000 MMR",
            },
            {
                label: "8000-8500 MMR",
                value: "8000-8500 MMR",
            },
            {
                label: "8500-9000 MMR",
                value: "8500-9000 MMR",
            },
            {
                label: "9000-9500 MMR",
                value: "9000-9500 MMR",
            },
            {
                label: "9500-10000 MMR",
                value: "9500-10000 MMR",
            },
            {
                label: "10000-10500 MMR",
                value: "10000-10500 MMR",
            },
            {
                label: "10500-11000 MMR",
                value: "10500-11000 MMR",
            },
            {
                label: "11000-11500 MMR",
                value: "11000-11500 MMR",
            },
            {
                label: "11500-12000 MMR",
                value: "11500-12000 MMR",
            },
            {
                label: "12000-12500 MMR",
                value: "12000-12500 MMR",
            },
            {
                label: "12500-13000 MMR",
                value: "12500-13000 MMR",
            },
        ],
        info: `
            MMR After Calibration refers to the estimated Matchmaking Rating (MMR) that
            you can expect to receive after completing the required number of calibration matches.
            This rating is a reflection of your skill level and performance during these initial games.
            The calibration process uses your win rate, in-game statistics, and overall performance
            to place you in the appropriate skill bracket. For example, a win rate of 60-65% may calibrate
            you to an MMR of 6300-6600+. Please note that the actual MMR may vary based
            on the latest Dota 2 calibration algorithms
        `,
        name: "MMR After Calibration",
        type: "checkbox",
    },
    {
        name: "MMR After Calibration Value",
        type: "range",
    },
    {
        buckets: [
            {
                label: "Any",
                value: "Any",
            },
            {
                label: "Under 40%",
                value: "Under 40%",
            },
            {
                label: "40% - 50%",
                value: "40% - 50%",
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
                label: "Above 80%",
                value: "Above 80%",
            },
        ],
        info: `
            Win Rate refers to the percentage of games won by the account in Dota 2.
            This statistic is a key indicator of a player's success and skill level in the game.
            A higher win rate generally suggests better performance and understanding of game mechanics.
            The win rate is calculated by dividing the number of games won by the total number of games played.
            This filter allows you to select accounts based on their win rate, offering options from under 40% to above 80%.
            Choose a range that best fits your desired skill level or the level you wish to analyze and learn from.
        `,
        name: "Win Rate",
        type: "checkbox",
    },
    {
        name: "Win Rate Value",
        type: "range",
    },
    {
        buckets: [
            {
                label: "Yes",
                value: "Yes",
            },
            {
                label: "No",
                value: "No",
            },
        ],
        name: "First steam verification e-mail",
        type: "radio",
    },
    {
        buckets: [
            {
                label: "Any",
                value: "Any",
            },
            {
                label: "2002",
                value: "2002",
            },
            {
                label: "2003",
                value: "2003",
            },
            {
                label: "2004",
                value: "2004",
            },
            {
                label: "2005",
                value: "2005",
            },
            {
                label: "2006",
                value: "2006",
            },
            {
                label: "2007",
                value: "2007",
            },
            {
                label: "2008",
                value: "2008",
            },
            {
                label: "2009",
                value: "2009",
            },
            {
                label: "2010",
                value: "2010",
            },
            {
                label: "2011",
                value: "2011",
            },
            {
                label: "2012",
                value: "2012",
            },
            {
                label: "2013",
                value: "2013",
            },
            {
                label: "2014",
                value: "2014",
            },
            {
                label: "2015",
                value: "2015",
            },
            {
                label: "2016",
                value: "2016",
            },
            {
                label: "2017",
                value: "2017",
            },
            {
                label: "2018",
                value: "2018",
            },
            {
                label: "2019",
                value: "2019",
            },
            {
                label: "2020",
                value: "2020",
            },
            {
                label: "2021",
                value: "2021",
            },
            {
                label: "2022",
                value: "2022",
            },
            {
                label: "2023",
                value: "2023",
            },
            {
                label: "2024",
                value: "2024",
            },
        ],
        name: "Date of Registration",
        type: "radio",
    },
    {
        name: "Number of Wins",
        type: "range",
    },
    {
        name: "Number of Losses",
        type: "range",
    },
    {
        name: "Number of hours",
        type: "range",
    },
    {
        buckets: [
            {
                children: [
                    {
                        name: "Inventory value",
                        type: "range",
                    },
                ],
                label: "Yes",
                tooltip: `
                    In this category, the approximate total value of the Steam account's inventory is indicated.
                    It includes the valuation of all items available in the player's inventory across all games,
                    including skins, equipment, tools, and other game assets. The value is determined based on the
                    current market prices for these items on the Steam Community Market or through other valuation services.
                `,
                value: "Yes",
            },
            {
                label: "No",
                value: "No",
            },
            {
                label: "Trade ban",
                value: "Trade ban",
            },
        ],
        name: "Inventory",
        type: "radio",
    },
] satisfies ILotsFilter[]
