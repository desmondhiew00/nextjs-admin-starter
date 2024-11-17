"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { type SubmitErrorHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

import FormTextInput from "@/components/common/form-text-input";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { LinkButton } from "@/components/ui/link-button";
import validator from "@/lib/form-validator";
import { parseErrorMessage } from "@/lib/utils";

import AuthPageTitle from "./auth-page-title";
import { sendForgotPasswordLink } from "./auth.action";

const formSchema = z.object({
  email: validator.email("Email"),
});
type FormValues = z.infer<typeof formSchema>;

export default function ForgotPasswordForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: "" },
  });

  const onFormSubmit = async (data: FormValues) => {
    setLoading(true);
    try {
      const res = await sendForgotPasswordLink(data.email);
      if (res.error) throw new Error(res.error);
      toast.success("Reset password link sent successfully. Please check your email.");
      setSuccess(true);
    } catch (e) {
      toast.error(parseErrorMessage(e));
    }
    setLoading(false);
  };

  const onFormError: SubmitErrorHandler<FormValues> = (e) => {
    Object.values(e).map((e) => toast.error(e.message));
  };

  if (success) {
    return (
      <div className="text-center">
        <div className="mb-4 space-y-3 text-center">
          <AuthPageTitle
            titleClassName="text-success"
            title="Reset Password Link Sent"
            subtitle="We have sent a reset password link to your email. Please check your email and follow the instructions."
          />
        </div>
        <LinkButton href="/login" className="mt-4 fade-in" label="Back to Sign In" variant="outline" />
      </div>
    );
  }

  return (
    <>
      <AuthPageTitle
        title="Forgot Password"
        subtitle="Enter your email and we will send you a link to reset your password."
      />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onFormSubmit, onFormError)} className="w-full space-y-2">
          <FormTextInput control={form.control} name="email" label="Email" type="email" />
          <div className="pt-6">
            <Button loading={loading} className="ml-auto w-full" type="submit">
              Send Reset Link
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
}
