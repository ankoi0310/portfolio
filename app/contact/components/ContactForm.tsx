import { Input } from '@/components/ui/input'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import React from 'react'


const ContactForm = () => {
    return (
        <div className='xl:w-[54%] order-2 xl:order-none'>
            <form className='flex flex-col gap-6 p-10 bg-gray-900 rounded-xl'>
                <h3 className='text-3xl xl:text-4xl text-accent'>Let's work together</h3>
                <p className='text-sm md:text-base text-white/60'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                    pulvinar risus non quam. Sed ac arcu et tortor aliquam eleifend.
                </p>

                {/* input */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <Input type='firstname' placeholder='First Name' />
                    <Input type='lastname' placeholder='Last Name' />
                    <Input type='email' placeholder='Email' />
                    <Input type='phone' placeholder='Phone' />
                </div>

                {/* select */}
                <Select>
                    <SelectTrigger className='w-full'>
                        <SelectValue placeholder='Select a service' />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Select a service</SelectLabel>
                            <SelectItem value='wd'>Web Development</SelectItem>
                            <SelectItem value='md'>Mobile Development</SelectItem>
                            <SelectItem value='cc'>Content Creator</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>

                {/* textarea */}
                <Textarea
                    className='h-32 md:h-40 xl:h-56'
                    placeholder='Type your message here...'
                />

                {/* button */}
                <Button className='max-w-40 bg-accent' variant='accent'>
                    Send Message
                </Button>
            </form>
        </div>
    )
}
export default ContactForm
