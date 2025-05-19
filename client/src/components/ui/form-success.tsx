import { CheckCircle2 } from "lucide-react";

interface FormSuccessProps {
  message?: string;
}

const FormSuccess = ({ message }: FormSuccessProps) => {
  if (!message) return null;
  
  return (
    <div className="flex items-center gap-x-2 text-center justify-center bg-emerald-500/15 p-3 rounded-md mb-6">
      <CheckCircle2 className="h-12 w-12 text-saffron mb-2" />
      <div className="flex flex-col">
        <p className="text-lg font-bold text-white mb-1">Thank You!</p>
        <p className="text-sm">{message}</p>
      </div>
    </div>
  );
};

export default FormSuccess;
