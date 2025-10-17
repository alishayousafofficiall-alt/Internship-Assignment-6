
// ---------------------- Categories ----------------------
export const categoriesData = [
  { id: 1, title: "Cakes", image: "cake.jpg", parent_id: null },
  { id: 2, title: "Dount", image: "dount.jpg", parent_id: null },
  { id: 3, title: "Cupcakes", image: "cupcakes.jpg", parent_id: null },
  { id: 4, title: "Coffee", image: "coffee.jpg", parent_id: null },
  { id: 5, title: "Juice", image: "juice.jpg", parent_id: null },

  { id: 6, title: "Chocolate", image: "cc4.jpg", parent_id: 1 },
  { id: 7, title: "Cheese", image: "ch5.jpg", parent_id: 1 },
  { id: 8, title: "Strawberry", image: "sc4.jpg", parent_id: 1 },

  { id: 9, title: "Chocolate", image: "d5.jpg", parent_id: 2 },
  { id: 10, title: "Strawberry", image: "sd5.jpg", parent_id: 2 },

  { id: 11, title: "Chocolate Cupcake", image: "cs10.jpg", parent_id: 3 },
  { id: 12, title: "Strawberry Cupcake", image: "scc1.jpg", parent_id: 3 },

  { id: 13, title: "Hot Chocolate Coffee", image: "co1.jpg", parent_id: 4 },
  { id: 14, title: "Cold  Chocolate Coffee", image: "co11.jpg", parent_id: 4 },

  { id: 16, title: "Mango Juice", image: "ma1.jpg", parent_id: 5 },
  { id: 17, title: "Strawberry Juice", image: "sj1.jpg", parent_id: 5 },


];



export const specialCakes = [
  {
    id: 1,
    name: "Birthday Cake",
    slug: "birthday-cake",
    image: "bi1.jpg",
    created_at: "2025-09-06T05:00:00.000+00:00"
  },
  {
    id: 2,
    name: "Marriage Cake",
    slug: "marriage-cake",
    image: "mi1.jpg",
    created_at: "2025-09-06T05:00:00.000+00:00"
  },
  {
    id: 3,
    name: "Graduation Cake",
    slug: "graduation-cake",
    image: "gi1.jpg",
    created_at: "2025-09-06T05:00:00.000+00:00"
  }
];



// ---------------------- Products ----------------------
export const productsData = [
  // Strawberry Cakes (category_id = 8)
  { id: 1, title: "Strawberry Cake 1", description: "Delicious Strawberry Cake", price: 3000.00, image: "sc1.jpg", category_id: 8, sku: "SC001" },
  { id: 2, title: "Strawberry Cake 2", description: "Delicious Strawberry Cake", price: 3200.00, image: "sc2.jpg", category_id: 8, sku: "SC002" },
  { id: 3, title: "Strawberry Cake 3", description: "Delicious Strawberry Cake", price: 3400.00, image: "sc3.jpg", category_id: 8, sku: "SC003" },
  { id: 4, title: "Strawberry Cake 4", description: "Delicious Strawberry Cake", price: 3600.00, image: "sc4.jpg", category_id: 8, sku: "SC004" },
  { id: 5, title: "Strawberry Cake 5", description: "Delicious Strawberry Cake", price: 3800.00, image: "sc5.jpg", category_id: 8, sku: "SC005" },
  { id: 6, title: "Strawberry Cake 6", description: "Delicious Strawberry Cake", price: 4000.00, image: "sc6.jpg", category_id: 8, sku: "SC006" },
  { id: 7, title: "Strawberry Cake 7", description: "Delicious Strawberry Cake", price: 3100.00, image: "sc7.jpg", category_id: 8, sku: "SC007" },
  { id: 8, title: "Strawberry Cake 8", description: "Delicious Strawberry Cake", price: 3300.00, image: "sc8.jpg", category_id: 8, sku: "SC008" },
  { id: 9, title: "Strawberry Cake 9", description: "Delicious Strawberry Cake", price: 3500.00, image: "sc9.jpg", category_id: 8, sku: "SC009" },
  { id: 10, title: "Strawberry Cake 10", description: "Delicious Strawberry Cake", price: 3700.00, image: "sc10.jpg", category_id: 8, sku: "SC010" },




  // Chocolate Cakes (category_id = 6)
  { id: 11, title: "Chocolate Cake 1", description: "Delicious Chocolate Cake", price: 3000.00, image: "cc1.jpg", category_id: 6, sku: "CHC001" },
  { id: 12, title: "Chocolate Cake 2", description: "Delicious Chocolate Cake", price: 3200.00, image: "cc2.jpg", category_id: 6, sku: "CHC002" },
  { id: 13, title: "Chocolate Cake 3", description: "Delicious Chocolate Cake", price: 3400.00, image: "cc3.jpg", category_id: 6, sku: "CHC003" },
  { id: 14, title: "Chocolate Cake 4", description: "Delicious Chocolate Cake", price: 3600.00, image: "cc4.jpg", category_id: 6, sku: "CHC004" },
  { id: 15, title: "Chocolate Cake 5", description: "Delicious Chocolate Cake", price: 3800.00, image: "cc5.jpg", category_id: 6, sku: "CHC005" },
  { id: 16, title: "Chocolate Cake 6", description: "Delicious Chocolate Cake", price: 4000.00, image: "cc6.jpg", category_id: 6, sku: "CHC006" },
  { id: 17, title: "Chocolate Cake 7", description: "Delicious Chocolate Cake", price: 3100.00, image: "cc7.jpg", category_id: 6, sku: "CHC007" },
  { id: 18, title: "Chocolate Cake 8", description: "Delicious Chocolate Cake", price: 3300.00, image: "cc8.jpg", category_id: 6, sku: "CHC008" },
  { id: 19, title: "Chocolate Cake 9", description: "Delicious Chocolate Cake", price: 3500.00, image: "cc9.jpg", category_id: 6, sku: "CHC009" },
  { id: 20, title: "Chocolate Cake 10", description: "Delicious Chocolate Cake", price: 3700.00, image: "cc10.jpg", category_id: 6, sku: "CHC010" },

  
 // Cheese Cakes (category_id = 7)
  { id: 21, title: "Cheese Cake 1", description: "Delicious Cheese Cake", price: 3000.00, image: "ch1.jpg", category_id: 7, sku: "CHS001" },
  { id: 22, title: "Cheese Cake 2", description: "Delicious Cheese Cake", price: 3200.00, image: "ch2.jpg", category_id: 7, sku: "CHS002" },
  { id: 23, title: "Cheese Cake 3", description: "Delicious Cheese Cake", price: 3400.00, image: "ch3.jpg", category_id: 7, sku: "CHS003" },
  { id: 24, title: "Cheese Cake 4", description: "Delicious Cheese Cake", price: 3600.00, image: "ch4.jpg", category_id: 7, sku: "CHS004" },
  { id: 25, title: "Cheese Cake 5", description: "Delicious Cheese Cake", price: 3800.00, image: "ch5.jpg", category_id: 7, sku: "CHS005" },
  { id: 26, title: "Cheese Cake 6", description: "Delicious Cheese Cake", price: 4000.00, image: "ch6.jpg", category_id: 7, sku: "CHS006" },
  { id: 27, title: "Cheese Cake 7", description: "Delicious Cheese Cake", price: 3100.00, image: "ch7.jpg", category_id: 7, sku: "CHS007" },
  { id: 28, title: "Cheese Cake 8", description: "Delicious Cheese Cake", price: 3300.00, image: "ch8.jpg", category_id: 7, sku: "CHS008" },
  { id: 29, title: "Cheese Cake 9", description: "Delicious Cheese Cake", price: 3500.00, image: "ch9.jpg", category_id: 7, sku: "CHS009" },
  { id: 30, title: "Cheese Cake 10", description: "Delicious Cheese Cake", price: 3700.00, image: "ch10.jpg", category_id: 7, sku: "CHS010" },

  // Dounts (category_id = 9)
  { id: 31, title: "Dount 1", description: "Delicious Dount", price: 500.00, image: "d1.jpg", category_id: 9, sku: "D001" },
  { id: 32, title: "Dount 2", description: "Delicious Dount", price: 550.00, image: "d2.jpg", category_id: 9, sku: "D002" },
  { id: 33, title: "Dount 3", description: "Delicious Dount", price: 600.00, image: "d3.jpg", category_id: 9, sku: "D003" },
  { id: 34, title: "Dount 4", description: "Delicious Dount", price: 650.00, image: "d4.jpg", category_id: 9, sku: "D004" },
  { id: 35, title: "Dount 5", description: "Delicious Dount", price: 700.00, image: "d5.jpg", category_id: 9, sku: "D005" },
  { id: 36, title: "Dount 6", description: "Delicious Dount", price: 520.00, image: "d6.jpg", category_id: 9, sku: "D006" },
  { id: 37, title: "Dount 7", description: "Delicious Dount", price: 580.00, image: "d7.jpg", category_id: 9, sku: "D007" },
  { id: 38, title: "Dount 8", description: "Delicious Dount", price: 630.00, image: "d8.jpg", category_id: 9, sku: "D008" },
  { id: 39, title: "Dount 9", description: "Delicious Dount", price: 670.00, image: "d9.jpg", category_id: 9, sku: "D009" },
  { id: 40, title: "Dount 10", description: "Delicious Dount", price: 700.00, image: "d10.jpg", category_id: 9, sku: "D010" },


   // --- Strawberry Dounts (category_id = 10) ---
  { id: 41, title: "Strawberry Dount 1", description: "Delicious Strawberry Dount", price: 500.00, image: "sd1.jpg", category_id: 10, sku: "SD001" },
  { id: 42, title: "Strawberry Dount 2", description: "Delicious Strawberry Dount", price: 520.00, image: "sd2.jpg", category_id: 10, sku: "SD002" },
  { id: 43, title: "Strawberry Dount 3", description: "Delicious Strawberry Dount", price: 540.00, image: "sd3.jpg", category_id: 10, sku: "SD003" },
  { id: 44, title: "Strawberry Dount 4", description: "Delicious Strawberry Dount", price: 560.00, image: "sd4.jpg", category_id: 10, sku: "SD004" },
  { id: 45, title: "Strawberry Dount 5", description: "Delicious Strawberry Dount", price: 580.00, image: "sd5.jpg", category_id: 10, sku: "SD005" },
  { id: 46, title: "Strawberry Dount 6", description: "Delicious Strawberry Dount", price: 600.00, image: "sd6.jpg", category_id: 10, sku: "SD006" },
  { id: 47, title: "Strawberry Dount 7", description: "Delicious Strawberry Dount", price: 620.00, image: "sd7.jpg", category_id: 10, sku: "SD007" },
  { id: 48, title: "Strawberry Dount 8", description: "Delicious Strawberry Dount", price: 640.00, image: "sd8.jpg", category_id: 10, sku: "SD008" },
  { id: 49, title: "Strawberry Dount 9", description: "Delicious Strawberry Dount", price: 660.00, image: "sd9.jpg", category_id: 10, sku: "SD009" },
  { id: 50, title: "Strawberry Dount 10", description: "Delicious Strawberry Dount", price: 680.00, image: "sd10.jpg", category_id: 10, sku: "SD010" },

  // --- Chocolate Cupcakes (category_id = 11) ---
  { id: 51, title: "Chocolate Cupcake 1", description: "Delicious Chocolate Cupcake", price: 150.00, image: "cs1.jpg", category_id: 11, sku: "CC001" },
  { id: 52, title: "Chocolate Cupcake 2", description: "Delicious Chocolate Cupcake", price: 160.00, image: "cs2.jpg", category_id: 11, sku: "CC002" },
  { id: 53, title: "Chocolate Cupcake 3", description: "Delicious Chocolate Cupcake", price: 170.00, image: "cs3.jpg", category_id: 11, sku: "CC003" },
  { id: 54, title: "Chocolate Cupcake 4", description: "Delicious Chocolate Cupcake", price: 180.00, image: "cs4.jpg", category_id: 11, sku: "CC004" },
  { id: 55, title: "Chocolate Cupcake 5", description: "Delicious Chocolate Cupcake", price: 190.00, image: "cs5.jpg", category_id: 11, sku: "CC005" },
  { id: 56, title: "Chocolate Cupcake 6", description: "Delicious Chocolate Cupcake", price: 200.00, image: "cs6.jpg", category_id: 11, sku: "CC006" },
  { id: 57, title: "Chocolate Cupcake 7", description: "Delicious Chocolate Cupcake", price: 210.00, image: "cs7.jpg", category_id: 11, sku: "CC007" },
  { id: 58, title: "Chocolate Cupcake 8", description: "Delicious Chocolate Cupcake", price: 220.00, image: "cs8.jpg", category_id: 11, sku: "CC008" },
  { id: 59, title: "Chocolate Cupcake 9", description: "Delicious Chocolate Cupcake", price: 230.00, image: "cs9.jpg", category_id: 11, sku: "CC009" },
  { id: 60, title: "Chocolate Cupcake 10", description: "Delicious Chocolate Cupcake", price: 240.00, image: "cs10.jpg", category_id: 11, sku: "CC010" },

   // --- Strawberry Cupcakes (category_id = 12) ---
  { id: 61, title: "Strawberry Cupcake 1", description: "Delicious Strawberry Cupcake", price: 150.00, image: "scc1.jpg", category_id: 12, sku: "SCC001" },
  { id: 62, title: "Strawberry Cupcake 2", description: "Delicious Strawberry Cupcake", price: 160.00, image: "scc2.jpg", category_id: 12, sku: "SCC002" },
  { id: 63, title: "Strawberry Cupcake 3", description: "Delicious Strawberry Cupcake", price: 170.00, image: "scc3.jpg", category_id: 12, sku: "SCC003" },
  { id: 64, title: "Strawberry Cupcake 4", description: "Delicious Strawberry Cupcake", price: 180.00, image: "scc4.jpg", category_id: 12, sku: "SCC004" },
  { id: 65, title: "Strawberry Cupcake 5", description: "Delicious Strawberry Cupcake", price: 190.00, image: "scc5.jpg", category_id: 12, sku: "SCC005" },
  { id: 66, title: "Strawberry Cupcake 6", description: "Delicious Strawberry Cupcake", price: 200.00, image: "scc6.jpg", category_id: 12, sku: "SCC006" },
  { id: 67, title: "Strawberry Cupcake 7", description: "Delicious Strawberry Cupcake", price: 210.00, image: "scc7.jpg", category_id: 12, sku: "SCC007" },
  { id: 68, title: "Strawberry Cupcake 8", description: "Delicious Strawberry Cupcake", price: 220.00, image: "scc8.jpg", category_id: 12, sku: "SCC008" },
  { id: 69, title: "Strawberry Cupcake 9", description: "Delicious Strawberry Cupcake", price: 230.00, image: "scc9.jpg", category_id: 12, sku: "SCC009" },
  { id: 70, title: "Strawberry Cupcake 10", description: "Delicious Strawberry Cupcake", price: 240.00, image: "scc10.jpg", category_id: 12, sku: "SCC010" },

  // --- Hot Chocolate Coffee (category_id = 13) ---
  { id: 71, title: "Hot Chocolate Coffee 1", description: "Delicious Hot Chocolate Coffee", price: 250.00, image: "co1.jpg", category_id: 13, sku: "HCC001" },
  { id: 72, title: "Hot Chocolate Coffee 2", description: "Delicious Hot Chocolate Coffee", price: 260.00, image: "co2.jpg", category_id: 13, sku: "HCC002" },
  { id: 73, title: "Hot Chocolate Coffee 3", description: "Delicious Hot Chocolate Coffee", price: 270.00, image: "co3.jpg", category_id: 13, sku: "HCC003" },
  { id: 74, title: "Hot Chocolate Coffee 4", description: "Delicious Hot Chocolate Coffee", price: 280.00, image: "co4.jpg", category_id: 13, sku: "HCC004" },
  { id: 75, title: "Hot Chocolate Coffee 5", description: "Delicious Hot Chocolate Coffee", price: 290.00, image: "co5.jpg", category_id: 13, sku: "HCC005" },
  { id: 76, title: "Hot Chocolate Coffee 6", description: "Delicious Hot Chocolate Coffee", price: 300.00, image: "co6.jpg", category_id: 13, sku: "HCC006" },
  { id: 77, title: "Hot Chocolate Coffee 7", description: "Delicious Hot Chocolate Coffee", price: 310.00, image: "co7.jpg", category_id: 13, sku: "HCC007" },
  { id: 78, title: "Hot Chocolate Coffee 8", description: "Delicious Hot Chocolate Coffee", price: 320.00, image: "co8.jpg", category_id: 13, sku: "HCC008" },
  { id: 79, title: "Hot Chocolate Coffee 9", description: "Delicious Hot Chocolate Coffee", price: 330.00, image: "co9.jpg", category_id: 13, sku: "HCC009" },
  { id: 80, title: "Hot Chocolate Coffee 10", description: "Delicious Hot Chocolate Coffee", price: 340.00, image: "co10.jpg", category_id: 13, sku: "HCC010" },

  // --- Cold Chocolate Coffee (category_id = 14) ---
  { id: 81, title: "Cold Chocolate Coffee 11", description: "Delicious Cold Chocolate Coffee", price: 250.00, image: "co11.jpg", category_id: 14, sku: "CCC011" },
  { id: 82, title: "Cold Chocolate Coffee 12", description: "Delicious Cold Chocolate Coffee", price: 260.00, image: "co12.jpg", category_id: 14, sku: "CCC012" },
  { id: 83, title: "Cold Chocolate Coffee 13", description: "Delicious Cold Chocolate Coffee", price: 270.00, image: "co13.jpg", category_id: 14, sku: "CCC013" },
  { id: 84, title: "Cold Chocolate Coffee 14", description: "Delicious Cold Chocolate Coffee", price: 280.00, image: "co14.jpg", category_id: 14, sku: "CCC014" },
  { id: 85, title: "Cold Chocolate Coffee 15", description: "Delicious Cold Chocolate Coffee", price: 290.00, image: "co15.jpg", category_id: 14, sku: "CCC015" },
  { id: 86, title: "Cold Chocolate Coffee 16", description: "Delicious Cold Chocolate Coffee", price: 300.00, image: "co16.jpg", category_id: 14, sku: "CCC016" },
  { id: 87, title: "Cold Chocolate Coffee 17", description: "Delicious Cold Chocolate Coffee", price: 310.00, image: "co17.jpg", category_id: 14, sku: "CCC017" },
  { id: 88, title: "Cold Chocolate Coffee 18", description: "Delicious Cold Chocolate Coffee", price: 320.00, image: "co18.jpg", category_id: 14, sku: "CCC018" },
  { id: 89, title: "Cold Chocolate Coffee 19", description: "Delicious Cold Chocolate Coffee", price: 330.00, image: "co19.jpg", category_id: 14, sku: "CCC019" },
  { id: 90, title: "Cold Chocolate Coffee 20", description: "Delicious Cold Chocolate Coffee", price: 340.00, image: "co20.jpg", category_id: 14, sku: "CCC020" },

  // Mango Juice (category_id = 16)
  { id: 91, title: "Mango Juice 1", description: "Fresh and delicious Mango Juice", price: 150, image: "ma1.jpg", category_id: 16, sku: "MJ001" },
  { id: 92, title: "Mango Juice 2", description: "Fresh and delicious Mango Juice", price: 150, image: "ma2.jpg", category_id: 16, sku: "MJ002" },
  { id: 93, title: "Mango Juice 3", description: "Fresh and delicious Mango Juice", price: 150, image: "ma3.jpg", category_id: 16, sku: "MJ003" },
  { id: 94, title: "Mango Juice 4", description: "Fresh and delicious Mango Juice", price: 150, image: "ma4.jpg", category_id: 16, sku: "MJ004" },
  { id: 95, title: "Mango Juice 5", description: "Fresh and delicious Mango Juice", price: 150, image: "ma5.jpg", category_id: 16, sku: "MJ005" },
  { id: 96, title: "Mango Juice 6", description: "Fresh and delicious Mango Juice", price: 150, image: "ma6.jpg", category_id: 16, sku: "MJ006" },
  { id: 97, title: "Mango Juice 7", description: "Fresh and delicious Mango Juice", price: 150, image: "ma7.jpg", category_id: 16, sku: "MJ007" },
  { id: 98, title: "Mango Juice 8", description: "Fresh and delicious Mango Juice", price: 150, image: "ma8.jpg", category_id: 16, sku: "MJ008" },
  { id: 99, title: "Mango Juice 9", description: "Fresh and delicious Mango Juice", price: 150, image: "ma9.jpg", category_id: 16, sku: "MJ009" },
  { id: 100, title: "Mango Juice 10", description: "Fresh and delicious Mango Juice", price: 150, image: "ma10.jpg", category_id: 16, sku: "MJ0010" },



  // Strawberry Juice (category_id = 17)
  { id: 101, title: "Strawberry Shake 1", description: "Fresh and delicious Strawberry Shake", price: 180, image: "sj1.jpg", category_id: 17, sku: "SS001" },
  { id: 102, title: "Strawberry Shake 2", description: "Fresh and delicious Strawberry Shake", price: 180, image: "sj2.jpg", category_id: 17, sku: "SS002" },
  { id: 103, title: "Strawberry Shake 3", description: "Fresh and delicious Strawberry Shake", price: 180, image: "sj3.jpg", category_id: 17, sku: "SS003" },
  { id: 104, title: "Strawberry Shake 4", description: "Fresh and delicious Strawberry Shake", price: 180, image: "sj4.jpg", category_id: 17, sku: "SS004" },
  { id: 105, title: "Strawberry Shake 5", description: "Fresh and delicious Strawberry Shake", price: 180, image: "sj5.jpg", category_id: 17, sku: "SS005" },
  { id: 106, title: "Strawberry Shake 6", description: "Fresh and delicious Strawberry Shake", price: 180, image: "sj6.jpg", category_id: 17, sku: "SS006" },
  { id: 107, title: "Strawberry Shake 7", description: "Fresh and delicious Strawberry Shake", price: 180, image: "sj7.jpg", category_id: 17, sku: "SS007" },
  { id: 108, title: "Strawberry Shake 8", description: "Fresh and delicious Strawberry Shake", price: 180, image: "sj8.jpg", category_id: 17, sku: "SS008" },
  { id: 109, title: "Strawberry Shake 9", description: "Fresh and delicious Strawberry Shake", price: 180, image: "sj9.jpg", category_id: 17, sku: "SS009" },
  { id: 110, title: "Strawberry Shake 10", description: "Fresh and delicious Strawberry Shake", price: 180, image: "sj10.jpg", category_id: 17, sku: "SS0010" },
]



  export const specialCakesData = [
  // Birthday Cake Products
  { id: 1, category_id: 1, slug: "birthday-cake", title: "Birthday Cake 1", image: "bi1.jpg", price: 150, description: "Delicious Birthday Cake 1" },
  { id: 2, category_id: 1, slug: "birthday-cake", title: "Birthday Cake 2", image: "bi2.jpg", price: 160, description: "Delicious Birthday Cake 2" },
  { id: 3, category_id: 1, slug: "birthday-cake", title: "Birthday Cake 3", image: "bi3.jpg", price: 170, description: "Delicious Birthday Cake 3" },
  { id: 4, category_id: 1, slug: "birthday-cake", title: "Birthday Cake 4", image: "bi4.jpg", price: 180, description: "Delicious Birthday Cake 4" },
  { id: 5, category_id: 1, slug: "birthday-cake", title: "Birthday Cake 5", image: "bi5.jpg", price: 190, description: "Delicious Birthday Cake 5" },
  { id: 6, category_id: 1, slug: "birthday-cake", title: "Birthday Cake 6", image: "bi6.jpg", price: 200, description: "Delicious Birthday Cake 6" },
  { id: 7, category_id: 1, slug: "birthday-cake", title: "Birthday Cake 7", image: "bi7.jpg", price: 210, description: "Delicious Birthday Cake 7" },
  { id: 8, category_id: 1, slug: "birthday-cake", title: "Birthday Cake 8", image: "bi8.jpg", price: 220, description: "Delicious Birthday Cake 8" },
  { id: 9, category_id: 1, slug: "birthday-cake", title: "Birthday Cake 9", image: "bi9.jpg", price: 230, description: "Delicious Birthday Cake 9" },
  { id: 10, category_id: 1,slug: "birthday-cake", title: "Birthday Cake 10", image: "bi10.jpg", price: 240, description: "Delicious Birthday Cake 10" },
  { id: 11, category_id: 1,slug: "birthday-cake",  title: "Birthday Cake 11", image: "bi11.jpg", price: 250, description: "Delicious Birthday Cake 11" },
  { id: 12, category_id: 1, slug: "birthday-cake", title: "Birthday Cake 12", image: "bi12.jpg", price: 260, description: "Delicious Birthday Cake 12" },
  { id: 13, category_id: 1, slug: "birthday-cake", title: "Birthday Cake 13", image: "bi13.jpg", price: 270, description: "Delicious Birthday Cake 13" },
  { id: 14, category_id: 1, slug: "birthday-cake", title: "Birthday Cake 14", image: "bi14.jpg", price: 280, description: "Delicious Birthday Cake 14" },
  { id: 15, category_id: 1, slug: "birthday-cake", title: "Birthday Cake 15", image: "bi15.jpg", price: 290, description: "Delicious Birthday Cake 15" },

  // Marriage Cake Products

  { id: 16, category_id: 2, slug: "marriage-cake", title: "Marriage Cake 1", image: "mi1.jpg", price: 500, description: "Delicious Marriage Cake 1" },
  { id: 17, category_id: 2, slug: "marriage-cake", title: "Marriage Cake 2", image: "mi2.jpg", price: 510, description: "Delicious Marriage Cake 2" },
  { id: 18, category_id: 2, slug: "marriage-cake", title: "Marriage Cake 3", image: "mi3.jpg", price: 520, description: "Delicious Marriage Cake 3" },
  { id: 19, category_id: 2, slug: "marriage-cake",title: "Marriage Cake 4", image: "mi4.jpg", price: 530, description: "Delicious Marriage Cake 4" },
  { id: 20, category_id: 2, slug: "marriage-cake",  title: "Marriage Cake 5", image: "mi5.jpg", price: 540, description: "Delicious Marriage Cake 5" },
  { id: 21, category_id: 2, slug: "marriage-cake", title: "Marriage Cake 6", image: "mi6.jpg", price: 550, description: "Delicious Marriage Cake 6" },
  { id: 22, category_id: 2, slug: "marriage-cake", title: "Marriage Cake 7", image: "mi7.jpg", price: 560, description: "Delicious Marriage Cake 7" },
  { id: 23, category_id: 2,  slug: "marriage-cake", title: "Marriage Cake 8", image: "mi8.jpg", price: 570, description: "Delicious Marriage Cake 8" },
  { id: 24, category_id: 2, slug: "marriage-cake", title: "Marriage Cake 9", image: "mi9.jpg", price: 580, description: "Delicious Marriage Cake 9" },
  { id: 25, category_id: 2, slug: "marriage-cake", title: "Marriage Cake 10", image: "mi10.jpg", price: 590, description: "Delicious Marriage Cake 10" },
  { id: 26, category_id: 2, slug: "marriage-cake",title: "Marriage Cake 11", image: "mi11.jpg", price: 600, description: "Delicious Marriage Cake 11" },
  { id: 27, category_id: 2, slug: "marriage-cake", title: "Marriage Cake 12", image: "mi12.jpg", price: 610, description: "Delicious Marriage Cake 12" },
  { id: 28, category_id: 2, slug: "marriage-cake", title: "Marriage Cake 13", image: "mi13.jpg", price: 620, description: "Delicious Marriage Cake 13" },
  { id: 29, category_id: 2, slug: "marriage-cake",  title: "Marriage Cake 14", image: "mi14.jpg", price: 630, description: "Delicious Marriage Cake 14" },
  { id: 30, category_id: 2, slug: "marriage-cake", title: "Marriage Cake 15", image: "mi15.jpg", price: 640, description: "Delicious Marriage Cake 15" },

  // Graduation Cake Products
  { id: 31, category_id: 3, slug: "graduation-cake", title: "Graduation Cake 1", image: "gi1.jpg", price: 300, description: "Delicious Graduation Cake 1" },
  { id: 32, category_id: 3, slug: "graduation-cake", title: "Graduation Cake 2", image: "gi2.jpg", price: 310, description: "Delicious Graduation Cake 2" },
  { id: 33, category_id: 3, slug: "graduation-cake", title: "Graduation Cake 3", image: "gi3.jpg", price: 320, description: "Delicious Graduation Cake 3" },
  { id: 34, category_id: 3, slug: "graduation-cake", title: "Graduation Cake 4", image: "gi4.jpg", price: 330, description: "Delicious Graduation Cake 4" },
  { id: 35, category_id: 3, slug: "graduation-cake", title: "Graduation Cake 5", image: "gi5.jpg", price: 340, description: "Delicious Graduation Cake 5" },
  { id: 36, category_id: 3, slug: "graduation-cake", title: "Graduation Cake 6", image: "gi6.jpg", price: 350, description: "Delicious Graduation Cake 6" },
  { id: 37, category_id: 3, slug: "graduation-cake", title: "Graduation Cake 7", image: "gi7.jpg", price: 360, description: "Delicious Graduation Cake 7" },
  { id: 38, category_id: 3, slug: "graduation-cake", title: "Graduation Cake 8", image: "gi8.jpg", price: 370, description: "Delicious Graduation Cake 8" },
  { id: 39, category_id: 3, slug: "graduation-cake", title: "Graduation Cake 9", image: "gi9.jpg", price: 380, description: "Delicious Graduation Cake 9" },
  { id: 40, category_id: 3, slug: "graduation-cake", title: "Graduation Cake 10", image: "gi10.jpg", price: 390, description: "Delicious Graduation Cake 10" },
  { id: 41, category_id: 3, slug: "graduation-cake", title: "Graduation Cake 11", image: "gi11.jpg", price: 400, description: "Delicious Graduation Cake 11" },
  { id: 42, category_id: 3, slug: "graduation-cake", title: "Graduation Cake 12", image: "gi12.jpg", price: 410, description: "Delicious Graduation Cake 12" },
  { id: 43, category_id: 3, slug: "graduation-cake", title: "Graduation Cake 13", image: "gi13.jpg", price: 420, description: "Delicious Graduation Cake 13" },
  { id: 44, category_id: 3, slug: "graduation-cake", title: "Graduation Cake 14", image: "gi14.jpg", price: 430, description: "Delicious Graduation Cake 14" },
  { id: 45, category_id: 3, slug: "graduation-cake", title: "Graduation Cake 15", image: "gi15.jpg", price: 440, description: "Delicious Graduation Cake 15" },

];




export const eidSpecialProducts = [
  // 🎂 Cakes (4)
  {
    id: 1,
    name: "Eid Mubarak Cake",
    slug: "eid-mubarak-cake",
    image: "eid1.jpg",
    description: "Celebrate Eid with our rich chocolate and cream layered Eid Mubarak cake.",
    oldPrice: "3000",
    price: "2500"
  },
  {
    id: 2,
    name: " Chocolate Cake",
    slug: " Chocolate-cake",
    image: "eid2.jpg",
    description: "A fusion of traditional  Chocolate  cake for Eid celebrations.",
    oldPrice: "3200",
    price: "2800"
  },
  {
    id: 3,
    name: "Pista Delight Cake",
    slug: "pista-delight-cake",
    image: "eid3.jpg",
    description: "A delicious pistachio-flavored cake with Eid-special toppings.",
    oldPrice: "3400",
    price: "3000"
  },
  {
    id: 4,
    name: "Rose Almond Cake",
    slug: "rose-almond-cake",
    image: "eid4.jpg",
    description: "Moist rose-flavored almond cake with creamy frosting for your Eid feast.",
    oldPrice: "3100",
    price: "2700"
  },

  // 🍩 Donuts (4)
  {
    id: 5,
    name: "Chocolate Date Donut",
    slug: "chocolate-date-donut",
    image: "eid5.jpg",
    description: "Soft donut filled with rich chocolate and chopped dates.",
    oldPrice: "480",
    price: "400"
  },
  {
    id: 6,
    name: "Rose Glazed Donut",
    slug: "rose-glazed-donut",
    image: "eid6.jpg",
    description: "Floral rose glaze with white chocolate drizzle.",
    oldPrice: "450",
    price: "380"
  },
  {
    id: 7,
    name: "Pistachio Crunch Donut",
    slug: "pistachio-crunch-donut",
    image: "eid7.jpg",
    description: "Pistachio glaze with crunchy nut topping — a festive favorite.",
    oldPrice: "470",
    price: "390"
  },
  {
    id: 8,
    name: "Caramel Nut Donut",
    slug: "caramel-nut-donut",
    image: "eid8.jpg",
    description: "Filled with smooth caramel and roasted nuts for an Eid twist.",
    oldPrice: "460",
    price: "380"
  },

  // 🧁 Cupcakes (4)
  {
    id: 9,
    name: "Falooda Cupcake",
    slug: "falooda-cupcake",
    image: "eid9.jpg",
    description: "Falooda-inspired cupcake with rose jelly and cream topping.",
    oldPrice: "420",
    price: "350"
  },
  {
    id: 10,
    name: "Kaju Delight Cupcake",
    slug: "kaju-delight-cupcake",
    image: "eid10.jpg",
    description: "Cashew cream topped Eid-special cupcake.",
    oldPrice: "450",
    price: "370"
  },
  {
    id: 11,
    name: "Saffron Dream Cupcake",
    slug: "saffron-dream-cupcake",
    image: "eid11.jpg",
    description: "Saffron-flavored buttercream swirl for royal Eid vibes.",
    oldPrice: "440",
    price: "360"
  },
  {
    id: 12,
    name: "Choco Nut Cupcake",
    slug: "choco-nut-cupcake",
    image: "eid12.jpg",
    description: "Rich chocolate cupcake topped with roasted nuts and cream.",
    oldPrice: "460",
    price: "380"
  },

  // 🥤 Juices (4)
  {
    id: 13,
    name: "Mango Juice",
    slug: "Mango Juice shake",
    image: "ma3.jpg",
    description: "Refreshing Mango Juice with crushed nuts — perfect for Eid mornings.",
    oldPrice: "360",
    price: "300"
  },
  {
    id: 14,
    name: "Strawberry Shake",
    slug: "Strawberry Shake",
    image: "sj10.jpg",
    description: "Healthy Strawberry Shake made with premium dates and chilled milk.",
    oldPrice: "400",
    price: "350"
  },
  {
    id: 15,
    name: "Strawberry Shake",
    slug: "Strawberry Shake",
    image: "sj9.jpg",
    description: "Sweet and tangy Strawberry Shake made with fresh yogurt and pulp.",
    oldPrice: "380",
    price: "320"
  },
  {
    id: 16,
    name: "Mango Juice ",
    slug: "Mango-Juice",
    image: "ma4.jpg",
    description: "Refreshing Mango Juice with a twist of mint.",
    oldPrice: "390",
    price: "340"
  },

  // ☕ Coffees (4)
  {
    id: 17,
    name: "Hot Coffee",
    slug: "arabic-coffee",
    image: "co5.jpg",
    description: "Traditional Hot Coffee infused with cardamom and saffron.",
    oldPrice: "520",
    price: "450"
  },
  {
    id: 18,
    name: "Hot Coffee",
    slug: "Hot-Coffe",
    image: "co8.jpg",
    description: "Espresso blended with dates syrup and creamy milk — Eid delight.",
    oldPrice: "550",
    price: "480"
  },
  {
    id: 19,
    name: "Cold coffee",
    slug: "Cold coffee",
    image: "co12.jpg",
    description: "Chocolate Cold coffee with a smooth creamy finish.",
    oldPrice: "530",
    price: "460"
  },
  {
    id: 20,
    name: "Cold coffee",
    slug: "Cold coffee",
    image: "co11.jpg",
    description: "Classic cappuccino with aromatic cardamom twist — festive perfection.",
    oldPrice: "540",
    price: "470"
  }
];
