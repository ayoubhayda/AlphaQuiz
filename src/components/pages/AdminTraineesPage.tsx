import { getUsersMutation } from "@/lib/Services";
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
  GraduationCap,
  LibraryBig,
  Trophy,
  Users,
  MessageSquare,
  UserCheck,
  Clock,
  Medal,
} from "lucide-react";

import { Badge } from "../ui/badge";
import MainPagination from "../general/MainPagination";
import Link from "next/link";
import { Button } from "../ui/button";
import TrainessFilterSection from "../general/TrainessFilterSection";
import DeleteTraineeDialog from "../general/DeleteUserDialog";

const AdminTraineesPage = async ({
  currentPage,
  classSlug,
}: {
  currentPage: number;
  classSlug: string;
}) => {
  const { users, allUsers, totalPages } = await getUsersMutation(
    classSlug,
    currentPage
  );

  const getScoreBadgeColor = (score: number) => {
    if (score === 0)
      return "bg-zinc-500/20 dark:bg-zinc-400/20 text-zinc-700 dark:text-zinc-300";
    if (score >= 80)
      return "bg-green-500/20 text-green-700 dark:text-green-400";
    if (score >= 60)
      return "bg-yellow-500/20 text-yellow-700 dark:text-yellow-400";
    return "bg-red-500/20 text-red-700 dark:text-red-400";
  };

  const getScoreDisplay = (score: number) => {
    return score === 0 ? "En attente" : `${score}%`;
  };

  const getRankBadgeColor = (rank: number) => {
    if (rank === 1) return "bg-yellow-500/20 text-yellow-700 dark:text-yellow-400";
    if (rank === 2) return "bg-gray-400/20 text-gray-700 dark:text-gray-300";
    if (rank === 3) return "bg-orange-500/20 text-orange-700 dark:text-orange-400";
    return "bg-blue-500/20 text-blue-700 dark:text-blue-400";
  };

  const calculateRank = (index: number) => {
    return (currentPage - 1) * 10 + index + 1;
  };

  if (users.length === 0) {
    return (
      <div className="min-h-[calc(100vh-100px)] flex items-center justify-center">
        <EmptyState
          className="border-none"
          title="Aucun stagiaire trouvé"
          description="Il n'y a pas encore de stagiaires à afficher."
          buttonText="Réinitialiser"
          href="/trainees"
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
                <p className="text-2xl font-bold mb-1">{allUsers.length}</p>
                <p className="text-sm text-muted-foreground">
                  Total Stagiaires
                </p>
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
                    users.reduce((acc, curr) => acc + (curr.score || 0), 0) /
                      users.length
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
                <GraduationCap className="size-8 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold mb-1">
                  {new Set(users.map((u) => u.class)).size}
                </p>
                <p className="text-sm text-muted-foreground">Classes Actives</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-none py-1">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-500/10 rounded-lg">
                <MessageSquare className="size-8 text-purple-600" />
              </div>
              <div>
                <p className="text-2xl font-bold mb-1">
                  {users.reduce(
                    (acc, curr) => acc + (curr.answers?.length || 0),
                    0
                  )}
                </p>
                <p className="text-sm text-muted-foreground">Total Réponses</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Actions */}
      <Card className="shadow-none">
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div>
              <CardTitle className="text-2xl flex items-center gap-2">
                <UserCheck className="hidden md:block h-5 w-5" />
                Gestion des Stagiaires
              </CardTitle>
              <CardDescription>
                Consultez et gérez les stagiaires par classe avec leurs scores
                finaux
              </CardDescription>
            </div>
            <Link href="/">
              <Button
                variant="outline"
                className="flex items-center gap-2 cursor-pointer shadow-none"
              >
                <LibraryBig className="h-4 w-4" />
                <span className="hidden sm:inline">Gestion des</span>
                Réponses
              </Button>
            </Link>
          </div>
        </CardHeader>
        <CardContent>
          {/* Filters */}
          <TrainessFilterSection />

          {/* Desktop Table */}
          <div className="hidden md:block">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Rang</TableHead>
                  <TableHead>Stagiaire</TableHead>
                  <TableHead>Numéro</TableHead>
                  <TableHead>Classe</TableHead>
                  <TableHead>Réponses</TableHead>
                  <TableHead>Score</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user, index) => (
                  <TableRow
                    key={`${user.serialNumber}-${index}`}
                    className="hover:bg-muted/0 transition-colors duration-200"
                  >
                    <TableCell>
                      <Badge
                        className={`${getRankBadgeColor(
                          calculateRank(index)
                        )} font-semibold py-1 text-xs flex items-center gap-1.5 w-fit`}
                      >
                        <Medal className="h-3 w-3" />
                        #{calculateRank(index)}
                      </Badge>
                    </TableCell>
                    <TableCell className="font-medium">{user.name}</TableCell>
                    <TableCell>{user.serialNumber}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="py-1">{user.class}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="secondary"
                        className="bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 py-1"
                      >
                        {user.answers?.length || 0}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge
                        className={`${getScoreBadgeColor(
                          user.score || 0
                        )} font-semibold py-1 text-xs flex items-center gap-1.5`}
                      >
                        {(user.score || 0) === 0 && (
                          <Clock className="h-3 w-3" />
                        )}
                        {getScoreDisplay(user.score || 0)}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <DeleteTraineeDialog
                        userId={user.id}
                        traineeName={user.name!}
                        traineeClass={user.class!}
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
            {users.map((user, index) => (
              <Card
                key={`${user.serialNumber}-${index}`}
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
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold text-base text-foreground">
                              {user.name}
                            </h3>
                            <Badge
                              className={`${getRankBadgeColor(
                                calculateRank(index)
                              )} font-semibold px-2 py-0.5 text-xs flex items-center gap-1`}
                            >
                              <Medal className="h-3 w-3" />
                              #{calculateRank(index)}
                            </Badge>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            #{user.serialNumber}
                          </p>
                        </div>
                      </div>
                      <Badge
                        className={`${getScoreBadgeColor(
                          user.score || 0
                        )} font-semibold px-3 py-1 text-xs flex items-center gap-1`}
                      >
                        {(user.score || 0) === 0 && (
                          <Clock className="h-3 w-3" />
                        )}
                        {getScoreDisplay(user.score || 0)}
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
                          {user.class}
                        </Badge>
                      </div>

                      <div className="flex items-center justify-between py-3 border-b border-border/60 px-2 -mx-2">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center">
                            <MessageSquare className="h-4 w-4 text-purple-600" />
                          </div>
                          <span className="text-sm font-medium text-muted-foreground">
                            Réponses
                          </span>
                        </div>
                        <Badge
                          variant="secondary"
                          className="bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300"
                        >
                          {user.answers?.length || 0}
                        </Badge>
                      </div>
                    </div>

                    {/* Action Section */}
                    <div className="pt-3">
                      <DeleteTraineeDialog
                        userId={user.id}
                        traineeName={user.name!}
                        traineeClass={user.class!}
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

export default AdminTraineesPage;