import { PersonType } from "@/types/person.types";

type Props = {
  personData: PersonType;
  knownCredits: number;
};

const PersonInfo = ({ personData, knownCredits }: Props) => {
  const {
    known_for_department,
    gender,
    birthday,
    place_of_birth,
    also_known_as,
  } = personData;

  const genderMap: Record<number, string> = {
    1: "Female",
    2: "Male",
  };

  const personGender = genderMap[gender as keyof typeof genderMap];

  const infoItems = [
    { label: "Known For", value: known_for_department },
    { label: "Known Credits", value: knownCredits },
    { label: "Gender", value: personGender },
    { label: "Birthday", value: birthday },
    { label: "Place of Birth", value: place_of_birth },
  ];

  return (
    <div className="flex flex-col gap-6 max-lg:text-center max-md:gap-3">
      <h2 className="text-2xl font-semibold">Personal Info</h2>
      {infoItems.map((infoItem, index) => (
        <div key={index} className="flex flex-col gap-1">
          <h4 className=" text-xl font-semibold max-xsm:text-lg">{infoItem.label}</h4>
          <span className="text-lg font-medium max-xsm:text-base">{infoItem.value}</span>
        </div>
      ))}

      <div className="flex flex-col gap-1 max-lg:hidden">
        <h4 className=" text-xl font-semibold">Also Known As</h4>
        <div className="flex flex-col gap-2">
          {also_known_as?.map((name) => (
            <span key={name} className="text-lg font-medium">
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonInfo;
