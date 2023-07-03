const Heading = ({children}) => {
  return (
      <h3 className="hidden sm:block p-[0.1rem] text-lg font-bold text-[#C9454F] uppercase w-fit">
          {children}
      </h3>
  )
}

export default Heading