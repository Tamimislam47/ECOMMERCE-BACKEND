import { FaFacebookF } from "react-icons/fa";

interface TeamMember {
  name: string;
  position: string;
  img: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Ethan Walker",
    position: "Software Engineer",
    img: "https://modavereact.vercel.app/images/team/team-1.jpg",
  },
  {
    name: "Sophia Carter",
    position: "Product Designer",
    img: "https://modavereact.vercel.app/images/team/team-2.jpg",
  },
  {
    name: "Liam Johnson",
    position: "Marketing Specialist",
    img: "./homeImgs/women-29.jpg",
  },
  {
    name: "Olivia Martinez",
    position: "UX Researcher",
    img: "./homeImgs/women-19.jpg",
  },
];

const MemberCard: React.FC<TeamMember> = ({ img, name, position }) => {
  return (
    <div className="rounded-md bg-cover p-5 dark:bg-gray-50 dark:text-gray-900">
      <div
        className="h-52 w-full rounded-md bg-gray-200 bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition:"top center"
        }}
      ></div>
      <div className="mb-2 mt-6 flex items-center justify-between">
        <div>
          <span className="block text-xs font-medium uppercase dark:text-violet-600">
            {name}
          </span>
          <h2 className="font-semibold">{position}</h2>
        </div>
        <a
          href="#"
          className="flex h-[40px] w-[40px] items-center justify-center rounded-full border-2 border-black hover:border-0 hover:border-transparent hover:bg-[#4064AC] hover:text-white"
        >
          <FaFacebookF />
        </a>
      </div>
    </div>
  );
};

const Teammembers: React.FC = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center lg:w-[80%]">
      <h1 className="text-2xl font-bold text-black">Meet Our Team</h1>
      <p className="mb-6 text-gray-500">
        Discover exceptional experiences through testimonials from our satisfied
        customers.
      </p>
      {/* Grid Layout */}
      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {teamMembers.map((member, index) => (
          <MemberCard key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

export default Teammembers;
