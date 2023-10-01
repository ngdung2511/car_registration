interface ContainerProps {
  children: React.ReactNode;
}
const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="w-full px-4 mx-auto max-w-7xl sm:px-6 md:px-8 xl:px-10">
      {children}
    </div>
  );
};

export default Container;
