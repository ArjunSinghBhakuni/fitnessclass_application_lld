import { Tier } from "./enums";
export class User {
  id: string;
  name: string;
  email: string;
  password: string;
  tier: Tier;
  activeBookings: number = 0;
  bookingLimit: number;

  constructor(
    id: string,
    name: string,
    email: string,
    password: string,
    tier: Tier
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.tier = tier;
    this.bookingLimit = this.getBookingLimitByTier();
  }

  private getBookingLimitByTier(): number {
    switch (this.tier) {
      case Tier.Platinum: return 10;
      case Tier.Gold: return 5;
      case Tier.Silver: return 3;
      default: return 0;
    }
  }

  canBookMoreClasses(): boolean {
    return this.activeBookings < this.bookingLimit;
  }

}
