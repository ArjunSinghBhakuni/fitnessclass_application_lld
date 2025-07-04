import { User } from "./models/User";
import { FitnessClass } from "./models/FitnessClass";
import { Tier } from "./models/enums";
import { BookingService } from "./services/BookingService";

const user1 = new User("u1", "Alice", "a@mail.com", "pass", Tier.Silver);
const user2 = new User("u2", "Bob", "b@mail.com", "pass", Tier.Silver);
const user3 = new User("u3", "Charlie", "c@mail.com", "pass", Tier.Silver);

const yogaClass = new FitnessClass("c1", "Morning Yoga", "Yoga", 2, new Date("2025-07-05T10:00:00"));

BookingService.book(user1, yogaClass);
BookingService.book(user2, yogaClass);
BookingService.book(user3, yogaClass);

console.log("Attendees:", yogaClass.attendees.map(u => u.name));
console.log("Waitlist:", yogaClass.waitlist.map(u => u.name));

BookingService.cancel(user2, yogaClass);

console.log("Attendees after cancel:", yogaClass.attendees.map(u => u.name));
console.log("Waitlist after promote:", yogaClass.waitlist.map(u => u.name));
