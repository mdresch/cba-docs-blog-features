"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useAuth } from "@/lib/auth-context";
import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { routeDescriptions } from "@/lib/route-descriptions";
import Avatar from "@/components/posts/avatar"; // Import the Avatar component

export function Header() {
  const { isSignedIn, signOut, user } = useAuth(); // Ensure user data is available
  const pathname = usePathname();

  const getDescription = (segment: string) => {
    return routeDescriptions[segment.toLowerCase()] || `Page for ${segment}`;
  };

  return (
    <header className="flex items-center justify-between px-4 py-2 bg-background border-b">
      <div className="flex items-center space-x-4">
        <SidebarTrigger />
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-semibold">CBA</h1>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </HoverCardTrigger>
                  <HoverCardContent>{getDescription("home")}</HoverCardContent>
                </HoverCard>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              {pathname
                .split("/")
                .filter(Boolean)
                .map((segment, index, array) => (
                  <BreadcrumbItem key={segment}>
                    {index === array.length - 1 ? (
                      <BreadcrumbPage>{segment}</BreadcrumbPage>
                    ) : (
                      <>
                        <HoverCard>
                          <HoverCardTrigger asChild>
                            <BreadcrumbLink href={`/${array.slice(0, index + 1).join("/")}`}>{segment}</BreadcrumbLink>
                          </HoverCardTrigger>
                          <HoverCardContent>{getDescription(segment)}</HoverCardContent>
                        </HoverCard>
                        <BreadcrumbSeparator />
                      </>
                    )}
                  </BreadcrumbItem>
                ))}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        {isSignedIn ? (
          <>
            {user && <Avatar name={user.name} picture={user.picture} />} {/* Display the avatar */}
            <Button variant="ghost" onClick={signOut}>
              Sign Out
            </Button>
          </>
        ) : (
          <>
            <Button variant="ghost" asChild>
              <Link href="/auth/signin">Sign In</Link>
            </Button>
            <Button asChild>
              <Link href="/auth/signup">Sign Up</Link>
            </Button>
          </>
        )}
      </div>
    </header>
  );
}