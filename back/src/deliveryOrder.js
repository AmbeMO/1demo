const __extends = (this && this.__extends) || (function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf
            || ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; })
            || function (d, b) { for (const p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
  };
  return function (d, b) {
    if (typeof b !== 'function' && b !== null) { throw new TypeError(`Class extends value ${String(b)} is not a constructor or null`); }
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}());
let Status;
(function (Status) {
  Status[Status.checking = 0] = 'checking';
  Status[Status.inProgress = 1] = 'inProgress';
  Status[Status.finished = 2] = 'finished';
}(Status || (Status = {})));
const DeliveryOrder = /** @class */ (function () {
  function DelServ(quantity, orderId, price, weight, deliveryAddress) {
    this.supplierSalary = 50;
    this.quantity = quantity;
    this.orderId = orderId;
    this.price = price;
    this.weight = weight;
    this.deliveryAddress = deliveryAddress;
  }
  DelServ.prototype.calcTotalWeight = function () {
    if (this.weight < 9) { return this.weight; }
  };
  DelServ.prototype.calcPrice = function () {
    return this.price + this.supplierSalary;
  };
  return DelServ;
}());
const Supplier = /** @class */ (function (_super) {
  __extends(Supplier, _super);
  function Supplier() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  Supplier.prototype.getUserAddress = function () {
    return this.deliveryAddress;
  };
  return Supplier;
}(DeliveryOrder));
const zakaz = new DeliveryOrder(5, 228322, 666, 8, 'golovna');
console.log(zakaz);
