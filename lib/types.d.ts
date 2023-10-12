declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_NAVER_CLIENT_ID: string | undefined;
      NEXT_PUBLIC_NAVER_CLIENT_SECRET: string | undefined;
    }
  }
}

export {};
