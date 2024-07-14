// import StarIcon from "./star";

function QuoteIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
    </svg>
  );
}

function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

type PropType = {
  review: { id: number; image?: string; text: string; name: string };
};

export default function Review(props: PropType) {
  const { review } = props;
  const { text, name } = review;
  return (
    <>
      <div className="mt-8 w-full md:mt-0">
        <div className="flex items-start space-x-4">
          <QuoteIcon className="min-w-8 md:min-h-16 md:min-w-16 text-gray-400" />
          <div>
            <p className="text-lg md:text-2xl">{text}</p>
            <div className="flex items-center">
              <div className="flex h-full space-x-1 text-yellow-400">
                <StarIcon className="h-4 w-4 md:h-10 md:w-10 fill-yellow-400" />
                <StarIcon className="h-4 w-4 md:h-10 md:w-10 fill-yellow-400" />
                <StarIcon className="h-4 w-4 md:h-10 md:w-10 fill-yellow-400" />
                <StarIcon className="h-4 w-4 md:h-10 md:w-10 fill-yellow-400" />
                <StarIcon className="h-4 w-4 md:h-10 md:w-10 fill-yellow-400" />
              </div>
              <div className="ml-6 flex items-center">
                <div className="font-bold text-lg">{name}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
