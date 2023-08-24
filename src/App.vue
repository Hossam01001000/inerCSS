<script>
export default {
  data() {
    return {
      listocolors: ["red", "green", "blue", "yellow", "black", "white"],
      color: "red",
      alignContent:'center',
      alignContentOptions:['center','flex-start','flex-end','space-around','space-between','stretch'],
      alignItems:'center',
      alignItemsOptions:['center','flex-start','flex-end','stretch','baseline'],
    
    };
  },
};
</script>

<template>
  <div>
    <div>
      <div class="flex justify-center items-center pb-1 pt-4">
        <p class="text-3xl text-red-600">accent-color</p>
      </div>
      <div class="px-3 py-1">
        The accent-color property in CSS is capable of re-tinting the accented
        color of form controls provided by the browser’s default styles with a
        custom color value.
      </div>
      <div class="flex flex-wrap md:flex-nowrap gap-2 p-4">
        <div
          class="border-yellow-600 rounded-xl h-64 relative border-2 w-full grid place-items-center border-solid"
        >
          <div class="absolute top-2 left-2 p-4">
            accent-color :
            <input
              type="text"
              class="active:outline-none border focus:outline-none focus-visible:outline-none w-16 focus:border-solid focus:border-2 px-1 rounded-md focus:border-black"
              v-model="color"
            />
          </div>
          <div class="p-6">
            <div>
              <input
                type="checkbox"
                checked
                name="what"
                class="mr-4"
                :style="{ 'accent-color': color }"
                id=""
              />
              <input type="checkbox" checked name="kjhhh" id="" />
            </div>
            <div>
              <input
                type="radio"
                checked
                name="what"
                class="mr-4"
                :style="{ 'accent-color': color }"
                id=""
              />
              <input type="radio" checked name="kjhhh" id="" />
            </div>
            <div>
              <input
                type="range"
                checked
                name="what"
                class="mr-4"
                :style="{ 'accent-color': color }"
                id=""
              />
              <div>
                <input type="range" name="kjhhh" id="" />
              </div>
            </div>
          </div>
        </div>

        <div
          class="border-yellow-600 h-64 rounded-xl border-2 grid place-items-center w-full border-solid"
        >
          <div class="p-4">
            <label class="px-4">pick a color</label>
            <select
              name="fdgf"
              :placeholder="color"
              class="px-1 border rounded-md border-black pb-1"
              v-model="color"
              id=""
            >
              <option v-for="co in listocolors" :value="co">{{ co }}</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="flex justify-center items-center pb-1 pt-4">
        <p class="text-3xl text-red-600">align-content</p>
      </div>
      <div class="px-3 py-1">
        It helps to align a flex container’s lines within it when there is extra
        space in the cross-axis
      </div>
      <div class="flex flex-wrap md:flex-nowrap gap-2 p-4">
        <div
          class="border-yellow-600 rounded-xl items-center h-64 relative border-2 w-full  justify-center border-solid"
        >
          <div class="absolute top-2 left-2 p-4 bg-transparent">
            align-content :
            <input
              type="text"
              class="active:outline-none border  bg-transparent focus:outline-none focus-visible:outline-none w-16 focus:border-solid focus:border-2 px-1 rounded-md focus:border-black"
              v-model="alignContent"
            />
          </div>
          <div class="h-1/6"></div>
          <div :style="{'align-content':alignContent}" class="h-5/6 flex flex-wrap px-4 py-1">
            <div class="flex w-full gap-2 h-1/6">
              <div class="flex-1 bg-blue-500"></div>
              <div class="flex-1 bg-blue-500"></div>
              <div class="flex-1 bg-blue-500"></div>
            </div>
            
            <div class="flex w-full gap-2 h-1/6">
              <div class="flex-1 bg-red-500"></div>
              <div class="flex-1 bg-red-500"></div>
              <div class="flex-1 bg-red-500"></div>
            </div>
            
            <div class="flex w-full gap-2 h-1/6">
              <div class="flex-1 bg-green-500"></div>
              <div class="flex-1 bg-green-500"></div>
              <div class="flex-1 bg-green-500"></div>
            </div>

          </div>
          
        
        </div>

        <div
          class="border-yellow-600 h-64 rounded-xl border-2 grid place-items-center w-full border-solid"
        >
          <div class="p-4">
            <label class="px-4">align-content:</label>
            <select
              name="fdgf"
              :placeholder="color"
              class="px-1 border rounded-md border-black pb-1"
              v-model="alignContent"
              id=""
            >
              <option v-for="co in alignContentOptions" :value="co">{{ co }}</option>
            </select>
          </div>
        </div>
      </div>
    </div>
     <div>
      <div class="flex justify-center items-center pb-1 pt-4">
        <p class="text-3xl text-red-600">align-items</p>
      </div>
      <div class="px-3 py-1">
       It effects how elements are aligned both in Flexbox and Grid layouts.
      </div>
      <div class="flex flex-wrap md:flex-nowrap gap-2 p-4">
        <div
          class="border-yellow-600 rounded-xl items-center h-64 relative border-2 w-full  justify-center border-solid"
        >
          <div class="absolute top-2 left-2 p-4 bg-transparent">
            align-items :
            <input
              type="text"
              class="active:outline-none border  bg-transparent focus:outline-none focus-visible:outline-none w-16 focus:border-solid focus:border-2 px-1 rounded-md focus:border-black"
              v-model="alignItems"
            />
          </div>
          <div class="h-1/6"></div>
          <div  class="h-5/6 flex px-4 py-1">
            <div :style="{'align-items':alignItems}" class="flex w-full gap-2 h-full">
              <div class="flex-1 bg-blue-500 h-1/3"></div>
              <div class="flex-1 bg-blue-500 h-1/3"></div>
              <div class="flex-1 bg-blue-500 h-1/3"></div>
            </div>
            
            

          </div>
          
        
        </div>

        <div
          class="border-yellow-600 h-64 rounded-xl border-2 grid place-items-center w-full border-solid"
        >
          <div class="p-4">
            <label class="px-4">align-items:</label>
            <select
              name="fdgf"
              :placeholder="color"
              class="px-1 border rounded-md border-black pb-1"
              v-model="alignItems"
              id=""
            >
              <option v-for="co in alignItemsOptions" :value="co">{{ co }}</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.squu {
  max-width: 50%;
  max-height: 50%;
}
</style>