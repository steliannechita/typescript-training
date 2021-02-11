interface Vehicles {
  year: Date;
  broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name : ${this.name}`;
  },
};

const printVehicle = (vehicle: Vehicles): void => {
  console.log(vehicle.summary());
};

printVehicle(oldCivic);
oldCivic.summary();
