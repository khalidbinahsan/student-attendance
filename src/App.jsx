import { useState } from 'react'
function App() {
  return (
    <>
    <div class="flex justify-center items-center gap-4 mb-10">
        <div class="border-2 border-gray-400 px-8 py-2 rounded-xl bg-white shadow-sm">
            G.R Salman 👆
        </div>
        <button class="border-2 border-black px-6 py-2 rounded-xl bg-white hover:bg-gray-100 transition font-medium">
            Add Student
        </button>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        
        <div class="border-2 border-gray-300 rounded-2xl p-4 bg-white min-h-[500px]">
            <h2 class="text-center font-bold mb-4 italic">All Student</h2>
            <div class="space-y-3">
                <div class="border-2 border-gray-200 p-3 rounded-xl flex flex-wrap gap-2 items-center justify-between">
                    <span class="font-semibold px-2">Mahir Asief</span>
                    <div class="flex gap-1 text-xs">
                        <button class="border px-2 py-1 rounded hover:bg-gray-100">Edit</button>
                        <button class="border px-2 py-1 rounded hover:bg-gray-100 text-red-500">Remove</button>
                        <button class="border px-2 py-1 rounded bg-blue-50 hover:bg-blue-100">Send to present List</button>
                        <button class="border px-2 py-1 rounded bg-orange-50 hover:bg-orange-100">Send to Absent List</button>
                    </div>
                </div>

                <div class="border-2 border-gray-200 p-3 rounded-xl flex flex-wrap gap-2 items-center justify-between">
                    <span class="font-semibold px-2">G.R. Salman</span>
                    <div class="flex gap-1 text-xs">
                        <button class="border px-2 py-1 rounded hover:bg-gray-100">Edit</button>
                        <button class="border px-2 py-1 rounded hover:bg-gray-100">Remove</button>
                        <button class="border px-2 py-1 rounded">Send to present List</button>
                        <button class="border px-2 py-1 rounded">Send to Absent List</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="border-2 border-gray-300 rounded-2xl p-4 bg-white min-h-[500px]">
            <h2 class="text-center font-bold mb-4 italic">Present List</h2>
            <div class="space-y-3">
                <div class="border-2 border-gray-200 p-3 rounded-xl flex items-center justify-between">
                    <span class="font-semibold">Mahir Asief</span>
                    <button class="border px-4 py-1 rounded-lg text-sm hover:bg-red-50">Accidentally Added</button>
                </div>
            </div>
        </div>

        <div class="border-2 border-gray-300 rounded-2xl p-4 bg-white min-h-[500px]">
            <h2 class="text-center font-bold mb-4 italic">Absent List</h2>
            <div class="space-y-3">
                <div class="border-2 border-gray-200 p-3 rounded-xl flex items-center justify-between">
                    <span class="font-semibold text-sm">G.R. Salman</span>
                    <button class="border px-4 py-1 rounded-lg text-sm hover:bg-red-50">Accidentally Added</button>
                </div>
            </div>
        </div>

    </div>
    </>
  )
}
export default App
