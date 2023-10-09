"use client";

import Link from "next/link";

export default function BarButton({ text, icon, url }) {
  console.log;
  return (
    <Link href={url}>
      <div className="barbutton">
        <div className="flex-col mt-auto mb-auto">
          <div className="text-3xl justify-items-center">{icon}</div>
          <div className="ml-auto mr-auto justify-center" >{text}</div>
        </div>
      </div>
    </Link>
  );
}
