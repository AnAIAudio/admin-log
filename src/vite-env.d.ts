/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_NODE_ENV: string;
    // 다른 환경 변수들에 대한 타입 정의
    readonly VITE_API_URL: string;
    readonly VITE_STORE_ID: string;
    readonly VITE_CHANNEL_KEY: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
