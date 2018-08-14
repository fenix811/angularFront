export default class Product {
    id: number;
    name: '';
    description: '';

    constructor(values: Object = {}) {
        Object.assign(this, values);
      }
}
