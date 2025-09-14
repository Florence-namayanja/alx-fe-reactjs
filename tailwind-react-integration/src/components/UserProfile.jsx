export default function UserProfile() {
  return (
    <div className="mx-auto bg-white rounded-lg shadow-md 
                    p-4 sm:p-4 md:p-8 
                    max-w-xs md:max-w-sm text-center">
      <img
        src="https://via.placeholder.com/150"
        alt="Profile"
        className="mx-auto rounded-full 
                   w-24 h-24 sm:w-24 sm:h-24 
                   md:w-36 md:h-36 object-cover"
      />
      <h2 className="mt-4 font-bold 
                     text-lg sm:text-lg md:text-xl">
        John Doe
      </h2>
      <p className="mt-2 text-gray-600 
                    text-sm sm:text-sm md:text-base">
        A passionate software developer who loves building responsive and user-friendly web applications.
      </p>
    </div>
  );
}
