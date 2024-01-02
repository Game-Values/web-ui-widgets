
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const VITE_API_URL: string;
	export const VITE_OPENAPI_URL: string;
	export const PATH: string;
	export const LC_MEASUREMENT: string;
	export const XAUTHORITY: string;
	export const INVOCATION_ID: string;
	export const XMODIFIERS: string;
	export const LC_TELEPHONE: string;
	export const XDG_DATA_DIRS: string;
	export const GDMSESSION: string;
	export const LC_TIME: string;
	export const SNAP_COMMON: string;
	export const PAPERSIZE: string;
	export const GTK_IM_MODULE: string;
	export const SNAP_INSTANCE_KEY: string;
	export const SNAP_USER_COMMON: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const SNAP_REVISION: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const JOURNAL_STREAM: string;
	export const COLORTERM: string;
	export const LC_PAPER: string;
	export const SESSION_MANAGER: string;
	export const USERNAME: string;
	export const LOGNAME: string;
	export const PWD: string;
	export const MANAGERPID: string;
	export const SNAP_UID: string;
	export const LANGUAGE: string;
	export const GJS_DEBUG_TOPICS: string;
	export const SHELL: string;
	export const LC_ADDRESS: string;
	export const GIO_LAUNCHED_DESKTOP_FILE: string;
	export const BAMF_DESKTOP_FILE_HINT: string;
	export const GNOME_DESKTOP_SESSION_ID: string;
	export const GTK_MODULES: string;
	export const SNAP_ARCH: string;
	export const NODE_ENV: string;
	export const SYSTEMD_EXEC_PID: string;
	export const XDG_SESSION_DESKTOP: string;
	export const SNAP_LIBRARY_PATH: string;
	export const SSH_AGENT_LAUNCHER: string;
	export const SHLVL: string;
	export const SNAP_EUID: string;
	export const LC_IDENTIFICATION: string;
	export const LC_MONETARY: string;
	export const SNAP_NAME: string;
	export const FORCE_COLOR: string;
	export const QT_IM_MODULE: string;
	export const XDG_CONFIG_DIRS: string;
	export const LANG: string;
	export const SNAP_INSTANCE_NAME: string;
	export const DEBUG_COLORS: string;
	export const XDG_SESSION_TYPE: string;
	export const npm_config_color: string;
	export const SNAP_USER_DATA: string;
	export const DISPLAY: string;
	export const MOCHA_COLORS: string;
	export const SNAP_REEXEC: string;
	export const SNAP_VERSION: string;
	export const LC_NAME: string;
	export const XDG_SESSION_CLASS: string;
	export const SNAP_DATA: string;
	export const GPG_AGENT_INFO: string;
	export const DESKTOP_SESSION: string;
	export const SNAP: string;
	export const USER: string;
	export const SNAP_REAL_HOME: string;
	export const XDG_MENU_PREFIX: string;
	export const GIO_LAUNCHED_DESKTOP_FILE_PID: string;
	export const QT_ACCESSIBILITY: string;
	export const WINDOWPATH: string;
	export const LC_NUMERIC: string;
	export const GJS_DEBUG_OUTPUT: string;
	export const SSH_AUTH_SOCK: string;
	export const GNOME_SHELL_SESSION_MODE: string;
	export const SNAP_CONTEXT: string;
	export const XDG_RUNTIME_DIR: string;
	export const SNAP_COOKIE: string;
	export const HOME: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		VITE_API_URL: string;
		VITE_OPENAPI_URL: string;
		PATH: string;
		LC_MEASUREMENT: string;
		XAUTHORITY: string;
		INVOCATION_ID: string;
		XMODIFIERS: string;
		LC_TELEPHONE: string;
		XDG_DATA_DIRS: string;
		GDMSESSION: string;
		LC_TIME: string;
		SNAP_COMMON: string;
		PAPERSIZE: string;
		GTK_IM_MODULE: string;
		SNAP_INSTANCE_KEY: string;
		SNAP_USER_COMMON: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		SNAP_REVISION: string;
		XDG_CURRENT_DESKTOP: string;
		JOURNAL_STREAM: string;
		COLORTERM: string;
		LC_PAPER: string;
		SESSION_MANAGER: string;
		USERNAME: string;
		LOGNAME: string;
		PWD: string;
		MANAGERPID: string;
		SNAP_UID: string;
		LANGUAGE: string;
		GJS_DEBUG_TOPICS: string;
		SHELL: string;
		LC_ADDRESS: string;
		GIO_LAUNCHED_DESKTOP_FILE: string;
		BAMF_DESKTOP_FILE_HINT: string;
		GNOME_DESKTOP_SESSION_ID: string;
		GTK_MODULES: string;
		SNAP_ARCH: string;
		NODE_ENV: string;
		SYSTEMD_EXEC_PID: string;
		XDG_SESSION_DESKTOP: string;
		SNAP_LIBRARY_PATH: string;
		SSH_AGENT_LAUNCHER: string;
		SHLVL: string;
		SNAP_EUID: string;
		LC_IDENTIFICATION: string;
		LC_MONETARY: string;
		SNAP_NAME: string;
		FORCE_COLOR: string;
		QT_IM_MODULE: string;
		XDG_CONFIG_DIRS: string;
		LANG: string;
		SNAP_INSTANCE_NAME: string;
		DEBUG_COLORS: string;
		XDG_SESSION_TYPE: string;
		npm_config_color: string;
		SNAP_USER_DATA: string;
		DISPLAY: string;
		MOCHA_COLORS: string;
		SNAP_REEXEC: string;
		SNAP_VERSION: string;
		LC_NAME: string;
		XDG_SESSION_CLASS: string;
		SNAP_DATA: string;
		GPG_AGENT_INFO: string;
		DESKTOP_SESSION: string;
		SNAP: string;
		USER: string;
		SNAP_REAL_HOME: string;
		XDG_MENU_PREFIX: string;
		GIO_LAUNCHED_DESKTOP_FILE_PID: string;
		QT_ACCESSIBILITY: string;
		WINDOWPATH: string;
		LC_NUMERIC: string;
		GJS_DEBUG_OUTPUT: string;
		SSH_AUTH_SOCK: string;
		GNOME_SHELL_SESSION_MODE: string;
		SNAP_CONTEXT: string;
		XDG_RUNTIME_DIR: string;
		SNAP_COOKIE: string;
		HOME: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
