// "use client"

// import { TrendingUp } from "lucide-react"
// import { Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart } from "recharts"

// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"
// import {
//   ChartConfig,
//   ChartContainer,
//   ChartTooltip,
//   ChartTooltipContent,
// } from "@/components/ui/chart"

// const data = [
//   {
//     subject: 'โชคลาภ',
//     A: 5,
//     fullMark: 5,
//   },
//   {
//     subject: 'การงาน',
//     A: 4,
//     fullMark: 5,
//   },
//   {
//     subject: 'การเงิน',
//     A: 5,
//     fullMark: 5,
//   },
//   {
//     subject: 'สุขภาพ',
//     A: 1,
//     fullMark: 5,
//   },
//   {
//     subject: 'ความรัก',
//     A: 4,
//     fullMark: 5,
//   },
// ];

// const chartConfig = {
//   desktop: {
//     label: "Desktop",
//     color: "hsl(var(--chart-1))",
//   },
// } satisfies ChartConfig

// export function RadarChartCard() {
//   return (
//     <Card>
//       {/* <CardHeader className="items-center pb-4">
//         <CardTitle>Radar Chart - Grid Filled</CardTitle>
//         <CardDescription>
//           Showing total visitors for the last 6 months
//         </CardDescription>
//       </CardHeader> */}
//       <CardContent className="pb-0">
//         <ChartContainer
//           config={chartConfig}
//           className="mx-auto mt-5" 
//         >
//           <RadarChart  cx="50%" cy="50%" outerRadius="80%" data={data}>
//             <ChartTooltip
//               cursor={false}
//               content={<ChartTooltipContent hideLabel />}
//             />
//             <PolarGrid />
//             <PolarAngleAxis dataKey="subject"  />
//             <PolarRadiusAxis angle={30} domain={[0, 5]}/>
//             <Radar name="คะแนน" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
//           </RadarChart>
//         </ChartContainer>
//       </CardContent>
//     </Card>
//   )
// }
