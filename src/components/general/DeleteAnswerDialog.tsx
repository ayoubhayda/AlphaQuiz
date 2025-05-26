"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { deleteAnswer } from "@/lib/actions";

interface DeleteAnswerDialogProps {
  answerId: string;
  studentName: string;
  moduleName: string;
  variant?: "desktop" | "mobile";
}

const DeleteAnswerDialog: React.FC<DeleteAnswerDialogProps> = ({
  answerId,
  studentName,
  moduleName,
  variant = "desktop",
}) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      await deleteAnswer(answerId);

      // Refresh the page to sync data
      router.refresh();

      // Close dialog
      setOpen(false);
    } catch (error) {
      console.error("Error deleting answer:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  const DesktopTrigger = (
    <Button
      variant="outline"
      size="icon"
      className="cursor-pointer shadow-none"
      asChild
    >
      <div>
        <Trash2 className="h-4 w-4" />
      </div>
    </Button>
  );

  const MobileTrigger = (
    <Button
      variant="ghost"
      size="sm"
      className="w-full justify-center gap-2 h-10 text-red-500 hover:text-red-500/80 hover:bg-red-500/10 rounded-lg font-medium cursor-pointer transition-all duration-200"
      asChild
    >
      <div>
        <Trash2 className="h-4 w-4" />
        Supprimer
      </div>
    </Button>
  );

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        {variant === "mobile" ? MobileTrigger : DesktopTrigger}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Confirmer la suppression</AlertDialogTitle>
          <AlertDialogDescription>
            Êtes-vous sûr de vouloir supprimer la réponse de{" "}
            <span className="font-semibold">{studentName}</span> pour le module{" "}
            <span className="font-semibold">{moduleName}</span> ?
            <br />
            <br />
            Cette action est irréversible et supprimera définitivement toutes
            les données associées à cette réponse.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={isDeleting} className="cursor-pointer">Annuler</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDelete}
            disabled={isDeleting}
            className="bg-red-500 hover:bg-red-600 text-white cursor-pointer"
          >
            {isDeleting ? (
              <>
                <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                Suppression...
              </>
            ) : (
              "Supprimer"
            )}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteAnswerDialog;
