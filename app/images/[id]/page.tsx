"use client";

import { useImageQuery } from "@hooks";
import { useParams } from "next/navigation";

export default function Image() {
  const { id = "" } = useParams<{ id: string }>();

  const { data } = useImageQuery({ id });

  return (
    data && (
      <div>
        <img
          className=" rounded-2xl"
          src={`http://localhost:8080/media/fullsize/${data.id}.${data.extension}`}
        />
      </div>
    )
  );
}
