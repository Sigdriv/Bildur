"use client";

import { Card, Skeleton } from "@components";
import { useGetImages } from "@hooks";
import { useRouter } from "next/navigation";
import React from "react";

export default function Images() {
  const router = useRouter().push;

  const { data = [], isPending } = useGetImages();

  return (
    <div className="grid grid-cols-3 items-stretch gap-3">
      {isPending &&
        Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="min-w-90 h-[420px]">
            <Skeleton isLoading={isPending} className="h-full">
              {/* eslint-disable-next-line react/no-children-prop */}
              <Card
                width="full"
                fullHeight
                children={null}
                header="Blog Overview"
                headerAlign="center"
              />
            </Skeleton>
          </div>
        ))}

      {data.map((image) => (
        <div key={image.id} className="h-full">
          <Card
            isPressable
            width="fit-content"
            onPress={() => router(`/images/${image.originalImageId}`)}
            fullHeight
          >
            <div className="flex h-full items-center justify-center">
              <img
                src={`http://localhost:8080/media/thumb/${image.id}.${image.extension}`}
                alt={image.name}
                width={300}
                className=" rounded-2xl"
              />
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
}
