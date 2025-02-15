"use client"  
import React , {useState , useEffect } from 'react'  
import {client} from "@/sanity/lib/client"  
import { urlFor } from '@/sanity/lib/image' // Import urlFor  
import Image from 'next/image'

interface Collections {  
  title: string;  
  images: {  
    _type: 'image';  
    asset: {  
      _ref: string;  
      _type: 'reference';  
    };  
    alt?: string;  
  }[];  
}  

const Hero = () => {  
  const [collections, setCollections] = useState<Collections[]>([])  

  useEffect(() => {  
    const getCollectionsData = async()=>{  
      const data = await client.fetch(`*[_type == 'collection']{  
        title,  
        images  
      }`)  
      setCollections(data)  
    }  
    getCollectionsData()  
  }, [])  

  return (  
    <div>  
      {collections.map((item:Collections , index:number)=>{  
        return(  
          <div key={index}>  
            <div>{item.title}</div>  
            {item.images && item.images.map((image, imageIndex) => (  
            <Image key={imageIndex}  
            src={urlFor(image.asset._ref).url()}  
            alt={image.alt || `Image ${imageIndex + 1}`}  
            width={200}
            height={200}
            style={{ maxWidth: '200px', maxHeight: '200px', margin: '5px' }} ></Image>  
            ))}  
          </div>  
        )  
      })}  
    </div>  
  )  
}  

export default Hero
