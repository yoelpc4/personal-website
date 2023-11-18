export default function TabHeader({
  text,
  isActive,
  onClick,
}: {
  text: string
  isActive: boolean
  onClick: React.MouseEventHandler
}) {
  return (
    <div
      className={`relative cursor-pointer capitalize xl:text-lg ${
        isActive && 'text-accent transition-all duration-300'
      }`}
      onClick={onClick}
    >
      {text}
      <span
        className={`absolute -bottom-1 left-0 h-[2px] w-8 bg-white ${
          isActive && 'w-[100%] !bg-accent transition-all duration-300'
        }`}
      />
    </div>
  )
}
