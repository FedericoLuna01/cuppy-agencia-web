const Title = ({ label }: { label: string }) => {
  return (
    <h2 className="relative text-3xl md:text-4xl font-extrabold uppercase text-center">
      <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 bg-[#ED8936] h-6 w-[105%] -z-50"></span>
      {label}
    </h2>
  )
}

export default Title