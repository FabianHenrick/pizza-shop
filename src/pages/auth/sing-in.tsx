import { Helmet } from "react-helmet-async";

export function SingIn() {
  return (
    <>
      <Helmet title="Login" />
      <div className="p-8">
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className=" flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar painel
            </h1>
            ;
            <p className="text-sm text-muted-foreground">
              Acompanhe suas vendas pelo painel do parceiro!
            </p>
          </div>

          <form action="" className="space-y-4">
            <div className="space-y2"></div>
            <button type="submit">Acessar Painel</button>
          </form>
        </div>
      </div>
    </>
  );
}
