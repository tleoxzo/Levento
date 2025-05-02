// import * as React from "react"
// import Autoplay from "embla-carousel-autoplay"
// import Image from 'next/image'
// import { Card, CardContent } from "@/components/ui/card"
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel"
// import { ProductCard } from "./productCard"
// import { Badge } from "@/components/ui/badge"
// import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
// import { ItemScrollAreaHorizontal } from "./itemScrollAreaHorizontal"




// export function ItemCarousel() {
//   const plugin = React.useRef(
//     Autoplay({ delay: 6000, stopOnInteraction: false })
//   )

//   return (
//     <div>
//       {/* <Carousel
//         plugins={[plugin.current]}
//         className="max-w-[300px] mx-auto"
//         onMouseEnter={plugin.current.stop}
//         onMouseLeave={plugin.current.reset}
//       >
//         <CarouselContent>
//           {Array.from({ length: 5 }).map((_, index) => (
//             <CarouselItem key={index}>
//               <div>
//                 <Card>
//                   <CardContent className="flex aspect-square items-center justify-center">
//                     <span className="text-4xl font-semibold">สินค้า {index + 1}</span>
//                   </CardContent>
//                 </Card>
//               </div>
//             </CarouselItem>
//           ))}
//         </CarouselContent>
//       </Carousel> */}
//       <ItemScrollAreaHorizontal/>
//     </div>
//   )
// }
