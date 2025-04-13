import styles from './shortcuts.module.css'

const ShortcutsModal: React.FC = () => {
  const shortcuts = [
    { label: 'Display Shortcuts', keys: ['D'] },
    { label: 'Play/Pause', keys: ['Space'] },
    { label: 'Fullscreen', keys: ['F'] },
    { label: 'Backward 5s', keys: ['←'] },
    { label: 'Forward 5s', keys: ['→'] },
  ]

  return (
    <div className='opacity-40'>
      <h1 className={styles.heading}>Keyboard Shortcuts</h1>
      <div className={styles.shortcuts}>
        {shortcuts.map(shortcut => (
          <Row key={shortcut.label} keys={shortcut.keys} label={shortcut.label} />
        ))}
      </div>
    </div>
  )
}

interface RowProps {
  keys: Array<string>
  label: string
}

function Row({ label, keys }: RowProps) {
  return (
    <div className={styles.row}>
      <p className={styles.label}>{label}</p>
      <div className={styles.divider} />
      <div className={styles.keys}>
        {keys.map(key => (
          <Key key={`${label}-${key}`}>{key}</Key>
        ))}
      </div>
    </div>
  )
}

interface KeyProps {
  children: React.ReactNode
}

function Key({ children }: KeyProps) {
  return <div className={styles.key}>{children}</div>
}

export default ShortcutsModal
