import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpCircleIcon,
  Bars2Icon,
  CodeBracketIcon,
  FilmIcon,
  HomeIcon,
  InboxStackIcon,
  MicrophoneIcon,
  TagIcon,
  WrenchScrewdriverIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

export const Icon = ({
  name,
  className,
}: {
  name: string
  className?: string
}) => {
  const icons: { [key: string]: any } = {
    blog: CodeBracketIcon,
    burger: Bars2Icon,
    close: XMarkIcon,
    home: HomeIcon,
    inspiration: FilmIcon,
    next: ArrowRightIcon,
    podcasts: MicrophoneIcon,
    prev: ArrowLeftIcon,
    resources: InboxStackIcon,
    tag: TagIcon,
    tools: WrenchScrewdriverIcon,
    up: ArrowUpCircleIcon,
  }

  const IconComponent = icons[name]

  if (!IconComponent) {
    return null
  }

  return <IconComponent className={className} />
}
