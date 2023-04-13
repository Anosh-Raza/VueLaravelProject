<template>
    <form class="grid grid-cols-2 gap-6 text-left">
  <div>
    <label for="first-name" class="block text-sm font-medium text-gray-700">First Name</label>
    <div class="mt-1">
      <input type="text" id="first-name" name="first-name" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full text-3xl border-gray-300 rounded-md">
    </div>
  </div>
  <div>
    <label for="last-name" class="block text-sm font-medium text-gray-700">Last Name</label>
    <div class="mt-1">
      <input type="text" id="last-name" name="last-name" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full text-3xl border-gray-300 rounded-md">
    </div>
  </div>
  <div class="col-span-2">
    <label for="email-address" class="block text-sm font-medium text-gray-700">Email Address</label>
    <div class="mt-1">
      <input type="text" id="email-address" name="email-address" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full text-3xl border-gray-300 rounded-md">
    </div>
  </div>
  <div class="col-span-2">
    <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
    <div class="mt-1">
      <textarea id="message" name="message" rows="4" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full text-3xl border-gray-300 rounded-md"></textarea>
    </div>
  </div>
  <div class="col-span-2">
    <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-500 hover:bg-gray-950 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
      Submit
    </button>
  </div>
</form>
</template>