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
  const personGender = gender === 2 ? "Male" : "Female";

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-2xl font-semibold">Personal Info</h2>
      <div className="flex flex-col gap-1">
        <h4 className=" text-xl font-semibold"> Known For </h4>
        <span className="text-lg font-medium">{known_for_department}</span>
      </div>

      <div className="flex flex-col gap-1">
        <h4 className="text-xl font-semibold">Known Credits</h4>
        <span className="text-lg font-medium">{knownCredits}</span>
      </div>

      <div className="flex flex-col gap-1">
        <h4 className=" text-xl font-semibold">Gender</h4>
        <span className="text-lg font-medium">{personGender}</span>
      </div>

      <div className="flex flex-col gap-1">
        <h4 className=" text-xl font-semibold">Birthday</h4>
        <span className="text-lg font-medium">{birthday}</span>
      </div>

      <div className="flex flex-col gap-1">
        <h4 className=" text-xl font-semibold">Place of Birth</h4>
        <span className="text-lg font-medium">{place_of_birth}</span>
      </div>

      <div className="flex flex-col gap-1">
        <h4 className=" text-xl font-semibold">
          Also Known As
          <div className="flex flex-col gap-2">
            {also_known_as?.map((name) => (
              <span key={name} className="text-lg font-medium">
                {name}
              </span>
            ))}
          </div>
        </h4>
      </div>
    </div>
  );
};

export default PersonInfo;
