"use client"
import axios from "axios"
import * as React from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from "yup"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import Swal from "sweetalert2"
import { useRouter } from "next/navigation"
import Link from 'next/link'
import AtomText from "../atoms/a_text"

const loginSchema = Yup.object({
    email: Yup.string().required("Email is required").min(10).test(
        "is-gmail",
        "Email must end with @gmail.com",
        (val: string) => val ? val.endsWith("@gmail.com") : false
    ),
    password: Yup.string().required("Password is required").min(6),
})

type RegisterFormValues = Yup.InferType<typeof loginSchema>

const OrganismsRegisterForm: React.FC = () => {
    const router = useRouter()
    const form = useForm<RegisterFormValues>({ resolver: yupResolver(loginSchema), defaultValues: { email: "", password: "" }})

    const onSubmit = async (values: RegisterFormValues) => {
        try {
            const res = await axios.post("https://saintlyneed-us.backendless.app/api/data/guest", {
                email: values.email, 
                password: values.password,
            });
            
            Swal.fire({
                icon: "success",
                title: "Done",
                text: `Welcome guest ${res.data.email}!`,
                confirmButtonText: "Sign In Now!",
                allowOutsideClick: false,
                allowEscapeKey: false,
            }).then((result:any) => {
                router.push("/login")
            })
        } catch (err: any) {
            Swal.fire({
                icon: "error",
                title: "I'm sorry",
                text: err.response.data.message,
            })
        }
    }

    return (
        <div className="rounded-2xl space-y-4 p-5 lg:p-10 shadow-2xl bg-white mr-10 w-full md:max-w-[470px]">
            <Link href="/login">
                <Button variant="link" className="bg-danger text-white mb-5">Go to Sign In</Button>
            </Link>
            <hr></hr>
            <AtomText type='sub-title' text='Welcome to Vorta Beauty Clinic'/>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField control={form.control} name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email Address</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter your email" {...field} />
                                </FormControl>
                                <FormMessage>{form.formState.errors.email?.message}</FormMessage>
                            </FormItem>
                        )}
                    />
                    <FormField control={form.control} name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input type="password" placeholder="Enter your password" {...field} />
                                </FormControl>
                                <FormMessage>{form.formState.errors.password?.message}</FormMessage>
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                        {
                            form.formState.isSubmitting ? "Validation is in progress..." : "Sign In"
                        }
                    </Button>
                </form>
            </Form>
        </div>
    )
}

export default OrganismsRegisterForm
