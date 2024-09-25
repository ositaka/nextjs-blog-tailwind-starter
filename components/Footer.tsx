import { Icon } from './Icon'

export default function Footer() {
  let currentYear = new Date().getFullYear()
  // get last 2 digits of the currentYear
  currentYear = parseInt(currentYear.toString().substr(-2))

  return (
    <footer className="p-4 sm:p-6 bg-slate-200 dark:bg-slate-800">
      <div className="flex items-center justify-between text-xs">
        <p className="text-slate-700 dark:text-slate-300">
          Copyright &copy; 2017-{currentYear}
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 outline-offset-8 rounded"
        >
          <span>Scroll to Top</span>
          <Icon name="up" className="size-4" />
        </button>
      </div>
    </footer>
  )
}
