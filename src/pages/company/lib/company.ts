import type { ICompanyProduct, ICompanyValue } from "~/pages/company"

import IconBot from "virtual:icons/common/bot"
import IconChalice from "virtual:icons/common/chalice"
import IconFastClock from "virtual:icons/common/fast-clock"
import IconGame from "virtual:icons/common/game"
import IconHandUp from "virtual:icons/common/hand-up"
import IconSquareLines from "virtual:icons/common/square-lines"
import IconTeam from "virtual:icons/common/team"
import IconDevicePhoneMobile from "virtual:icons/heroicons/device-phone-mobile"
import IconHeartSolid from "virtual:icons/heroicons/heart-solid"
import IconRocketLaunch from "virtual:icons/heroicons/rocket-launch"
import IconShieldCheckSolid from "virtual:icons/heroicons/shield-check-solid"
import IconUserGroupSolid from "virtual:icons/heroicons/user-group-solid"

export let companyMissions: string[] = [
    "To connect global gamers in a unified digital community.",
    "To empower our community to make a living off gaming from anywhere, anytime.",
    "To be the pinnacle of trust and security in digital trading.",
]

export let companyProducts: ICompanyProduct[] = [
    {
        icon: IconRocketLaunch,
        label: "P2P Trading Platform",
    },
    {
        icon: IconTeam,
        label: "Finding Teammates",
    },
    {
        icon: IconSquareLines,
        label: "GPT-like Knowledge Base Coming soon",
    },
    {
        icon: IconGame,
        label: "Video Games Coming soon in 2025",
    },
    {
        icon: IconBot,
        label: "AI Assistant Coming soon in 2024",
    },
    {
        icon: IconDevicePhoneMobile,
        label: "Mobile App Coming soon in 2025",
    },
]

export let companyValues: ICompanyValue[] = [
    {
        description: "GameValues ensures a seamless and intuitive trading process, making buying and selling in-game assets as simple and accessible as possible for every user.",
        icon: IconHandUp,
        label: "Accessibility & Convenience",
    },
    {
        description: "We value open dialogue and collaboration within our community. GameValues encourages the exchange of knowledge and experience, aiding gamers in growing and evolving alongside us.",
        icon: IconUserGroupSolid,
        label: "Openness & Community",
    },
    {
        description: "Great work comes from loving what you do. At GameValues, we pour our heart and soul into creating an awesome platform.",
        icon: IconHeartSolid,
        label: "Passion",
    },
    {
        description: "Our work is built on transparent cooperation terms and earning the trust of users. We strive for every transaction to be clear, honest, and fair.",
        icon: IconShieldCheckSolid,
        label: "Transparency & Trust",
    },
    {
        description: "At GameValues, we prioritize the user, offering a platform for selling gaming assets with minimal fees. This underscores our commitment to providing high-quality services while ensuring the best value for our community, setting us apart from competitors.",
        icon: IconChalice,
        label: "Quality & Availability",
    },
    {
        description: "We believe in the power of innovation for continuously enhancing the gaming experience. Our goal is to implement progressive technologies and ideas that elevate the gaming industry to new heights.",
        icon: IconFastClock,
        label: "Innovation & Progress",
    },
]

export let companyVersions = [

]

export let companyWhoWeAreList: string[] = [
    "GameValues is a startup and dynamically growing international digital P2P-Trading platform for gamers, founded in 2023 in Berlin by a group of serial and tech entrepreneurs.",
    "Here, we are rethinking the approach to the gaming economy. GameValues is not just a trading platform — we aim to become a global hub.",
    "Now, GameValues has representations in the USA, Delaware, and other key regions.",
]
