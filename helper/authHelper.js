import bcrypt from 'bcrypt'
export const hashPassword = async (password)=>{
    try{
    
        const hashedPassword = await bcrypt.hash(password , 10)
        return hashedPassword
    }
    catch(error){
        console.error(error);
    }
}

export const comparePassword = async (password , hashedPassword)=>{
const campare = await bcrypt.compare(password,hashedPassword)
return campare
}