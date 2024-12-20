import { IconTrash } from "~/components/ui/icons";

export default function Page() {
  return (
    <div class="border rounded-lg p-6 bg-white shadow-md">
		<div>
	   <h3 class="text-lg font-semibold text-green-500 mb-4">Title</h3>
 
	   <div class="flex gap-2   items-center">
		 <button class="bg-gray-700 hover:bg-red-500 hover:text-white  text-white p-1 rounded-md flex mt-5 items-center justify-center w-8 h-8">
		   <IconTrash />
		 </button>
	   </div>
	 </div>
	 </div>
  );
}
