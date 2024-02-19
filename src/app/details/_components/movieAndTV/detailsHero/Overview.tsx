export const Overview = ({ overview }: { overview: string }) => {
    return (
      <div className="max-xsm:text- max-xsm:text-center">
        <h3 className="mb-1 text-2xl  max-xsm:text-xl">Overview</h3>
        <p className="text-lg max-xsm:text-base">{overview}</p>
      </div>
    );
  };