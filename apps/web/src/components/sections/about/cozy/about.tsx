import React from "react";
import Link from "next/link";
import TextReveal from "@/components/fancy/text-reveal";
import MotionWrap from "@/components/motion-wrap";
import { contact } from "@/components/sections/contact/config";

import { cn } from "@repo/ui";
import { Button, buttonVariants } from "@repo/ui/button";
import { Icons } from "@repo/ui/icons";

function About() {
  return (
    <MotionWrap className="w-full py-24 lg:py-32" id="about">
      <div className="px-4 md:px-6">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          {/* First Column: About Me */}
          <div className="space-y-4">
            <TextReveal
              as="h2"
              className="text-4xl leading-tight font-bold tracking-tighter sm:text-5xl md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight"
            >
              About Me
            </TextReveal>
            <div className="space-y-4">
              <TextReveal
                as="p"
                className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"
              >
                I’m a Fullstack Engineer at Wavelet Solutions in Malaysia, where
                I focus on building scalable ERP software solutions for
                businesses. I have a strong background in AI and data science,
                and published a paper on using Deep Learning for Ecoacoustic
                analysis to help with ecosystem management. Right now, I’m
                leading the development of a large-scale event management ERP
                system using Angular and Spring Boot.
              </TextReveal>
              <div className="flex gap-2">
                <Button asChild variant={"outline"}>
                  <a href="resume.pdf" target="_blank">
                    View Resume <Icons.arrowUpRight className="ml-2 size-5" />
                  </a>
                </Button>
                <Button asChild>
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Second Column: Contact Info (Email & Socials) */}
          <div className="flex flex-col gap-4 py-3 lg:order-2 lg:w-1/4 lg:pl-3">
            <div>
              <p className="text-muted-foreground text-sm">Email</p>
              <Link
                className={cn(
                  buttonVariants({ variant: "link" }),
                  "text-md h-min w-min p-0 font-normal",
                )}
                href={`mailto:${contact.email}`}
              >
                {contact.email}
              </Link>
            </div>
            <div>
              <p className="text-muted-foreground text-sm">Socials</p>
              <div className="flex flex-col gap-1">
                {contact.socials.map(({ Icon, name, href }, index) => (
                  <Link
                    key={`contact-social_${index}`}
                    target="_blank"
                    href={href}
                    className={cn(
                      buttonVariants({ variant: "link" }),
                      "text-md h-min w-min gap-1 !p-0",
                    )}
                  >
                    {Icon && <Icon className="h-4 w-4" />}
                    {name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MotionWrap>
  );
}

export default About;
