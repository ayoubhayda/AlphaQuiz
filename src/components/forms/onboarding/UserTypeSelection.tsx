import { Button } from "@/components/ui/button";
import { Building2, UserRound } from "lucide-react";
import React from "react";
import { UserSelectionType } from "./OnboardingForm";

interface UserTypeSelectionProps {
  onUserTypeSelect: (type: UserSelectionType) => void;
}

const UserTypeSelection = ({ onUserTypeSelect }: UserTypeSelectionProps) => {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">Welcome! Lets get started</h2>
        <p className="text-muted-foreground">
          Choose how you would like to use our platform!
        </p>
      </div>

      <div className="grid gap-4">
        <Button
          onClick={() => onUserTypeSelect("company")}
          variant="outline"
          className="w-full h-auto p-6 items-center gap-4 border transition-all duration-200 hover:border-primary bg-primary/5 cursor-pointer"
        >
          <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Building2 className="size-6 text-primary" />
          </div>

          <div className="text-left">
            <h3 className="text-lg font-semibold">Company / Organization</h3>
            <p className="text-muted-foreground">
              Post jobs and find exceptional talent
            </p>
          </div>
        </Button>

        <Button
          onClick={() => onUserTypeSelect("jobSeeker")}
          variant="outline"
          className="w-full h-auto p-6 items-center gap-4 border transition-all duration-200 hover:border-primary bg-primary/5 cursor-pointer"
        >
          <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center">
            <UserRound className="size-6 text-primary" />
          </div>

          <div className="text-left">
            <h3 className="text-lg font-semibold">Job Seeker</h3>
            <p className="text-muted-foreground">
              Find your dream job opportunity
            </p>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default UserTypeSelection;
