"use client";

import Image from "next/image"
import Link from "next/link"
import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState, useTransition } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import CardWrapper from "@/components/auth/auth-props"
import { SignupSchema } from "@/schemas"
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { signup } from "@/actions/signup";

export const SignupForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof SignupSchema>>({
    resolver: zodResolver(SignupSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  })

const onSubmit =(values: z.infer<typeof SignupSchema>) => {
setError("");
setSuccess("");

  startTransition(() => {
    signup(values)
    .then((data) => {
      setError(data.error);
      setSuccess(data.success);
    })
  });
}

  return (
    <CardWrapper
      headerLabel="Create an account"
      backButtonLabel="Already have an account?"
      backButtonHref="/login"
      showSocial
    >
    <Form {...form}>
      <form 
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6"  
      >
        <div className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  disabled={isPending}
                  placeholder="John Doe"
                  />
              </FormControl>
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
              <FormControl>
                <Input
                  {...field}
                  disabled={isPending}
                  placeholder="john.doe@example.com"
                  type="email"
                  />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  disabled={isPending}
                  placeholder="********"
                  type="password"
                  />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        </div>
      <FormError message={error} />
      <FormSuccess message={success} />
      <Button
      disabled={isPending}
        type="submit"
        className="w-full"
      >
        Signup
      </Button>
      </form>
    </Form>
    </CardWrapper>
  )
}
