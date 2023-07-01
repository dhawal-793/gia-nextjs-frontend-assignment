
'use client'

import Image from "next/image";


// Get session data from local storage
const SESSION = true;


const Account = () => {
    const signUp = () => {
        // Implement sign up logic
        console.log("SignUp")
    }
    const signIn = () => {
        // Implement sign in logic
        console.log("SignIn")
    }



    return (
        <>
            {/* display data according to session */}
            {SESSION === true ?
                <div className="relative w-8 h-8 rounded-full">
                    <Image src="/logowithname.png" fill alt="accout profile" className="rounded-full cursor-pointer" />
                </div> :
                <div className="flex items-center gap-4 lg:gap-5">
                    <Button handleClick={signUp}>Sign Up</Button>
                    <Button handleClick={signIn}>Sign in</Button>
                </div>
            }
        </>
    )
}

export default Account


const Button = ({ handleClick, children }) => {
    return (
        <button onClick={handleClick} className="grid px-3 py-2 text-xs font-semibold uppercase border-2 rounded-[0.2rem] border-[#9B9B9B]/40 place-items-center">
            {children}
        </button>
    )
}