"use client"

import { useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Card } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function SpaceViewer() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [loadingTab, setLoadingTab] = useState<string | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container flex items-center justify-between h-16">
          <h1 className="text-2xl font-bold">Space Explorer</h1>
          <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </header>

      <main className="container py-6">
        <Tabs defaultValue="nasa" className="space-y-4">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="nasa">NASA Eyes</TabsTrigger>
            <TabsTrigger value="sky-live">The Sky Live</TabsTrigger>
            <TabsTrigger value="earth">Google Earth</TabsTrigger>
            <TabsTrigger value="flight-radar">Live Flights</TabsTrigger>
            
          </TabsList>

          <TabsContent value="nasa" className="mt-0">
            <Card className="aspect-video relative">
              {loadingTab === "nasa" && <Skeleton className="w-full h-full absolute inset-0" />}
              <iframe
                src="https://eyes.nasa.gov/apps/solar-system/#/home"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                onLoad={() => setLoadingTab(null)}
              />
            </Card>
          </TabsContent>

          <TabsContent value="sky-live" className="mt-0">
            <Card className="aspect-video relative">
              {loadingTab === "sky-live" && <Skeleton className="w-full h-full absolute inset-0" />}
              <iframe
                src="https://theskylive.com/3dsolarsystem"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                onLoad={() => setLoadingTab(null)}
              />
            </Card>
          </TabsContent>

          <TabsContent value="earth" className="mt-0">
            <Card className="aspect-video relative">
              {loadingTab === "earth" && <Skeleton className="w-full h-full absolute inset-0" />}
              <iframe
                src="https://worldwind.earth/explorer/"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                onLoad={() => setLoadingTab(null)}
              />
            </Card>
          </TabsContent>

          

          <TabsContent value="flight-radar" className="mt-0">
            <Card className="aspect-video relative">
              {loadingTab === "flight-radar" && <Skeleton className="w-full h-full absolute inset-0" />}
              <iframe
                src="https://globe.adsbexchange.com/"
                className="w-full h-full"
                allowFullScreen
                onLoad={() => setLoadingTab(null)}
              />
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

