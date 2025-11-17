"use client"
import axios from "axios"
import * as React from "react"
import { useForm, useWatch } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from "yup"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import Swal from "sweetalert2"
import { useRouter } from "next/navigation"
import Link from 'next/link'
import { Textarea } from "../ui/textarea"
import Image from "next/image"
import { useAuthStore } from "@/store/authStore"

const newsSchema = Yup.object({
    title: Yup.string().required("Title is required").max(250),
    image: Yup.string().required("Image is required").max(1000),
    content: Yup.string().required("Content is required").max(5000),
})

type NewsFormValues = Yup.InferType<typeof newsSchema>

const OrganismsNewsForm: React.FC = () => {
    const router = useRouter()
    const form = useForm<NewsFormValues>({ resolver: yupResolver(newsSchema), defaultValues: { title: "", content: "", image:"" }})
    const watchedValues = useWatch({ control: form.control })
    const email = localStorage.getItem('emailKey')

    const onSubmit = async (values: NewsFormValues) => {
        try {
            const res = await axios.post("https://saintlyneed-us.backendless.app/api/data/news", {
                title: values.title, 
                content: values.content,
                image: values.image,
                createdBy: email
            });
            
            Swal.fire({
                icon: "success",
                title: "Done",
                text: `News posted!`,
                confirmButtonText: "Back to News",
                allowOutsideClick: false,
                allowEscapeKey: false,
            }).then((result:any) => {
                router.push("/news")
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
        <div className="w-full rounded-2xl space-y-4 p-5 lg:p-10 shadow-2xl bg-white">
            <Link href="/news">
                <Button variant="outline" className="bg-danger text-white mb-5">Go to News</Button>
            </Link>
            <hr></hr>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                    <h1 className="font-bold">Make an News</h1>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <FormField control={form.control} name="title"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Title</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter your title" {...field} />
                                        </FormControl>
                                        <FormMessage>{form.formState.errors.title?.message}</FormMessage>
                                    </FormItem>
                                )}
                            />
                            <FormField control={form.control} name="content"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Content</FormLabel>
                                        <FormControl>
                                            <Textarea placeholder="Enter your content" {...field} />
                                        </FormControl>
                                        <FormMessage>{form.formState.errors.content?.message}</FormMessage>
                                    </FormItem>
                                )}
                            />
                            <FormField control={form.control} name="image"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Image URL</FormLabel>
                                        <FormControl>
                                            <Input type="text" placeholder="Enter your image url" {...field} />
                                        </FormControl>
                                        <FormMessage>{form.formState.errors.image?.message}</FormMessage>
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                                {
                                    form.formState.isSubmitting ? "Let me check first..." : "Post News"
                                }
                            </Button>
                        </form>
                    </Form>
                </div>
                <div>
                    <h1 className="font-bold">Preview News</h1>
                    <div className="border rounded-xl p-4 bg-gray-50 shadow-inner">
                        {
                            watchedValues.image && <div className="relative w-full h-100 mb-4"><Image src={watchedValues.image} alt="Preview" fill className="rounded-xl" unoptimized/></div>
                        }
                        <h5 className="text-xl text-gray-700 font-bold">
                            {
                                watchedValues.title || <span className="italic">[Your title will appear here...]</span>
                            }
                        </h5>
                        <p className="text-gray-700">
                            {
                                watchedValues.content || <span className="italic">[Your content will appear here...]</span>
                            }
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrganismsNewsForm
