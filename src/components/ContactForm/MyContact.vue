<template>
<form class="text-left space-y-5">
    <div>
        <label for="first-name" class="block text-sm font-medium text-gray-700">First Name<span class="text-red-950" aria-hidden="true">*</span></label>
        <div class="mt-1">
            <input type="text" id="first-name" name="first-name" class="shadow-sm focus:ring-dgtext-800 focus:border-dgtext-800 block w-full text-2xl border-dgcon-600 rounded-md bg-formbg-850">
        </div>
    </div>
    <div>
        <label for="last-name" class="block text-sm font-medium text-gray-700">Last Name</label>
        <div class="mt-1">
            <input type="text" id="last-name" name="last-name" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full text-2xl border-gray-300 rounded-md bg-formbg-850">
        </div>
    </div>
    <div class="col-span-2">
        <label for="email-address" class="block text-sm font-medium text-gray-700">Email Address<span class="text-red-950" aria-hidden="true">*</span></label>
        <div class="mt-1">
            <input type="text" id="email-address" name="email-address" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full text-2xl border-gray-300 rounded-md bg-formbg-850">
        </div>
    </div>
    <div class="col-span-2">
        <label for="email-address" class="block text-sm font-medium text-gray-700">Company Name</label>
        <div class="mt-1">
            <input type="text" id="email-address" name="email-address" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full text-2xl border-gray-300 rounded-md bg-formbg-850">
        </div>
    </div>
    <div class="col-span-2">
        <label for="email-address" class="block text-sm font-medium text-gray-700">Website URL</label>
        <div class="mt-1">
            <input type="text" id="email-address" name="email-address" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full text-2xl border-gray-300 rounded-md bg-formbg-850">
        </div>
    </div>
    <div class="col-span-2">
        <label for="email-address" class="block text-sm font-medium text-gray-700">Designation</label>
        <div class="mt-1">
            <input type="text" id="email-address" name="email-address" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full text-2xl border-gray-300 rounded-md bg-formbg-850">
        </div>
    </div>
    <div class="col-span-2">
        <label for="email-address" class="block text-sm font-medium text-gray-700">Phone Number<span class="text-red-950" aria-hidden="true">*</span></label>
        <div class="mt-1">
            <input type="text" id="email-address" name="email-address" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full text-2xl border-gray-300 rounded-md bg-formbg-850">
        </div>
    </div>
    <div class="col-span-2">
        <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
        <div class="mt-1">
            <textarea id="message" name="message" rows="4" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full text-2xl border-gray-300 rounded-md bg-formbg-850"></textarea>
        </div>
    </div>
    <div class="col-span-2">
        <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-500 hover:bg-gray-950 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
            Submit
        </button>
    </div>
</form>
</template>

<style scoped>
label.relative::after {
  content: "*";
  color: red;
  position: absolute;
  top: 0;
  right: -0.5em;
  font-size: 10px;
}
input{
    box-shadow: 0 1.5rem 4rem rgba(0,0,0,.15);
}
</style>
