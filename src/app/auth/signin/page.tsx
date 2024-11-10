"use client"
import { signIn } from "next-auth/react"
import { GrGithub } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";

function Page() {
    return (
        <div className="h-screen w-full text-black bg-[#E8E9EB] flex items-center justify-center">
            <div className="border border-[#cccbc3] h-[30vh] rounded-lg px-10 w-[25vw] flex flex-col items-center justify-center gap-4">
                <button
                    className="border border-[#cccbc3] w-full shadow-md rounded-lg px-6 py-2.5 text-[#313638] flex items-center justify-center gap-2 font-semibold text-base"
                    onClick={() => signIn("google")}
                >
                    <FcGoogle size={24} /> Sign in with Google
                </button>
                <p className="text-sm text-zinc-700">Or</p>
                <button
                    className="border border-[#cccbc3] w-full shadow-md rounded-lg px-6 py-2.5 text-white bg-[#313638] flex items-center justify-center gap-2 font-semibold text-base"
                    onClick={() => signIn("github")}
                >
                    <GrGithub size={24} /> Sign in with Github
                </button>
            </div>
        </div>
    )
}

export default Page
