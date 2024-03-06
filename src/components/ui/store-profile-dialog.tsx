import { useQuery } from "@tanstack/react-query";
import { Button } from "./button";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./dialog";
import { Input } from "./input";
import { Label } from "./label";
import { Textarea } from "./textarea";
import { getManagedRestaurant } from "@/api/get-managed-restaurant";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const storeProfileSchema = z.object({
  name: z.string().min(1),
  description: z.string(),
});

type StoreProfileSchema = z.infer<typeof storeProfileSchema>;

export function StoreProfileDialog() {
  const { data: managedRestaurant } = useQuery({
    queryKey: ["managed-restaurant"],
    queryFn: getManagedRestaurant,
  });

  const { register, handleSubmit } = useForm<StoreProfileSchema>({
    resolver: zodResolver(storeProfileSchema),
    values: {
      name: managedRestaurant?.name ?? "",
      description: managedRestaurant?.description ?? "",
    },
  });

  return (
    <DialogContent>
      <DialogHeader>
        {" "}
        <DialogTitle> Perfil da Loja</DialogTitle>
        <DialogDescription>
          Atualize as informações do seu estabelecimento visiveis ao seu cliente
        </DialogDescription>
      </DialogHeader>{" "}
      <form>
        <div className="space-y-4 py-4">
          <div className=" grid grid-cols-4  items-center gap-4">
            <Label className="text-right" htmlFor="name">
              Nome
            </Label>
            <Input
              className="col-span-3"
              id="name"
              {...register("name")}
            ></Input>
          </div>
        </div>

        <div className=" grid grid-cols-4  items-center gap-4">
          <Label className="text-right" htmlFor="description">
            Descrição
          </Label>
          <Textarea
            className="col-span-3"
            id="description"
            {...register("description")}
          ></Textarea>
        </div>

        <DialogFooter>
          <Button variant={"ghost"} type="button">
            Cancelar
          </Button>
          <Button type="submit" variant={"success"}>
            Salvar
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  );
}
