
const Container = ({ children , className = '', ...props }:{ children: React.ReactNode, className?: string, props?: any}) => {
  return (
    <div className={`flex justify-center items-center ${className}`} {...props}>
      {children}
    </div>
  )
}

export default Container
