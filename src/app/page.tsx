import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div>
        <h1 className="text-2xl">app/page.tsx</h1>
        <Link href="/test" className="btn btn-blue">
          Go to test page
        </Link>
      </div>
    </div>
  );
}
