import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
// Table components defined inline for skeleton
import React, { ReactNode, TableHTMLAttributes } from "react";

interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
  children?: ReactNode;
}

const Table = ({ children, ...props }: TableProps) => (
  <div className="relative w-full overflow-auto">
    <table className="w-full caption-bottom text-sm" {...props}>
      {children}
    </table>
  </div>
);

const TableHeader: React.FC<React.HTMLAttributes<HTMLTableSectionElement>> = ({ children, ...props }) => (
  <thead className="[&_tr]:border-b" {...props}>
    {children}
  </thead>
);

const TableBody: React.FC<React.HTMLAttributes<HTMLTableSectionElement>> = ({ children, ...props }) => (
  <tbody className="[&_tr:last-child]:border-0" {...props}>
    {children}
  </tbody>
);

const TableRow: React.FC<React.HTMLAttributes<HTMLTableRowElement>> = ({ children, ...props }) => (
  <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted" {...props}>
    {children}
  </tr>
);

interface TableHeadProps extends React.ThHTMLAttributes<HTMLTableCellElement> {
  children?: React.ReactNode;
  className?: string;
}

const TableHead: React.FC<TableHeadProps> = ({ children, className = "", ...props }) => (
  <th className={`h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 ${className}`} {...props}>
    {children}
  </th>
);

interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  children?: React.ReactNode;
  className?: string;
}

const TableCell: React.FC<TableCellProps> = ({ children, className = "", ...props }) => (
  <td className={`p-4 align-middle [&:has([role=checkbox])]:pr-0 ${className}`} {...props}>
    {children}
  </td>
);

const AdminPageSkeleton = () => {
  return (
    <div className="space-y-6 mt-8 mb-10">
      {/* Header Stats Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {[...Array(4)].map((_, index) => (
          <Card key={index} className="shadow-none py-1">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <Skeleton className="w-14 h-14 rounded-lg" />
                <div className="space-y-2">
                  <Skeleton className="h-8 w-16" />
                  <Skeleton className="h-4 w-24" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Card Skeleton */}
      <Card className="shadow-none">
        <CardHeader>
          <div className="space-y-2">
            <Skeleton className="h-8 w-80" />
            <Skeleton className="h-4 w-96" />
          </div>
        </CardHeader>
        <CardContent>
          {/* Filters Skeleton */}
          <div className="hidden mb-6 space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <Skeleton className="h-10 w-full sm:w-48" />
              <Skeleton className="h-10 w-full sm:w-48" />
              <Skeleton className="h-10 w-full sm:w-32" />
            </div>
          </div>

          {/* Desktop Table Skeleton */}
          <div className="hidden md:block">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead><Skeleton className="h-4 w-20" /></TableHead>
                  <TableHead><Skeleton className="h-4 w-16" /></TableHead>
                  <TableHead><Skeleton className="h-4 w-16" /></TableHead>
                  <TableHead><Skeleton className="h-4 w-16" /></TableHead>
                  <TableHead><Skeleton className="h-4 w-12" /></TableHead>
                  <TableHead><Skeleton className="h-4 w-12" /></TableHead>
                  <TableHead className="text-right"><Skeleton className="h-4 w-16 ml-auto" /></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[...Array(8)].map((_, index) => (
                  <TableRow key={index}>
                    <TableCell><Skeleton className="h-4 w-32" /></TableCell>
                    <TableCell><Skeleton className="h-4 w-20" /></TableCell>
                    <TableCell><Skeleton className="h-6 w-16 rounded-full" /></TableCell>
                    <TableCell><Skeleton className="h-4 w-28" /></TableCell>
                    <TableCell><Skeleton className="h-6 w-12 rounded-full" /></TableCell>
                    <TableCell><Skeleton className="h-4 w-20" /></TableCell>
                    <TableCell className="text-right">
                      <Skeleton className="h-8 w-8 rounded ml-auto" />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Mobile Cards Skeleton */}
          <div className="md:hidden space-y-4">
            {[...Array(6)].map((_, index) => (
              <Card key={index} className="shadow-none overflow-hidden p-0">
                <CardContent className="p-0">
                  {/* Header Section */}
                  <div className="bg-muted/80 p-4 border-b border-border">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Skeleton className="w-10 h-10 rounded-full" />
                        <div className="space-y-1">
                          <Skeleton className="h-4 w-24" />
                          <Skeleton className="h-3 w-16" />
                        </div>
                      </div>
                      <Skeleton className="h-6 w-12 rounded-full" />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="px-4 pb-3 space-y-0">
                    <div className="grid grid-cols-1">
                      {/* Class Row */}
                      <div className="flex items-center justify-between py-3 border-b border-border/60 px-2 -mx-2">
                        <div className="flex items-center gap-3">
                          <Skeleton className="w-8 h-8 rounded-lg" />
                          <Skeleton className="h-4 w-12" />
                        </div>
                        <Skeleton className="h-6 w-16 rounded-full" />
                      </div>

                      {/* Module Row */}
                      <div className="flex items-center justify-between py-3 border-b border-border/60 px-2 -mx-2">
                        <div className="flex items-center gap-3">
                          <Skeleton className="w-8 h-8 rounded-lg" />
                          <Skeleton className="h-4 w-14" />
                        </div>
                        <Skeleton className="h-4 w-20" />
                      </div>

                      {/* Date Row */}
                      <div className="flex items-center justify-between py-3 border-b border-border/60 px-2 -mx-2">
                        <div className="flex items-center gap-3">
                          <Skeleton className="w-8 h-8 rounded-lg" />
                          <Skeleton className="h-4 w-8" />
                        </div>
                        <Skeleton className="h-4 w-20" />
                      </div>
                    </div>

                    {/* Action Section */}
                    <div className="pt-3">
                      <Skeleton className="w-full h-10 rounded-lg" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Pagination Skeleton */}
      <div className="flex justify-center">
        <div className="flex items-center space-x-2">
          <Skeleton className="h-10 w-20" />
          <Skeleton className="h-10 w-10" />
          <Skeleton className="h-10 w-10" />
          <Skeleton className="h-10 w-10" />
          <Skeleton className="h-10 w-20" />
        </div>
      </div>
    </div>
  );
};

export default AdminPageSkeleton;