{
  const formatString = (input: string, toUpper?: boolean): string => {
    if (
      (typeof input === "string" && toUpper === true) ||
      toUpper === undefined
    ) {
      return input.toUpperCase();
    } else {
      return input.toLowerCase();
    }
  };
  const result_1 = formatString("Hello", false);
  console.log(result_1);
  const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
    { title: "Book D", rating: 6.0 },
    { title: "Book E", rating: 2.5 },
    { title: "Book F", rating: 4 },
  ];
  const filterByRating = (
    items: { title: string; rating: number }[]
  ): { title: string; rating: number }[] => {
    return items.filter((rates) => {
      return rates.rating >= 4;
    });
  };
  const result_2 = filterByRating(books);
  console.log(result_2);
  const concatenateArrays = <T>(...arrays: T[][]): T[] => {
    return arrays.flat();
  };
  const result_3 = concatenateArrays(["a", "b"], ["c"]);
  console.log(result_3);
  class Vehicle {
    constructor(private make: string, private year: number) {
      this.make = make;
      this.year = year;
    }
    getInfo() {
      return `Make: ${this.make}, Year: ${this.year}`;
    }
  }
  class Car extends Vehicle {
    constructor(make: string, year: number, private model: string) {
      super(make, year);
      this.model = model;
    }
    getModel() {
      return `Model: ${this.model}`;
    }
  }
  const myCar = new Car("Toyota", 2020, "Corolla");
  const information = myCar.getInfo();
  const model = myCar.getModel();
  console.log(information);
  console.log(model);
  const processValue = (value: string | number): number => {
    if (typeof value === "string") {
      return value.length;
    } else {
      return value * 2;
    }
  };
  const result_4 = processValue("Md.Raihan Ahmmed Sumon Howlader");
  console.log(result_4);
  interface Product {
    name: string;
    price: number;
  }
  const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 },
    { name: "laptop", price: 500 },
  ];
  const getMostExpensiveProduct = (products: Product[]): Product | null => {
    if (products.length === 0) {
      return null;
    }
    let maxPrice = products[0];
    for (const items of products) {
      if (items.price > maxPrice.price) {
        maxPrice = items;
      }
    }
    return maxPrice;
  };
  const result_5 = getMostExpensiveProduct(products);
  console.log(result_5);
  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  const getDayType = (day: Day): string => {
    if (day === Day.Sunday) {
      return "Weekend";
    } else {
      return "Weekday";
    }
  };
  const result_6 = getDayType(Day.Sunday);
  console.log(result_6);

  const squareAsync = async (n: number): Promise<number> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (n < 0) {
          return reject(new Error("Negative number not allowed"));
        } else {
          console.log("after 1s: ");
          resolve(n * n);
        }
      }, 1000);
    });
  };

  squareAsync(4).then(console.log);
  squareAsync(-5).catch(console.error);
}
