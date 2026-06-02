"use client"

import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const navigationItems = [
  {
    title: "Platform",
    image: "/images/platform.jpg",
    featured: {
      title: "Unified Cybersecurity Platform",
      description:
        "A single platform for threat intelligence, attack surface management and cyber defense.",
      href: "/platform",
    },
    items: [
      {
        title: "Executive Dashboard",
        href: "/platform/dashboard",
        description: "Global visibility across your ecosystem.",
      },
      {
        title: "Asset Inventory",
        href: "/platform/assets",
        description: "Track and manage digital assets.",
      },
      {
        title: "Cyber Map",
        href: "/platform/geospatial",
        description: "Visualize threats geographically.",
      },
      {
        title: "Reporting",
        href: "/platform/reports",
        description: "Automated intelligence reports.",
      },
    ],
  },
  {
    title: "Threat Intelligence",
    items: [
      {
        title: "IOC Intelligence",
        href: "/threat-intelligence/iocs",
        description: "IPs, domains, URLs and hashes.",
      },
      {
        title: "Threat Actors",
        href: "/threat-intelligence/actors",
        description: "Track APT groups and campaigns.",
      },
      {
        title: "Malware Analysis",
        href: "/threat-intelligence/malware",
        description: "Malware families and indicators.",
      },
      {
        title: "Vulnerabilities",
        href: "/threat-intelligence/cves",
        description: "CVEs and exploit intelligence.",
      },
    ],
  },
  {
    title: "Attack Surface",
    image: "/images/asm.jpg",
    featured: {
      title: "Attack Surface Management",
      description:
        "Discover and monitor internet-facing assets continuously.",
      href: "/asm",
    },
    items: [
      {
        title: "Asset Discovery",
        href: "/asm/discovery",
        description: "Internet-wide reconnaissance.",
      },
      {
        title: "Exposure Monitoring",
        href: "/asm/exposure",
        description: "Detect exposed services.",
      },
      {
        title: "Subdomains",
        href: "/asm/subdomains",
        description: "Discover hidden infrastructure.",
      },
      {
        title: "Certificates",
        href: "/asm/certificates",
        description: "SSL certificate inventory.",
      },
    ],
  },
  {
    title: "Solutions",
    items: [
      {
        title: "Government",
        href: "/solutions/government",
        description: "National cyber defense.",
      },
      {
        title: "SOC Teams",
        href: "/solutions/soc",
        description: "Monitoring and threat detection.",
      },
      {
        title: "CERT / CSIRT",
        href: "/solutions/cert",
        description: "Incident response operations.",
      },
      {
        title: "Critical Infrastructure",
        href: "/solutions/critical",
        description: "Protect strategic sectors.",
      },
    ],
  },
]

const directLinks = [
  {
    title: "Pricing",
    href: "/pricing",
  },
  {
    title: "Documentation",
    href: "/docs",
  },
]

export function AppNavigationMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navigationItems.map((section) => (
          <NavigationMenuItem key={section.title}>
            <NavigationMenuTrigger>
              {section.title}
            </NavigationMenuTrigger>

            <NavigationMenuContent>
              {section.featured ? (
                <div className="grid w-[700px] grid-cols-[260px_1fr] gap-4 p-4">
                  <Link
                    href={section.featured.href}
                    className="group overflow-hidden rounded-lg border"
                  >
                    <div className="relative h-full min-h-[220px]">
                      <img
                        src={section.image}
                        alt={section.featured.title}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

                      <div className="absolute bottom-4 left-4 right-4">
                        <h4 className="font-semibold">
                          {section.featured.title}
                        </h4>

                        <p className="mt-1 text-sm text-muted-foreground">
                          {section.featured.description}
                        </p>
                      </div>
                    </div>
                  </Link>

                  <ul className="grid gap-2">
                    {section.items.map((item) => (
                      <ListItem
                        key={item.href}
                        href={item.href}
                        title={item.title}
                      >
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </div>
              ) : (
                <ul className="grid w-[600px] grid-cols-2 gap-2 p-4">
                  {section.items.map((item) => (
                    <ListItem
                      key={item.href}
                      href={item.href}
                      title={item.title}
                    >
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              )}
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}

        {directLinks.map((link) => (
          <NavigationMenuItem key={link.href}>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href={link.href}>
                {link.title}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function ListItem({
  title,
  children,
  href,
}: {
  title: string
  href: string
  children: React.ReactNode
}) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="block space-y-1 rounded-md p-3 leading-none transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          <div className="font-medium">
            {title}
          </div>

          <p className="line-clamp-2 text-sm text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}