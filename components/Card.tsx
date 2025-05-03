import Image from "next/image"
import Name from "./Name";
import Price from "./Price";

interface CardProps {
  cardData: {
    id: string;
    url: string;
    width: number;
    height: number;
    cover: string;
  };
}

const card = async ({cardData}:{cardData: any}) => {
  return (
    <>
      <div className="card">
        <Image src={cardData.cover} alt="Elon Musk" width={150} height={220} />
        <Name name={cardData.name} author={cardData.author}/>
        <Price price={cardData.price}/>
      </div> 
    </>
  )
}

export default card