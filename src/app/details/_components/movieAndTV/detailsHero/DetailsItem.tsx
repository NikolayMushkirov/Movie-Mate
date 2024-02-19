export const DetailsItem = ({ label, value }: { label: string; value?: string }) => {
  return (
    <div className=" flex  gap-3 text-lg max-lg:flex-col max-xsm:flex-col max-xsm:gap-2">
      <p className="font-bold max-xsm:text-base">{label}</p>
      <span className="font-normal text-gray-200">{value}</span>
    </div>
  );
};
