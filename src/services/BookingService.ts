import { Booking } from "../models/Booking";
import { FitnessClass } from "../models/FitnessClass";
import { User } from "../models/User";
import { BookingStatus } from "../models/enums";
export class BookingService {
  static book(user: User, fitnessClass: FitnessClass): Booking {
    if (fitnessClass.isCancelled) throw new Error("Class cancelled");
    if (new Date() >= fitnessClass.scheduledTime)
      throw new Error("Cannot book past classes");
    if (!user.canBookMoreClasses())
      throw new Error("Tier booking limit exceeded");
    if (fitnessClass.attendees.includes(user))
      throw new Error("User already booked");

    let booking: Booking;

    if (fitnessClass.attendees.length < fitnessClass.capacity) {
      fitnessClass.attendees.push(user);
      user.activeBookings++;
      booking = new Booking(
        "b" + Date.now(),
        user.id,
        fitnessClass.id,
        BookingStatus.Booked
      );
      console.log(`✅ Booking confirmed for ${user.name}`);
    } else {
      fitnessClass.waitlist.push(user);
      booking = new Booking(
        "b" + Date.now(),
        user.id,
        fitnessClass.id,
        BookingStatus.Waitlisted
      );
      console.log(`⚠️ Class full. ${user.name} added to waitlist.`);
    }

    return booking;
  }

  static cancel(user: User, fitnessClass: FitnessClass): void {
    const idx = fitnessClass.attendees.findIndex((u) => u.id === user.id);
    if (idx !== -1) {
      fitnessClass.attendees.splice(idx, 1);
      user.activeBookings--;
      console.log(`❌ Booking cancelled for ${user.name}`);
      fitnessClass.promoteFromWaitlist();
    } else {
      throw new Error("User not found in attendees");
    }
  }
}
