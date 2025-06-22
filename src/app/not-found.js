import Link from "next/link";

//i set this up using this link: https://nextjs.org/docs/app/api-reference/file-conventions/not-found but the dynamic routing still works if you just type in a page name (thinking?) something like "/post" instead of /posts does display this page though. I can't get the "if" statement shown on the notes for next week to work with the dynamic pages either, but I will leave this here for now
export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>You&apos;ve wandered too far... </p>
      <Link href="/">Turn back now</Link>
    </div>
  );
}
