// setup arrays in arrays
const paginate = (followers) => {
   const itemPerPage = 9;
   //    find out how many page we need
   //    round up the page so the rest can fit into the last page
   const page = Math.ceil(followers.length / itemPerPage);

   //    set arrays
   const newFollowers = Array.from({ length: page }, (_, index) => {
      const start = index * itemPerPage;
      //   first time the index will be 0

      //   start slicing the followers from the main list base on out must itemPerPage
      //   first param is the starting point second param is the ending
      //  return the amount of items each time to run the function
      return followers.slice(start, start + itemPerPage);
   });
   return newFollowers;
};

export default paginate;
