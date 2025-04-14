import { ArrowLeft, ArrowRight, Space, LucideProps } from 'lucide-react'
import s from './shortcuts.module.css'

type Shortcut = {
  label: string
  keys?: string[]
  icons?: React.ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>>[]
}

const Row: React.FC<{ shortcut: Shortcut }> = ({ shortcut }) => {
  return (
    <div className={s.row}>
      <p className={s.label}>{shortcut.label}</p>
      <div className={s.divider} />
      <div className={s.keys}>
        {shortcut.icons
          ? shortcut.icons?.map((Icon, index) => (
              <div key={`${index}`} className={s.key}>
                <Icon className={s.icon} />
              </div>
            ))
          : shortcut.keys.map((key, index) => (
              <div key={`${index}`} className={s.key}>
                {key}
              </div>
            ))}
      </div>
    </div>
  )
}

const ShortcutsModal: React.FC = () => {
  const shortcuts: Shortcut[] = [
    { label: 'Display Shortcuts', keys: ['D'] },
    { label: 'Fullscreen', keys: ['F'] },
    { label: 'Toggle Theme', keys: ['T'] },
    { label: 'Play/Pause', icons: [Space] },
    { label: 'Backward 5s', icons: [ArrowLeft] },
    { label: 'Forward 5s', icons: [ArrowRight] },
  ]

  return (
    <>
      <h1 className={s.heading}>Keyboard Shortcuts</h1>
      <div className={s.shortcuts}>
        {shortcuts.map(shortcut => (
          <Row key={shortcut.label} shortcut={shortcut} />
        ))}
      </div>
    </>
  )
}

export default ShortcutsModal
