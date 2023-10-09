declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_KAKAO_MAP_API: string | undefined;
    }
  }
  interface Window {
    kakao: any;
  }
}

export {};
