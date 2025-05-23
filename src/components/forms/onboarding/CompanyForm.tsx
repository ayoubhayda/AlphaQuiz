"use client";
import { companySchema } from "@/utils/zodSchemas";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { countryList } from "@/utils/countriesList";
import { Textarea } from "@/components/ui/textarea";
import { createCompany } from "@/lib/actions";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { UploadDropzone } from "@/app/utils/uploadthing";
import { TrashIcon } from "lucide-react";

const CompanyForm = () => {
  const [pending, setPending] = useState(false);
  const form = useForm<z.infer<typeof companySchema>>({
    resolver: zodResolver(companySchema),
    defaultValues: {
      name: "",
      about: "",
      location: "",
      logo: "https://6sn8pk7mrd.ufs.sh/f/1T4FQGtliscoyjHZZ1g8SpFGxP0Q9KWHywR4izk6aTX5uVo3",
      website: "",
      xAccount: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof companySchema>) => {
    try {
      setPending(true);
      await createCompany(data);
    } catch (error) {
      if (error instanceof Error && error.message !== "NEXT_REDIRECT") {
        console.error("Error creating company:", error);
      }
    } finally {
      setPending(false);
    }
  };
  return (
    <Form {...form}>
      <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Company name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="space-y-0.5">
                <FormLabel>Company Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter company name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Company location */}
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem className="space-y-0.5">
                <FormLabel>Company Location</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl className="!w-full">
                      <SelectTrigger>
                        <SelectValue placeholder="Select Location" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Worldwid</SelectLabel>
                        <SelectItem value="worldwide">
                          <span>🌍</span>
                          <span className="pl-1">Worldwide / Remote</span>
                        </SelectItem>
                      </SelectGroup>
                      <SelectGroup>
                        <SelectLabel>Location</SelectLabel>
                        {countryList.map((country) => (
                          <SelectItem value={country.name} key={country.code}>
                            <span>{country.flagEmoji}</span>
                            <span className="pl-1">{country.name}</span>
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
        </div>

        {/* Second section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Company website */}
          <FormField
            control={form.control}
            name="website"
            render={({ field }) => (
              <FormItem className="space-y-0.5">
                <FormLabel>Website</FormLabel>
                <FormControl>
                  <Input placeholder="https://yourcompany.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Company x account */}
          <FormField
            control={form.control}
            name="xAccount"
            render={({ field }) => (
              <FormItem className="space-y-0.5">
                <FormLabel>X (Twitter) Account</FormLabel>
                <FormControl>
                  <Input placeholder="@yourcompany" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* About field */}
        <FormField
          control={form.control}
          name="about"
          render={({ field }) => (
            <FormItem className="space-y-0.5">
              <FormLabel>About</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us about your company..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Logo field */}
        <FormField
          control={form.control}
          name="logo"
          render={({ field }) => (
            <FormItem className="space-y-0.5">
              <FormLabel>Company Logo</FormLabel>
              <FormControl>
                {field.value ? (
                  <div className="relative w-fit mt-1.5">
                    <Image
                      src={field.value}
                      alt="Company Logo"
                      width={100}
                      height={100}
                      className="rounded-lg "
                    />
                    <Button
                      variant="destructive"
                      type="button"
                      size="icon"
                      className="absolute -top-2 -right-2 rounded-full cursor-pointer !bg-red-600/80 hover:!bg-red-600/95 transition-all duration-200 ease-in-out !size-8"
                      onClick={()=>{
                        field.onChange("");
                      }}
                    >
                      <TrashIcon className="h-4 w-4" />
                    </Button>
                  </div>
                ) : (
                  <UploadDropzone
                    endpoint={"imageUploader"}
                    onClientUploadComplete={(files) => {
                      field.onChange(files[0].ufsUrl);
                    }}
                    onUploadError={() => {
                      console.log("Error uploading file");
                    }}
                    className="ut-button:bg-primary ut-button:text-white ut-button:hover:bg-primary/90 ut-label:text-muted-foreground ut-button:cursor-pointer ut-allowed-content:text-muted-foreground border-primary"
                  />
                )}
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submi button */}
        <Button
          type="submit"
          disabled={pending}
          className="w-full cursor-pointer text-white"
        >
          {pending ? "Submitting..." : "Continue"}
        </Button>
      </form>
    </Form>
  );
};

export default CompanyForm;
