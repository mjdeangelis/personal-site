import Link from "next/link";

export default function BlogPage() {
  return (
    <div className='pageContainer'>
      <h1>blog</h1>
      <ul>
        <li>
          <Link href='/blog/add-cloudwatch-rum-to-nextjs-app'>
            Add CloudWatch RUM to a Next.js app
          </Link>
        </li>
      </ul>
    </div>
  );
}
