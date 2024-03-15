import { getOrderDetails } from "@/api/get-order-details";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useQuery } from "@tanstack/react-query";

export interface OrderDetailsProps {
  orderId: string;
  open: boolean;
}

export function OrderDetails({ orderId, open }: OrderDetailsProps) {
  const { data: order } = useQuery({
    queryKey: ["order", orderId],
    queryFn: () => getOrderDetails({ orderId }),
    enabled: open,
  });

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Pedido: 878484848484</DialogTitle>
        <DialogDescription>Detalhes do pedido</DialogDescription>
      </DialogHeader>
      <div className="space-y-6">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="text-muted-foreground">Status</TableCell>
              <TableCell className="flex justify-end">
                {" "}
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-slate-400"></span>
                  <span className="font-medium text-muted-foreground">
                    Pendente
                  </span>
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Cliente</TableCell>
              <TableCell className="flex justify-end">
                {" "}
                <div className="flex items-center gap-2">
                  <span className="font-medium text-muted-foreground">
                    Fabian Henrick
                  </span>
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Telefone</TableCell>
              <TableCell className="flex justify-end">
                {" "}
                <div className="flex items-center gap-2">
                  <span className="font-medium text-muted-foreground">
                    (11) 99999-9999
                  </span>
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">e-mail</TableCell>
              <TableCell className="flex justify-end">
                {" "}
                <div className="flex items-center gap-2">
                  <span className="font-medium text-muted-foreground">
                    fabianhenrick@gmail.com
                  </span>
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">
                Realizado há
              </TableCell>
              <TableCell className="flex justify-end">
                {" "}
                <div className="flex items-center gap-2">
                  <span className="font-medium text-muted-foreground">
                    15 minutos
                  </span>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Produto</TableHead>
              <TableHead className="text-right">Quantidade</TableHead>
              <TableHead className="text-right">Preço</TableHead>
              <TableHead className="text-right">Subtotal</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Pizza Pepperoni Família</TableCell>{" "}
              <TableCell className="text-right">2</TableCell>
              <TableCell className="text-right"> R$ 55,00</TableCell>
              <TableCell className="text-right"> R$ 110,00</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Pizza Frango com Catupiry</TableCell>{" "}
              <TableCell className="text-right">1</TableCell>
              <TableCell className="text-right"> R$ 39,90</TableCell>
              <TableCell className="text-right"> R$ 39,90</TableCell>
            </TableRow>
          </TableBody>

          <TableFooter>
            {" "}
            <TableRow>
              <TableCell colSpan={3}>Total do Pedido</TableCell>
              <TableCell className="text-right font-medium">
                {" "}
                R$ 149,90
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </DialogContent>
  );
}
