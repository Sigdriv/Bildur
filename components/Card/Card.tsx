"use client";

import type { ReactNode } from "react";

import { Card as HeroCard, CardHeader, CardBody } from "@heroui/react";

import { Header1 } from "../typography";

type BaseProps = {
  children: ReactNode;
  align?: "left" | "center" | "right";
  fullHeight?: boolean;
  width?:
    | "full"
    | "max-w-md"
    | "max-w-lg"
    | "max-w-xl"
    | "max-w-2xl"
    | "fit-content";
  isPressable?: boolean;
  onPress?: () => void;
};

type Props = BaseProps & {
  header?: string;
  headerAlign?: "left" | "center" | "right";
};

const alignmentClasses = {
  left: "flex justify-start",
  center: "flex justify-center",
  right: "flex justify-end",
};

export function Card({
  header,
  headerAlign = "left",
  children,
  align = "left",
  fullHeight = false,
  width = "full",
  isPressable = false,
  onPress,
}: Props) {
  const widthClass =
    width === "full" ? "w-full" : width === "fit-content" ? "w-fit" : width;

  return (
    <div
      className={`${alignmentClasses[align]} ${widthClass} ${fullHeight ? "h-full" : ""}`}
    >
      <HeroCard
        className={`flex w-full max-w-full flex-col p-4 sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl ${fullHeight ? "h-full" : ""}`}
        isPressable={isPressable}
        onPress={onPress}
      >
        {header && (
          <CardHeader className={`w-full ${alignmentClasses[headerAlign]}`}>
            <Header1 isCardHeader>{header}</Header1>
          </CardHeader>
        )}
        <CardBody className={fullHeight ? "flex-1" : ""}>{children}</CardBody>
      </HeroCard>
    </div>
  );
}
