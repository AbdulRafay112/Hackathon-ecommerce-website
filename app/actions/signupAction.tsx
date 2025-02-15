"use server"
import z from "zod"
const handleSubmitForm = async (prevState:any , formData:FormData)=>{
    try{
        const fields = {
            name:formData.get("name"),
            email:formData.get("email"),
            password:formData.get("password")
        }
        const validationSchema = z.object({
            name:z.string().min(3 , {message:"name length must be greater than 3 characters"}).max(255),
            email:z.string().email(),
            password:z.string().nonempty({message:"Invalid Password"})
        })
        const isValidate = validationSchema.safeParse(fields)
        if(!isValidate.success){
            const errors = isValidate.error?.flatten().fieldErrors
            return{
                message:"sign up failed",
                zodErrors:errors
            }
        }
        const response = await fetch("http://localhost:3000/api/signup" , {
            method:"POST",
            headers:{
                "Content-Type":"applicaton/json"
            },
            body:JSON.stringify(fields)
        })
        const data = await response.json()
        if(!response.ok)
            return {message:data.message}
        return{message:data.message}
    }
    catch(error){
        console.log(error.message)
        return {message:error.message}

    }
}

export default handleSubmitForm;