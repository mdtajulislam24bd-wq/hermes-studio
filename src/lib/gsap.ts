import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'

// Register plugins once
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, TextPlugin)
  ;(window as any).gsap = gsap
  ;(window as any).ScrollTrigger = ScrollTrigger
}

export { gsap, ScrollTrigger }

export function syncGSAPWithLenis(lenis: any) {
  lenis.on('scroll', ScrollTrigger.update)
  gsap.ticker.add((time: number) => {
    lenis.raf(time * 1000)
  })
  gsap.ticker.lagSmoothing(0)
}

export function createScrollReveal(
  elements: string | Element | Element[],
  options: {
    y?: number
    opacity?: number
    duration?: number
    stagger?: number
    start?: string
    ease?: string
  } = {}
) {
  const { y = 50, opacity = 0, duration = 0.9, stagger = 0.1, start = 'top 85%', ease = 'expo.out' } = options

  return gsap.from(elements, {
    y,
    opacity,
    duration,
    stagger,
    ease,
    scrollTrigger: {
      trigger: typeof elements === 'string' ? elements : (elements as Element),
      start,
    },
  })
}

export function createWordReveal(selector: string, triggerSelector: string) {
  const el = document.querySelector(selector)
  if (!el) return

  const words = el.textContent?.split(' ') ?? []
  el.innerHTML = words
    .map((w) => `<span class="word-span" style="color: #D1D5DB; display: inline-block; margin-right: 0.25em;">${w}</span>`)
    .join('')

  gsap.to(`${selector} .word-span`, {
    color: '#0D0D0D',
    stagger: { each: 0.06 },
    ease: 'none',
    scrollTrigger: {
      trigger: triggerSelector,
      start: 'top 80%',
      end: 'bottom 20%',
      scrub: 1.5,
    },
  })
}

export function createHorizontalScroll(
  sectionSelector: string,
  trackSelector: string,
  cardSelector: string
) {
  const cards = gsap.utils.toArray<Element>(cardSelector)
  if (cards.length === 0) return

  gsap.to(trackSelector, {
    x: () => -(document.querySelector<HTMLElement>(trackSelector)!.scrollWidth - window.innerWidth),
    ease: 'none',
    scrollTrigger: {
      trigger: sectionSelector,
      start: 'top top',
      end: () => `+=${document.querySelector<HTMLElement>(trackSelector)!.scrollWidth - window.innerWidth}`,
      pin: true,
      scrub: 1,
      snap: {
        snapTo: 1 / (cards.length - 1),
        duration: { min: 0.2, max: 0.5 },
        ease: 'power1.inOut',
      },
      invalidateOnRefresh: true,
    },
  })
}

export function createMarquee(row1Selector: string, row2Selector: string) {
  const tl1 = gsap.to(`${row1Selector} .ticker-inner`, {
    xPercent: -50,
    ease: 'none',
    duration: 24,
    repeat: -1,
  })

  const tl2 = gsap.to(`${row2Selector} .ticker-inner`, {
    xPercent: 50,
    ease: 'none',
    duration: 30,
    repeat: -1,
  })

  return [tl1, tl2]
}
