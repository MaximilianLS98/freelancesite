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
      // console.log(values)
      const response = fetch('/api/resend', {method: 'POST', body: JSON.stringify(values), headers: { 'Content-Type': 'application/json' }})
        .then((response) => {
          console.log('response', response)
          if (!response.ok) {
            console.log('Failed to submit the form. response.ok is false');
            toast.error('Failed to submit the form. Please try again.')
            throw new Error('Failed to submit the form. Please try again.')
          } else {
            console.log('Message sent succesfully, does the toast work?');
            toast.success('Meldingen din er sendt, takk for at du tok kontakt!')
            form.reset()
          }
          return response
        })
      .then((data) => {
        console.log('data', data)
      })

    //   if (!response.ok) {
    //     console.log('Failed to submit the form. response.ok is false');
    //     throw new Error('Failed to submit the form. Please try again.')
    //   } else {
    //    toast.success(
    //     <div className="flex flex-row flex-wrap">
    //       <h1 className="text-lg w-full">Message sent succesfully</h1>
    //       {/* <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4"> */}
    //       <pre className="my-2 rounded-md bg-slate-950 p-4">
    //         <code className="text-white">{JSON.stringify(values, null, 2)}</code>
    //       </pre>
    //     </div>,
    //   );
    // }
    } catch (error) {
      console.error('Form submission error', error)
      toast.error('Noe gikk galt, prøv igjen, eller send mail direkte til maximilian@kaktusfamilien.no')
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Form {...form}>
        {/* <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-3xl mx-auto py-10"> */}
        <form onSubmit={form.handleSubmit(onSubmit)} className=''>
          <div className="border-2 border-black divide-y-2 divide-black rounded-xl overflow-hidden">
            <FormField
              control={form.control}
              name="email"
              defaultValue=""
              render={({ field }) => (
                <FormItem className="space-y-0">
                  <FormLabel className="sr-only">Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="ola@live.no"
                      type=""
                      {...field}
                      className="block bg-[#f5f5f5] w-full px-3 py-4 text-xl text-foreground border-transparent appearance-none placeholder-black focus:border-black focus:border-2 focus:bg-lila-100 focus:outline-none focus:ring-black sm:text-sm"
                    />
                  </FormControl>
                  {/* <FormDescription>Contact email</FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              defaultValue=""
              render={({ field }) => (
                <FormItem className="flex flex-col items-start space-y-0">
                  <FormLabel className="sr-only">Phone number</FormLabel>
                  <FormControl className="w-full">
                    <PhoneInput
                      placeholder="Telefonnummer"
                      {...field}
                      defaultCountry="NO"
                      className="focus:border-2 focus:border-black"
                    />
                  </FormControl>
                  {/* <FormDescription>Enter your phone number.</FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="typeOfRequest"
              defaultValue="general"
              render={({ field }) => (
                <FormItem className="space-y-0">
                  <FormLabel className="sr-only">Type henvendelse</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      {/* <SelectTrigger className="block w-full text-xl text-foreground border-2 border-transparent appearance-none border-black focus:border-black focus:bg-lila-100 focus:outline-none focus:ring-black sm:text-sm"> */}
                      <SelectTrigger className="text-xl border-transparent appearance-none text-muted-foreground focus:border-black focus:bg-lila-100 focus:outline-none focus:ring-black sm:text-sm">
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
                  {/* <FormDescription>
                  Er henvendelsen om ett freelance prosjekt, konsulentoppdrag, eller annet?
                </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              defaultValue=""
              render={({ field }) => (
                <FormItem className="space-y-0">
                  <FormLabel className="sr-only">Beskjed</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Beskjed"
                      className="block bg-[#f5f5f5] w-full px-3 py-4 text-xl text-foreground border-transparent appearance-none placeholder-black focus:border-black focus:border-2 focus:bg-lila-100 focus:outline-none focus:ring-black sm:text-sm"
                      {...field}
                    />
                  </FormControl>
                  {/* <FormDescription>
                  Skriv din beskjed, gjerne legg ved kontaktinfo så jeg kan ringe opp for eksempel
                </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            //   className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 mt-6"
            className="text-black min-w-full rounded-lg items-center shadow-custom shadow-lila-600 text-lg font-semibold inline-flex px-6 focus:outline-none justify-center text-center bg-lila-300 focus:bg-lila-600 border-lila-600 duration-300 outline-none focus:shadow-none border-2 sm:w-auto py-3 h-16 tracking-wide focus:translate-y-1 hover:bg-lila-500 mt-6"
          >
            Send beskjed
          </motion.button>
          {/* <Button type="submit">Submit</Button> */}
        </form>
      </Form>
    </motion.div>
  )
}
