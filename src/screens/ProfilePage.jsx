import { useSelector } from "react-redux";
import { BiUserCircle  } from "react-icons/bi";

function ProfilePage() {
  const { user } = useSelector((state) => state.auth);

  return (
    <div>
      <div className="m-auto mt-40 w-1/2 max-w-sm">
        <div className="bg-white bg-opacity-40 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl px-8 pt-6 pb-8 mb-4">
          <div className="mb-10 mt-10">
            <h3 className="block text-gray-700 text-sm font-bold mb-10 flex justify-center text-xl">
                Profile <BiUserCircle className="ml-4 mt-1"/>
            </h3>
            <p className="block text-gray-700 text-sm font-bold mb-4">
              ID: {user.id}
            </p>
            <p className="block text-gray-700 text-sm font-bold mb-4">
              Name: {user.name}
            </p>
            <p className="block text-gray-700 text-sm font-bold mb-4">
              Email: {user.email}
            </p>
            <p className="block text-gray-700 text-sm font-bold mb-4">
              Profession: {user.optionalId[0].type.toUpperCase()}
            </p>
          </div>
          <div className="flex items-center justify-center">
            <button
                onClick={() => alert('Coming Soon!')}
              type="submit"
              className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-6 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Change Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
