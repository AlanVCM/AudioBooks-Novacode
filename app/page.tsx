import Book from "@/components/Book";
import Image from "next/image";

export default async function Home() {
  const data = await fetch('https://680b808bd5075a76d98b5c81.mockapi.io/audiobooks');
  const posts = await data.json();
  return (
    <>
      {
        posts.map((post:any) => {
          <Book key={post.id} cardData={post}/>
          // <Book/>
        })
      }
    </>
  );
}
