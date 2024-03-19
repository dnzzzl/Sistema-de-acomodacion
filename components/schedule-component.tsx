import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'
import { ChevronUpIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'

const EventSchedule = () => {
    const t = useTranslations('ScheduleSection');

  return (
    <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">{t('title')}</h2>
        <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="day1" className="mb-4">
                <AccordionTrigger className="text-lg font-semibold">{t('day1')}</AccordionTrigger>
                <AccordionContent className="bg-white p-4 rounded-md mt-2">
                    <ul className="list-disc pl-4">
                    <li>{t('day1_item1')}</li>
                    </ul>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="day2" className="mb-4">
                <AccordionTrigger className="text-lg font-semibold">{t('day2')}</AccordionTrigger>
                <AccordionContent className="bg-white p-4 rounded-md mt-2">
                    <ul className="list-disc pl-4">
                    <li>{t('day2_item1')}</li>
                    <li>{t('day2_item2')}</li>
                    <li>{t('day2_item3')}</li>
                    <li>{t('day2_item4')}</li>
                    <li>{t('day2_item5')}</li>
                    <li>{t('day2_item6')}</li>
                    <li>{t('day2_item7')}</li>
                    <li>{t('day2_item8')}</li>
                    <li>{t('day2_item9')}</li>
                    <li>{t('day2_item10')}</li>
                    </ul>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="day3" className="mb-4">
                <AccordionTrigger className="text-lg font-semibold">{t('day3')}</AccordionTrigger>
                <AccordionContent className="bg-white p-4 rounded-md mt-2">
                    <ul className="list-disc pl-4">
                    <li>{t('day3_item1')}</li>
                    <li>{t('day3_item2')}</li>
                    <li>{t('day3_item3')}</li>
                    <li>{t('day3_item4')}</li>
                    <li>{t('day3_item5')}</li>
                    </ul>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    </div>
  )
}

export default EventSchedule