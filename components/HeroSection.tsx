import { Button } from "@/components/ui/button";

import SignupButton from "@/components/auth/signup-button";

export default function HeroSection() {
  return (
    <>
    {/* Hero */}
    <div className="relative overflow-hidden py-24 lg:py-32">
        <div className="container">
          <div className="max-w-2xl text-center mx-auto">
          <a href="#" className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
            <span className="text-sm ps-4 font-medium">Flowbite is out! See what's new</span> 
            <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
        </a>
            <h1 className="scroll-m-20 text-5xl font-bold tracking-tight lg:text-6xl lg:leading-tight">
              Nano-Frontiers: Reshaping Tech
            </h1>
            <p className="mt-3 text-xl text-muted-foreground">
              Nano-computing breaks barriers, unlocking new tech horizons.
            </p>
          </div>
          <div className="mt-8 gap-3 flex justify-center">
              <SignupButton>
                <Button size="lg">
                  Get started
                </Button>
              </SignupButton>
                <Button size="lg" variant={"outline"}>
                  Learn more
                </Button>
              </div>
          <div className="mt-10 relative max-w-5xl mx-auto">
            <img
              src="https://framerusercontent.com/images/eaxqrMLnS8sbsQnjYlW95aTzRE.png"
              className="rounded-xl"
              alt="Image Description"
            />
            <div className="absolute bottom-12 -start-20 -z-[1] w-48 h-48 bg-gradient-to-b from-primary-foreground via-primary-foreground to-background p-px rounded-lg">
              <div className="w-48 h-48 rounded-lg bg-background/10" />
            </div>
            <div className="absolute -top-12 -end-20 -z-[1] w-48 h-48 bg-gradient-to-t from-primary-foreground via-primary-foreground to-background p-px rounded-full">
              <div className="w-48 h-48 rounded-full bg-background/10" />
            </div>
          </div>
        </div>
      </div>
      {/* End Hero */}
    </>
    );
}
