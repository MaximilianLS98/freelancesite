'use client'
import { useState } from 'react'
import { toast } from 'sonner'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
// import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { PhoneInput } from '@/components/ui/phone-input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { motion } from 'framer-motion'

const formSchema = z.object({
    email: z.string().min(4, { message: "E-post adressen må ha minst 4 tegn" }).email({ message: "Feil E-post-adresse format" }),
    phone: z.string().min(8).optional(),
    typeOfRequest: z.string(),
    message: z.string(),
})

export default function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(values)
      toast.success(
        <div className="flex flex-row flex-wrap">
          <h1 className="text-lg w-full">Message sent succesfully</h1>
          {/* <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4"> */}
          <pre className="my-2 rounded-md bg-slate-950 p-4">
            <code className="text-white">{JSON.stringify(values, null, 2)}</code>
          </pre>
        </div>,
      );
      form.reset()
    } catch (error) {
      console.error('Form submission error', error)
      toast.error('Failed to submit the form. Please try again.')
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-3xl mx-auto py-10">
          <FormField
            control={form.control}
            name="email"
            defaultValue=""
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="ola@live.no" type="" {...field} />
                </FormControl>
                <FormDescription>Contact email</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            defaultValue=""
            render={({ field }) => (
              <FormItem className="flex flex-col items-start">
                <FormLabel>Phone number</FormLabel>
                <FormControl className="w-full">
                  <PhoneInput placeholder="Telefonnummer" {...field} defaultCountry="NO" />
                </FormControl>
                <FormDescription>Enter your phone number.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="typeOfRequest"
            defaultValue="general"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Type henvendelse</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Generell henvendelse" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="general">Generell henvendelse</SelectItem>
                    <SelectItem value="jobb">Jobb</SelectItem>
                    <SelectItem value="prosjekt">Prosjekt</SelectItem>
                    <SelectItem value="konsulent">Konsulent</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>
                  Er henvendelsen om ett freelance prosjekt, konsulentoppdrag, eller annet?
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            defaultValue=""
            render={({ field }) => (
              <FormItem>
                <FormLabel>Beskjed</FormLabel>
                <FormControl>
                  <Textarea placeholder="" className="resize-none" {...field} />
                </FormControl>
                <FormDescription>
                  Skriv din beskjed, gjerne legg ved kontaktinfo så jeg kan ringe opp for eksempel
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Send beskjed
          </motion.button>
          {/* <Button type="submit">Submit</Button> */}
        </form>
      </Form>
    </motion.div>
  )
}
