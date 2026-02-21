import Link from "next/link";
import {
  Mail,
  MapPin,
  Menu,
  Phone,
  Quote,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import siteContent from "@/content/site.json";
import { BlurFade } from "@/components/ui/blur-fade";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Marquee } from "@/components/ui/marquee";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

export default function Home() {
  const { landing } = siteContent;

  return (
    <main className="min-h-screen bg-gradient-to-br from-teal-50 via-background to-cyan-50/80 text-foreground dark:from-[#081413] dark:via-background dark:to-[#0b1817]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link
            href="#hero"
            className="font-[family-name:var(--font-poppins)] text-lg font-semibold tracking-tight text-teal-800 dark:text-teal-100"
          >
            {landing.header.brand}
          </Link>

          <NavigationMenu viewport={false} className="hidden md:flex">
            <NavigationMenuList className="gap-1">
              {landing.header.links.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent text-sm text-foreground/80 hover:text-foreground"
                    )}
                  >
                    {item.label}
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-2">
            <AnimatedThemeToggler
              className="inline-flex size-9 items-center justify-center rounded-md border border-border bg-background text-foreground hover:bg-accent"
              aria-label="Toggle theme"
            />

            <Button asChild className="hidden md:inline-flex">
              <Link href="#contact">{landing.header.cta}</Link>
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden" aria-label="Open menu">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="w-[86%]">
                <SheetHeader>
                  <SheetTitle>{landing.header.brand}</SheetTitle>
                  <SheetDescription>Navigate through the page sections.</SheetDescription>
                </SheetHeader>
                <nav className="flex flex-col gap-2 px-4 pb-6">
                  {landing.header.links.map((item) => (
                    <SheetClose asChild key={item.href}>
                      <Link
                        href={item.href}
                        className="rounded-md px-3 py-2 text-sm font-medium hover:bg-accent"
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  ))}
                  <Separator className="my-2" />
                  <SheetClose asChild>
                    <Button asChild className="w-full">
                      <Link href="#contact">{landing.header.cta}</Link>
                    </Button>
                  </SheetClose>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <section id="hero" className="pt-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid min-h-[calc(100dvh-4.5rem)] items-center gap-8 py-8 md:min-h-[calc(100dvh-5rem)] lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <BlurFade inView delay={0.05}>
              <Badge variant="secondary" className="mb-5 rounded-full px-3.5 py-1">
                {landing.hero.eyebrow}
              </Badge>
            </BlurFade>
            <BlurFade inView delay={0.1}>
              <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance md:text-5xl lg:text-6xl">
                Secure Document Destruction for a
                <span className="text-teal-700 dark:text-teal-300"> Safer Business</span>
              </h1>
            </BlurFade>
            <BlurFade inView delay={0.16}>
              <p className="text-muted-foreground mt-5 max-w-2xl text-xl">
                {landing.hero.description}
              </p>
            </BlurFade>
            <BlurFade inView delay={0.22}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button asChild size="lg" className="shadow-lg shadow-primary/20">
                  <Link href="#contact">{landing.hero.primaryCta}</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="#about">{landing.hero.secondaryCta}</Link>
                </Button>
              </div>
            </BlurFade>
          </div>

          <BlurFade inView delay={0.24}>
            <Card className="overflow-hidden border-0 bg-gradient-to-br from-teal-800 to-teal-950 text-white shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl">Compliance-ready shredding operations</CardTitle>
                <CardDescription className="text-teal-50/90">
                  Confidential document handling with secure pickup, controlled destruction and complete service accountability.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-3 sm:grid-cols-3">
                {landing.hero.stats.map((item) => (
                  <div key={item.label} className="rounded-xl border border-white/20 bg-white/10 p-3">
                    <p className="text-2xl font-bold tracking-tight">{item.value}</p>
                    <p className="text-xs uppercase tracking-[0.12em] text-white/80">{item.label}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </BlurFade>
        </div>
        </div>
      </section>

      <section id="clients" className="overflow-hidden border-y bg-card/40 py-12 md:py-14">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <BlurFade inView>
            <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight md:text-3xl">
              {landing.clients.title}
            </h2>
          </BlurFade>
        </div>
        <BlurFade inView delay={0.08}>
          <div className="relative mt-6">
            <Marquee pauseOnHover className="w-full [--duration:28s] [--gap:0.9rem] py-3">
              {landing.clients.logos.map((logo) => (
                <div
                  key={logo}
                  className="rounded-xl border border-border/80 bg-background px-5 py-3 text-sm font-semibold tracking-wide text-muted-foreground"
                >
                  {logo}
                </div>
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background via-background/75 to-transparent sm:w-28" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background via-background/75 to-transparent sm:w-28" />
          </div>
        </BlurFade>
      </section>

      <section id="testimonials" className="bg-zinc-950 py-16 text-zinc-100 md:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <BlurFade inView>
            <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight md:text-4xl">
              {landing.testimonials.title}
            </h2>
          </BlurFade>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {landing.testimonials.items.map((item, index) => (
              <BlurFade key={item.name} inView delay={0.08 * (index + 1)}>
                <Card className="h-full border-white/15 bg-white/[0.04] text-zinc-100">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-base font-semibold text-zinc-200">
                      <Quote className="size-4" /> Client Voice
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="leading-7">{item.quote}</p>
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-sm text-zinc-400">
                        {item.role}, {item.company}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <BlurFade inView>
            <div>
              <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight text-balance md:text-4xl">
                {landing.about.title}
              </h2>
              <p className="text-muted-foreground mt-5 max-w-2xl text-xl">
                {landing.about.description}
              </p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {landing.about.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 rounded-xl border bg-card p-4">
                    <ShieldCheck className="mt-0.5 size-4 text-teal-600 dark:text-teal-300" />
                    <span className="text-sm leading-6">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </BlurFade>

          <BlurFade inView delay={0.1}>
            <Card className="h-full bg-gradient-to-br from-teal-50 to-white dark:from-zinc-900 dark:to-zinc-950">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Sparkles className="size-5 text-teal-600 dark:text-teal-300" />
                  Why teams choose us
                </CardTitle>
                <CardDescription className="text-base leading-7">
                  Security-first operations with transparent service proof and accountable process control.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-3">
                {["Integrity", "Trustworthiness", "Reliability", "Customer Service"].map((item) => (
                  <div key={item} className="rounded-lg border bg-background px-3 py-2 text-sm font-semibold">
                    {item}
                  </div>
                ))}
              </CardContent>
            </Card>
          </BlurFade>
        </div>
      </section>

      <section id="contact" className="border-y bg-muted/20 py-16 md:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <BlurFade inView>
              <div>
                <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight md:text-4xl">
                  {landing.contact.title}
                </h2>
                <p className="text-muted-foreground mt-4 max-w-2xl text-xl">
                  {landing.contact.description}
                </p>
                <div className="mt-8 space-y-3 text-sm">
                  <p className="inline-flex items-center gap-2">
                    <Phone className="size-4" /> {landing.footer.phones.join(" | ")}
                  </p>
                  <p className="inline-flex items-center gap-2">
                    <Mail className="size-4" /> {landing.footer.email}
                  </p>
                  <p className="inline-flex items-start gap-2 leading-6">
                    <MapPin className="mt-1 size-4" /> {landing.footer.address}
                  </p>
                </div>
              </div>
            </BlurFade>

            <BlurFade inView delay={0.08}>
              <Card>
                <CardHeader>
                  <CardTitle>Send your enquiry</CardTitle>
                  <CardDescription>
                    Fill in the details and we will get back with a secure disposal plan.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First name</Label>
                        <Input id="firstName" name="firstName" placeholder="First name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last name</Label>
                        <Input id="lastName" name="lastName" placeholder="Last name" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" type="email" placeholder="Email" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" name="phone" type="tel" placeholder="Phone" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="enquiry">Enquiry</Label>
                      <Textarea
                        id="enquiry"
                        name="enquiry"
                        placeholder="Tell us your shredding requirement"
                        className="min-h-32"
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full sm:w-auto">
                      {landing.contact.submitLabel}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </BlurFade>
          </div>
        </div>
      </section>

      <footer className="bg-zinc-950 py-12 text-zinc-200">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.1fr_0.8fr_0.8fr_0.8fr]">
            <div>
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">{landing.footer.company}</h3>
              <p className="mt-3 max-w-md text-zinc-300/90">{landing.footer.tagline}</p>
              <p className="mt-2 text-sm text-zinc-400">{landing.footer.established}</p>
              <div className="mt-5 space-y-2 text-sm text-zinc-300">
                <p>{landing.footer.address}</p>
                <p>{landing.footer.phones.join(" | ")}</p>
                <Link className="underline underline-offset-4" href={`mailto:${landing.footer.email}`}>
                  {landing.footer.email}
                </Link>
              </div>
            </div>

            <div>
              <p className="font-[family-name:var(--font-poppins)] text-sm font-semibold uppercase tracking-[0.08em] text-zinc-100">
                Quick Links
              </p>
              <ul className="mt-4 flex flex-col gap-2 text-sm text-zinc-300">
                {landing.header.links.map((item) => (
                  <li key={item.href}>
                    <Link className="hover:text-white" href={item.href}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-[family-name:var(--font-poppins)] text-sm font-semibold uppercase tracking-[0.08em] text-zinc-100">
                Legal
              </p>
              <ul className="mt-4 flex flex-col gap-2 text-sm text-zinc-300">
                <li>
                  <Link className="hover:text-white" href="#">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-white" href="#">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-white" href="#">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-[family-name:var(--font-poppins)] text-sm font-semibold uppercase tracking-[0.08em] text-zinc-100">
                Connect
              </p>
              <ul className="mt-4 flex flex-col gap-2 text-sm text-zinc-300">
                <li>
                  <Link className="hover:text-white" href="#" target="_blank" rel="noreferrer">
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-white" href="#" target="_blank" rel="noreferrer">
                    X (Twitter)
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-white" href="#" target="_blank" rel="noreferrer">
                    Facebook
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <Separator className="my-8 bg-white/15" />
          <div className="flex flex-col gap-2 text-xs text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
            <p>Secure destruction services with consistent chain-of-custody assurance.</p>
            <p>© {new Date().getFullYear()} {landing.footer.company}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
