import axios from 'axios';  
import client from '@/sanityClient';  
import { NextResponse } from 'next/server';  

/**  
 * Fetch data from the API and insert it into Sanity  
 */  
export const POST = async () => {  
  try {  
    // Fetch data from the API  
    const { data } = await axios.get('https://template-0-beta.vercel.app/api/product');  

    // Insert each product into Sanity  
    for (const product of data) {  
      await client.create({  
        _type: 'product',  
        id: product.id,  
        name: product.name,  
        imagePath: product.imagePath,  
        price: parseFloat(product.price),  
        description: product.description,  
        discountPercentage: product.discountPercentage,  
        isFeaturedProduct: product.isFeaturedProduct,  
        stockLevel: product.stockLevel,  
        category: product.category,  
      });  
    }  

    // Return a successful response  
    return NextResponse.json({ message: 'Data inserted successfully!' }, { status: 200 });  
  } catch (error) {  
    console.error(error);  
    // Return an error response  
    return NextResponse.json({ error: 'Failed to fetch or insert data' }, { status: 500 });  
  }  
};