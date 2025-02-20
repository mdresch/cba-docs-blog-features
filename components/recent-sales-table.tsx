import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const recentSales = [
  {
    id: 1,
    customer: "John Doe",
    product: "Product A",
    amount: "$250.00",
    date: "2023-04-01",
  },
  {
    id: 2,
    customer: "Jane Smith",
    product: "Product B",
    amount: "$175.50",
    date: "2023-04-02",
  },
  {
    id: 3,
    customer: "Bob Johnson",
    product: "Product C",
    amount: "$320.75",
    date: "2023-04-03",
  },
  {
    id: 4,
    customer: "Alice Brown",
    product: "Product D",
    amount: "$95.25",
    date: "2023-04-04",
  },
  {
    id: 5,
    customer: "Charlie Wilson",
    product: "Product E",
    amount: "$450.00",
    date: "2023-04-05",
  },
]

export function RecentSalesTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Customer</TableHead>
          <TableHead>Product</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {recentSales.map((sale) => (
          <TableRow key={sale.id}>
            <TableCell>{sale.customer}</TableCell>
            <TableCell>{sale.product}</TableCell>
            <TableCell>{sale.amount}</TableCell>
            <TableCell>{sale.date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

