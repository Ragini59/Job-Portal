import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import { Button } from "../ui/button"

const Jobcard = ({data}:any) => {
console.log(data)
  
  return (
   <Card className="w-full sm:w-[350px] p-0 overflow-hidden">
    <CardHeader className="p-0 w-full h-[250px] overflow-hidden relative">
    <Button className="bg-[#d83f86a7] hover:bg-[#D83F87] hover:text-white absolute top-2 left-2 ">{data.jobtime}</Button>
      <Image src={data && data.imagelink} alt="job image" width={350} height={250} className="w-full h-full"/>
        
    </CardHeader>
    <CardContent className="py-2">
    <CardTitle className="text-xl mb-2">{data && data.jobtitle}</CardTitle>
    <CardDescription className="text-lg">{data && data.jobdes.slice(0,50)}...</CardDescription>
    </CardContent>
    <CardFooter className="flex justify-center my-2 w-full">
      <Button className="bg-[#d83f8617] border-2 text-[#d83f86a7] border-[#d83f86a7] hover:bg-[#D83F87] hover:text-white w-full rounded-2xl">Apply</Button>
      
    </CardFooter>
   </Card>
  )
}

export default Jobcard