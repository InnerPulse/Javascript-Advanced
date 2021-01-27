function solve() {
   document.querySelector("#btnSend").addEventListener("click", onClick);
   const attachWorkers = document.querySelector("#workers p");
   const attachBestRestaurant = document.querySelector("#bestRestaurant p");
   const userInput = document.querySelector("#inputs textarea");

   function onClick() {
      let bestRestaurant = null;
      const allRestaurants = {};

      // Parse data to restaurants and workers
      JSON.parse(userInput.value).forEach((el) => {
         const [restaurantName, data] = el.split(" - ");
         let workers = data.split(", ");

         if (allRestaurants[restaurantName]) {
            allRestaurants[restaurantName].workers = allRestaurants[
               restaurantName
            ].workers.concat(parseData(workers));
         } else {
            allRestaurants[restaurantName] = {
               workers: parseData(workers),
            };
         }
      });

      // Assigning highest and average salaries
      for (const r in allRestaurants) {
         allRestaurants[r].highestSalarie = Number(highestSalarie(allRestaurants[r].workers));
         allRestaurants[r].averageSalary = Number(averageSalary(allRestaurants[r].workers));

         //  Find best restaurant by mentiond criteria
         if (bestRestaurant) {
            allRestaurants[r].averageSalary > allRestaurants[bestRestaurant].averageSalary
               ? (bestRestaurant = r)
               : bestRestaurant;
         } else {
            bestRestaurant = r;
         }
      }
      sortAndPrint();

      // Parse data to workers and thier slaries
      function parseData(data) {
         return data.map((worker) => {
            const [name, salary] = worker.split(" ");
            return { name, salary: Number(salary) };
         });
      }

      // Find highest salarie
      function highestSalarie(workers) {
         return workers.reduce((acc, c) => (c.salary > acc ? c.salary : acc), 0).toFixed(2);
      }

      // Find average salarie
      function averageSalary(workers) {
         return (workers.reduce((acc, c) => acc + c.salary, null) / workers.length).toFixed(2);
      }

      function sortAndPrint() {
         attachBestRestaurant.textContent = `Name: ${bestRestaurant} Average Salary: ${allRestaurants[
            bestRestaurant
         ].averageSalary.toFixed(2)} Best Salary: ${allRestaurants[
            bestRestaurant
         ].highestSalarie.toFixed(2)} `;

         allRestaurants[bestRestaurant].workers
            .sort((a, b) => b.salary - a.salary)
            .forEach(
               (worker) =>
                  (attachWorkers.textContent += `Name: ${worker.name} With Salary: ${worker.salary} `)
            );
      }
   }
}
