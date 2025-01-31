"use client"
import  React , {ChangeEvent} from 'react'
import Navbar from '../components/Maincomponents/Navbar'
import { useState , useContext } from 'react'
import { CountContext } from '../context'
import Image from 'next/image'
import checkOut from '../actions/checkOut'
import { Product } from '../types/Product'
const Checkout = () => {
    const [showOrderConfirmation, setShowOrderConfirmation] = useState(false)
    const obj = useContext(CountContext)
    const [form, setForm] = useState({
        firstName:"",
        lastName:"",
        CompanyName:"",
        country:"",
        streetAddress:"",
        city:"",
        province:"",
        zipCode:"",
        phone:"",
        EmailAddress:"",
        AdditionalInformation:""
    })
    // handleChange function
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>)=>{
        const {name , value} = e.target;
        setForm({...form , [name]:value})
    }
    // handleCheckout function
    const handleCheckout = ()=>{
        checkOut(form , obj.cart)
        if(form && obj.cart)  setShowOrderConfirmation(!showOrderConfirmation)
        obj.setCart([])
    }
  return (
    <>
    <Navbar/>
      <div className='h-[316px] shop-bg flex flex-col items-center justify-center'>
        <div><Image src={'/logo.png'} alt='image' width={100} height={100}></Image></div>
        <div className='text-[48px] font-medium'>CheckOut</div>
        <div className='flex items-center gap-3'>
            <span>Home</span>
            <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
    <path d="M7 4L15.3306 10.0405C17.5565 11.6545 17.5565 12.3455 15.3306 13.9595L7 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg></span>
            <span>CheckOut</span>
        </div>
      
    </div>
    <div className='max-w-[1242px] mx-auto min-h-[1714px] mt-[63px] flex flex-wrap md:flex-row flex-col items-center justify-center'>
        <div className="left md:w-[608px] w-[250px] flex flex-col gap-8 px-6">
            <div className='text-[36px] font-semibold'>Billing details</div>
            <div className='flex items-center h-[121px] gap-4'>
                <div className='flex flex-col gap-3'><label htmlFor="firstName">First Name</label>
                <input type="text" onChange={handleChange} name='firstName' value={form.firstName} required className='md:w-[211px] w-[120px] border h-[75px] rounded-[10px]' />
                </div>
                <div className='flex flex-col gap-3'><label htmlFor="LastName">Last Name</label>
                <input type="text" name='lastName' onChange={handleChange} value={form.lastName} required className='md:w-[211px] w-[120px] border h-[75px] rounded-[10px]' />
                </div>
            </div>
            <div className='flex flex-col gap-4'><label htmlFor="companyName">Company Name(optional)</label>
            <input type="text" name='CompanyName' onChange={handleChange} value={form.CompanyName} className='h-[75px] md:w-[453px] w-[250px] rounded-[10px] border' />
            </div>
            <div className='flex flex-col gap-4'>
                <label htmlFor="country">Country/Region</label>
                <select name="country" onChange={handleChange} required id="country" value={form.country} className='md:w-[453px] w-[250px] h-[75px] border rounded-[10px]'>
                    <option value="pakistan">Pakistan</option>
                    <option value="India">India</option>
                    <option value="Srilanka">Srilanka</option>
                    <option value="Bangladash">Bangladash</option>
                </select>
            </div>
            <div className='flex flex-col gap-4'>
                <label htmlFor="streetAddress">Street Address</label>
                <input type="text" name='streetAddress' onChange={handleChange} required value={form.streetAddress} className='md:w-[453px] w-[250px] h-[75px] border rounded-[10px]' />
            </div>
            <div className='flex flex-col gap-4'>
                <label htmlFor="town">Town/City</label>
                <input type="text" name='city' value={form.city} onChange={handleChange} required className='md:w-[453px] w-[250px] h-[75px] border rounded-[10px]' />
            </div>
            <div className='flex flex-col gap-4'>
                <label htmlFor="provice">Province</label>
                <select name="province" id="province" onChange={handleChange} required value={form.province} className='md:w-[453px] w-[250px] h-[75px] border rounded-[10px]'>
                    <option value="Northern Province">Northern Province</option>
                    <option value="Eastern Province">Eastern Province</option>
                    <option value="Western Province">Western Province</option>
                    <option value="Central Province">Central Province</option>
                </select>
            </div>
            <div className='flex flex-col gap-4'>
                <label htmlFor="zip">Zip Code</label>
                <input type="text" name='streetAddress' onChange={handleChange} required value={form.streetAddress} className='md:w-[453px] w-[250px] h-[75px] border rounded-[10px]' />
            </div>
            <div className='flex flex-col gap-4'>
                <label htmlFor="Phone">Phone</label>
                <input type="number" value={form.phone} name='phone' onChange={handleChange} required className='md:w-[453px] w-[250px] h-[75px] border rounded-[10px]' />
            </div>
            <div className='flex flex-col gap-4'>
                <label htmlFor="email">Email Address</label>
                <input type="email" name='EmailAddress' onChange={handleChange} required value={form.EmailAddress} className='md:w-[453px] w-[250px] h-[75px] border rounded-[10px]' />
            </div>
            <div className='flex flex-col gap-4'>
                <label htmlFor="additionalinformation">Additional Information</label>
                <input type="text" name='AdditionalInformation' onChange={handleChange} required value={form.AdditionalInformation} className='md:w-[453px] w-[250px] h-[75px] border rounded-[10px]' />
            </div>
        </div>
        <div className="right h-[789px] md:w-[608px] w-[300px] flex justify-center items-center">
            <div className='md:w-[533px] w-[300px] h-[616px] flex flex-col gap-4'>
            <table className="w-full">
              <thead>
              <tr>
                <th>Product</th>
                <th>Subtotal</th>
              </tr>
              </thead>
              <tbody className="h-[106px]">
              {obj.cart.map((item:Product , index:number)=>{
            return(<>
               <tr key={index}>
                <td>{item.name} x {item.quantity}</td>
                <td>{item.subTotal}</td>
              </tr>
              </>)
          })}
          </tbody>
            </table>
            <table>
                <thead>
                    <tr>
                        <th>subtotal</th>
                        <th>Rs{obj.grandTotal}</th>
                    </tr>
                    <tr>
                        <th>total</th>
                        <th>Rs{obj.grandTotal}</th>
                    </tr>
                </thead>
            </table>
            <hr className='border'/>
            <div><li className='list-disc'>Direct Bank Transfer</li></div>
            <div className='max-w-[528px]'>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</div>
            <div><input type="checkbox" name="bankTransfer" id="bankTransfer"/> <label htmlFor="bankTransfer">Direct Bank Transfer</label> </div>
            <div><input type="checkbox" name='COD' id='COD' /> <label htmlFor="COD">Cash on Delivery</label></div>
            <div className='text-center'><button className='md:w-[318px] w-[200px] h-[64px] border rounded-[15px]' onClick={handleCheckout}>Place Order</button></div>
            {showOrderConfirmation && <><div className='text-red-700 text-lg'>Order Created Successfully thank you for placing an order.</div></>}

            </div>
        </div>

    </div>
    </>
  )
}

export default Checkout
