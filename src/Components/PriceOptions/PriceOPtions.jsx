import PriceOption from "../PriceOption/PriceOption";

const PriceOPtions = () => {

      const priceOptions = [
            {
                  "id": 1,
                  "name": "John Doe",
                  "membership": "Premium",
                  "price": 1500,
                  "features": [
                        "Access to premium workout areas",
                        "Sauna and steam room access",
                        "Unlimited group fitness classes",
                  ]
            },
            {
                  "id": 2,
                  "name": "Jane Smith",
                  "membership": "Standard",
                  "price": 2200,
                  "features": [
                        "Basic gym equipment access",
                        "Locker usage",
                        "Access during regular hours",
                        "Access to cardio machines",
                  ]
            },
            {
                  "id": 3,
                  "name": "Bob Johnson",
                  "membership": "Premium",
                  "price": 3000,
                  "features": [
                        "Access to premium workout areas",
                        "Swimming pool access",
                        "Free fitness assessment",
                        "Personalized workout plan",
                        "Access to specialized fitness classes"
                  ]
            }
      ];


      return (
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 p-4">
                  {
                        priceOptions.map(options => <PriceOption key={options.id} options={options}></PriceOption>)
                  }
            </div>
      );
};

export default PriceOPtions;