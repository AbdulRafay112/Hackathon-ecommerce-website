import {client} from "@/sanity/lib/client"
import { Product } from "../types/Product"
import { Customerinfo } from "../types/Customerinfo"
const createCustomer = async (customerInfo:Customerinfo)=>{
    try{
    const customerObject = {
        _type:'customer',
        firstName:customerInfo.firstName,
        lastName:customerInfo.lastName,
        CompanyName:customerInfo.CompanyName,
        country:customerInfo.country ,
        streetAddress:customerInfo.streetAddress,
        city:customerInfo.city,
        province:customerInfo.province,
        zipCode:customerInfo.zipCode ,
        phone:customerInfo.phone,
        EmailAddress:customerInfo.EmailAddress,
        AdditionalInformation:customerInfo.AdditionalInformation
    }
    const response = await client.create(customerObject)
    console.log("user Created in sanity" , response);
    return response;
   }
   catch(error){
    console.log("error created in creating customer in saity " , error)
    throw error;
   }
}

// create order in sanity ;
const createOrder = async(cartData:Product[] , customer_id:string)=>{
    try{
        const orderObject = {
            _type:'order',
            customer:{
                _type:"reference",
                _ref:customer_id
            },
            items:cartData.map((item:Product)=>(
                {
                    _type:"items",
                    _id:item.id,
                    product_name:item.name,
                    product_price:item.price,
                    product_description:item.description,
                    quantity:item.quantity
                }
            )),
            order_date:new Date().toISOString()
        }
        const response = await client.create(orderObject)
        console.log("order successfully created in sanity" , response);
        return response;
    }
    catch(error){
        console.log("error occured while creating an order in sanity" , error)
        throw error;
    }
}

// main function
export default async function checkOut(customerInfo:Customerinfo , cartData:Product[]){
    try{
        const customer = await createCustomer(customerInfo)
        await createOrder(cartData , customer._id)
        console.log('checkout completed hurray')
    }
    catch(error){
        console.log("error occured in creating order and creating customer in sanity" , error);
        throw error
    }

}