import { useEffect, useState } from 'react'

export default function SplashScreen() {
  const [visible, setVisible] = useState(
    !localStorage.getItem('stavio_visited'),
  )
  useEffect(() => {
    if (!visible) return undefined
    const timer = setTimeout(() => {
      localStorage.setItem('stavio_visited', 'true')
      setVisible(false)
    }, 1600)
    return () => clearTimeout(timer)
  }, [visible])
  return visible ? (
    <div className="splash">
      <div className="splash-mark">
        <span>Stavio</span>
        <div className="splash-line">
          <i />
        </div>
      </div>
      <p>stay somewhere that feels like yours</p>
    </div>
  ) : null
}
