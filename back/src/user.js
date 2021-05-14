// interface User {
//     name: string;
//     address: string;
//     cardNumber: number;
//     phoneNumber: number;
//     pin: number;
//     userId: number;
//
// }
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
const User = /** @class */ (function () {
  function User(name, address, cardNumber, phoneNumber, pin, userId) {
    this.name = name;
    this.address = address;
    this.cardNumber = cardNumber;
    this.phoneNumber = phoneNumber;
    this.pin = pin;
    this.userId = userId;
  }
  User.prototype.verifyPass = function () {
    return this.pin;
  };
  return User;
}());
const Payment = /** @class */ (function (_super) {
  __extends(Payment, _super);
  function Payment() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  Payment.prototype.userCardData = function () {
    return this.cardNumber + this.pin; /// /change
  };
  return Payment;
}(User));
const user = new User('arkadiy', 'geroev-maidany', 4441114441488, 38095148814881488, 1488, 1488);
console.log(user);
