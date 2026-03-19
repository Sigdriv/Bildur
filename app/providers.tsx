"use client";

import { useRouter } from "next/navigation";
import type { ThemeProviderProps } from "next-themes";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import * as React from "react";

import { errorDescriptionMapper, errorTitleMapper, TkError } from "@http";

import { HeroUIProvider } from "@heroui/system";
import { addToast, ToastProvider } from "@heroui/toast";
import {
  QueryClient,
  QueryClientProvider,
  QueryCache,
} from "@tanstack/react-query";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

declare module "@react-types/shared" {
  interface RouterConfig {
    routerOptions: NonNullable<
      Parameters<ReturnType<typeof useRouter>["push"]>[1]
    >;
  }
}

function onError(error: TkError | Error) {
  if (error instanceof TkError) {
    addToast({
      title: errorTitleMapper[error.statusCode],
      description: errorDescriptionMapper[error.statusCode],
      color: "danger",
    });
  } else {
    addToast({
      title: "Ukjent feil",
      description: "Vennligst prøv igjen senere.",
      color: "danger",
    });
  }
}

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (err) => {
      if (err instanceof TkError) {
        if (err.statusCode === 401) return;
      }

      onError(err);
    },
  }),
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
    mutations: {
      onError,
    },
  },
});

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter().push;

  return (
    <HeroUIProvider navigate={router}>
      <QueryClientProvider client={queryClient}>
        <NextThemesProvider {...themeProps}>
          <ToastProvider
            toastProps={{
              timeout: 5000,
              shouldShowTimeoutProgress: true,
            }}
          />

          {children}
        </NextThemesProvider>
      </QueryClientProvider>
    </HeroUIProvider>
  );
}
