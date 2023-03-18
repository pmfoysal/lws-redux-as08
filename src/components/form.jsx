export default function Form({ mode }) {
   return (
      <form class='book-form'>
         <div class='space-y-2'>
            <label for='lws-bookName'>Book Name</label>
            <input required class='text-input' type='text' id='lws-bookName' name='name' />
         </div>
         <div class='space-y-2'>
            <label for='lws-author'>Author</label>
            <input required class='text-input' type='text' id='lws-author' name='author' />
         </div>
         <div class='space-y-2'>
            <label for='lws-thumbnail'>Image Url</label>
            <input required class='text-input' type='text' id='lws-thumbnail' name='thumbnail' />
         </div>
         <div class='grid grid-cols-2 gap-8 pb-4'>
            <div class='space-y-2'>
               <label for='lws-price'>Price</label>
               <input required class='text-input' type='number' id='lws-price' name='price' />
            </div>
            <div class='space-y-2'>
               <label for='lws-rating'>Rating</label>
               <input required class='text-input' type='number' id='lws-rating' name='rating' min='1' max='5' />
            </div>
         </div>
         <div class='flex items-center'>
            <input id='lws-featured' type='checkbox' name='featured' class='w-4 h-4' />
            <label for='lws-featured' class='ml-2 text-sm'>
               This is a featured book
            </label>
         </div>
         <button type='submit' class='submit' id='lws-submit'>
            Add Book
         </button>
      </form>
   );
}
