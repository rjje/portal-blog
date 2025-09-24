import React from "react";
import Link from "next/link";
import { Card, CardTitle, CardContent } from "@/components/ui/card";
import {
  Asterisk,
  CalendarClockIcon,
  FileText,
  Home,
  NotebookText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Newsletter } from "@/components/Newsletter";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import type { Metadata } from "next";
import type { TypePages } from "@/types";

const pages: TypePages[] = [
  { slug: "about", title: "About us" },
  { slug: "term-and-conditions", title: "Term And Conditions" },
  { slug: "privacy-policy", title: "Privacy Policy" },
];

const filterBySlug = (pages: TypePages[], slug: string) =>
  pages.find((page) => page.slug === slug);

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const slug = (await params).slug;
  const filtered = filterBySlug(pages, slug); // Usage
  return { title: ` ${filtered?.title} | PORTAL` };
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const filtered = filterBySlug(pages, slug); // Usage
  return (
    <section className="mx-auto flex flex-col">
      <div className="container mb-10">
        <Breadcrumb className="mb-2 capitalize">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                className="flex flex-row items-center gap-x-3 capitalize"
                href="/"
              >
                <Home size={22} />
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="flex flex-row items-center gap-x-2 capitalize">
                <NotebookText size={22} />
                {filtered?.title}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="mx-auto mt-16 mb-3 flex max-w-5xl flex-col items-center gap-4 text-center">
          <h1 className="text-center text-4xl leading-20 font-extrabold text-balance capitalize md:text-6xl">
            {" "}
            {filtered?.title}
          </h1>
        </div>
      </div>
      <article className="mx-auto prose max-w-3xl px-6 lg:prose-lg dark:prose-invert">
        <p>
          Cupidatat voluptate deserunt non ea exercitation sit consequat ullamco
          ex nostrud elit magna. Nulla id proident labore pariatur pariatur ex
          ut ad enim et labore.
        </p>
        <h2>Est do minim eiusmod culpa.</h2>
        <p>
          <a href="https://google.com">Culpa laboris aliquip ea consectetur</a>{" "}
          mollit ea ipsum sint qui culpa laboris dolor adipisicing proident. Et
          officia consequat do nulla tempor cupidatat elit. Consequat proident
          magna dolor labore et esse aute dolor sit ea.
        </p>
        <p>
          Sint amet deserunt commodo aute consectetur Lorem qui aliqua tempor
          nulla. `Velit non` ea qui aliquip. Qui laborum labore excepteur duis
          velit velit enim enim veniam.
        </p>
        <blockquote>
          <p>
            Pariatur laboris commodo est laboris. In incididunt pariatur aliquip
            ut elit irure magna anim sunt. Anim labore ut sit magna ex proident
            dolor anim cupidatat adipisicing.
          </p>
        </blockquote>
        <h2>5 Things</h2>
        <ul>
          <li>Minim est mollit commodo ad sit quis.</li>
          <li>
            Tempor id magna eu veniam sint et mollit magna laboris reprehenderit
            Lorem proident.
          </li>
          <li>Laborum id sint ex magna nulla est labore non.</li>
          <li>
            Pariatur qui qui ex duis nulla et aute magna incididunt cupidatat
            commodo.
          </li>
          <li>Sint amet deserunt commodo aute consectetur.</li>
        </ul>
        <p>
          Aliquip veniam aliquip nisi non amet pariatur quis. Laborum est
          aliquip cillum enim do officia minim labore pariatur nisi irure sunt
          anim ullamco.
        </p>
        <h2> What is Lorem Ipsum Meaning ?</h2>
        <p>
          Sint qui enim non Lorem aliquip nulla sint. Aute laborum tempor
          adipisicing officia magna fugiat sint cupidatat. Enim Lorem officia
          anim cillum ea tempor dolore voluptate:
        </p>
        <ul>
          <li>
            <strong>Excepteur aliqua</strong> minim Lorem officia ullamco
            pariatur.
          </li>
          <li>
            <strong>Fugiat</strong> sint pariatur tempor ullamco sit ea
            excepteur sint ut qui excepteur dolore anim.
          </li>
          <li>
            <strong>Eiusmod</strong> id dolor sit fugiat eu eiusmod tempor
            proident.
          </li>
          <li>
            <strong>Officia enim</strong> dolore excepteur proident incididunt
            et sint. Non laboris veniam nisi adipisicing magna.
          </li>
        </ul>
        <p>
          Nulla ut irure aliqua ex aliquip nisi non amet excepteur ipsum laboris
          voluptate elit. Aliquip proident magna Lorem amet esse laborum cillum.
          Culpa aute laborum velit velit in do.
        </p>
        <h2> Voluptate tempor</h2>
        <p>
          Nisi ad aliquip minim quis cupidatat eu minim voluptate tempor
          consequat irure eu. Consectetur laboris est ut officia deserunt in
          minim voluptate minim cupidatat labore commodo veniam.
        </p>
        <ul>
          <li>Commodo deserunt cupidatat</li>
          <li>Deserunt commodo est</li>
          <li>Lorem eiusmod proident</li>
          <li>Sunt sit voluptate</li>
        </ul>
        <h2> Conclusion</h2>
        <p>
          Consectetur aliqua eu veniam consequat eu adipisicing id ullamco
          incididunt. Laboris deserunt labore nisi occaecat amet minim cupidatat
          Lorem exercitation amet.
        </p>
        <p>
          {" "}
          Occaecat et esse sunt dolore nisi aliquip et non do sint. Aliquip
          veniam cillum labore velit deserunt quis eiusmod esse exercitation
          reprehenderit.
        </p>
        <p>
          {" "}
          Elit ad tempor aute laboris dolor officia cillum cupidatat eiusmod
          quis nulla officia esse incididunt.
        </p>
      </article>
    </section>
  );
}
