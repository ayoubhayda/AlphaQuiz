"use client";
import React, { useState } from "react";
import { userCompleteSchema } from "@/utils/zodSchemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { classesList } from "@/constants";
import { Button } from "@/components/ui/button";
import { userComplete } from "@/lib/actions";

const UserCompleteForm = () => {
  const [pending, setPending] = useState(false);

  const form = useForm<z.infer<typeof userCompleteSchema>>({
    resolver: zodResolver(userCompleteSchema),
    defaultValues: {
      name: "",
      class: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof userCompleteSchema>) => {
    try {
      setPending(true);
      await userComplete(data);
    } catch (error) {
      if (error instanceof Error && error.message !== "NEXT_REDIRECT") {
        console.error("Erreur lors de l'enregistrement :", error);
      }
    } finally {
      setPending(false);
    }
  };

  return (
    <Form {...form}>
      <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
        {/* Nom complet de l'utilisateur */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="space-y-0.5">
              <FormLabel>Nom complet</FormLabel>
              <FormControl>
                <Input placeholder="Saisir le nom complet" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Classe */}
        <FormField
          control={form.control}
          name="class"
          render={({ field }) => (
            <FormItem className="space-y-0.5">
              <FormLabel>Classe</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl className="!w-full">
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionner une classe" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Liste des classes</SelectLabel>
                      {classesList.map((classItem) => (
                        <SelectItem value={classItem.value} key={classItem.value}>
                          <span className="pl-1">{classItem.label}</span>
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Bouton d'envoi */}
        <Button
          type="submit"
          disabled={pending}
          className="w-full cursor-pointer text-white"
        >
          {pending ? "Envoi en cours..." : "Soumettre"}
        </Button>
      </form>
    </Form>
  );
};

export default UserCompleteForm;
