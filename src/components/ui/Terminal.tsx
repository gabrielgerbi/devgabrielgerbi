'use client'

import { useEffect, useState, useRef } from 'react'
import { useReveal } from '@/lib/useReveal'

interface TerminalLine {
  text: string
  type: 'command' | 'comment' | 'output' | 'keyword' | 'function' | 'variable' | 'blank'
  delay?: number
}

interface TerminalProps {
  title?: string
  lines: TerminalLine[]
}

export function Terminal({ title = 'gabriel@gerbi ~ /gerbinho-store', lines }: TerminalProps) {
  const { ref, isVisible } = useReveal()
  const [visibleLines, setVisibleLines] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const terminalRef = useRef<HTMLDivElement>(null)

  // Cursor blink
  useEffect(() => {
    const interval = setInterval(() => setShowCursor((v) => !v), 530)
    return () => clearInterval(interval)
  }, [])

  // Typing animation
  useEffect(() => {
    if (!isVisible) return

    let lineIdx = 0
    let charIdx = 0
    let timeout: NodeJS.Timeout

    const typeLine = () => {
      if (lineIdx >= lines.length) return

      const line = lines[lineIdx]
      const lineDelay = line.delay ?? 30

      if (line.type === 'blank') {
        setVisibleLines(lineIdx + 1)
        setCurrentText('')
        lineIdx++
        timeout = setTimeout(typeLine, 200)
        return
      }

      if (line.type === 'output' || line.type === 'comment') {
        // Output/comments appear instantly
        setVisibleLines(lineIdx + 1)
        setCurrentText('')
        lineIdx++
        charIdx = 0
        timeout = setTimeout(typeLine, 300)
        return
      }

      if (charIdx <= line.text.length) {
        setCurrentText(line.text.slice(0, charIdx))
        charIdx++
        timeout = setTimeout(typeLine, lineDelay + Math.random() * 20)
      } else {
        setVisibleLines(lineIdx + 1)
        setCurrentText('')
        lineIdx++
        charIdx = 0
        timeout = setTimeout(typeLine, 400)
      }
    }

    timeout = setTimeout(typeLine, 600)
    return () => clearTimeout(timeout)
  }, [isVisible, lines])

  const renderLine = (line: TerminalLine, idx: number) => {
    const colors: Record<string, string> = {
      command: '#e8e8e8',
      comment: '#505050',
      output: '#22c55e',
      keyword: '#c084fc',
      function: '#22c55e',
      variable: '#facc15',
      blank: 'transparent',
    }

    if (line.type === 'blank') return <div key={idx} className="h-4" />

    const isCommand = line.type === 'command'

    return (
      <div key={idx} className="flex items-start gap-0 leading-relaxed">
        {isCommand && (
          <span className="text-accent-green shrink-0 select-none mr-2">❯</span>
        )}
        <span style={{ color: colors[line.type] }}>{line.text}</span>
      </div>
    )
  }

  const currentLine = lines[visibleLines]
  const isTypingCommand = currentLine && (currentLine.type === 'command' || currentLine.type === 'keyword' || currentLine.type === 'function' || currentLine.type === 'variable')

  return (
    <div ref={ref} className="rounded-xl overflow-hidden border border-accent-green/[0.08] bg-[#0a0a0a] shadow-2xl">
      {/* Title bar - macOS style */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#111] border-b border-white/[0.04]">
        <div className="flex gap-[7px]">
          <div className="w-[13px] h-[13px] rounded-full bg-[#ff5f57] opacity-90" />
          <div className="w-[13px] h-[13px] rounded-full bg-[#febc2e] opacity-90" />
          <div className="w-[13px] h-[13px] rounded-full bg-[#28c840] opacity-90" />
        </div>
        <div className="flex-1 text-center">
          <span className="text-[11px] text-text-muted font-mono">{title}</span>
        </div>
        <div className="w-[50px]" /> {/* Balance spacer */}
      </div>

      {/* Terminal content */}
      <div ref={terminalRef} className="p-5 font-mono text-[13px] leading-[1.9] min-h-[220px] overflow-hidden">
        {/* Already typed lines */}
        {lines.slice(0, visibleLines).map((line, i) => renderLine(line, i))}

        {/* Currently typing line */}
        {visibleLines < lines.length && (
          <div className="flex items-start gap-0">
            {isTypingCommand && (
              <span className="text-accent-green shrink-0 select-none mr-2">❯</span>
            )}
            <span className="text-text-primary">
              {currentText}
              <span
                className="inline-block w-[8px] h-[17px] ml-[1px] align-middle"
                style={{
                  backgroundColor: showCursor ? '#22c55e' : 'transparent',
                  transition: 'background-color 0.1s',
                }}
              />
            </span>
          </div>
        )}

        {/* Final cursor after all lines */}
        {visibleLines >= lines.length && (
          <div className="flex items-start gap-0">
            <span className="text-accent-green shrink-0 select-none mr-2">❯</span>
            <span
              className="inline-block w-[8px] h-[17px] align-middle"
              style={{
                backgroundColor: showCursor ? '#22c55e' : 'transparent',
                transition: 'background-color 0.1s',
              }}
            />
          </div>
        )}
      </div>
    </div>
  )
}
