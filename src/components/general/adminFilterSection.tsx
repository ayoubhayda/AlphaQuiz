"use client";
import React, { useCallback } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { classesList, modulesList } from "@/constants";
import { Button } from "../ui/button";
import { RotateCcw } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

const AdminFilterSection = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Get current filters from the URL
  const currentModule = searchParams.get("module") || "";
  const currentClass = searchParams.get("class") || "";

  function clearAllFilter() {
    router.push("/");
  }

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());

      if (value) {
        params.set(name, value);
      } else {
        params.delete(name);
      }

      return params.toString();
    },
    [searchParams]
  );

  const handleModuleChange = (module: string) => {
    router.push(`?${createQueryString("module", module)}`);
  };

  const handleClassChange = (cls: string) => {
    router.push(`?${createQueryString("class", cls)}`);
  };

  return (
    <div className="flex items-start justify-between gap-4 mb-6">
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Select
          onValueChange={(cls) => {
            handleClassChange(cls);
          }}
          value={currentClass}
          
        >
          <SelectTrigger className="shadow-none cursor-pointer">
            <SelectValue placeholder="Sélectionner une classe" />
          </SelectTrigger>
          <SelectContent>
            {classesList.map((cls) => (
              <SelectItem className="shadow-none cursor-pointer" key={cls.value} value={cls.value}>
                {cls.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          onValueChange={(module) => {
            handleModuleChange(module);
          }}
          value={currentModule}
        >
          <SelectTrigger className="shadow-none cursor-pointer">
            <SelectValue placeholder="Sélectionner un module" />
          </SelectTrigger>
          <SelectContent>
            {modulesList.map((module) => (
              <SelectItem className="shadow-none cursor-pointer" key={module.id} value={module.slug}>
                {module.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Button
        onClick={clearAllFilter}
        variant="outline"
        className="cursor-pointer shadow-none"
      >
        <RotateCcw className="size-4 mr-0.5" />
        <span>Réinitialiser</span>
      </Button>
    </div>
  );
};

export default AdminFilterSection;
