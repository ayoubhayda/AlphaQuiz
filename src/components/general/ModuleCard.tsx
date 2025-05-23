import { moduleTypes } from "@/constants";
import React from "react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Activity, Check, LibraryBig, SignalMedium } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ModuleCard = ({ module }: { module: moduleTypes }) => {
  return (
    <Link href={`module/${module.slug}`} className="col-span-1">
      <Card
        key={module.id}
        className="hover:bg-primary/10 hover:border-primary relative shadow-none transition-all duration-300"
      >
        <CardHeader>
          <div className="flex gap-4">
            <Image
              src={module.iconImage}
              alt={module.name}
              width={64}
              height={64}
              className="size-16 border border-border rounded-lg overflow-hidden"
            />
            <div className="flex flex-col gap-2">
              <CardTitle className="text-2xl font-bold">
                {module.name}
              </CardTitle>
              <Badge
                className={`rounded-full text-black dark:text-white ${
                  module.status === "Active"
                    ? "bg-primary/20"
                    : "bg-yellow-700/20"
                }`}
              >
                {module.status}

                {module.status === "Active" ? (
                  <Activity className="text-primary ml-1" />
                ) : (
                  <Check className="text-yellow-700 ml-1" />
                )}
              </Badge>
            </div>
          </div>
          <CardDescription className="mt-2  line-clamp-2">
            {module.description}
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <div className="flex items-end gap-6">
            <div className="flex items-end text-base">
              <SignalMedium
                className={`size-10 ${
                  module.difficulty === "Facile"
                    ? "text-primary"
                    : module.difficulty === "Moyenne"
                    ? "text-yellow-500"
                    : "text-red-600"
                }`}
              />
              <span className="font-semibold ml-[-7px]">
                {module.difficulty}
              </span>
            </div>

            <div className="flex items-end text-base gap-2">
              <LibraryBig className="size-6 text-primary" />
              <span className="font-semibold">
                {module.questions} Questions
              </span>
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ModuleCard;
