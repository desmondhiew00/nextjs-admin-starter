"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { type SubmitErrorHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

import FormTextInput from "@/components/common/form-text-input";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { validator } from "@/lib/form-validator";
import { parseErrorMessage } from "@/lib/utils";
import { signIn } from "next-auth/react";
import { useRouter } from "next-nprogress-bar";

const formSchema = z.object({
  email: validator.email("Email"),
  password: validator.password("Password", 4),
});

type FormValues = z.infer<typeof formSchema>;

export default function LoginForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onFormSubmit = async (data: FormValues) => {
    setLoading(true);
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
      });
      if (res?.error) throw new Error("Invalid credentials");
      router.push(callbackUrl || "/");
    } catch (e: unknown) {
      toast.error(parseErrorMessage(e));
    } finally {
      setLoading(false);
    }
  };

  const onFormError: SubmitErrorHandler<FormValues> = (e) => {
    Object.values(e).map((e) => toast.error(e.message));
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onFormSubmit, onFormError)} className="w-full space-y-2">
        <FormTextInput control={form.control} name="email" label="Email" type="email" />
        <FormTextInput control={form.control} name="password" label="Password" type="password" />

        <div className="pt-6">
          <Button loading={loading} className="ml-auto w-full" type="submit">
            Sign In
          </Button>
        </div>
      </form>
    </Form>
  );
}
