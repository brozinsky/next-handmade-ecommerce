export default function ProductSkeleton() {
  return (
    <div className="xs:max-w-[300px] w-full mx-auto flex flex-col overflow-hidden transition rounded-md shadow-none group hover:shadow-default">
      {/* image */}
      <div className="relative w-full h-56 overflow-hidden bg-white aspect-square">
        <div className="flex items-center justify-center object-cover w-full h-full transition duration-500 animate-pulse bg-neutral-200/60 aspect-square ">
          <svg
            className="w-10 h-10 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>
      </div>

      <div className="flex flex-col justify-between flex-1 p-6">
        <div>
          {/* title */}
          <div className="rounded-lg h-[25px] mx-auto animate-pulse w-[150px] mb-2 bg-neutral-200/60"></div>
          {/* price */}
          <div className="rounded-lg w-[75px] h-[30px] animate-pulse mx-auto bg-neutral-200/60"></div>
        </div>
        {/* button */}
        <div className="rounded-xl mx-auto mt-4 w-[75px] h-[48px] w-[186px] bg-neutral-200/40"></div>
      </div>
    </div>
  );
}
