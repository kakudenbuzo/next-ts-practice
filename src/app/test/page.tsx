import Link from "next/link";
import TestComponent from "./test-component";

export default function Home() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div>
        <h1>test/page.tsx</h1>
        <Link href="/" className="btn btn-blue">
          Back to home
        </Link>
        <TestComponent title="Test component" />
      </div>
    </div>
  );
}
