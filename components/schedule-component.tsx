import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'
import { ChevronUpIcon } from 'lucide-react'

const EventSchedule = () => {
  return (
    <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Event Schedule</h2>
        <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="day1" className="mb-4">
                <AccordionTrigger className="text-lg font-semibold">Day 1 (Open Event) - Wednesday, April 10th</AccordionTrigger>
                <AccordionContent className="bg-white p-4 rounded-md mt-2">
                    <ul className="list-disc pl-4">
                    <li>19:30 Welcome Cocktail (Restaurant on the premises of Bávaro Hotel)</li>
                    </ul>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="day2" className="mb-4">
                <AccordionTrigger className="text-lg font-semibold">Day 2 (Open Event) - Thursday, April 11th</AccordionTrigger>
                <AccordionContent className="bg-white p-4 rounded-md mt-2">
                    <ul className="list-disc pl-4">
                    <li>8:40 – 9:00 Participant Registration</li>
                    <li>9:00 – 9:30 Welcome Remarks</li>
                    <li>9:30 - 11:00 SESSION I: CONTEXT. Fiscal Challenges for Latin America and the Caribbean in the Face of Global Climate Emergency and the Role of Budget Areas.</li>
                    <li>11:00 - 11:30 Coffee Break and Group Photo</li>
                    <li>11:30 - 12:50 SESSION II: Transparency of Climate Public Policy - Progress in Identifying Climate Public Expenditure in Latin America and the Caribbean.</li>
                    <li>13:00 - 14:15 Lunch</li>
                    <li>14:30 - 15:50 SESSION III: Monitoring and Evaluation of Climate-Related Expenditure and its Potential to Contribute to Mitigating Climate Change</li>
                    <li>15:50 - 16:20 Coffee Break</li>
                    <li>16:20 - 18:00 SESSION IV: Use of Advanced Information Technology in Budgeting</li>
                    <li>18:00 CLOSING OF THE OPEN EVENT</li>
                    </ul>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="day3" className="mb-4">
                <AccordionTrigger className="text-lg font-semibold">Day 3 (Closed Session) - Friday, April 12th</AccordionTrigger>
                <AccordionContent className="bg-white p-4 rounded-md mt-2">
                    <ul className="list-disc pl-4">
                    <li>8:30 - 10:20 Technical Dialogue: Governance in Climate Action. Methodology for evaluation to enhance governance through the integration of Ministries of Finance in inter-ministerial climate action.</li>
                    <li>10:20 – 10:30 Coffee Break</li>
                    <li>10:30 - 11:30 Challenges and Work Plan for the Results-Based Budgeting Network for Latin America and the Caribbean for the period 2024-2025</li>
                    <li>11:30 – 13:00 Next Steps, Election of the presidency of the Results-Based Budgeting Network for Latin America and the Caribbean for 2024-25, and Announcement of the date and venue for the next meeting.</li>
                    <li>13:00 Closing of the Event</li>
                    </ul>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    </div>
  )
}

export default EventSchedule