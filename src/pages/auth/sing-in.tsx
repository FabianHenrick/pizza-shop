import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Link, useSearchParams } from "react-router-dom";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";
import { singIn } from "@/api/sing-in";

const signInForm = z.object({
  email: z.string().email(),
});

type SingInForm = z.infer<typeof signInForm>;

export function SingIn() {
  const [searchParams] = useSearchParams();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SingInForm>({
    defaultValues: { email: searchParams.get("email") ?? "" },
  });

  const { mutateAsync: authenticate } = useMutation({ mutationFn: singIn });

  async function handleSingIn(data: any) {
    try {
      await authenticate({ email: data.email });
      toast.success("Enviamos um link de autenticação para seu email.", {
        action: { label: "Reenviar.", onClick: () => handleSingIn(data) },
      });
    } catch {
      toast.error("Credenciais inválidas");
    }
  }

  return (
    <>
      <Helmet title="Login" />
      <div className="p-8">
        <Button variant="ghost" asChild className="absolute right-8 top-8">
          <Link to="/sing-up" className="">
            Novo estabelecimento
          </Link>
        </Button>

        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className=" flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar painel
            </h1>

            <p className="text-sm text-muted-foreground">
              Acompanhe suas vendas pelo painel do parceiro!
            </p>
          </div>

          <form
            onSubmit={handleSubmit(handleSingIn)}
            action=""
            className="space-y-4"
          >
            <div className="space-y2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input id="email" type="text" {...register("email")} />
            </div>
            <Button disabled={isSubmitting} className="w-full" type="submit">
              Acessar Painel
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
