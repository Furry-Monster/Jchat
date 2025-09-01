/// <reference types="vite/client" />
/// <reference types="vitest/globals" />
interface ImportMetaEnv {
	readonly VITE_API_BASE_URL: string;
	readonly VITE_DEBUG_MODE: string;
	readonly VITE_APP_NAME: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
