"use client"
import React, { useState, useEffect } from 'react'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {Toaster} from "@/components/ui/sonner"
import { toast } from "sonner"
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
import {isDateInRange} from "../lib/utils"
import { createReservation } from '@/lib/actions'

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

   type FormTexts = {
    stay_type_label: string
    room_type_single: string
    room_type_double: string
    calendar_heading: string
    calendar_description: string
    name_label: string
    name2_label: string
    submit_label:string
   }
const FormSection = ({stay_type_label, room_type_single, room_type_double, calendar_heading, calendar_description, name_label, name2_label, submit_label}:FormTexts) => {
   const [submitted, setSubmitted] = useState({sent:false, error:false, message:""});

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
      
      useEffect(() => {
        if (submitted.sent) {
        submitted.error ? toast.error(submitted.message) : toast(submitted.message)
        setTimeout(() => {
          setSubmitted({sent:false, error:false, message:""});
        }, 3000);
        form.reset()
      }
      }, [submitted])
      
    const handleSubmit = form.handleSubmit(async data =>{

      const formData = new FormData();

      // Append the existing form fields
      for (const [key, value] of Object.entries(data)) {
        if (key === "date"){
          formData.append(key, JSON.stringify(value))}
        else{
          formData.append(key, value.toString());
        }
      }

      setSubmitted(await createReservation(formData));
    })
     
  return (
    <div>
       <Form {...form}>
        <form onSubmit={handleSubmit} className="space-y-8">
          <FormField
            control={form.control}
            name="stay_type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{stay_type_label}</FormLabel>
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
                      {room_type_single}
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="double" />
                    </FormControl>
                    <FormLabel className="font-normal">
                        {room_type_double}
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
                <FormLabel>{calendar_heading}</FormLabel>
                <DatePickerWithRange field = {field}/>
                <FormDescription>
                  {calendar_description}
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
                <FormLabel>{name_label}</FormLabel>
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
                    <FormLabel>{name2_label}</FormLabel>
                    <Input type="text" {...field} />
                    <FormMessage />
                  </FormItem>
              )}
              />
          )}
          <Button type="submit">{submit_label}</Button>
        </form>
      </Form>
      <Toaster/>
    </div>
  )
}

export default FormSection