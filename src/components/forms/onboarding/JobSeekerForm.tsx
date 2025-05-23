import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { jobSeekerSchema } from "@/utils/zodSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import PDFImage from "@/assets/public/pdf.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { TrashIcon } from "lucide-react";
import { UploadDropzone } from "@/app/utils/uploadthing";
import { createJobSeeker } from "@/lib/actions";

const JobSeekerForm = () => {
  const [pending, setPending] = useState(false);
  const form = useForm<z.infer<typeof jobSeekerSchema>>({
    resolver: zodResolver(jobSeekerSchema),
    defaultValues: {
      name: "",
      about: "",
      resume:
        "https://6sn8pk7mrd.ufs.sh/f/1T4FQGtliscoyMnL6V8SpFGxP0Q9KWHywR4izk6aTX5uVo3N",
    },
  });

  const onSubmit = async (data: z.infer<typeof jobSeekerSchema>) => {
    try {
      setPending(true);
      await createJobSeeker(data);
    } catch (error) {
      if (error instanceof Error && error.message !== "NEXT_REDIRECT") {
        console.error("Error creating job seeker:", error);
      }
    } finally {
      setPending(false);
    }
  };
  return (
    <Form {...form}>
      <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
        {/* User Full Name */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="space-y-0.5">
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter full name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* About field */}
        <FormField
          control={form.control}
          name="about"
          render={({ field }) => (
            <FormItem className="space-y-0.5">
              <FormLabel>Short Bio</FormLabel>
              <FormControl>
                <Textarea placeholder="Tell us about yourself..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Resume field */}
        <FormField
          control={form.control}
          name="resume"
          render={({ field }) => (
            <FormItem className="space-y-0.5">
              <FormLabel>Resume (PDF)</FormLabel>
              <FormControl>
                {field.value ? (
                  <div className="relative w-fit mt-1.5">
                    <Image
                      src={PDFImage}
                      alt="Resume"
                      width={100}
                      height={100}
                      className="rounded-lg "
                    />
                    <Button
                      variant="destructive"
                      type="button"
                      size="icon"
                      className="absolute -top-2 -right-2 rounded-full cursor-pointer !bg-red-600/80 hover:!bg-red-600/95 transition-all duration-200 ease-in-out !size-8"
                      onClick={() => {
                        field.onChange("");
                      }}
                    >
                      <TrashIcon className="h-4 w-4" />
                    </Button>
                  </div>
                ) : (
                  <UploadDropzone
                    endpoint={"pdfUploader"}
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

export default JobSeekerForm;
