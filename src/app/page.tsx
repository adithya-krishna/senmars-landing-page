import Link from "next/link";
import { Mail, MapPin, Menu, Phone, Quote, ShieldCheck } from "lucide-react";
import siteContent from "@/content/site.json";
import { BlurFade } from "@/components/ui/blur-fade";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
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
import { ParallaxMedia } from "@/components/ui/parallax-media";
import { SplashOverlay } from "@/components/ui/splash-overlay";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

export default function Home() {
  const { landing } = siteContent;

  return (
    <main className="min-h-screen bg-[var(--surface-canvas)] text-foreground">
      <SplashOverlay />
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--surface-border)] bg-[var(--surface-glass)] backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link
            href="#hero"
            className="font-[family-name:var(--font-poppins)] text-lg font-semibold tracking-tight"
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
                      "bg-transparent text-sm text-foreground/75 hover:bg-[var(--surface-soft)] hover:text-foreground"
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
              className="inline-flex size-9 items-center justify-center rounded-md border border-[var(--surface-border)] bg-background text-foreground hover:bg-[var(--surface-soft)]"
              aria-label="Toggle theme"
            />
            <Button asChild className="hidden bg-[var(--brand-strong)] text-black hover:bg-[var(--brand-accent)] md:inline-flex">
              <Link href="#contact">{landing.header.cta}</Link>
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-[var(--surface-border)] bg-background md:hidden"
                  aria-label="Open menu"
                >
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="w-[86%] border-[var(--surface-border)]">
                <SheetHeader>
                  <SheetTitle>{landing.header.brand}</SheetTitle>
                  <SheetDescription>Navigate through key sections.</SheetDescription>
                </SheetHeader>
                <nav className="flex flex-col gap-2 px-4 pb-6">
                  {landing.header.links.map((item) => (
                    <SheetClose asChild key={item.href}>
                      <Link
                        href={item.href}
                        className="rounded-md px-3 py-2 text-sm font-medium hover:bg-[var(--surface-soft)]"
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  ))}
                  <Separator className="my-2 bg-[var(--surface-border)]" />
                  <SheetClose asChild>
                    <Button asChild className="w-full bg-[var(--brand-strong)] text-black hover:bg-[var(--brand-accent)]">
                      <Link href="#contact">{landing.header.cta}</Link>
                    </Button>
                  </SheetClose>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <section id="hero" className="hero-radial pt-20">
        <div className="mx-auto grid min-h-[calc(100dvh-5rem)] w-full max-w-7xl items-center gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-14">
          <div>
            <BlurFade inView delay={0.04}>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-strong)]">
                {landing.hero.eyebrow}
              </p>
            </BlurFade>
            <BlurFade inView delay={0.08}>
              <h1 className="hero-title mt-4 text-balance">{landing.hero.title}</h1>
            </BlurFade>
            <BlurFade inView delay={0.14}>
              <p className="copy-lg mt-6 max-w-xl text-foreground/78">{landing.hero.description}</p>
            </BlurFade>
            <BlurFade inView delay={0.2}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Button asChild size="lg" className="bg-[var(--brand-strong)] text-black hover:bg-[var(--brand-accent)]">
                  <Link href="#contact">{landing.hero.primaryCta}</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-[var(--surface-border)]">
                  <Link href="#story">{landing.hero.secondaryCta}</Link>
                </Button>
              </div>
            </BlurFade>
          </div>

          <BlurFade inView delay={0.24}>
            <div className="relative overflow-hidden rounded-3xl border border-[var(--surface-border)] bg-[var(--surface-strong)] shadow-[0_32px_80px_-42px_rgba(0,0,0,0.55)]">
              <ParallaxMedia
                type="image"
                src={landing.hero.media.image}
                alt={landing.hero.media.caption}
                className="h-[440px] w-full"
                mediaClassName="object-center"
                priority
                signalReady
                speed={-12}
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/35 to-transparent p-6">
                <p className="text-sm font-medium text-white/92">{landing.hero.media.caption}</p>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      <section id="outcomes" className="border-y border-[var(--surface-border)] bg-[var(--surface-soft)] py-16 md:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <BlurFade inView>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-strong)]">
              {landing.outcomes.eyebrow}
            </p>
            <h2 className="section-title mt-3 max-w-3xl">{landing.outcomes.title}</h2>
          </BlurFade>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {landing.outcomes.items.map((item, index) => (
              <BlurFade key={item.title} inView delay={0.06 * (index + 1)}>
                <Card className="h-full rounded-2xl border-[var(--surface-border)] bg-background/80 shadow-none">
                  <CardHeader>
                    <CardTitle className="text-lg leading-tight">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-6 text-foreground/72">{item.description}</p>
                  </CardContent>
                </Card>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="story" className="section-mesh py-16 md:py-20">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
          {landing.storyBands.map((item, index) => (
            <BlurFade key={item.id} inView delay={0.08 * (index + 1)}>
              <div className="grid gap-6 rounded-3xl border border-[var(--surface-border)] bg-[var(--surface-strong)] p-4 md:p-6 lg:grid-cols-2 lg:gap-10 lg:p-8">
                <div className={cn("order-2 flex flex-col justify-center", index % 2 === 1 && "lg:order-1")}>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-strong)]">
                    {item.eyebrow}
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold tracking-tight text-balance">{item.title}</h3>
                  <p className="mt-5 max-w-xl text-base leading-7 text-foreground/76">{item.description}</p>
                </div>

                <div className={cn("order-1 overflow-hidden rounded-2xl", index % 2 === 1 && "lg:order-2")}>
                  <ParallaxMedia
                    type={item.mediaType as "image" | "video"}
                    src={item.mediaUrl}
                    alt={item.title}
                    poster={item.mediaPoster}
                    className="h-[300px] w-full"
                    speed={item.parallaxSpeed ?? (index % 2 === 0 ? 8 : -8)}
                    sizes="(max-width: 1024px) 100vw, 42vw"
                  />
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>

      <section id="proof" className="border-y border-[var(--surface-border)] bg-[var(--surface-inverse)] py-16 text-[var(--surface-inverse-foreground)] md:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <BlurFade inView>
            <h2 className="section-title max-w-3xl">{landing.proof.title}</h2>
          </BlurFade>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {landing.proof.stats.map((item, index) => (
              <BlurFade key={item.label} inView delay={0.07 * (index + 1)}>
                <div className="rounded-2xl border border-white/20 bg-white/6 p-5">
                  <p className="text-2xl font-bold tracking-tight">{item.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.12em] text-white/70">{item.label}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-16 md:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <BlurFade inView>
            <h2 className="section-title">{landing.testimonials.title}</h2>
          </BlurFade>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {landing.testimonials.items.map((item, index) => (
              <BlurFade key={item.name} inView delay={0.08 * (index + 1)}>
                <Card className="h-full rounded-2xl border-[var(--surface-border)] bg-[var(--surface-soft)]">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-base text-foreground/85">
                      <Quote className="size-4 text-[var(--brand-strong)]" />
                      Client Perspective
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="leading-7 text-foreground/82">{item.quote}</p>
                    <div className="mt-5">
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-sm text-foreground/62">
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

      <section id="contact" className="section-mesh border-y border-[var(--surface-border)] py-16 md:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
            <BlurFade inView>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-strong)]">
                  Consultation
                </p>
                <h2 className="section-title mt-3 max-w-xl">{landing.contact.title}</h2>
                <p className="copy-lg mt-5 max-w-xl text-foreground/78">{landing.contact.description}</p>

                <div className="mt-8 space-y-3 text-sm">
                  <p className="inline-flex items-center gap-2">
                    <Phone className="size-4 text-[var(--brand-strong)]" /> {landing.footer.phones.join(" | ")}
                  </p>
                  <p className="inline-flex items-center gap-2">
                    <Mail className="size-4 text-[var(--brand-strong)]" /> {landing.footer.email}
                  </p>
                  <p className="inline-flex items-start gap-2 leading-6 text-foreground/80">
                    <MapPin className="mt-1 size-4 text-[var(--brand-strong)]" /> {landing.footer.address}
                  </p>
                </div>
              </div>
            </BlurFade>

            <BlurFade inView delay={0.1}>
              <Card className="rounded-3xl border-[var(--surface-border)] bg-background/86">
                <CardHeader>
                  <CardTitle className="text-2xl">Request a secure disposal proposal</CardTitle>
                  <CardDescription className="text-base">
                    Share your requirements and our team will design a compliant program for your workflow.
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
                      <Label htmlFor="email">Work email</Label>
                      <Input id="email" name="email" type="email" placeholder="name@company.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" name="phone" type="tel" placeholder="Phone" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="enquiry">Requirements</Label>
                      <Textarea
                        id="enquiry"
                        name="enquiry"
                        placeholder="Tell us document volume, pickup frequency, and compliance needs"
                        className="min-h-32"
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full bg-[var(--brand-strong)] text-black hover:bg-[var(--brand-accent)] sm:w-auto">
                      {landing.contact.submitLabel}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </BlurFade>
          </div>
        </div>
      </section>

      <footer className="bg-[var(--surface-inverse)] py-12 text-[var(--surface-inverse-foreground)]">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.1fr_0.8fr_0.8fr_0.8fr]">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight">{landing.footer.company}</h3>
              <p className="mt-3 max-w-md text-white/82">{landing.footer.tagline}</p>
              <p className="mt-2 text-sm text-white/62">{landing.footer.established}</p>
              <div className="mt-5 space-y-2 text-sm text-white/78">
                <p>{landing.footer.address}</p>
                <p>{landing.footer.phones.join(" | ")}</p>
                <Link className="underline underline-offset-4" href={`mailto:${landing.footer.email}`}>
                  {landing.footer.email}
                </Link>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.08em] text-white">Navigation</p>
              <ul className="mt-4 flex flex-col gap-2 text-sm text-white/74">
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
              <p className="text-sm font-semibold uppercase tracking-[0.08em] text-white">Capabilities</p>
              <ul className="mt-4 space-y-2 text-sm text-white/74">
                <li className="inline-flex items-center gap-2">
                  <ShieldCheck className="size-4" /> Secure collection
                </li>
                <li className="inline-flex items-center gap-2">
                  <ShieldCheck className="size-4" /> Controlled destruction
                </li>
                <li className="inline-flex items-center gap-2">
                  <ShieldCheck className="size-4" /> Certificate issuance
                </li>
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.08em] text-white">Legal</p>
              <ul className="mt-4 flex flex-col gap-2 text-sm text-white/74">
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
          </div>
          <Separator className="my-8 bg-white/16" />
          <div className="flex flex-col gap-2 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
            <p>Outcome-led secure destruction programs for modern enterprises.</p>
            <p>
              © {new Date().getFullYear()} {landing.footer.company}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
