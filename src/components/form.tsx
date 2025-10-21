import { Button } from "./button"

export const Form = () => {
    return (
        <div className="mb-[300px] absolute top-[-200px] left-0 right-0 mx-auto 
         text-center py-10 px-6 bg-Navy-850 rounded-[9px] w-[336px] md:w-[480px] xl:w-[720px]">

            <h2 className="font-bold mb-4 text-[1.25rem]">Get early access today</h2>

            <p className="text-sm mb-8">On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue.</p>

            <form className="flex flex-col gap-6 xl:flex-row" action="">
                <input className="bg-white rounded-3xl placeholder:text-gray-400 text-center h-12 xl:flex-1"
                 type="email" 
                 placeholder="email@example.com"
                />
                <Button styles="w-[200px]" text="Get Started For Free" />
            </form>
        </div>
    )
}
