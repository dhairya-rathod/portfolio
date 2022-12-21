import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useForm, Controller, SubmitHandler } from "react-hook-form";

import { PrimaryButton, TextInput } from "@/components/UI";

interface FormData {
  email: string;
  password: string;
}

const Login = ({ csrfToken }: { csrfToken: string }) => {
  const router = useRouter();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSignIn: SubmitHandler<FormData> = async (values) => {
    const res = await signIn("credentials", {
      redirect: false,
      email: values.email,
      password: values.password,
      callbackUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/admin/dashboard`,
    });
    if (res?.url)
      router.push(`${process.env.NEXT_PUBLIC_BASE_URL}/admin/dashboard`);
  };

  return (
    <form
      className="p-8 bg-gray-dark-4 rounded-xl shadow shadow-gray-dark-4"
      noValidate
      onSubmit={handleSubmit(handleSignIn)}
    >
      <h3 className="mb-10 font-bold text-center text-4xl">Sign In</h3>
      <input name="csrfToken" type="hidden" defaultValue={csrfToken} />

      <Controller
        name="email"
        control={control}
        rules={{ required: "Email Address is required" }}
        render={({ field }) => (
          <TextInput
            {...field}
            classes="mb-8"
            type="email"
            placeholder="Email"
            error={(errors?.email?.message || "") as string}
            aria-invalid={errors.email ? "true" : "false"}
            required
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        rules={{ required: "Password is required" }}
        render={({ field }) => (
          <TextInput
            {...field}
            classes="mb-8"
            type="password"
            placeholder="Password"
            error={(errors?.password?.message || "") as string}
            aria-invalid={errors.password ? "true" : "false"}
            required
          />
        )}
      />

      <div className="flex justify-center">
        <PrimaryButton type="submit" label="Sign In" />
      </div>
    </form>
  );
};

export default Login;
