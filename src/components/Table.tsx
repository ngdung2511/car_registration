import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const schedules = [
  {
    id: "1",
    date: "T2 - T6",
    time: "6am - 8am",
    price: "80.000",
  },
  {
    id: "2",
    date: "T2 - T6",
    time: "8am - 3pm",
    price: "70.000",
  },
  {
    id: "3",
    date: "T2 - T6",
    time: "3pm - 5:30pm",
    price: "90.000",
  },
  {
    id: "4",
    date: "T2 - T6",
    time: "5:30pm - 7:30pm",
    price: "120.000",
  },
  {
    id: "5",
    date: "T2 - T6",
    time: "7:30pm - 9:30pm",
    price: "120.000",
  },
  {
    id: "6",
    date: "T2 - T6",
    time: "9:30pm - 11:30pm",
    price: "80.000",
  },
  {
    id: "7",
    date: "T7 - CN",
    time: "Tất cả khung giờ",
    price: "90.000",
  },
];

export function MyTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Ngày</TableHead>
          <TableHead>Khung giờ</TableHead>
          <TableHead>{`Giá thuê (VND/h)`}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {schedules.map((schedule) => (
          <TableRow key={schedule.id}>
            <TableCell>{schedule.date}</TableCell>
            <TableCell>{schedule.time}</TableCell>
            <TableCell className="font-medium">{schedule.price}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
