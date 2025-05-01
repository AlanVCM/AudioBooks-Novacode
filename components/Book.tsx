import React from 'react'
import Name from './Name'
import Price from './Price'
import Image from 'next/image'
import { Url } from 'next/dist/shared/lib/router/router'
import {HeaderProps} from "./Name"

interface ImageProps{
  cardData: {
    image: string;
    title: string;
    author: string;
    price: string;
  };
}
const Book = async ({cardData}:{cardData:any}) => {
  return (
    <div className="container">
      <div className="header">
        <Image src="/Mask group.svg" alt=""  width={153} height={176} className="cover" />
      </div>
      <Name name={cardData.title} author={cardData.author}/>
      <Price price={cardData.price}/>
    </div>
  )
}

export default Book