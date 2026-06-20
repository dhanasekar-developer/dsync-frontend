interface ErrorContainerProps {
    message: string | undefined
}

const ErrorContainer = ({ message } :ErrorContainerProps) => {
  return (
    <div
      className={`transition-all duration-300 overflow-hidden h-4 ${
        message ? 'opacity-100 mt-0.5 mb-1 ml-1.5' : 'opacity-0'
      }`}
    >
      <div className="text-red-600 text-[11px] font-medium text-wrap">
        {message}
      </div>
    </div>
  );
};

export default ErrorContainer;
