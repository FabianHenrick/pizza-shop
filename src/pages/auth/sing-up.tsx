import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { toast } from "sonner";

import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";

const singUpForm = z.object({
  restaurantName: z.string(),
  managerName: z.string(),
  phone: z.string(),
  email: z.string().email(),
});

type SingUpForm = z.infer<typeof singUpForm>;

export function SingUp() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SingUpForm>();

  async function handleSingUp(data: SingUpForm) {
    try {
      console.log(data);
      await new Promise((resolve) => setTimeout(resolve, 2000));
    } catch {
      toast.error("Erro ao cadastrar restaurante.");
    }
  }

  return (
    <>
      <Helmet title="Cadastro" />
      <div className="p-8">
        <Button variant="ghost" asChild className="absolute right-8 top-8">
          <Link to="/sing-in" className="">
            Fazer login
          </Link>
        </Button>
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className=" flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Criar conta grátis
            </h1>
            ;
            <p className="text-sm text-muted-foreground">
              Seja um parceiro e comece suas vendas!
            </p>
          </div>

          <form
            onSubmit={handleSubmit(handleSingUp)}
            action=""
            className="space-y-4"
          >
            <div className="space-y2">
              <Label htmlFor="email">Nome do Estabelecimento</Label>
              <Input
                id="restaurantName"
                type="text"
                {...register("restaurantName")}
              />
            </div>

            <div className="space-y2">
              <Label htmlFor="email">Seu nome</Label>
              <Input
                id="managerName"
                type="text"
                {...register("managerName")}
              />
            </div>

            <div className="space-y2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input id="email" type="text" {...register("email")} />
            </div>

            <div className="space-y2">
              <Label htmlFor="email">Seu celular</Label>
              <Input id="phone" type="tel" {...register("phone")} />
            </div>

            <Button disabled={isSubmitting} className="w-full" type="submit">
              Finalizar Cadastro
            </Button>
            <p className=" px-6 text-center text-sm leading-relaxed text-muted-foreground">
              Ao continuar, você concorda com os nossos{" "}
              <a className="underline underline-offset-4">termos de serviço</a>{" "}
              e{" "}
              <a className="underline underline-offset-4">
                politicas de privacidade
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    </>
  );
}