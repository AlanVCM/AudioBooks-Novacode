import Image from 'next/image';
import Header from '../components/Header'
import Nav from '../components/Nav'
import Card from '@/components/Card';
import Footer from '@/components/Footer';


export default async function Home() {
  const data = await fetch('https://680b808bd5075a76d98b5c81.mockapi.io/audiobooks');
  const posts = await data.json();
  return (
   
    <>
      <Header/>
      <Nav/>
      
       <div className="card-grid">
        { 
          posts.map((post: any) => (
            <Card key={post.id} cardData={post}/>
          )) 
        }
      </div>     
      <div className="fin">
        <br />
        <br />
      </div>
      <Footer/>
    </>
  );
}
