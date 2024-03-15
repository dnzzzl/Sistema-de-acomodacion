"use client"
import React from 'react'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { Button } from '@/components/ui/button'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { DatePickerWithRange } from './date-picker-with-range'
import { addDays} from "date-fns"
import { DateRange, SelectRangeEventHandler } from "react-day-picker"
import {isDateInRange} from "../lib/utils"

  const FormSchema = z.object({
    stay_type: z.enum(["single", "double"]),
    date: z.object({
      from: z.date(),
      to: z.date(),
    }).refine(data => {
      if (isDateInRange({from:data.from,to:data.to})) {
        return true
      }
      return false
    }, {
      message: "Please select a valid date range.",
    }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    name: z.string().min(2, {
       message: "Name must be at least 2 characters.",
    }),
    name2: z.string().optional(), // Make name2 optional by default
   }).refine(data => {
    if (data.stay_type === "double") {
       // If stay_type is "double", name2 must be provided and meet the same validation criteria as name
       return z.object({
         name2: z.string().min(2, {
           message: "Name must be at least 2 characters.",
         }),
       }).safeParse(data).success;
    }
    // If stay_type is "single", name2 is not required
    return true;
   }, {
    // Custom error message for the refine method
    message: "Please provide both names for a double stay.",
    path: ["name2"], // Specify the path of the error
   });

const FormSection = () => {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
          stay_type: "single",
          date: {
            from: new Date(2024, 3, 10),
            to: addDays(new Date(2024, 3, 10), 3),
          },
          email: "",
          name: "",
          name2: "",
        }
      })
    
    const handleSubmit = form.handleSubmit(data => console.log(data)) // Add this line to handle form submission as needed
     
  return (
    <div>
       <Form {...form}>
        <form onSubmit={handleSubmit} className="space-y-8">
          <FormField
            control={form.control}
            name="stay_type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Stay Type</FormLabel>
                <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="single" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Single Bed Room
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="double" />
                    </FormControl>
                    <FormLabel className="font-normal">
                        Double Bed Room
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className='mx-auto w-full'>
                <FormLabel>Date</FormLabel>
                <DatePickerWithRange field = {field}/>
                <FormDescription>
                  Select a minimum of 3 days including at least one day between April 10th to April 13th 2024, feel free to extend your stay.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <Input type="email" {...field} />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <Input type="text" {...field} />
                <FormMessage />
              </FormItem>
            )}
          />
          {form.watch("stay_type") === "double" && (
              <FormField
              control={form.control}
              name="name2"
              render={({ field }) => (
                  <FormItem>
                    <FormLabel>Second Person's Name</FormLabel>
                    <Input type="text" {...field} />
                    <FormMessage />
                  </FormItem>
              )}
              />
          )}
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  )
}

export default FormSection