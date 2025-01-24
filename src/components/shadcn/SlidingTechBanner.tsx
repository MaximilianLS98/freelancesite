'use client'

import React from 'react'
import { Cpu, Database, Globe, Layout, Layers, Smartphone, Terminal, Zap } from 'lucide-react'

const technologies = [
  { icon: Cpu, name: 'REACT' },
  { icon: Globe, name: 'NEXT.JS' },
  { icon: Database, name: 'MONGODB' },
  { icon: Terminal, name: 'NODE.JS' },
  { icon: Layout, name: 'TAILWIND' },
  { icon: Layers, name: 'GRAPHQL' },
  { icon: Smartphone, name: 'REACT NATIVE' },
  { icon: Zap, name: 'TYPESCRIPT' },
]

export function SlidingLogoBanner() {
  return (
    <div className="w-full bg-background py-4 overflow-hidden border-b-2 border-x-2 border-black">
        <div className="flex animate-infinite-scroll">
          {[...technologies, ...technologies].map((tech, index) => (
            <div key={index} className="flex items-center justify-center mx-8 text-foreground">
              <tech.icon className="w-8 h-8 mr-2 stroke-[3]" />
              <span className="text-lg font-bold tracking-wider">{tech.name}</span>
            </div>
          ))}
          {[...technologies, ...technologies].map((tech, index) => (
            <div key={index} className="flex items-center justify-center mx-8 text-foreground">
              <tech.icon className="w-8 h-8 mr-2 stroke-[3]" />
              <span className="text-lg font-bold tracking-wider">{tech.name}</span>
            </div>
          ))}
        </div>
    </div>
  )
}
