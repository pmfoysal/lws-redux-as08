import Form from '../components/form';

export default function Add() {
   return (
      <main class='py-6 2xl:px-6'>
         <div class='container'>
            <div class='p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto'>
               <h4 class='mb-8 text-xl font-bold text-center'>Add New Book</h4>
               <Form mode='add' />
            </div>
         </div>
      </main>
   );
}
