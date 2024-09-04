"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

import FormTextInput from "@/components/common/form-text-input";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useNavigator } from "@/hooks/use-navigation";
import { signIn } from "@/lib/auth";
import { validator } from "@/lib/form-validator";
import { parseErrorMessage } from "@/lib/utils";
import type { Route } from "next";

const formSchema = z.object({
  email: validator.email("Email"),
  password: validator.password("Password", 4),
});

type FormValue = z.infer<typeof formSchema>;

export default function LoginForm() {
  const { navigate } = useNavigator();
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  const form = useForm<FormValue>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: FormValue) => {
    setLoading(true);
    try {
      await signIn(data.email, data.password);
      navigate((callbackUrl || "/") as Route);
    } catch (e: unknown) {
      toast.error(parseErrorMessage(e));
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit, (e) => {
            Object.values(e).map((e) => toast.error(e.message));
          })}
          className="w-full space-y-2"
        >
          <FormTextInput control={form.control} name="email" label="Email" type="email" />
          <FormTextInput control={form.control} name="password" label="Password" type="password" />

          <div className="pt-6">
            <Button loading={loading} className="ml-auto w-full" type="submit">
              Sign In
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
}
