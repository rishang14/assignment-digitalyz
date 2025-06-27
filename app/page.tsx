import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center relative   justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="absolute bg-slate-900 inset-0 -z-10   bg-[size:4rem_4rem] bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)]"></div>
      <div className=" md:mx-auto p-2">
        <h1 className="text-white text-2xl">
          Let us help you manage ur messy spreadsheet{" "}
        </h1>
      </div>
      <div className=" md:mx-auto container max-w-4xl  p-2   border-1 rounder-full">
        <h1 className="text-xl text-center  text-white">
          Upload your Files here
        </h1>
        <div className="flex  p-2  items-center justify-center">
          <form action=""  className="flex flex-col items-center p-2">
            <div className="space-y-2 p-2">
              <Label htmlFor="picture" className="text-white">
                Client File here
              </Label>
              <Input
                id="picture"
                type="file"
                className="placeholder:text-white text-white"  
                accept=".csv"
                required
              />
            </div>
            <div  className="space-y-2 p-2">
              <Label htmlFor="picture" className="text-white">
                Worker file here
              </Label>
              <Input
                id="picture"
                type="file"
                className=" placeholder:text-white text-white"  
                accept=".csv"
                required
              />
            </div>
            <div  className="space-y-2 p-2">
              <Label htmlFor="picture" className="text-white" >
                Task file here{" "}
              </Label>
              <Input
                id="picture"
                type="file" 
                required
                className="placeholder:text-white text-white" 
                accept=".csv"
              />
            </div>
            <Button type="submit" variant={'outline'} className="cursor-pointer"> Uplaod ur file </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
