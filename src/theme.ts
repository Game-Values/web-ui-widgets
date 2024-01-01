import type { CustomThemeConfig } from "@skeletonlabs/tw-plugin";

export const theme: CustomThemeConfig = {
	name: "theme",
	properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": "Montserrat",
		"--theme-font-family-heading": "Montserrat",
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",

		// =~= Theme On-X Colors =~=
		"--on-primary": "255 255 255",
		"--on-secondary": "255 255 255",
		"--on-tertiary": "255 255 255",
		"--on-success": "255 255 255",
		"--on-warning": "255 255 255",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",

		// =~= Theme Colors  =~=
		// primary | #3478F6
		"--color-primary-50": "225 235 254", // #e1ebfe
		"--color-primary-100": "214 228 253", // #d6e4fd
		"--color-primary-200": "204 221 253", // #ccddfd
		"--color-primary-300": "174 201 251", // #aec9fb
		"--color-primary-400": "113 161 249", // #71a1f9
		"--color-primary-500": "52 120 246", // #3478F6
		"--color-primary-600": "47 108 221", // #2f6cdd
		"--color-primary-700": "39 90 185", // #275ab9
		"--color-primary-800": "31 72 148", // #1f4894
		"--color-primary-900": "25 59 121", // #193b79

		// secondary | #353536
		"--color-secondary-50": "225 225 225", // #e1e1e1
		"--color-secondary-100": "215 215 215", // #d7d7d7
		"--color-secondary-200": "205 205 205", // #cdcdcd
		"--color-secondary-300": "174 174 175", // #aeaeaf
		"--color-secondary-400": "114 114 114", // #727272
		"--color-secondary-500": "53 53 54", // #353536
		"--color-secondary-600": "48 48 49", // #303031
		"--color-secondary-700": "40 40 41", // #282829
		"--color-secondary-800": "32 32 32", // #202020
		"--color-secondary-900": "26 26 26", // #1a1a1a

		// tertiary | #3D98FF
		"--color-tertiary-50": "226 240 255", // #e2f0ff
		"--color-tertiary-100": "216 234 255", // #d8eaff
		"--color-tertiary-200": "207 229 255", // #cfe5ff
		"--color-tertiary-300": "177 214 255", // #b1d6ff
		"--color-tertiary-400": "119 183 255", // #77b7ff
		"--color-tertiary-500": "61 152 255", // #3D98FF
		"--color-tertiary-600": "55 137 230", // #3789e6
		"--color-tertiary-700": "46 114 191", // #2e72bf
		"--color-tertiary-800": "37 91 153", // #255b99
		"--color-tertiary-900": "30 74 125", // #1e4a7d

		// success | #3BCF5E
		"--color-success-50": "226 248 231", // #e2f8e7
		"--color-success-100": "216 245 223", // #d8f5df
		"--color-success-200": "206 243 215", // #cef3d7
		"--color-success-300": "177 236 191", // #b1ecbf
		"--color-success-400": "118 221 142", // #76dd8e
		"--color-success-500": "59 207 94", // #3BCF5E
		"--color-success-600": "53 186 85", // #35ba55
		"--color-success-700": "44 155 71", // #2c9b47
		"--color-success-800": "35 124 56", // #237c38
		"--color-success-900": "29 101 46", // #1d652e

		// warning | #FF9500
		"--color-warning-50": "255 239 217", // #ffefd9
		"--color-warning-100": "255 234 204", // #ffeacc
		"--color-warning-200": "255 229 191", // #ffe5bf
		"--color-warning-300": "255 213 153", // #ffd599
		"--color-warning-400": "255 181 77", // #ffb54d
		"--color-warning-500": "255 149 0", // #FF9500
		"--color-warning-600": "230 134 0", // #e68600
		"--color-warning-700": "191 112 0", // #bf7000
		"--color-warning-800": "153 89 0", // #995900
		"--color-warning-900": "125 73 0", // #7d4900

		// error | #D8222F
		"--color-error-50": "249 222 224", // #f9dee0
		"--color-error-100": "247 211 213", // #f7d3d5
		"--color-error-200": "245 200 203", // #f5c8cb
		"--color-error-300": "239 167 172", // #efa7ac
		"--color-error-400": "228 100 109", // #e4646d
		"--color-error-500": "216 34 47", // #D8222F
		"--color-error-600": "194 31 42", // #c21f2a
		"--color-error-700": "162 26 35", // #a21a23
		"--color-error-800": "130 20 28", // #82141c
		"--color-error-900": "106 17 23", // #6a1117

		// surface | #1B1B1C
		"--color-surface-50": "221 221 221", // #dddddd
		"--color-surface-100": "209 209 210", // #d1d1d2
		"--color-surface-200": "198 198 198", // #c6c6c6
		"--color-surface-300": "164 164 164", // #a4a4a4
		"--color-surface-400": "95 95 96", // #5f5f60
		"--color-surface-500": "27 27 28", // #1B1B1C
		"--color-surface-600": "24 24 25", // #181819
		"--color-surface-700": "20 20 21", // #141415
		"--color-surface-800": "16 16 17", // #101011
		"--color-surface-900": "13 13 14" // #0d0d0e
	}
};