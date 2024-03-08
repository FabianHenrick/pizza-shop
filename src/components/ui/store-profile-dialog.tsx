import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button } from "./button";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./dialog";
import { Input } from "./input";
import { Label } from "./label";
import { Textarea } from "./textarea";
import {
  GetManagedRestaurantResponse,
  getManagedRestaurant,
} from "@/api/get-managed-restaurant";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateProfile } from "@/api/update-profile";
import { toast } from "sonner";

const storeProfileSchema = z.object({
  name: z.string().min(1),
  description: z.string(),
});

type StoreProfileSchema = z.infer<typeof storeProfileSchema>;

export function StoreProfileDialog() {
  const queryClient = useQueryClient();

  const { data: managedRestaurant } = useQuery({
    queryKey: ["managed-restaurant"],
    queryFn: getManagedRestaurant,
    staleTime: Infinity,
  });

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<StoreProfileSchema>({
    resolver: zodResolver(storeProfileSchema),
    values: {
      name: managedRestaurant?.name ?? "",
      description: managedRestaurant?.description ?? "",
    },
  });

  const { mutateAsync: updateProfielFn } = useMutation({
    mutationFn: updateProfile,
    onSuccess(_, { name, description }) {
      const cashed = queryClient.getQueryData<GetManagedRestaurantResponse>([
        `managed-restaurant`,
      ]);
      if (cashed) {
        queryClient.setQueryData<GetManagedRestaurantResponse>(
          [`managed-restaurant`],
          {
            ...cashed,
            name,
            description,
          },
        );
      }
    },
  });

  async function handleUpdateProfile(data: StoreProfileSchema) {
    try {
      await updateProfielFn({
        name: data.name,
        description: data.description,
      });

      toast.success("Perfil atualizado com sucesso!");
    } catch {
      toast.error("Falha ao atualizar o perfil, tente novamente!");
    }
  }

  return (
    <DialogContent>
      <DialogHeader>
        {" "}
        <DialogTitle> Perfil da Loja</DialogTitle>
        <DialogDescription>
          Atualize as informações do seu estabelecimento visiveis ao seu cliente
        </DialogDescription>
      </DialogHeader>{" "}
      <form onSubmit={handleSubmit(handleUpdateProfile)}>
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
          <DialogClose>
            <Button variant={"ghost"} type="button">
              Cancelar
            </Button>
          </DialogClose>
          <Button
            type="submit"
            variant={"success"}
            {...handleSubmit}
            disabled={isSubmitting}
          >
            Salvar
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  );
}
