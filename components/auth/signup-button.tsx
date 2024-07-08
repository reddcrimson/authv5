"use client";

import { useRouter } from "next/navigation";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface SignupButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

const SignupButton = ({
  children,
  mode = "redirect",
  asChild,
}: SignupButtonProps) => {
  const router = useRouter();
  const onClick = () => {
    router.push("/signup");
  };

  if (mode === "modal") {
    return (
      <span>
        TO:DO Implement Modal
      </span>
    )
  }

  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};

export default SignupButton;