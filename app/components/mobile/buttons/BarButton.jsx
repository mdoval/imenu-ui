"use client";

import Link from "next/link";

export default function BarButton({ text, icon, url }) {
  console.log;
  return (
    <Link href={url}>
      <div className="barbutton">
          <div><h1>{icon}</h1></div>
          <div>{text}</div>
      </div>
    </Link>
  );
}
