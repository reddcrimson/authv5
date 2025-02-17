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
import { LoginSchema } from "@/schemas"
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { login } from "@/actions/login";

export const LoginForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onSubmit =(values: z.infer<typeof LoginSchema>) => {
  setError("");
  setSuccess("");

  startTransition(() => {
    login(values)
    .then((data) => {
      if (data?.error) {
        form.reset();
        setError(data?.error);
      }

      if (data?.success) {
        form.reset();
        setSuccess(data?.success);
      }
    })
    .catch(() => setError("Something went wrong"));
  });
  }

  return (
    <CardWrapper
      headerLabel="Welcome Back!"
      backButtonLabel="Don't have an account?"
      backButtonHref="/signup"
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
        Login
      </Button>
      </form>
    </Form>
    </CardWrapper>
  )
}
