import { useState, useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { ArrowDown, Star } from 'lucide-react'
import { useUIStore } from '../../stores/uiStore'

const BRAND = '#FF5C1A'
const TYPED_WORDS = ['CUSTOM SOFTWARE', 'AUTOMATION', 'WEB PLATFORMS', 'AI AGENTS', 'GROWTH SYSTEMS']

type SVGIconProps = React.SVGProps<SVGSVGElement>

// ─── Custom Tech Icons SVGs ──────────────────────────────────────────────────
// ─── Custom Tech Icons SVGs ──────────────────────────────────────────────────
const IconReact = (p: SVGIconProps) => (
  <svg viewBox="-11.5 -10.23174 23 20.46348" fill="none" stroke="currentColor" strokeWidth="1" {...p}>
    <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
    <g stroke="currentColor">
      <ellipse rx="11" ry="4.2"/>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
    </g>
  </svg>
)

const IconAstro = (p: SVGIconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M8.358 20.162c-1.186-1.07-1.532-3.316-1.038-4.944.856 1.026 2.043 1.352 3.272 1.535 1.897.283 3.76.177 5.522-.678.202-.098.388-.229.608-.36.166.473.209.95.151 1.437-.14 1.185-.738 2.1-1.688 2.794-.38.277-.782.525-1.175.787-1.205.804-1.531 1.747-1.078 3.119l.044.148a3.158 3.158 0 0 1-1.407-1.188 3.31 3.31 0 0 1-.544-1.815c-.004-.32-.004-.642-.048-.958-.106-.769-.472-1.113-1.161-1.133-.707-.02-1.267.411-1.415 1.09-.012.053-.028.104-.045.165h.002zm-5.961-4.445s3.24-1.575 6.49-1.575l2.451-7.565c.092-.366.36-.614.662-.614.302 0 .57.248.662.614l2.45 7.565c3.85 0 6.491 1.575 6.491 1.575L16.088.727C15.93.285 15.663 0 15.303 0H8.697c-.36 0-.615.285-.784.727l-5.516 14.99z"/>
  </svg>
)

const IconTypeScript = (p: SVGIconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <rect width="24" height="24" rx="4" fill="#3178C6"/>
    <text x="13" y="19.5" fill="#FFFFFF" fontSize="11" fontWeight="bold" fontFamily="sans-serif">TS</text>
  </svg>
)

const IconNode = (p: SVGIconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0 l8.795-5.076c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"/>
  </svg>
)

const IconPython = (p: SVGIconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M11.948.01c-3.13 0-2.93 1.357-2.93 1.357v1.446h2.983v.423H7.838s-2.946-.328-2.946 2.945c0 3.274 2.58 3.163 2.58 3.163h1.536V7.795c0-1.725 1.488-1.636 1.488-1.636h2.982s1.468.044 1.468-1.423v-3.37S14.996.01 11.948.01zm-1.543 1.135a.602.602 0 1 1 0 1.204.602.602 0 0 1 0-1.204zm4.492 4.385v1.548c0 1.725-1.488 1.636-1.488 1.636h-2.982s-1.468-.044-1.468 1.423v3.37s.05 1.358 3.097 1.358c3.13 0 2.93-1.357 2.93-1.357v-1.446H12.01v-.423h4.162s2.946.328 2.946-2.945c0-3.274-2.58-3.163-2.58-3.163H14.9zm-1.523 7.828a.602.602 0 1 1 0 1.204.602.602 0 0 1 0-1.204z"/>
  </svg>
)

const IconFigma = (p: SVGIconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M12 2a4 4 0 0 0-4 4v2a4 4 0 0 0 4 4 4 4 0 0 0 4-4V6a4 4 0 0 0-4-4zM8 12a4 4 0 0 0 4 4H8v-4zm4 4v4a4 4 0 0 0 4-4h-4zm4-8a4 4 0 1 0 0 8V8zm-8 0a4 4 0 0 0 4 4V8H8z"/>
  </svg>
)

const IconDocker = (p: SVGIconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M13.983 11.078h2.119c.102 0 .186-.084.186-.186V8.773c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v2.119c0 .102.084.186.186.186zm-2.917 0h2.119c.102 0 .186-.084.186-.186V8.773c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v2.119c0 .102.084.186.186.186zm-2.916 0h2.119c.102 0 .186-.084.186-.186V8.773c0-.102-.084-.186-.186-.186H8.15c-.102 0-.186.084-.186.186v2.119c0 .102.084.186.186.186zm-2.916 0h2.119c.102 0 .186-.084.186-.186V8.773c0-.102-.084-.186-.186-.186H5.234c-.102 0-.186.084-.186.186v2.119c0 .102.084.186.186.186zm-2.916 0h2.119c.102 0 .186-.084.186-.186V8.773c0-.102-.084-.186-.186-.186H2.318c-.102 0-.186.084-.186.186v2.119c0 .102.084.186.186.186zm2.916-2.916h2.119c.102 0 .186-.084.186-.186V5.857c0-.102-.084-.186-.186-.186H5.234c-.102 0-.186.084-.186.186v2.119c0 .102.084.186.186.186zm2.916 0h2.119c.102 0 .186-.084.186-.186V5.857c0-.102-.084-.186-.186-.186H8.15c-.102 0-.186.084-.186.186v2.119c0 .102.084.186.186.186zm2.916 0h2.119c.102 0 .186-.084.186-.186V5.857c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v2.119c0 .102.084.186.186.186zm2.917-2.916h2.119c.102 0 .186-.084.186-.186V2.94c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v2.119c0 .102.084.186.186.186zM23.99 12.18c-.424-2.825-2.885-3.415-4.412-3.415-.17 0-.314.008-.433.025v2.136c.118-.008.246-.017.398-.017.975 0 2.254.407 2.458 1.84.093.636-.025 1.543-.72 2.052l-.026.017-.025-.017c-.44-.305-1.127-.729-2.738-.729H2.13v.83c0 4.893 4.145 5.86 6.01 5.86h8.773c5.366 0 7.078-4.527 7.078-8.702z"/>
  </svg>
)

const IconGitHub = (p: SVGIconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
)

const IconPostgres = (p: SVGIconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7982-3.5237.1222-4.7316a1.5641 1.5641 0 0 0-.1509-.235C21.6931.9086 19.8007.0248 17.5099.0005c-1.4947-.0158-2.7705.3461-3.1161.4794a9.449 9.449 0 0 0-.5159-.0816 8.044 8.044 0 0 0-1.3114-.1278c-1.1822-.0184-2.2038.2642-3.0498.8406-.8573-.3211-4.7888-1.645-7.2219.0788C.9359 2.1526.3086 3.8733.4302 6.3043c.0409.818.5069 3.334 1.2423 5.7436.4598 1.5065.9387 2.7019 1.4334 3.582.553.9942 1.1259 1.5933 1.7143 1.7895.4474.1491 1.1327.1441 1.8581-.7279.8012-.9635 1.5903-1.8258 1.9446-2.2069.4351.2355.9064.3625 1.39.3772a.0569.0569 0 0 0 .0004.0041 11.0312 11.0312 0 0 0-.2472.3054c-.3389.4302-.4094.5197-1.5002.7443-.3102.064-1.1344.2339-1.1464.8115-.0025.1224.0329.2309.0919.3268.2269.4231.9216.6097 1.015.6331 1.3345.3335 2.5044.092 3.3714-.6787-.017 2.231.0775 4.4174.3454 5.0874.2212.5529.7618 1.9045 2.4692 1.9043.2505 0 .5263-.0291.8296-.0941 1.7819-.3821 2.5557-1.1696 2.855-2.9059.1503-.8707.4016-2.8753.5388-4.1012.0169-.0703.0357-.1207.057-.1362.0007-.0005.0697-.0471.4272.0307a.3673.3673 0 0 0 .0443.0068l.2539.0223.0149.001c.8468.0384 1.9114-.1426 2.5312-.4308.6438-.2988 1.8057-1.0323 1.5951-1.6698zM2.371 11.8765c-.7435-2.4358-1.1779-4.8851-1.2123-5.5719-.1086-2.1714.4171-3.6829 1.5623-4.4927 1.8367-1.2986 4.8398-.5408 6.108-.13-.0032.0032-.0066.0061-.0098.0094-2.0238 2.044-1.9758 5.536-1.9708 5.7495-.0002.0823.0066.1989.0162.3593.0348.5873.0996 1.6804-.0735 2.9184-.1609 1.1504.1937 2.2764.9728 3.0892.0806.0841.1648.1631.2518.2374-.3468.3714-1.1004 1.1926-1.9025 2.1576-.5677.6825-.9597.5517-1.0886.5087-.3919-.1307-.813-.5871-1.2381-1.3223-.4796-.839-.9635-2.0317-1.4155-3.5126zm6.0072 5.0871c-.1711-.0428-.3271-.1132-.4322-.1772.0889-.0394.2374-.0902.4833-.1409 1.2833-.2641 1.4815-.4506 1.9143-1.0002.0992-.126.2116-.2687.3673-.4426a.3549.3549 0 0 0 .0737-.1298c.1708-.1513.2724-.1099.4369-.0417.156.0646.3078.26.3695.4752.0291.1016.0619.2945-.0452.4444-.9043 1.2658-2.2216 1.2494-3.1676 1.0128zm2.094-3.988-.0525.141c-.133.3566-.2567.6881-.3334 1.003-.6674-.0021-1.3168-.2872-1.8105-.8024-.6279-.6551-.9131-1.5664-.7825-2.5004.1828-1.3079.1153-2.4468.079-3.0586-.005-.0857-.0095-.1607-.0122-.2199.2957-.2621 1.6659-.9962 2.6429-.7724.4459.1022.7176.4057.8305.928.5846 2.7038.0774 3.8307-.3302 4.7363-.084.1866-.1633.3629-.2311.5454zm7.3637 4.5725c-.0169.1768-.0358.376-.0618.5959l-.146.4383a.3547.3547 0 0 0-.0182.1077c-.0059.4747-.054.6489-.115.8693-.0634.2292-.1353.4891-.1794 1.0575-.11 1.4143-.8782 2.2267-2.4172 2.5565-1.5155.3251-1.7843-.4968-2.0212-1.2217a6.5824 6.5824 0 0 0-.0769-.2266c-.2154-.5858-.1911-1.4119-.1574-2.5551.0165-.5612-.0249-1.9013-.3302-2.6462.0044-.2932.0106-.5909.019-.8918a.3529.3529 0 0 0-.0153-.1126 1.4927 1.4927 0 0 0-.0439-.208c-.1226-.4283-.4213-.7866-.7797-.9351-.1424-.059-.4038-.1672-.7178-.0869.067-.276.1831-.5875.309-.9249l.0529-.142c.0595-.16.134-.3257.213-.5012.4265-.9476 1.0106-2.2453.3766-5.1772-.2374-1.0981-1.0304-1.6343-2.2324-1.5098-.7207.0746-1.3799.3654-1.7088.5321a5.6716 5.6716 0 0 0-.1958.1041c.0918-1.1064.4386-3.1741 1.7357-4.4823a4.0306 4.0306 0 0 1 .3033-.276.3532.3532 0 0 0 .1447-.0644c.7524-.5706 1.6945-.8506 2.802-.8325.4091.0067.8017.0339 1.1742.081 1.939.3544 3.2439 1.4468 4.0359 2.3827.8143.9623 1.2552 1.9315 1.4312 2.4543-1.3232-.1346-2.2234.1268-2.6797.779-.9926 1.4189.543 4.1729 1.2811 5.4964.1353.2426.2522.4522.2889.5413.2403.5825.5515.9713.7787 1.2552.0696.087.1372.1714.1885.245-.4008.1155-1.1208.3825-1.0552 1.717-.0123.1563-.0423.4469-.0834.8148-.0461.2077-.0702.4603-.0994.7662zm.8905-1.6211c-.0405-.8316.2691-.9185.5967-1.0105a2.8566 2.8566 0 0 0 .135-.0406 1.202 1.202 0 0 0 .1342.103c.5703.3765 1.5823.4213 3.0068.1344-.2016.1769-.5189.3994-.9533.6011-.4098.1903-1.0957.333-1.7473.3636-.7197.0336-1.0859-.0807-1.1721-.151zm.5695-9.2712c-.0059.3508-.0542.6692-.1054 1.0017-.055.3576-.112.7274-.1264 1.1762-.0142.4368.0404.8909.0932 1.3301.1066.887.216 1.8003-.2075 2.7014a3.5272 3.5272 0 0 1-.1876-.3856c-.0527-.1276-.1669-.3326-.3251-.6162-.6156-1.1041-2.0574-3.6896-1.3193-4.7446.3795-.5427 1.3408-.5661 2.1781-.463zm.2284 7.0137a12.3762 12.3762 0 0 0-.0853-.1074l-.0355-.0444c.7262-1.1995.5842-2.3862.4578-3.4385-.0519-.4318-.1009-.8396-.0885-1.2226.0129-.4061.0666-.7543.1185-1.0911.0639-.415.1288-.8443.1109-1.3505.0134-.0531.0188-.1158.0118-.1902-.0457-.4855-.5999-1.938-1.7294-3.253-.6076-.7073-1.4896-1.4972-2.6889-2.0395.5251-.1066 1.2328-.2035 2.0244-.1859 2.0515.0456 3.6746.8135 4.8242 2.2824a.908.908 0 0 1 .0667.1002c.7231 1.3556-.2762 6.2751-2.9867 10.5405zm-8.8166-6.1162c-.025.1794-.3089.4225-.6211.4225a.5821.5821 0 0 1-.0809-.0056c-.1873-.026-.3765-.144-.5059-.3156-.0458-.0605-.1203-.178-.1055-.2844.0055-.0401.0261-.0985.0925-.1488.1182-.0894.3518-.1226.6096-.0867.3163.0441.6426.1938.6113.4186zm7.9305-.4114c.0111.0792-.049.201-.1531.3102-.0683.0717-.212.1961-.4079.2232a.5456.5456 0 0 1-.075.0052c-.2935 0-.5414-.2344-.5607-.3717-.024-.1765.2641-.3106.5611-.352.297-.0414.6111.0088.6356.1851z"/>
  </svg>
)

interface IconDef {
  id: number
  Icon: React.FC<SVGIconProps>
  color: string
  pos: React.CSSProperties
}

const TECH_ICONS: IconDef[] = [
  { id: 1, Icon: IconReact,      color: '#00D8FF', pos: { top: '12%',   left:  '8%'  } },
  { id: 2, Icon: IconAstro,      color: '#BC52EE', pos: { top: '14%',   right: '6%'  } },
  { id: 3, Icon: IconTypeScript, color: '#3178C6', pos: { top: '42%',   left:  '4%'  } },
  { id: 4, Icon: IconNode,       color: '#339933', pos: { top: '65%',   left:  '8%'  } },
  { id: 5, Icon: IconPython,     color: '#3776AB', pos: { top: '70%',   left:  '20%' } },
  { id: 6, Icon: IconFigma,      color: '#F24E1E', pos: { top: '8%',    right: '28%' } },
  { id: 7, Icon: IconDocker,     color: '#2496ED', pos: { top: '55%',   right: '4%'  } },
  { id: 8, Icon: IconGitHub,     color: '#181717', pos: { top: '68%',   right: '16%' } },
  { id: 9, Icon: IconPostgres,   color: '#336791', pos: { top: '38%',   right: '5%'  } },
]

function FloatingIcon({
  iconDef,
  index,
  mouseRef,
}: {
  iconDef: IconDef
  index: number
  mouseRef: React.MutableRefObject<{ x: number; y: number }>
}) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 260, damping: 22 })
  const springY = useSpring(y, { stiffness: 260, damping: 22 })

  useEffect(() => {
    let rafId: number
    const tick = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect()
        const cx = rect.left + rect.width / 2
        const cy = rect.top + rect.height / 2
        const dx = mouseRef.current.x - cx
        const dy = mouseRef.current.y - cy
        const dist = Math.sqrt(dx * dx + dy * dy)
        const radius = 160
        if (dist < radius && dist > 0) {
          const force = ((radius - dist) / radius) * 55
          const angle = Math.atan2(dy, dx)
          x.set(-Math.cos(angle) * force)
          y.set(-Math.sin(angle) * force)
        } else {
          x.set(0)
          y.set(0)
        }
      }
      rafId = requestAnimationFrame(tick)
    }
    tick()
    return () => cancelAnimationFrame(rafId)
  }, [x, y, mouseRef])

  const floatDur = 4.5 + (index % 4) * 1.1

  return (
    <motion.div
      ref={ref}
      className="hero-floating-icon"
      style={{ x: springX, y: springY, position: 'absolute', zIndex: 5, ...iconDef.pos }}
      initial={{ opacity: 0, scale: 0.4 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: 0.5 + index * 0.07,
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <motion.div
        animate={{
          y: [0, -12, 0, 12, 0],
          x: [0, 8, 0, -8, 0],
          rotate: [0, 6, 0, -6, 0],
        }}
        transition={{
          duration: floatDur,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'easeInOut',
        }}
        style={{
          width: '54px',
          height: '54px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          filter: `drop-shadow(0 8px 18px ${iconDef.color}55)`,
        }}
      >
        <iconDef.Icon
          style={{ color: iconDef.color, width: 44, height: 44 }}
        />
      </motion.div>
    </motion.div>
  )
}

export function HeroSection() {
  const { setBookingModalOpen } = useUIStore()
  const [wordIndex, setWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  const containerRef = useRef<HTMLDivElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const typingTimer = useRef<NodeJS.Timeout | null>(null)

  // Typewriter
  useEffect(() => {
    const fullWord = TYPED_WORDS[wordIndex]
    const speed = isDeleting ? 50 : currentText === fullWord ? 1800 : 80
    const handleTyping = () => {
      if (!isDeleting) {
        setCurrentText(fullWord.substring(0, currentText.length + 1))
        if (currentText === fullWord) setIsDeleting(true)
      } else {
        setCurrentText(fullWord.substring(0, currentText.length - 1))
        if (currentText === '') {
          setIsDeleting(false)
          setWordIndex((prev) => (prev + 1) % TYPED_WORDS.length)
        }
      }
    }
    typingTimer.current = setTimeout(handleTyping, speed)
    return () => { if (typingTimer.current) clearTimeout(typingTimer.current) }
  }, [currentText, isDeleting, wordIndex])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    mouseRef.current = { x: e.clientX, y: e.clientY }
  }

  const scrollToServices = () => {
    document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })
  }

  const slideUp = (delay: number) => ({
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay, duration: 0.8, ease: [0.25, 1, 0.5, 1] as [number,number,number,number] },
    },
  })

  return (
    <section
      style={{
        padding: '110px 24px 24px',
        background: '#FFFFFF',
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
      id="hero"
    >
      <div
        ref={containerRef}
        className="noise-overlay"
        onMouseMove={handleMouseMove}
        style={{
          flex: 1,
          borderRadius: '40px',
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          padding: '24px 48px 48px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          position: 'relative',
          overflow: 'hidden',
          zIndex: 2,
        }}
      >
        {/* radial background glow */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse 70% 60% at 70% 30%, rgba(255,92,26,0.04) 0%, transparent 75%),' +
              'radial-gradient(circle at 10% 80%, rgba(0,200,150,0.025) 0%, transparent 55%)',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />

        {/* Grid Background Layer */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.38,
            backgroundImage:
              'linear-gradient(to right, var(--border) 1.5px, transparent 1.5px), ' +
              'linear-gradient(to bottom, var(--border) 1.5px, transparent 1.5px)',
            backgroundSize: '6rem 5rem',
            maskImage: 'radial-gradient(ellipse 80% 50% at 50% 0%, #000 70%, transparent 110%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 50% at 50% 0%, #000 70%, transparent 110%)',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />

        {/* Floating Tech Icons */}
        {TECH_ICONS.map((icon, i) => (
          <FloatingIcon key={icon.id} iconDef={icon} index={i} mouseRef={mouseRef} />
        ))}

        {/* Top Clutch Widget & Location */}
        <motion.div
          variants={slideUp(0.15)}
          initial="hidden"
          animate="visible"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            zIndex: 25,
          }}
          className="hero-header-widgets"
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }} className="clutch-widget">
            <div style={{ background: '#0D0F11', padding: '8px 16px', borderRadius: 10, display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontFamily: 'Bricolage Grotesque', fontWeight: 900, fontSize: 13, color: '#FFFFFF', letterSpacing: '-0.02em' }}>Clutch</span>
              <div style={{ display: 'flex', gap: 2 }}>
                {[1, 2, 3, 4, 5].map(s => <Star key={s} size={9} fill="#FFCC00" stroke="#FFCC00" />)}
              </div>
              <span style={{ fontSize: 12, fontWeight: 900, color: '#FFCC00', fontFamily: 'JetBrains Mono' }}>5.0</span>
            </div>
            <span style={{ fontSize: 13, color: 'var(--text-muted)', fontWeight: 600 }}>
              Top Software Partner &bull; 25+ Verified Reviews
            </span>
          </div>
          <span style={{ fontSize: 11, fontFamily: 'JetBrains Mono', color: BRAND, fontWeight: 700, letterSpacing: '0.08em' }} className="hero-serial">
            HERMES STUDIO // DHAKA, BANGLADESH
          </span>
        </motion.div>

        {/* Centered Content */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            zIndex: 20,
            position: 'relative',
            paddingBottom: '40px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
            <motion.h1
              style={{
                fontFamily: 'Bricolage Grotesque',
                fontSize: 'clamp(42px, 7.5vw, 110px)',
                fontWeight: 900,
                lineHeight: 0.92,
                letterSpacing: '-0.045em',
                color: 'var(--text-h)',
                textTransform: 'uppercase',
                margin: '12px 0 4px',
                maxWidth: 980,
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '0 0.22em',
              }}
            >
              {['We', 'Build'].map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 40, rotateX: -25 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{
                    delay: 0.25 + i * 0.12,
                    duration: 0.7,
                    ease: [0.34, 1.2, 0.64, 1],
                  }}
                  style={{ display: 'inline-block' }}
                >
                  {word}
                </motion.span>
              ))}
              <motion.span
                initial={{ opacity: 0, y: 40, rotateX: -25 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: 0.49, duration: 0.7, ease: [0.34, 1.2, 0.64, 1] }}
                style={{
                  display: 'inline-block',
                  background: `linear-gradient(135deg, ${BRAND} 0%, #FFCC00 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Systems
              </motion.span>
              {['That', 'Scale'].map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 40, rotateX: -25 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{
                    delay: 0.61 + i * 0.12,
                    duration: 0.7,
                    ease: [0.34, 1.2, 0.64, 1],
                  }}
                  style={{ display: 'inline-block' }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            {/* Typewriter sub-row */}
            <motion.div
              variants={slideUp(0.65)}
              initial="hidden"
              animate="visible"
              style={{
                fontFamily: 'JetBrains Mono',
                fontSize: 'clamp(13px, 1.7vw, 19px)',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                color: 'var(--text-muted)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 10,
                marginTop: 6,
                marginBottom: 28,
              }}
              className="hero-typing-row"
            >
              <span style={{ color: 'rgba(10,10,10,0.22)', fontWeight: 500 }}>BY ENGINEERING //</span>
              <div style={{ display: 'inline-flex', color: BRAND }}>
                {currentText}
                <span
                  style={{
                    display: 'inline-block',
                    width: 7,
                    height: '0.8em',
                    background: BRAND,
                    marginLeft: 5,
                    animation: 'blink 800ms steps(2, start) infinite',
                  }}
                />
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={slideUp(0.85)}
              initial="hidden"
              animate="visible"
              style={{ display: 'flex', alignItems: 'center', gap: 20, justifyContent: 'center' }}
              className="hero-cta-wrapper"
            >
              <button
                onClick={() => setBookingModalOpen(true)}
                className="btn-primary"
                style={{
                  padding: '14px 32px',
                  fontSize: 14,
                  fontWeight: 700,
                  borderRadius: 999,
                  background: BRAND,
                  color: '#FFFFFF',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  transition: 'all 240ms cubic-bezier(0.34,1.56,0.64,1)',
                  boxShadow: `0 8px 24px ${BRAND}22`,
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget
                  el.style.transform = 'scale(1.05) translateY(-2px)'
                  el.style.boxShadow = `0 14px 36px ${BRAND}44`
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget
                  el.style.transform = 'scale(1) translateY(0)'
                  el.style.boxShadow = `0 8px 24px ${BRAND}22`
                }}
              >
                + Become a Client
              </button>

              <button
                onClick={scrollToServices}
                aria-label="Scroll to services"
                style={{
                  width: 50, height: 50, borderRadius: '50%',
                  background: '#FFFFFF',
                  border: '1.5px solid var(--border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer',
                  color: 'var(--text-h)',
                  boxShadow: '0 8px 24px rgba(10,10,10,0.04)',
                  transition: 'all 240ms cubic-bezier(0.34,1.56,0.64,1)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'scale(1.08) translateY(3px)'
                  e.currentTarget.style.borderColor = BRAND
                  e.currentTarget.style.color = BRAND
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'scale(1) translateY(0)'
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.color = 'var(--text-h)'
                }}
              >
                <ArrowDown size={18} style={{ strokeWidth: 2.5 }} />
              </button>
            </motion.div>
          </div>
        </div>

        {/* Curved arc globe glow at the bottom */}
        <motion.div
          initial={{ opacity: 0, x: '-50%', y: 150 }}
          animate={{ opacity: 1, x: '-50%', y: 0 }}
          transition={{ delay: 0.4, duration: 1.2, ease: [0.215, 0.61, 0.355, 1] }}
          style={{
            position: 'absolute',
            left: '50%',
            bottom: '-610px',
            height: '780px',
            width: '145%',
            borderRadius: '100%',
            border: '2.5px solid #FF7C3B',
            background: `linear-gradient(to bottom, #FFA366 0%, ${BRAND} 20%, #050505 75%, #000000 100%)`,
            boxShadow: `
              0 -10px 35px rgba(255, 92, 26, 0.65),
              0 -25px 85px rgba(255, 92, 26, 0.45),
              0 -45px 150px rgba(255, 92, 26, 0.22),
              inset 0 15px 45px rgba(255, 163, 102, 0.35)
            `,
            pointerEvents: 'none',
            zIndex: 2,
          }}
        />
      </div>

      <style>{`
        @keyframes blink {
          from, to { opacity: 0 }
          50% { opacity: 1 }
        }
        .hero-floating-icon {
          display: block;
        }
        @media (max-width: 767px) {
          .hero-floating-icon {
            display: none !important;
          }
        }
        @media (max-width: 900px) {
          .hero-header-widgets { flex-direction: column !important; gap: 12px !important; text-align: center; }
          .clutch-widget { flex-direction: column !important; gap: 8px !important; text-align: center; }
        }
        @media (max-width: 600px) {
          .hero-cta-wrapper {
            flex-direction: column !important;
            gap: 16px !important;
            width: 100%;
            align-items: center !important;
          }
          .hero-cta-wrapper .btn-primary {
            width: 100% !important;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  )
}
