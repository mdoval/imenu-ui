import Image from "next/image";
import logoPic from "@/public/images/logo_bar.png";

export default function ActivarMesa({ params }) {
  console.log(params);
  return (
    <div>
        <h1>Bienvenidos a</h1>
        <Image
          src={logoPic}
          alt="Logo del Bar"
          className="w-1/2"
          // width={500} automatically provided
          // height={500} automatically provided
          // blurDataURL="data:..." automatically provided
          // placeholder="blur" // Optional blur-up while loading
        />
    </div>
  );
}
