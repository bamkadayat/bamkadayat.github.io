import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center h-screen text-center">
      <Image
        src="/images/404.png"
        alt="404 Not Found"
        width={500}
        height={500}
      />
      <h2 className="text-3xl font-bold mb-2">Oops! Page not found.</h2>
      <p className="mb-6">We could not find the page you were looking for.</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
