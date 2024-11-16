import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Component() {
  const courses = [
    {
      title: "Coding with AI",
      description: "Learn to leverage AI tools for efficient coding and problem-solving.",
      image: "/placeholder.svg?height=400&width=600",
      progress: 100,
      alt: "Coding with AI"
    },
    {
      title: "Building with AI Agents",
      description: "Explore the world of AI agents and how to build intelligent systems.",
      image: "/placeholder.svg?height=400&width=600",
      progress: 0,
      alt: "Building with AI Agents"
    },
    {
      title: "Themed Image Generation",
      description: "Master the art of generating themed images using AI technologies.",
      image: "/placeholder.svg?height=400&width=600",
      progress: 0,
      alt: "Themed Image Generation"
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link className="text-xl font-bold" href="/">
            ModernHuman
          </Link>
          <nav className="space-x-6">
            <Link className="text-blue-500" href="/courses">
              Courses
            </Link>
            <Link className="text-gray-400 hover:text-gray-300" href="/community">
              Community
            </Link>
          </nav>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Link href={`/courses/${course.title.toLowerCase().replace(/\s+/g, '-')}`} key={course.title}>
              <Card className="bg-gray-900 border-gray-800 overflow-hidden hover:border-gray-700 transition-colors">
                <Image
                  src={course.image}
                  alt={course.alt}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-2">{course.title}</h2>
                  <p className="text-gray-400 mb-4">{course.description}</p>
                  <div className="space-y-2">
                    <Progress
                      value={course.progress}
                      className={`bg-gray-800 ${course.progress === 100 ? "bg-blue-500" : "bg-gray-700"}`}
                    />
                    <p className="text-sm text-gray-400">{course.progress}% Complete</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}