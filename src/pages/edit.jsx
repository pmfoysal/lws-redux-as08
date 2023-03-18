import Form from '../components/form';

export default function Edit() {
   return (
      <main class='py-6 2xl:px-6'>
         <div class='container'>
            <div class='p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto'>
               <h4 class='mb-8 text-xl font-bold text-center'>Edit Book</h4>
               <Form mode='edit' />
            </div>
         </div>
      </main>
   );
}
