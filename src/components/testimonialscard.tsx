import Image from "next/image";
import Link from "next/link";

type Props = {
  content: string;
  author: string;
};

const TestimonialCard = (props: Props) => {
  return (
    <div className="py-4 px-8 bg-white shadow-lg rounded-lg my-20">
              <div className="flex  ">
        <Link href="#" className="text-xl font-large text-indigo-500">
          {props.author}
        </Link>
      </div>
      <div>
        <p className="mt-2 text-gray-600">{props.content}</p>
      </div>

    </div>
  );
};
export default TestimonialCard;
