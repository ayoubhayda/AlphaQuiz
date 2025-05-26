import { getAnswersMutation } from "@/lib/Services";
import React from "react";
import EmptyState from "../general/EmptyState";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import {
  BookOpen,
  Calendar,
  GraduationCap,
  LibraryBig,
  Trophy,
  Users,
} from "lucide-react";

import { Badge } from "../ui/badge";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import MainPagination from "../general/MainPagination";
import AdminFilterSection from "../general/adminFilterSection";
import DeleteAnswerDialog from "../general/DeleteAnswerDialog";

const AdminPage = async ({
  currentPage,
  moduleSlug,
  classSlug,
}: {
  currentPage: number;
  moduleSlug: string;
  classSlug: string;
}) => {
  const { answers, allAnswers, totalPages } = await getAnswersMutation(
    moduleSlug,
    classSlug,
    currentPage
  );

  const getScoreBadgeColor = (score: number) => {
    if (score >= 80)
      return "bg-green-500/20 text-green-700 dark:text-green-400";
    if (score >= 60)
      return "bg-yellow-500/20 text-yellow-700 dark:text-yellow-400";
    return "bg-red-500/20 text-red-700 dark:text-red-400";
  };

  if (answers.length === 0) {
    return (
      <div className="min-h-[calc(100vh-100px)] flex items-center justify-center">
        <EmptyState
          className="border-none"
          title="Aucune réponse trouvée"
          description="Il n'y a pas encore de réponses d'étudiants à afficher."
          buttonText="Réinitialiser"
          href="/"
        />
      </div>
    );
  }
  return (
    <div className="space-y-6 mt-8 mb-10">
      {/* Header Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="shadow-none py-1">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Users className="size-8 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold mb-1">{allAnswers.length}</p>
                <p className="text-sm text-muted-foreground">Total Réponses</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-none py-1">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-500/10 rounded-lg">
                <Trophy className="size-8 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold mb-1">
                  {Math.round(
                    allAnswers.reduce((acc, curr) => acc + curr.score, 0) /
                      allAnswers.length
                  ) || 0}
                  %
                </p>
                <p className="text-sm text-muted-foreground">Score Moyen</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-none py-1">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-500/10 rounded-lg">
                <BookOpen className="size-8 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold mb-1">
                  {new Set(allAnswers.map((a) => a.moduleSlug)).size}
                </p>
                <p className="text-sm text-muted-foreground">Modules Actifs</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-none py-1">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-500/10 rounded-lg">
                <GraduationCap className="size-8 text-purple-600" />
              </div>
              <div>
                <p className="text-2xl font-bold mb-1">
                  {new Set(allAnswers.map((a) => a.user.serialNumber)).size}
                </p>
                <p className="text-sm text-muted-foreground">
                  Étudiants Actifs
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Actions */}
      <Card className="shadow-none">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <LibraryBig className=" hidden sm:block h-5 w-5" />
            Gestion des Réponses Stagiaires
          </CardTitle>
          <CardDescription>
            Consultez et gérez les réponses des stagiaires par classe et module
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Filters */}
          <AdminFilterSection />

          {/* Desktop Table */}
          <div className="hidden md:block">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Stagiaire</TableHead>
                  <TableHead>Numéro</TableHead>
                  <TableHead>Classe</TableHead>
                  <TableHead>Module</TableHead>
                  <TableHead>Score</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {answers.map((answer, index) => (
                  <TableRow
                    key={`${answer.user.serialNumber}-${answer.moduleSlug}-${index}`}
                    className="hover:bg-muted/0 transition-colors duration-200"
                  >
                    <TableCell className="font-medium">
                      {answer.user.name}
                    </TableCell>
                    <TableCell>{answer.user.serialNumber}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{answer.user.class}</Badge>
                    </TableCell>
                    <TableCell>{answer.moduleName}</TableCell>
                    <TableCell>
                      <Badge className={getScoreBadgeColor(answer.score)}>
                        {answer.score}%
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {format(new Date(answer.createdAt), "dd/MM/yyyy", {
                        locale: fr,
                      })}
                    </TableCell>
                    <TableCell className="text-right">
                      <DeleteAnswerDialog
                        answerId={answer.id}
                        studentName={answer.user.name!}
                        moduleName={answer.moduleName}
                        variant="desktop"
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Mobile Table */}
          <div className="md:hidden space-y-4">
            {answers.map((answer, index) => (
              <Card
                key={`${answer.user.serialNumber}-${answer.moduleSlug}-${index}`}
                className="shadow-none overflow-hidden p-0"
              >
                <CardContent className="p-0">
                  {/* Header Section */}
                  <div className="bg-muted/80 p-4 border-b border-border">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Users className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-base text-foreground">
                            {answer.user.name}
                          </h3>
                          <p className="text-xs text-muted-foreground">
                            #{answer.user.serialNumber}
                          </p>
                        </div>
                      </div>
                      <Badge
                        className={`${getScoreBadgeColor(
                          answer.score
                        )} font-semibold px-3 py-1 text-xs`}
                      >
                        {answer.score}%
                      </Badge>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="px-4 pb-3 space-y-0">
                    <div className="grid grid-cols-1">
                      <div className="flex items-center justify-between py-3 border-b border-border/60 px-2 -mx-2">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                            <GraduationCap className="h-4 w-4 text-blue-600" />
                          </div>
                          <span className="text-sm font-medium text-muted-foreground">
                            Classe
                          </span>
                        </div>
                        <Badge
                          variant="secondary"
                          className="bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border-blue-200 dark:border-blue-800"
                        >
                          {answer.user.class}
                        </Badge>
                      </div>

                      <div className="flex items-center justify-between py-3 border-b border-border/60 px-2 -mx-2">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center">
                            <BookOpen className="h-4 w-4 text-purple-600" />
                          </div>
                          <span className="text-sm font-medium text-muted-foreground">
                            Module
                          </span>
                        </div>
                        <span className="text-sm font-semibold text-foreground text-right max-w-[50%] truncate">
                          {answer.moduleName}
                        </span>
                      </div>

                      <div className="flex items-center justify-between py-3 border-b border-border/60 px-2 -mx-2">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center">
                            <Calendar className="h-4 w-4 text-green-600" />
                          </div>
                          <span className="text-sm font-medium text-muted-foreground">
                            Date
                          </span>
                        </div>
                        <span className="text-sm font-semibold text-foreground">
                          {format(new Date(answer.createdAt), "dd/MM/yyyy", {
                            locale: fr,
                          })}
                        </span>
                      </div>
                    </div>

                    {/* Action Section */}
                    <div className="pt-3">
                      <DeleteAnswerDialog
                        answerId={answer.id}
                        studentName={answer.user.name!}
                        moduleName={answer.moduleName}
                        variant="mobile"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
      {/* Pagination */}
      <MainPagination totalPages={totalPages} currentPage={currentPage} />
    </div>
  );
};

export default AdminPage;
