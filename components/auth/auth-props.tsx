"use client";

import { CardFooter, CardHeader, CardContent } from "@/components/ui/card";
import { Social } from "@/components/auth/social";
import BackButton from "@/components/auth/back-button";
import Header from "@/components/auth/header";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

const CardWrapper = ({
  headerLabel,
  children,
  backButtonLabel,
  backButtonHref,
  showSocial,
}: CardWrapperProps) => {
  return (
    <div>
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent>
      {children}
      </CardContent>
      {showSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}
      <CardFooter>
      <BackButton label={backButtonLabel} href={backButtonHref} />
      </CardFooter>
    </div>
  );
};

export default CardWrapper;