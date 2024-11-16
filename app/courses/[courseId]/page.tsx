'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, ChevronRight, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export default function CoursePage() {
  const [currentVideo, setCurrentVideo] = useState('https://example.com/intro-video.mp4')
  const [currentLesson, setCurrentLesson] = useState('Introduction to the Course')

  const course = {
    title: 'Coding with AI',
    modules: [
      {
        title: 'Introduction to AI-Assisted Coding',
        lessons: [
          { title: 'Introduction to the Course', videoUrl: 'https://example.com/intro-video.mp4' },
          { title: 'Setting Up Your Environment', videoUrl: 'https://example.com/setup-video.mp4' },
        ],
      },
      {
        title: 'AI Tools and Techniques',
        lessons: [
          { title: 'Understanding AI in Coding', videoUrl: 'https://example.com/ai-basics-video.mp4' },
          { title: 'Your First AI-Assisted Code', videoUrl: 'https://example.com/first-code-video.mp4' },
        ],
      },
      {
        title: 'Advanced AI Applications',
        lessons: [
          { title: 'Optimizing Code with AI', videoUrl: 'https://example.com/optimization-video.mp4' },
          { title: 'Debugging with AI Assistance', videoUrl: 'https://example.com/debugging-video.mp4' },
        ],
      },
    ],
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <header className="border-b border-gray-800 px-6 py-4">
        <Link href="/courses" className="text-blue-500 hover:underline">
          ← Back to Courses
        </Link>
      </header>
      <div className="flex-1 flex">
        <aside className="w-80 border-r border-gray-800 flex flex-col">
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">{course.title}</h1>
          </div>
          <ScrollArea className="flex-1">
            <Accordion type="multiple" className="w-full">
              {course.modules.map((module, index) => (
                <AccordionItem value={`module-${index}`} key={index}>
                  <AccordionTrigger className="px-6 py-4 text-left hover:bg-gray-800 flex items-center hover:no-underline">
                    <span className="font-medium text-gray-400">{module.title}</span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul>
                      {module.lessons.map((lesson, lessonIndex) => (
                        <li key={lessonIndex}>
                          <Button
                            variant="ghost"
                            className="w-full justify-start px-10 py-2 text-left text-gray-400 hover:text-white hover:bg-gray-800"
                            onClick={() => {
                              setCurrentVideo(lesson.videoUrl)
                              setCurrentLesson(lesson.title)
                            }}
                          >
                            <Play className="h-4 w-4 mr-2" />
                            {lesson.title}
                          </Button>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollArea>
        </aside>
        <main className="flex-1 p-6">
          <h2 className="text-xl font-semibold mb-4">{currentLesson}</h2>
          <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
            <video
              src={currentVideo}
              controls
              className="w-full h-full"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </main>
      </div>
    </div>
  )
}