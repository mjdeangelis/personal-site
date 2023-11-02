import Link from "next/link";

export default function RUMNExtJsPage() {
  return (
    <div className='pageContainer blog'>
      <article>
        <span>October 23, 2023</span>
        <h1>Add CloudWatch RUM to a Next.js app</h1>
        <p>
          This tutorial will assume that you&apos;ve already set up your
          CloudWatch RUM monitor in AWS CloudWatch. If you haven&apos;t follow
          those instructions{" "}
          <a
            href='https://github.com/aws-observability/aws-rum-web#readme'
            target='_blank'
          >
            here
          </a>
          .
        </p>
        <hr />
        <p>
          CloudWatch RUM (Real User Monitoring) is a powerful tool within the
          AWS suite that allows you to collect client-side metrics and
          performance data.
        </p>
        <p>
          There is enough documentation available on how to add RUM to any React
          application, but if you are using Next.js there are some extra steps
          in order to get up and running.
        </p>
        <p>
          The{" "}
          <a
            href='https://github.com/aws-observability/aws-rum-web#readme'
            target='_blank'
          >
            RUM web client documentation
          </a>{" "}
          suggests using the HTML snippet, but other than getting some IDE
          errors when pasting it in, since we&apos;re (probably) using
          Typescript for our Next.js app, it makes sense to use Typescript to
          initialize RUM.
        </p>
        <p>
          When we insert the RUM code in our layout.tsx file (or whereever you
          decide to place the initilzation code), we&apos;ll see the following
          error in our console.
        </p>
        <code>ReferenceError: window is not defined</code>
        <p>
          This is because by default, Next.js pages are rendered server side and
          RUM is trying to access the window object, which is only available
          client-side.
        </p>
        <p>
          To fix this, we can set our Next.js layout.tsx file to be rendered
          client side by inserting the following at the top of the file:
        </p>
        <code>&quot;use client&quot;;</code>
        <p>
          This tells Next.js to render it as a client-side component. Now when
          we run out RUM initialization code, we&apos;re error free!
        </p>
      </article>
    </div>
  );
}
