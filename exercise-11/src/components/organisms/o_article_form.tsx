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

const articleSchema = Yup.object({
    title: Yup.string().required("Title is required").max(250),
    image: Yup.string().required("Image is required").max(1000),
    content: Yup.string().required("Content is required").max(5000),
})

type ArticleFormValues = Yup.InferType<typeof articleSchema>

const OrganismsArticleForm: React.FC = () => {
    const router = useRouter()
    const form = useForm<ArticleFormValues>({ resolver: yupResolver(articleSchema), defaultValues: { title: "", content: "", image:"" }})
    const watchedValues = useWatch({ control: form.control })
    const email = useAuthStore((state: any) => state.email)

    const onSubmit = async (values: ArticleFormValues) => {
        try {
            const res = await axios.post("https://silverkettle-us.backendless.app/api/data/blog", {
                title: values.title, 
                content: values.content,
                image: values.image,
                author: email
            });
            
            Swal.fire({
                icon: "success",
                title: "Done",
                text: `Article posted!`,
                confirmButtonText: "Back to Dashboard",
                allowOutsideClick: false,
                allowEscapeKey: false,
            }).then((result:any) => {
                router.push("/")
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
            <Link href="/">
                <Button variant="link" className="bg-red-600 text-white hover:bg-red-700 mb-5">Go to Dashboard</Button>
            </Link>
            <hr></hr>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                    <h1 className="font-bold">Make an Article</h1>
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
                                    form.formState.isSubmitting ? "Let me check first..." : "Post Article"
                                }
                            </Button>
                        </form>
                    </Form>
                </div>
                <div>
                    <h1 className="font-bold">Preview Article</h1>
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

export default OrganismsArticleForm
