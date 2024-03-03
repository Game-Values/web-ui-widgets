import type { ILotsFilter } from "~/entities/lot"

export default [
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
        name: "Type of Boosting",
        type: "radio",
    },
    {
        buckets: [
            {
                label: "+1 Win",
                value: "+1 Win",
            },
            {
                label: "+100 MMR",
                value: "+100 MMR",
            },
            {
                label: "+769 MMR",
                value: "+769 MMR",
            },
            {
                label: "01-500 MMR",
                value: "01-500 MMR",
            },
            {
                label: "501-1000 MMR",
                value: "501-1000 MMR",
            },
            {
                label: "1001-1500 MMR",
                value: "1001-1500 MMR",
            },
            {
                label: "1501-2000 MMR",
                value: "1501-2000 MMR",
            },
            {
                label: "2001-2500 MMR",
                value: "2001-2500 MMR",
            },
            {
                label: "2501-3000 MMR",
                value: "2501-3000 MMR",
            },
            {
                label: "3001-3500 MMR",
                value: "3001-3500 MMR",
            },
            {
                label: "3501-4000 MMR",
                value: "3501-4000 MMR",
            },
            {
                label: "4001-4500 MMR",
                value: "4001-4500 MMR",
            },
            {
                label: "4501-5000 MMR",
                value: "4501-5000 MMR",
            },
            {
                label: "5001-5500 MMR",
                value: "5001-5500 MMR",
            },
            {
                label: "5501-6000 MMR",
                value: "5501-6000 MMR",
            },
            {
                label: "6001-6500 MMR",
                value: "6001-6500 MMR",
            },
            {
                label: "6501-7000 MMR",
                value: "6501-7000 MMR",
            },
            {
                label: "7001-7500 MMR",
                value: "7001-7500 MMR",
            },
            {
                label: "7501-8000 MMR",
                value: "7501-8000 MMR",
            },
            {
                label: "8001-8500 MMR",
                value: "8001-8500 MMR",
            },
            {
                label: "8501-9000 MMR",
                value: "8501-9000 MMR",
            },
            {
                label: "9001-9500 MMR",
                value: "9001-9500 MMR",
            },
            {
                label: "9501-10000 MMR",
                value: "9501-10000 MMR",
            },
            {
                label: "10001+ MMR",
                value: "10001+ MMR",
            },
        ],
        info: `
            Target MMR Range allows you to select the desired Matchmaking Rating (MMR) range that
            you aim to achieve through the boosting service. This range represents the level of skill
            and competitive ranking you wish to reach in Dota 2. Options include specific MMR increments
            such as +100 MMR or +769 MMR, as well as broader MMR brackets like 01-500 MMR or 5001-5500 MMR.
            Prices vary based on the complexity and the target MMR level. Choose the range that best fits
            your current skill level and your goal for improvement. Whether you're looking to make slight adjustments,
            achieve a significant jump in your ranking, or reach the high tiers of competitive play,
            these options cater to a variety of needs and aspirations within the Dota 2 community.
        `,
        name: "MMR Range",
        type: "checkbox",
    },
    {
        buckets: [
            {
                label: "Beginner",
                tooltip: "Beginner Booster•  Description: Suitable for increasing MMR from 0 to 2000.•  Skills and Understanding: Typically possesses basic skills and understanding of the game.•  Recommendations: Ideal for a modest increase in MMR or for new players seeking initial improvement in their rating.",
                value: "Beginner",
            },
            {
                label: "Intermediate",
                tooltip: "Intermediate Booste•  Description: Suitable for increasing MMR from 2000 to 3500.•  Skills and Understanding: Possesses a good understanding of game mechanics and strategies.•  Recommendations: Capable of providing deeper gameplay analysis and consultations, suitable for players with an intermediate level of experience.",
                value: "Intermediate",
            },
            {
                label: "Professional",
                tooltip: "Professional Booster•  Description: Suitable for increasing MMR from 3500 to 6500.•  Skills and Understanding: Possesses advanced skills and a deep understanding of the game.•  Recommendations: Particularly suitable for players aiming for intensive development and achieving new heights in Dota 2's ranking system. Recommended for those seeking enhanced and focused improvement of their gameplay skills.",
                value: "Professional",
            },
            {
                label: "Expert",
                tooltip: "Expert Booster•  Description: Suitable for increasing MMR above 6500.•  Skills and Understanding: Expert level, including top boosters with exceptional gameplay skills and experience.•  Recommendations: Ideal for players aiming to reach a professional level in Dota 2. Expert boosters provide the highest level of mastery and strategic planning necessary for competing at the highest levels of the game.",
                value: "Expert",
            },
        ],
        info: `
            Booster Experience refers to the level of expertise and skill set offered by different boosters in
            Dota 2 MMR boosting services. This category helps users select a booster whose experience level
            aligns with their specific MMR improvement needs. Ranging from Beginner to Expert level, each booster
            brings a unique set of skills and game understanding. It's important to note that boosters subjectively
            determine their own skill level, which means they assess and declare their expertise based on personal
            experience and self-evaluation. This categorization is designed to guide users in making informed
            choices based on the booster's claimed level of experience and expertise in the game.
        `,
        name: "Booster Experience",
        type: "radio",
    },
    {
        buckets: [
            {
                label: "Quick Boost",
                tooltip: "Quick Boost•  Duration: Up to 3 days•  Suitable for: Quick improvement of MMR by a small amount, ideal for those seeking minimal adjustments and rapid results.",
                value: "Quick Boost",
            },
            {
                label: "Standard Boost",
                tooltip: "Standard Boost•  Duration: Up to 10 days•  Suitable for: Moderate increase in MMR with a focus on improving specific aspects of gameplay skills. Recommended for players looking for systematic, yet not overly long, enhancement.",
                value: "Standard Boost",
            },
            {
                label: "Extended Boost",
                tooltip: "Extended Boost•  Duration: 2-4 weeks.•  Suitable for: Significant improvement in MMR with the opportunity for deep analysis and refinement of gameplay strategies. This option is suitable for players aiming for comprehensive skill enhancement.",
                value: "Extended Boost",
            },
            {
                label: "Long-Term Boost",
                tooltip: "Long-Term Boost•  Duration: More than 4 weeks.•  Suitable for: In-depth and comprehensive work on gameplay skills and strategy, as well as achieving a substantial increase in MMR. Recommended for those who want to deeply immerse in the improvement process and achieve high results in Dota 2's ranking system.",
                value: "Long-Term Boost",
            },
        ],
        info: `
            Duration refers to the time frame for completing the MMR boosting service in Dota 2.
            This category allows you to choose the speed at which your MMR is improved, ranging
            from short-term boosts for quick enhancements to long-term plans for substantial improvement.
            The duration options are designed to accommodate different schedules and goals, whether you're
            looking for immediate results or a more gradual, comprehensive development of your skills and ranking.
            Selecting the right duration helps in aligning the boosting service with your availability and
            how quickly you wish to see the changes in your MMR.
        `,
        name: "Boosting Duration",
        type: "radio",
    },
    {
        buckets: [
            {
                label: "Argentina",
                value: "Argentina",
            },
            {
                label: "Brazil",
                value: "Brazil",
            },
            {
                label: "China TC Guangdong",
                value: "China TC Guangdong",
            },
            {
                label: "China TC Shanghai",
                value: "China TC Shanghai",
            },
            {
                label: "China TC Wuhan",
                value: "China TC Wuhan",
            },
            {
                label: "China TC Zhejiang",
                value: "China TC Zhejiang",
            },
            {
                label: "China UC",
                value: "China UC",
            },
            {
                label: "China UC 2",
                value: "China UC 2",
            },
            {
                label: "Dubai",
                value: "Dubai",
            },
            {
                label: "Europe East",
                value: "Europe East",
            },
            {
                label: "Europe West",
                value: "Europe West",
            },
            {
                label: "India",
                value: "India",
            },
            {
                label: "Japan",
                value: "Japan",
            },
            {
                label: "Peru",
                value: "Peru",
            },
            {
                label: "Russia",
                value: "Russia",
            },
            {
                label: "South Africa",
                value: "South Africa",
            },
            {
                label: "Southeast Asia (SE Asia)",
                value: "Southeast Asia (SE Asia)",
            },
            {
                label: "US East",
                value: "US East",
            },
            {
                label: "US West",
                value: "US West",
            },
        ],
        name: "Region",
        type: "checkbox",
    },
    {
        buckets: [
            {
                label: "Game Analysis",
                tooltip: "In-depth analysis of gameplay situations and strategies to understand and improve the gaming process.",
                value: "Game Analysis",
            },
            {
                label: "Personal Coaching",
                tooltip: "Individual coaching sessions focused on developing specific skills and strategies.",
                value: "Personal Coaching",
            },
            {
                label: "Team Play Improvement",
                tooltip: "Advice and training aimed at enhancing team interaction and cooperation.",
                value: "Personal Coaching",
            },
            {
                label: "Hero Specialization Training",
                tooltip: "Concentration on improving gameplay with specific heroes, including strategies, positioning, and ability usage.",
                value: "Hero Specialization Training",
            },
            {
                label: "Live Streaming",
                tooltip: "The option to watch the boosting process in real-time for better understanding and learning.",
                value: "Live Streaming",
            },
            {
                label: "Progress Reports",
                tooltip: "Regular updates on the achieved results and improvements in the game.",
                value: "Progress Reports",
            },
            {
                label: "Behavioral Coaching",
                tooltip: "Developing communication skills and improving the behavioral score in the game.",
                value: "Behavioral Coaching",
            },
            {
                label: "Flexible Schedule",
                tooltip: "Adaptation of the boosting timetable and schedule to meet the individual needs of the client.",
                value: "Flexible Schedule",
            },
        ],
        name: "Additional Services",
        type: "checkbox",
    },
] satisfies ILotsFilter[]
